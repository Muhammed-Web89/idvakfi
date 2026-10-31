'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { staticArticles } from '@/lib/staticData'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ArticlesPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: locale === 'ar' ? 'الكل' : 'Tümü' },
    { id: 'KELAM', label: 'Kelam' },
    { id: 'TEFSİR', label: 'Tefsir' },
    { id: 'DAVET', label: 'Davet' },
    { id: 'İstişare Toplantısı', label: 'İstişare Raporları' },
  ]

  const filteredArticles = staticArticles.filter(
    (art) => activeCategory === 'all' || art.category === activeCategory
  )

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[12px] font-semibold text-[#3D8B8B] uppercase tracking-[0.1em] block mb-3">
            {locale === 'ar' ? 'البحوث والتقارير والدراسات' : 'Fikri Birikim ve Akademik Külliyat'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'المنشورات والمقالات' : 'Yayınlar ve Makaleler'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'تقارير تقييمية ودراسات ميدانية وتحليلات استشارية شاملة لواقع ومستقبل الدعوة والعمل الإسلامي.'
              : 'Vakfımızın akademisyen, düşünür ve yazar üyelerinin kaleme aldığı ilmi makaleler ve stratejik istişare raporları.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-[6px] font-inter text-xs font-semibold transition-all duration-200 ${
                activeCategory === cat.id
                  ? 'bg-[#1B4D4D] text-white shadow-sm'
                  : 'bg-white text-[#5C5C5C] hover:text-[#1B4D4D] border border-[#E5E2DA]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <motion.div
              key={art.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="bg-white rounded-xl overflow-hidden border border-[#E5E2DA] shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
            >
              <div>
                {/* Visual placeholder */}
                <div className="h-48 bg-gradient-to-br from-[#0F2E2E] to-[#1B4D4D] relative flex items-center justify-center overflow-hidden">
                  <IslamicPattern opacity={0.1} color="white" size={60} />
                  <span className="absolute bottom-4 left-4 bg-[rgba(27,77,77,0.8)] backdrop-blur-sm text-white font-inter font-semibold text-[11px] uppercase tracking-wider px-3 py-1 rounded">
                    {art.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[12px] text-[#8A8A8A] mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#2D6A6A]" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#2D6A6A]" />
                      {art.readTime} okuma
                    </span>
                  </div>

                  <Link href={`/makaleler/${art.slug}`}>
                    <h3 className="font-amiri font-bold text-xl text-[#1A1A1A] group-hover:text-[#1B4D4D] transition-colors leading-snug mb-3 line-clamp-2">
                      {art.title}
                    </h3>
                  </Link>

                  <p className="font-inter text-[#5C5C5C] text-sm leading-relaxed line-clamp-3 mb-4">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Bottom footer */}
              <div className="p-6 pt-0 flex items-center justify-between border-t border-[#E5E2DA] mt-2 pt-4">
                <span className="font-inter text-xs text-[#5C5C5C] font-medium">{art.author}</span>
                <Link
                  href={`/makaleler/${art.slug}`}
                  className="font-inter text-xs font-semibold text-[#1B4D4D] group-hover:text-[#2D6A6A] flex items-center gap-1"
                >
                  <span>Oku</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#1B4D4D] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
