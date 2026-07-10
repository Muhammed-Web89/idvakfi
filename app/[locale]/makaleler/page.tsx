'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { Calendar, User, Clock, ArrowRight } from 'lucide-react'
import { staticArticles } from '@/lib/staticData'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ArticlesPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [activeCategory, setActiveCategory] = useState<string>('all')

  const categories = [
    { id: 'all', label: locale === 'ar' ? 'الكل' : 'Tümü' },
    { id: 'Stratejik Raporlar', label: locale === 'ar' ? 'تقارير استراتيجية' : 'Stratejik Raporlar' },
    { id: 'İstişare Kararları', label: locale === 'ar' ? 'قرارات استشارية' : 'İstişare Kararları' }
  ]

  const filteredArticles = staticArticles.filter(
    (art) => activeCategory === 'all' || art.category === activeCategory
  )

  return (
    <div className="bg-brand-cream min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm block mb-3">
            {locale === 'ar' ? 'البحوث والتقارير والدراسات' : 'Fikri Birikim ve Saha Araştırmaları'}
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'المنشورات والتقارير' : 'Yayınlar ve Raporlar'}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'تقارير تقييمية ودراسات ميدانية وتحليلات استشارية شاملة لواقع ومستقبل الدعوة والعمل الإسلامي.'
              : 'Vakfımızın gerçekleştirdiği istişare toplantıları, saha araştırmaları ve stratejik gelecek planlamalarının resmi rapor ve analizleri.'}
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
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-brand-teal text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:text-brand-teal border border-brand-teal/5'
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
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden border border-brand-teal/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Visual placeholder with Islamic pattern */}
                <div className="h-48 bg-brand-navyMid relative flex items-center justify-center overflow-hidden">
                  <IslamicPattern opacity={0.08} color="white" size={60} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <span className="absolute bottom-4 left-4 bg-brand-gold text-brand-navy font-semibold text-[10px] uppercase px-3 py-1 rounded-full">
                    {art.category}
                  </span>
                </div>

                {/* Content info */}
                <div className="p-6">
                  <div className="flex items-center gap-4 text-[10px] text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-brand-teal" />
                      {art.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-brand-teal" />
                      {art.readTime}
                    </span>
                  </div>

                  <h3 className="font-playfair font-bold text-lg text-brand-navy mb-3 line-clamp-2 group-hover:text-brand-teal transition-colors">
                    {art.title}
                  </h3>

                  <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>
              </div>

              {/* Read button */}
              <div className="p-6 pt-0">
                <Link
                  href={`/makaleler/${art.slug}`}
                  className="w-full flex items-center justify-between text-brand-teal font-semibold text-xs border-t border-gray-50 pt-4 group-hover:text-brand-tealDark transition-colors"
                >
                  <span>{locale === 'ar' ? 'اقرأ التقرير كاملاً' : 'Raporu Oku'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
