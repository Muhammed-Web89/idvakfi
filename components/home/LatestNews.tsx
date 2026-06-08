'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { CardSkeleton } from '@/components/ui/LoadingSpinner'
import { staggerContainer, itemVariants } from '@/lib/animations'
import { formatDate, stripHtml, getFeaturedImage } from '@/lib/wordpress'
import type { WPPost } from '@/lib/types'

// Mock data for when WP is not connected
const MOCK_NEWS: WPPost[] = [
  {
    id: 1, slug: 'ornek-haber-1',
    title: { rendered: 'İslami Davet Vakfı\'nın Yıllık Konferansı Büyük İlgi Gördü' },
    excerpt: { rendered: '<p>Bu yıl düzenlenen yıllık konferans, dünyanın dört bir yanından gelen ilim adamları ve araştırmacıları bir araya getirdi...</p>' },
    content: { rendered: '' }, date: '2024-11-15T10:00:00', modified: '',
    categories: [1], tags: [], featured_media: 0, author: 1,
    _embedded: { author: [{ id: 1, name: 'Redaksiyon', slug: 'redaksiyon', description: '', avatar_urls: { '96': '' } }], 'wp:featuredmedia': [], 'wp:term': [[{ id: 1, name: 'Gündem', slug: 'gundem', taxonomy: 'category' }]] }
  },
  {
    id: 2, slug: 'ornek-haber-2',
    title: { rendered: 'Yeni Eğitim Programları ile Binlerce Kişiye Ulaşıldı' },
    excerpt: { rendered: '<p>Vakfımızın düzenlediği eğitim programları bu yıl rekor katılımla tamamlandı...</p>' },
    content: { rendered: '' }, date: '2024-11-10T09:00:00', modified: '',
    categories: [1], tags: [], featured_media: 0, author: 1,
    _embedded: { author: [{ id: 1, name: 'Redaksiyon', slug: 'redaksiyon', description: '', avatar_urls: { '96': '' } }], 'wp:featuredmedia': [], 'wp:term': [[{ id: 1, name: 'Eğitim', slug: 'egitim', taxonomy: 'category' }]] }
  },
  {
    id: 3, slug: 'ornek-haber-3',
    title: { rendered: 'Uluslararası Dayanışma Projesi Hayata Geçirildi' },
    excerpt: { rendered: '<p>Vakfımız, uluslararası ortaklıklar çerçevesinde yeni bir dayanışma projesi başlattı...</p>' },
    content: { rendered: '' }, date: '2024-11-05T08:00:00', modified: '',
    categories: [1], tags: [], featured_media: 0, author: 1,
    _embedded: { author: [{ id: 1, name: 'Redaksiyon', slug: 'redaksiyon', description: '', avatar_urls: { '96': '' } }], 'wp:featuredmedia': [], 'wp:term': [[{ id: 1, name: 'Uluslararası', slug: 'uluslararasi', taxonomy: 'category' }]] }
  },
  {
    id: 4, slug: 'ornek-haber-4',
    title: { rendered: 'Vakfımızın Yeni Yayınları Raflardaki Yerini Aldı' },
    excerpt: { rendered: '<p>2024 yılında hazırlanan eserler okuyucularla buluştu...</p>' },
    content: { rendered: '' }, date: '2024-10-28T07:00:00', modified: '',
    categories: [1], tags: [], featured_media: 0, author: 1,
    _embedded: { author: [{ id: 1, name: 'Redaksiyon', slug: 'redaksiyon', description: '', avatar_urls: { '96': '' } }], 'wp:featuredmedia': [], 'wp:term': [[{ id: 1, name: 'Yayın', slug: 'yayin', taxonomy: 'category' }]] }
  },
]

const NEWS_IMAGES = [
  'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=800&q=80',
  'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=80',
  'https://images.unsplash.com/photo-1507692049790-de58290a4334?w=600&q=80',
  'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80',
]

function NewsCard({ post, featured = false, imgSrc }: { post: WPPost; featured?: boolean; imgSrc: string }) {
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Gündem'

  return (
    <Link
      href={`/gundem/${post.slug}`}
      className={`card group block overflow-hidden ${featured ? 'h-full' : ''}`}
    >
      <div className={`relative overflow-hidden ${featured ? 'aspect-[4/3]' : 'aspect-video'}`}>
        <Image
          src={imgSrc}
          alt={post.title.rendered}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes={featured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 category-badge">
          {category}
        </span>
      </div>
      <div className={`p-5 ${featured ? 'p-6' : ''}`}>
        <h3 className={`font-playfair font-semibold text-brand-navy line-clamp-2 group-hover:text-brand-teal transition-colors mb-3 ${featured ? 'text-xl' : 'text-base'}`}>
          {post.title.rendered}
        </h3>
        <p className={`text-gray-500 text-sm line-clamp-2 mb-4 ${featured ? 'line-clamp-3' : ''}`}>
          {stripHtml(post.excerpt.rendered)}
        </p>
        <div className="flex items-center justify-between text-xs text-gray-400">
          <span className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            {formatDate(post.date)}
          </span>
          <span className="flex items-center gap-1 text-brand-teal font-medium">
            Devamı <ChevronRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    </Link>
  )
}

interface LatestNewsProps {
  posts?: WPPost[]
}

export default function LatestNews({ posts }: LatestNewsProps) {
  const t = useTranslations('sections')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const displayPosts = (posts && posts.length > 0 ? posts : MOCK_NEWS).slice(0, 4)

  return (
    <section
      className="section-padding bg-white"
      aria-label="Son Gündem"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container-narrow">
        {/* Header */}
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <SectionTitle
              tag="Gündem"
              title={t('latestNews')}
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/gundem"
              className="hidden sm:flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-tealDark transition-colors group text-sm"
            >
              {t('allNews')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Grid: 1 featured + 3 small */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Featured */}
          <motion.div variants={itemVariants}>
            <NewsCard post={displayPosts[0]} featured imgSrc={NEWS_IMAGES[0]} />
          </motion.div>

          {/* 3 small */}
          <div className="grid grid-rows-3 gap-4">
            {displayPosts.slice(1, 4).map((post, i) => (
              <motion.div key={post.id} variants={itemVariants}>
                <NewsCard post={post} imgSrc={NEWS_IMAGES[i + 1]} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mobile "see all" */}
        <div className="sm:hidden text-center mt-8">
          <Link href="/gundem" className="btn-teal">
            {t('allNews')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
