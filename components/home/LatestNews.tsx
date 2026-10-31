'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, Calendar } from 'lucide-react'
import { Link } from '@/i18n/routing'
import type { WPPost } from '@/lib/types'

interface LatestNewsProps {
  posts?: WPPost[]
}

const REAL_NEWS = [
  {
    id: 1,
    slug: 'besinci-genisletilmis-istisare-toplantisi',
    date: '04 Temmuz 2026',
    category: 'İstişare Toplantısı',
    title: '5. Genişletilmiş İstişare Toplantısı',
    summary:
      'Gaye Vakfı ev sahipliğinde, 70\'in üzerinde katılımcıyla gerçekleştirildi.',
  },
  {
    id: 2,
    slug: 'orman-egitim-kampi-calismalari',
    date: '27 Haziran 2026',
    category: 'Yönetim Kurulu',
    title: 'Orman Eğitim Kampı Çalışmaları',
    summary:
      'Ahmet Eroğlu, Orman Genel Müdürlüğü ile eğitim kampı yeri tahsisi için görüşmelere başladı.',
  },
  {
    id: 3,
    slug: 'ikinci-istisare-toplantisi-raporu',
    date: '14 Şubat 2026',
    category: 'Davet Çalışmaları',
    title: '2. İstişare Toplantısı — Seul\'den Başlayan Yol',
    summary:
      'Eski Seul Dini Ataşesi Süleyman Elik\'in katılımıyla Güney Kore\'deki İslam\'ın tarihsel gelişimi masaya yatırıldı.',
  },
]

export default function LatestNews({ posts }: LatestNewsProps) {
  const t = useTranslations('news')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="bg-[#FFFFFF] py-[80px] sm:py-[100px] px-4 sm:px-10 lg:px-20 text-[#1A1A1A]"
      aria-label="Son Gündem"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto">
        
        {/* Header: Title left, View All right */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <span className="font-inter text-[12px] font-semibold tracking-[0.1em] text-[#2D6A6A] uppercase">
              {t('tag')}
            </span>
            <h2 className="font-amiri text-[32px] sm:text-[38px] font-bold text-[#1A1A1A] mt-2">
              {t('title')}
            </h2>
          </div>

          <Link
            href="/makaleler"
            className="group inline-flex items-center gap-1.5 font-inter text-[15px] font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] transition-colors self-start sm:self-auto"
          >
            <span>{t('viewAll')}</span>
            <ArrowRight className="w-4 h-4 text-[#1B4D4D] group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>

        {/* 3 Columns Horizontal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REAL_NEWS.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#F7F5F0] rounded-[12px] p-6 border border-[#E5E2DA] flex flex-col justify-between hover:translate-y-[-2px] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              <div>
                {/* Date */}
                <div className="flex items-center gap-1.5 font-inter text-[13px] font-medium text-[#8A8A8A]">
                  <Calendar className="w-3.5 h-3.5 text-[#8A8A8A]" />
                  <span>{news.date}</span>
                </div>

                {/* Category Badge (Inter 12px 600, bg rgba(27,77,77,0.08), color #1B4D4D, padding 4px 10px, radius 4px) */}
                <div className="mt-2.5">
                  <span className="font-inter text-[12px] font-semibold text-[#1B4D4D] bg-[rgba(27,77,77,0.08)] px-2.5 py-1 rounded-[4px] inline-block">
                    {news.category}
                  </span>
                </div>

                {/* Title (Amiri 20px 600, margin-top 12px) */}
                <h3 className="font-amiri text-[20px] font-semibold text-[#1A1A1A] leading-snug mt-3">
                  {news.title}
                </h3>

                {/* Summary (Inter 15px 400, color #5C5C5C, line-height 1.6, margin-top 8px) */}
                <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#5C5C5C] mt-2">
                  {news.summary}
                </p>
              </div>

              {/* Link (Inter 14px 600, color #1B4D4D, margin-top 16px) */}
              <div className="mt-4 pt-2">
                <Link
                  href={`/makaleler/${news.slug}`}
                  className="group inline-flex items-center gap-1.5 font-inter text-[14px] font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] transition-colors"
                >
                  <span>{t('readDetail')}</span>
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
