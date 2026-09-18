import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogArticle from '../../../components/BlogArticle'
import { getPublishedPostBySlug } from '../../../lib/posts'

export const dynamic = 'force-dynamic'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)
  if (!post) return {}

  return {
    title: `${post.title} — InnovatioCore Systems`,
    description: post.excerpt,
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = await getPublishedPostBySlug(slug)
  if (!post) notFound()

  return <BlogArticle post={post} />
}
