import { getSupabase } from './supabase'

export interface BlogPost {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  image: string | null
  status: 'draft' | 'published'
  content: string[]
  createdAt: string
  updatedAt: string
}

export interface PostInput {
  title: string
  category: string
  excerpt: string
  content: string[]
  status: 'draft' | 'published'
  image: string | null
}

interface PostRow {
  id: string
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  read_time: string
  image: string | null
  status: 'draft' | 'published'
  content: string[]
  created_at: string
  updated_at: string
}

const TABLE = 'blog_posts'
const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i

function fromRow(row: PostRow): BlogPost {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    excerpt: row.excerpt,
    category: row.category,
    date: row.date,
    readTime: row.read_time,
    image: row.image,
    status: row.status,
    content: row.content ?? [],
    createdAt: row.created_at,
    updatedAt: row.updated_at,
  }
}

function slugify(title: string) {
  const base = title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
  return base || 'post'
}

async function uniqueSlug(base: string): Promise<string> {
  const { data, error } = await getSupabase().from(TABLE).select('slug').like('slug', `${base}%`)
  if (error) throw new Error(error.message)

  const taken = new Set((data ?? []).map((r) => r.slug as string))
  let slug = base
  let n = 2
  while (taken.has(slug)) slug = `${base}-${n++}`
  return slug
}

function estimateReadTime(content: string[]) {
  const words = content.join(' ').split(/\s+/).filter(Boolean).length
  return `${Math.max(1, Math.round(words / 200))} min read`
}

export async function getAllPosts(): Promise<BlogPost[]> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching posts:', error.message)
    return []
  }
  return (data as PostRow[]).map(fromRow)
}

export async function getPublishedPosts(): Promise<BlogPost[]> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('*')
    .eq('status', 'published')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching published posts:', error.message)
    return []
  }
  return (data as PostRow[]).map(fromRow)
}

export async function getPostById(id: string): Promise<BlogPost | null> {
  if (!UUID_RE.test(id)) return null

  const { data, error } = await getSupabase().from(TABLE).select('*').eq('id', id).maybeSingle()
  if (error) {
    console.error('Error fetching post:', error.message)
    return null
  }
  return data ? fromRow(data as PostRow) : null
}

export async function getPublishedPostBySlug(slug: string): Promise<BlogPost | null> {
  const { data, error } = await getSupabase()
    .from(TABLE)
    .select('*')
    .eq('slug', slug)
    .eq('status', 'published')
    .maybeSingle()

  if (error) {
    console.error('Error fetching post by slug:', error.message)
    return null
  }
  return data ? fromRow(data as PostRow) : null
}

export async function createPost(input: PostInput): Promise<BlogPost | null> {
  try {
    const now = new Date().toISOString()
    const { data, error } = await getSupabase()
      .from(TABLE)
      .insert({
        slug: await uniqueSlug(slugify(input.title)),
        title: input.title,
        excerpt: input.excerpt,
        category: input.category,
        date: now.slice(0, 10),
        read_time: estimateReadTime(input.content),
        image: input.image,
        status: input.status,
        content: input.content,
      })
      .select()
      .single()

    if (error) throw new Error(error.message)
    return fromRow(data as PostRow)
  } catch (err) {
    console.error('Error creating post:', err instanceof Error ? err.message : err)
    return null
  }
}

export async function updatePost(id: string, input: PostInput): Promise<BlogPost | null> {
  if (!UUID_RE.test(id)) return null

  const { data, error } = await getSupabase()
    .from(TABLE)
    .update({
      title: input.title,
      excerpt: input.excerpt,
      category: input.category,
      image: input.image,
      status: input.status,
      content: input.content,
      read_time: estimateReadTime(input.content),
      updated_at: new Date().toISOString(),
    })
    .eq('id', id)
    .select()
    .maybeSingle()

  if (error) {
    console.error('Error updating post:', error.message)
    return null
  }
  return data ? fromRow(data as PostRow) : null
}

export async function deletePost(id: string): Promise<boolean> {
  if (!UUID_RE.test(id)) return false

  const { data, error } = await getSupabase().from(TABLE).delete().eq('id', id).select('id')
  if (error) {
    console.error('Error deleting post:', error.message)
    return false
  }
  return (data?.length ?? 0) > 0
}
