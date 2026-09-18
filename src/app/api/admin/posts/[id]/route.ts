import { NextRequest, NextResponse } from 'next/server'
import { isAuthenticated } from '../../../../../lib/requireAdmin'
import { deletePost, updatePost } from '../../../../../lib/posts'

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

export async function PATCH(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const payload = validatePayload(await request.json().catch(() => null))
  if (!payload) {
    return NextResponse.json({ error: 'Missing or invalid fields' }, { status: 400 })
  }

  const post = await updatePost(id, payload)
  if (!post) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  return NextResponse.json({ post })
}

export async function DELETE(_request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { id } = await params
  const ok = await deletePost(id)
  if (!ok) return NextResponse.json({ error: 'Post not found' }, { status: 404 })
  return NextResponse.json({ ok: true })
}
