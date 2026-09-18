import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '../../../../lib/requireAdmin'
import { createPost } from '../../../../lib/posts'

function validatePayload(body: unknown) {
  if (!body || typeof body !== 'object') return null
  const b = body as Record<string, unknown>

  if (
    typeof b.title !== 'string' || !b.title.trim() ||
    typeof b.category !== 'string' || !b.category.trim() ||
    typeof b.excerpt !== 'string' || !b.excerpt.trim() ||
    !Array.isArray(b.content) || b.content.length === 0 || !b.content.every((p) => typeof p === 'string') ||
    (b.status !== 'draft' && b.status !== 'published')
  ) {
    return null
  }

  return {
    title: b.title.trim(),
    category: b.category.trim(),
    excerpt: b.excerpt.trim(),
    content: b.content as string[],
    status: b.status as 'draft' | 'published',
    image: typeof b.image === 'string' ? b.image : null,
  }
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const payload = validatePayload(await request.json().catch(() => null))
  if (!payload) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const post = await createPost(payload)
  if (!post) {
    return NextResponse.json({ error: 'Failed to create post' }, { status: 500 })
  }
  return NextResponse.json({ post }, { status: 201 })
}
