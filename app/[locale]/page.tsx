import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import AboutPreview from '@/components/home/AboutPreview'
import StatsSection from '@/components/home/StatsSection'
import LatestNews from '@/components/home/LatestNews'
import FeaturedArticles from '@/components/home/FeaturedArticles'
import VolunteerSupportCTA from '@/components/home/VolunteerSupportCTA'
import { getPostsByCategory, CATEGORIES } from '@/lib/wordpress'

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
  const [newsPosts, articlePosts] = await Promise.allSettled([
    getPostsByCategory(CATEGORIES.GUNDEM, 3),
    getPostsByCategory(CATEGORIES.MAKALE, 3),
  ])

  return (
    <>
      {/* 1. Hero Bölümü */}
      <HeroSection />

      {/* 2. Hakkımızda / Biz Kimiz Bölümü */}
      <AboutPreview />

      {/* 4. Asya'da İslam / Etki Alanlarımız Bölümü */}
      <StatsSection />

      {/* 5. Son Gündem Bölümü */}
      <LatestNews posts={newsPosts.status === 'fulfilled' ? newsPosts.value : undefined} />

      {/* 6. Öne Çıkan Makaleler Bölümü */}
      <FeaturedArticles articles={articlePosts.status === 'fulfilled' ? articlePosts.value : undefined} />

      {/* 7. CTA Bölümü — Gönüllü Ol & Destek Ol */}
      <VolunteerSupportCTA />
    </>
  )
}
