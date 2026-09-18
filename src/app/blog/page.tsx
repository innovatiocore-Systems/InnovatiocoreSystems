import BlogListing from '../../components/BlogListing'
import { getPublishedPosts } from '../../lib/posts'

export const dynamic = 'force-dynamic'

export default async function BlogPage() {
  const posts = await getPublishedPosts()
  return <BlogListing posts={posts} />
}
