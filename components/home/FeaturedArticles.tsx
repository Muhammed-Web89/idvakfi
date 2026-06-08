'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, Clock, User, Tag } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import { staggerContainer, itemVariants } from '@/lib/animations'
import { stripHtml, formatDate } from '@/lib/wordpress'
import type { WPPost } from '@/lib/types'

const MOCK_ARTICLES: WPPost[] = [
  {
    id: 10, slug: 'islam-ve-modernite',
    title: { rendered: 'İslam ve Modernite: Uzlaşma mı, Çatışma mı?' },
    excerpt: { rendered: '<p>Çağdaş dünyada İslami değerlerin yeri ve önemi üzerine kapsamlı bir inceleme...</p>' },
    content: { rendered: '' }, date: '2024-11-12T10:00:00', modified: '',
    categories: [2], tags: [], featured_media: 0, author: 2,
    acf: { okuma_suresi: '8' },
    _embedded: {
      author: [{ id: 2, name: 'Prof. Dr. Ahmet Yıldız', slug: 'ahmet-yildiz', description: '', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Ahmet+Yildiz&background=0d6e6e&color=fff&size=96' }, acf: { unvan: 'Kelam Profesörü' } }],
      'wp:featuredmedia': [],
      'wp:term': [[{ id: 5, name: 'Kelam', slug: 'kelam', taxonomy: 'category' }]]
    }
  },
  {
    id: 11, slug: 'kuran-yorumlama-metodoloji',
    title: { rendered: 'Kur\'an Yorumlamada Çağdaş Metodoloji Yaklaşımları' },
    excerpt: { rendered: '<p>Tefsir ilminde modern dönemde ortaya çıkan yeni yöntemler ve geleneksel anlayışla ilişkisi...</p>' },
    content: { rendered: '' }, date: '2024-11-08T09:00:00', modified: '',
    categories: [2], tags: [], featured_media: 0, author: 3,
    acf: { okuma_suresi: '12' },
    _embedded: {
      author: [{ id: 3, name: 'Dr. Fatma Şahin', slug: 'fatma-sahin', description: '', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Fatma+Sahin&background=1a4a3a&color=fff&size=96' }, acf: { unvan: 'Tefsir Uzmanı' } }],
      'wp:featuredmedia': [],
      'wp:term': [[{ id: 6, name: 'Tefsir', slug: 'tefsir', taxonomy: 'category' }]]
    }
  },
  {
    id: 12, slug: 'fiqh-ve-hukukun-ilkeleri',
    title: { rendered: 'İslam Hukukunun Temel İlkeleri ve Günümüz Uygulamaları' },
    excerpt: { rendered: '<p>Fıkıh usulünün modern hukuk sistemleriyle karşılaştırmalı bir analizi...</p>' },
    content: { rendered: '' }, date: '2024-11-01T08:00:00', modified: '',
    categories: [2], tags: [], featured_media: 0, author: 4,
    acf: { okuma_suresi: '10' },
    _embedded: {
      author: [{ id: 4, name: 'Doç. Dr. Mehmet Kaya', slug: 'mehmet-kaya', description: '', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Mehmet+Kaya&background=c9a84c&color=fff&size=96' }, acf: { unvan: 'Fıkıh Araştırmacısı' } }],
      'wp:featuredmedia': [],
      'wp:term': [[{ id: 7, name: 'Fıkıh', slug: 'fikh', taxonomy: 'category' }]]
    }
  },
]

const ARTICLE_IMAGES = [
  'https://images.unsplash.com/photo-1519682337058-a94d519337bc?w=600&q=80',
  'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
  'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=600&q=80',
]

const CATEGORY_COLORS = ['bg-brand-teal', 'bg-brand-emerald', 'bg-brand-gold']

interface ArticleCardProps {
  post: WPPost
  index: number
}

function ArticleCard({ post, index }: ArticleCardProps) {
  const author = post._embedded?.author?.[0]
  const category = post._embedded?.['wp:term']?.[0]?.[0]?.name || 'Makale'
  const readingTime = post.acf?.okuma_suresi || '7'

  return (
    <motion.div variants={itemVariants} className="card group flex flex-col overflow-hidden">
      {/* Category color strip */}
      <div className={`h-1.5 ${CATEGORY_COLORS[index % CATEGORY_COLORS.length]}`} />

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={ARTICLE_IMAGES[index % ARTICLE_IMAGES.length]}
          alt={post.title.rendered}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="p-5 flex flex-col flex-1">
        {/* Author + category */}
        <div className="flex items-center justify-between mb-3">
          {author && (
            <div className="flex items-center gap-2">
              <Image
                src={author.avatar_urls['96']}
                alt={author.name}
                width={24}
                height={24}
                className="rounded-full"
                unoptimized
              />
              <span className="text-xs text-gray-500 font-medium">{author.name}</span>
            </div>
          )}
          <span className="category-badge text-xs">{category}</span>
        </div>

        {/* Title */}
        <Link href={`/makaleler/${post.slug}`}>
          <h3 className="font-playfair font-semibold text-brand-navy text-lg leading-snug line-clamp-2 group-hover:text-brand-teal transition-colors mb-3">
            {post.title.rendered}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed flex-1 mb-4">
          {stripHtml(post.excerpt.rendered)}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-3 border-t border-gray-100">
          <span className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {readingTime} dk okuma
          </span>
          <Link
            href={`/makaleler/${post.slug}`}
            className="text-brand-teal font-medium hover:text-brand-tealDark flex items-center gap-1"
          >
            Oku <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

interface FeaturedArticlesProps {
  articles?: WPPost[]
}

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const t = useTranslations('sections')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const displayArticles = (articles && articles.length > 0 ? articles : MOCK_ARTICLES).slice(0, 3)

  return (
    <section
      className="section-padding bg-brand-cream"
      aria-label="Öne Çıkan Makaleler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <SectionTitle
              tag="Makaleler"
              title={t('featuredArticles')}
              align="left"
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/makaleler"
              className="hidden sm:flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-tealDark transition-colors group text-sm"
            >
              {t('viewAll')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayArticles.map((article, i) => (
            <ArticleCard key={article.id} post={article} index={i} />
          ))}
        </motion.div>

        <div className="sm:hidden text-center mt-8">
          <Link href="/makaleler" className="btn-teal">
            {t('viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
