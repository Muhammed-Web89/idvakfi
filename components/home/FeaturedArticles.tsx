'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'
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
    category: 'KELAM',
    categoryStyle: 'bg-[rgba(27,77,77,0.08)] text-[#1B4D4D]',
    title: 'İslam ve Modernite: Uzlaşma mı, Çatışma mı?',
    summary:
      'Çağdaş dünyada İslami değerlerin yeri ve önemi üzerine kapsamlı bir inceleme. Ümmetin birliği için entelektüel bir çerçeve önerisi.',
    author: 'Prof. Dr. Orhan Çeker',
    initials: 'OÇ',
    readTime: '8 dk okuma',
    patternBg: 'from-[#0F2E2E] to-[#1B4D4D]',
  },
  {
    id: 2,
    slug: 'kuran-yorumlamada-cagdas-metodoloji-yaklasimlari',
    category: 'TEFSİR',
    categoryStyle: 'bg-[rgba(45,106,106,0.08)] text-[#2D6A6A]',
    title: 'Kur\'an Yorumlamada Çağdaş Metodoloji Yaklaşımları',
    summary:
      'Tefsir ilminde modern dönemde ortaya çıkan yeni yöntemler ve geleneksel anlayışla ilişkisi üzerine bir değerlendirme.',
    author: 'Prof. Dr. Saim Ayaz',
    initials: 'SA',
    readTime: '12 dk okuma',
    patternBg: 'from-[#1B4D4D] to-[#2D6A6A]',
  },
  {
    id: 3,
    slug: 'kore-yarimadasinda-islamin-tarihsel-izleri',
    category: 'DAVET',
    categoryStyle: 'bg-[rgba(61,139,139,0.08)] text-[#3D8B8B]',
    title: 'Kore Yarımadası\'nda İslam\'ın Tarihsel İzleri',
    summary:
      '1952\'den günümüze Türk askerinin manevi duruşuyla başlayan ve bugün 21 camiye ulaşan Kore\'deki davet serüvenimiz.',
    author: 'Doç. Dr. Abdulkadir Turan',
    initials: 'AT',
    readTime: '10 dk okuma',
    patternBg: 'from-[#0F2E2E] to-[#2D6A6A]',
  },
]

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  const t = useTranslations('articles')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="bg-[#F7F5F0] py-[80px] sm:py-[100px] px-4 sm:px-10 lg:px-20 text-[#1A1A1A]"
      aria-label="Öne Çıkan Makaleler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-inter text-[12px] font-semibold tracking-[0.1em] text-[#2D6A6A] uppercase">
              {t('tag')}
            </span>
            <h2 className="font-amiri text-[32px] sm:text-[38px] font-bold text-[#1A1A1A] mt-2">
              {t('title')}
            </h2>
            <p className="font-inter text-[16px] font-normal text-[#5C5C5C] mt-2 max-w-xl">
              {t('subtitle')}
            </p>
          </div>

          <Link
            href="/makaleler"
            className="group inline-flex items-center gap-1.5 font-inter text-[15px] font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] transition-colors self-start sm:self-auto"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-4 h-4 text-[#1B4D4D] group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 3 Makale Kartı Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {REAL_ARTICLES.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group bg-[#FFFFFF] rounded-[12px] overflow-hidden border border-[#E5E2DA] hover:translate-y-[-4px] hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Area (200px) with hover scale */}
                <div
                  className={`h-[200px] w-full bg-gradient-to-br ${article.patternBg} relative flex items-center justify-center overflow-hidden p-6`}
                >
                  <IslamicPattern opacity={0.12} color="#FFFFFF" size={60} />
                  
                  {/* Inner card graphic with scale(1.03) on card hover */}
                  <div className="relative z-10 text-center transition-transform duration-400 ease-out group-hover:scale-[1.03]">
                    <div className="w-14 h-14 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mx-auto mb-2 backdrop-blur-sm shadow-inner">
                      <span className="font-amiri text-white text-xl font-bold">
                        {article.category}
                      </span>
                    </div>
                    <span className="font-inter text-white/75 text-[11px] uppercase tracking-widest">
                      İslami Davet Vakfı Külliyatı
                    </span>
                  </div>
                </div>

                {/* Content Padding */}
                <div className="p-6">
                  {/* Category Pill */}
                  <span
                    className={`font-inter text-[11px] font-semibold tracking-[0.05em] px-2.5 py-1 rounded inline-block uppercase ${article.categoryStyle}`}
                  >
                    {article.category}
                  </span>

                  {/* Title */}
                  <Link href={`/makaleler/${article.slug}`}>
                    <h3 className="font-amiri text-[20px] font-semibold text-[#1A1A1A] leading-snug mt-3 group-hover:text-[#1B4D4D] transition-colors">
                      {article.title}
                    </h3>
                  </Link>

                  {/* Summary */}
                  <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#5C5C5C] mt-2 line-clamp-2">
                    {article.summary}
                  </p>
                </div>
              </div>

              {/* Bottom Row: Author + Reading Time + Read Link */}
              <div className="px-6 pb-6 pt-4 border-t border-[#E5E2DA] flex items-center justify-between mt-4">
                {/* Author with circular avatar */}
                <div className="flex items-center gap-2.5">
                  <div className="w-10 h-10 rounded-full bg-[#1B4D4D] text-white flex items-center justify-center font-inter text-[14px] font-bold shadow-sm flex-shrink-0">
                    {article.initials}
                  </div>
                  <div className="flex flex-col">
                    <span className="font-inter text-[14px] font-semibold text-[#1A1A1A] leading-tight">
                      {article.author}
                    </span>
                    <span className="font-inter text-[12px] font-normal text-[#8A8A8A] mt-0.5">
                      {article.readTime}
                    </span>
                  </div>
                </div>

                {/* Read Button */}
                <Link
                  href={`/makaleler/${article.slug}`}
                  className="inline-flex items-center gap-1 font-inter text-[14px] font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] transition-colors"
                >
                  <span>{t('read')}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1B4D4D] group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
