import { WPPost, WPAuthor, WPCategory } from './types'

const WP_API = process.env.NEXT_PUBLIC_WP_API_URL || 'https://api.idvakfi.org/wp-json/wp/v2'

export const CATEGORIES = {
  GUNDEM:   Number(process.env.WP_CAT_GUNDEM   || 1),
  MAKALE:   Number(process.env.WP_CAT_MAKALE   || 2),
  FAALIYET: Number(process.env.WP_CAT_FAALIYET || 3),
  TURKIYE:  Number(process.env.WP_CAT_TURKIYE  || 4),
  DUNYA:    Number(process.env.WP_CAT_DUNYA    || 5),
}

async function wpFetch<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
  const url = new URL(`${WP_API}${endpoint}`)
  if (params) Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v))

  try {
    const res = await fetch(url.toString(), {
      next: { revalidate: 300 },
      headers: { 'Content-Type': 'application/json' },
    })
    if (!res.ok) throw new Error(`WP API Error: ${res.status}`)
    return res.json()
  } catch {
    // Return empty array/object for graceful fallback
    return (Array.isArray([]) ? [] : {}) as T
  }
}

export const getPosts = (params?: Record<string, string>) =>
  wpFetch<WPPost[]>('/posts', { _embed: 'true', per_page: '10', ...params })

export const getPost = (slug: string) =>
  wpFetch<WPPost[]>('/posts', { slug, _embed: 'true' }).then(posts => posts[0])

export const getPostsByCategory = (categoryId: number, perPage = 10) =>
  wpFetch<WPPost[]>('/posts', {
    categories: String(categoryId),
    per_page: String(perPage),
    _embed: 'true',
  })

export const getAuthors = () =>
  wpFetch<WPAuthor[]>('/users', { per_page: '20' })

export const getAuthor = (slug: string) =>
  wpFetch<WPAuthor[]>('/users', { slug }).then(users => users[0])

export const getPostsByAuthor = (authorId: number) =>
  wpFetch<WPPost[]>('/posts', { author: String(authorId), _embed: 'true', per_page: '20' })

export const getCategories = () =>
  wpFetch<WPCategory[]>('/categories', { per_page: '20' })

export const searchPosts = (query: string) =>
  wpFetch<WPPost[]>('/posts', { search: query, _embed: 'true', per_page: '20' })

export function formatDate(dateString: string, locale = 'tr-TR'): string {
  return new Date(dateString).toLocaleDateString(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export function readingTime(content: string): number {
  const words = content.replace(/<[^>]+>/g, '').split(/\s+/).length
  return Math.ceil(words / 200)
}

export function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

export function getFeaturedImage(post: WPPost): string | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0]
  return media?.source_url || null
}

export function getPostAuthor(post: WPPost): WPAuthor | null {
  return post._embedded?.author?.[0] || null
}

export function getPostCategories(post: WPPost) {
  return post._embedded?.['wp:term']?.[0] || []
}
