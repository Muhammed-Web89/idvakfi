'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, ChevronLeft, ChevronRight, BookOpen } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import type { WPAuthor } from '@/lib/types'

const MOCK_AUTHORS: WPAuthor[] = [
  { id: 1, name: 'Prof. Dr. Ahmet Yıldız', slug: 'ahmet-yildiz', description: 'Kelam ve İslam Felsefesi alanında uzman akademisyen.', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Ahmet+Yildiz&background=0d6e6e&color=fff&size=200&bold=true' }, acf: { unvan: 'Kelam Profesörü', uzmanlik: 'Kelam · Felsefe · Akaid' } },
  { id: 2, name: 'Dr. Fatma Şahin', slug: 'fatma-sahin', description: 'Tefsir ve Kur\'an ilimleri alanında araştırmacı.', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Fatma+Sahin&background=1a4a3a&color=fff&size=200&bold=true' }, acf: { unvan: 'Tefsir Uzmanı', uzmanlik: 'Tefsir · Kur\'an İlimleri' } },
  { id: 3, name: 'Doç. Dr. Mehmet Kaya', slug: 'mehmet-kaya', description: 'İslam hukuku ve fıkıh usulü alanında çalışmalar yapmaktadır.', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Mehmet+Kaya&background=c9a84c&color=fff&size=200&bold=true' }, acf: { unvan: 'Fıkıh Araştırmacısı', uzmanlik: 'Fıkıh · Usul · Hukuk' } },
  { id: 4, name: 'Dr. Ali Vural', slug: 'ali-vural', description: 'Hadis ve Sünnet ilimleri üzerine uzmanlaşmış din adamı.', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Ali+Vural&background=085050&color=fff&size=200&bold=true' }, acf: { unvan: 'Hadis Alimi', uzmanlik: 'Hadis · Sünnet · Siyer' } },
  { id: 5, name: 'Dr. Zeynep Arslan', slug: 'zeynep-arslan', description: 'Tasavvuf ve İslam ahlakı alanında araştırmacı yazar.', avatar_urls: { '96': 'https://ui-avatars.com/api/?name=Zeynep+Arslan&background=0f2240&color=fff&size=200&bold=true' }, acf: { unvan: 'Tasavvuf Araştırmacısı', uzmanlik: 'Tasavvuf · Ahlak · Felsefe' } },
]

interface ScholarCardProps {
  author: WPAuthor
}

function ScholarCard({ author }: ScholarCardProps) {
  return (
    <Link
      href={`/hocalarimiz/${author.slug}`}
      className="group flex-shrink-0 w-52 bg-white rounded-2xl p-5 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      {/* Avatar */}
      <div className="relative w-24 h-24 mx-auto mb-4">
        <div className="absolute inset-0 rounded-full bg-brand-tealLight group-hover:bg-brand-teal/20 transition-colors duration-300" />
        <Image
          src={author.avatar_urls['96']}
          alt={author.name}
          width={96}
          height={96}
          className="relative w-full h-full rounded-full object-cover border-2 border-brand-teal/20 group-hover:border-brand-teal transition-colors duration-300 group-hover:scale-105 transition-transform"
          unoptimized
        />
      </div>

      {/* Name */}
      <h3 className="font-playfair font-semibold text-brand-navy text-sm mb-1 group-hover:text-brand-teal transition-colors leading-snug">
        {author.name}
      </h3>

      {/* Title */}
      {author.acf?.unvan && (
        <p className="text-brand-teal text-xs font-medium mb-2">{author.acf.unvan}</p>
      )}

      {/* Expertise */}
      {author.acf?.uzmanlik && (
        <p className="text-gray-400 text-xs line-clamp-2 leading-relaxed">{author.acf.uzmanlik}</p>
      )}

      <div className="mt-3 flex items-center justify-center gap-1 text-brand-teal text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">
        <BookOpen className="w-3 h-3" />
        Makaleler
      </div>
    </Link>
  )
}

interface ScholarsListProps {
  authors?: WPAuthor[]
}

export default function ScholarsList({ authors }: ScholarsListProps) {
  const t = useTranslations('sections')
  const locale = useLocale()
  const isRTL = locale === 'ar'
  const scrollRef = useRef<HTMLDivElement>(null)
  const displayAuthors = authors && authors.length > 0 ? authors : MOCK_AUTHORS

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -220 : 220, behavior: 'smooth' })
    }
  }

  return (
    <section
      className="section-padding bg-white overflow-hidden"
      aria-label="Hocalarımız"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="container-narrow">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <SectionTitle
              tag="Akademik Kadro"
              title={t('ourScholars')}
              align="left"
            />
          </ScrollReveal>
          <div className="flex items-center gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand-teal hover:bg-brand-tealLight flex items-center justify-center transition-colors"
              aria-label="Sola kaydır"
            >
              <ChevronLeft className="w-5 h-5 text-gray-400" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 h-10 rounded-full border border-gray-200 hover:border-brand-teal hover:bg-brand-tealLight flex items-center justify-center transition-colors"
              aria-label="Sağa kaydır"
            >
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: 'none' }}
        >
          {displayAuthors.map((author, i) => (
            <motion.div
              key={author.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="snap-start"
            >
              <ScholarCard author={author} />
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <Link
            href="/hocalarimiz"
            className="btn-teal inline-flex"
          >
            Tüm Hocalarımız <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
