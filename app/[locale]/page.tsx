import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import StatsSection from '@/components/home/StatsSection'
import LatestNews from '@/components/home/LatestNews'
import FeaturedArticles from '@/components/home/FeaturedArticles'
import ActivitiesPreview from '@/components/home/ActivitiesPreview'
import ScholarsList from '@/components/home/ScholarsList'
import ContactCTA from '@/components/home/ContactCTA'
import { getPostsByCategory, getAuthors, CATEGORIES } from '@/lib/wordpress'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'hero' })
  return {
    title: 'Ana Sayfa',
    description: t('subtitle'),
    alternates: {
      canonical: '/',
      languages: { tr: '/', ar: '/ar' },
    },
  }
}

export default async function HomePage({ params }: Props) {
  // Fetch data from WordPress (graceful fallback if not available)
  const [newsPosts, articlePosts, authors] = await Promise.allSettled([
    getPostsByCategory(CATEGORIES.GUNDEM, 4),
    getPostsByCategory(CATEGORIES.MAKALE, 3),
    getAuthors(),
  ])

  return (
    <>
      <HeroSection />
      <AboutPreview />
      <StatsSection />
      <LatestNews posts={newsPosts.status === 'fulfilled' ? newsPosts.value : undefined} />
      <FeaturedArticles articles={articlePosts.status === 'fulfilled' ? articlePosts.value : undefined} />
      <ActivitiesPreview />
      <ScholarsList authors={authors.status === 'fulfilled' ? authors.value : undefined} />
      <ContactCTA />
    </>
  )
}
