// WordPress API Types

export interface WPPost {
  id: number
  slug: string
  title: { rendered: string }
  excerpt: { rendered: string }
  content: { rendered: string }
  date: string
  modified: string
  categories: number[]
  tags: number[]
  featured_media: number
  author: number
  _embedded?: {
    author: WPAuthor[]
    'wp:featuredmedia': WPMedia[]
    'wp:term': WPTerm[][]
  }
  acf?: {
    okuma_suresi?: string
    one_cikan_alinti?: string
    yazar_unvani?: string
  }
}

export interface WPAuthor {
  id: number
  name: string
  slug: string
  description: string
  avatar_urls: { '96': string }
  acf?: {
    unvan?: string
    uzmanlik?: string
    fotograf?: string
  }
}

export interface WPMedia {
  id: number
  source_url: string
  alt_text: string
  media_details: {
    width: number
    height: number
    sizes: {
      medium?: { source_url: string }
      large?: { source_url: string }
      full?: { source_url: string }
    }
  }
}

export interface WPTerm {
  id: number
  name: string
  slug: string
  taxonomy: string
}

export interface WPCategory {
  id: number
  name: string
  slug: string
  count: number
  description: string
}

export interface WPTag {
  id: number
  name: string
  slug: string
  count: number
}

// Site types
export interface NavItem {
  label: string
  href: string
}

export interface StatItem {
  value: number
  suffix: string
  label: string
}

export interface ActivityCategory {
  id: string
  name: string
  icon: string
  description: string
}
