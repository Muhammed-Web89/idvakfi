'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, BookOpen, Clock, User } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'
import type { WPPost } from '@/lib/types'

interface FeaturedArticlesProps {
  articles?: WPPost[]
}

const REAL_ARTICLES = [
  {
    id: 1,
    slug: 'islam-ve-modernite-uzlasma-mi-catisma-mi',
    category: 'KELAM & DÜŞÜNCE',
    title: 'İslam ve Modernite: Uzlaşma mı, Çatışma mı?',
    summary:
      'Çağdaş dünyada İslami değerlerin yeri ve önemi üzerine kapsamlı bir inceleme. Ümmetin birliği için entelektüel bir çerçeve önerisi.',
    author: 'Prof. Dr. Orhan Çeker',
    initials: 'OÇ',
    readTime: '8 dk okuma',
  },
  {
    id: 2,
    slug: 'kuran-yorumlamada-cagdas-metodoloji-yaklasimlari',
    category: 'TEFSİR & USÛL',
    title: 'Kur\'an Yorumlamada Çağdaş Metodoloji Yaklaşımları',
    summary:
      'Tefsir ilminde modern dönemde ortaya çıkan yeni yöntemler ve geleneksel anlayışla ilişkisi üzerine bir değerlendirme.',
    author: 'Prof. Dr. Saim Ayaz',
    initials: 'SA',
    readTime: '12 dk okuma',
  },
  {
    id: 3,
    slug: 'kore-yarimadasinda-islamin-tarihsel-izleri',
    category: 'DAVET TARİHİ',
    title: 'Kore Yarımadası\'nda İslam\'ın Tarihsel İzleri',
    summary:
      '1952\'den günümüze Türk askerinin manevi duruşuyla başlayan ve bugün 21 camiye ulaşan Kore\'deki davet serüvenimiz.',
    author: 'Doç. Dr. Abdulkadir Turan',
    initials: 'AT',
    readTime: '10 dk okuma',
  },
]

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const t = useTranslations('articles')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="bg-[#080C10] py-20 px-4 sm:px-6 lg:px-8 text-[#F0F6FC] border-t border-white/5"
      aria-label="Öne Çıkan Makaleler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-2">
              <BookOpen className="w-3.5 h-3.5" />
              {t('tag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F6FC] tracking-tight mt-1">
              {t('title')}
            </h2>
            <p className="text-sm sm:text-base text-[#94A3B8] mt-2 max-w-xl">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href="/makaleler"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#00D4B2] hover:text-[#33DEC5] transition-colors self-start sm:self-auto"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
          </Link>
        </div>

        {/* 3 Makale Kartı Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col justify-between group hover:border-[#00D4B2]/40"
            >
              <div>
                {/* Category Pill */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-semibold tracking-wider px-2.5 py-1 rounded bg-[#00D4B2]/10 text-[#00D4B2] border border-[#00D4B2]/20 uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#64748B] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <Link href={`/makaleler/${article.slug}`}>
                  <h3 className="text-lg font-bold text-[#F0F6FC] leading-snug group-hover:text-[#00D4B2] transition-colors mb-3">
                    {article.title}
                  </h3>
                </Link>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.7] line-clamp-3 mb-6">
                  {article.summary}
                </p>
              </div>

              {/* Bottom Row: Author + Read Link */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#00D4B2]/15 border border-[#00D4B2]/30 text-[#00D4B2] flex items-center justify-center text-xs font-bold shrink-0">
                    {article.initials}
                  </div>
                  <span className="text-xs font-semibold text-[#F0F6FC]">
                    {article.author}
                  </span>
                </div>

                <Link
                  href={`/makaleler/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#00D4B2] hover:text-[#33DEC5] transition-colors"
                >
                  <span>{t('read')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
