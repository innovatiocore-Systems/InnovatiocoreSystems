import { NextRequest, NextResponse } from 'next/server'
import { randomUUID } from 'node:crypto'
import { isAuthenticated } from '../../../../lib/requireAdmin'
import { getSupabase } from '../../../../lib/supabase'

const BUCKET = 'blog-images'
const MAX_SIZE = 5 * 1024 * 1024 // 5MB

const EXT_BY_TYPE: Record<string, string> = {
  'image/png': '.png',
  'image/jpeg': '.jpg',
  'image/webp': '.webp',
  'image/gif': '.gif',
}

export async function POST(request: NextRequest) {
  if (!(await isAuthenticated())) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const formData = await request.formData().catch(() => null)
  const file = formData?.get('file')

  if (!(file instanceof File)) {
    return NextResponse.json({ error: 'No file provided' }, { status: 400 })
  }

  const ext = EXT_BY_TYPE[file.type]
  if (!ext) {
    return NextResponse.json({ error: 'Unsupported file type — use PNG, JPEG, WEBP or GIF' }, { status: 400 })
  }
  if (file.size > MAX_SIZE) {
    return NextResponse.json({ error: 'File too large (max 5MB)' }, { status: 400 })
  }

  try {
    const filename = `${randomUUID()}${ext}`
    const buffer = Buffer.from(await file.arrayBuffer())

    const { error } = await getSupabase().storage.from(BUCKET).upload(filename, buffer, {
      contentType: file.type,
      cacheControl: '3600',
    })

    if (error) {
      console.error('Upload error:', error)
      throw new Error(error.message)
    }

    // Generate the public URL
    const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL
    if (!supabaseUrl) {
      throw new Error('SUPABASE_URL not configured')
    }

    const url = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/${filename}`

    return NextResponse.json({ url })
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Upload failed'
    console.error('Upload route error:', message)
    return NextResponse.json({ error: message }, { status: 500 })
  }
}
