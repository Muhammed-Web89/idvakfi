'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { GraduationCap, BookOpen, Globe, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function AboutPreview() {
  const t = useTranslations('about')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const bottomCards = [
    {
      icon: GraduationCap,
      title: t('card1Title'),
      desc: t('card1Desc'),
    },
    {
      icon: BookOpen,
      title: t('card2Title'),
      desc: t('card2Desc'),
    },
    {
      icon: Globe,
      title: t('card3Title'),
      desc: t('card3Desc'),
    },
  ]

  return (
    <section
      className="bg-[#F7F5F0] py-[80px] sm:py-[100px] px-4 sm:px-10 lg:px-20 text-[#1A1A1A] relative overflow-hidden"
      aria-label="Hakkımızda Bölümü"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto">
        {/* Top 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column (340px Circle) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-5 flex justify-center"
          >
            <div className="relative w-[340px] h-[340px] rounded-full bg-[#1B4D4D] overflow-hidden shadow-[0_16px_50px_rgba(27,77,77,0.12)] flex items-center justify-center p-8 border-4 border-white/40">
              {/* Geometric pattern */}
              <IslamicPattern opacity={0.12} color="#FFFFFF" size={70} />

              {/* Concentric rings */}
              <div className="absolute inset-4 rounded-full border border-white/15 pointer-events-none" />
              <div className="absolute inset-10 rounded-full border border-white/10 pointer-events-none" />

              {/* Logo in center */}
              <div className="relative z-10 flex flex-col items-center text-center">
                <img
                  src="/logo-white.png"
                  alt="Vakıf Logo"
                  className="w-24 sm:w-28 h-auto object-contain drop-shadow-md"
                />
                <span className="font-amiri text-white text-xl sm:text-2xl font-bold mt-2.5">
                  İslami Davet Vakfı
                </span>
                <span className="font-inter text-white/75 text-[11px] tracking-wider uppercase mt-1">
                  1952&apos;den Günümüze
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column (Text Content) */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Tag */}
            <span className="font-inter text-[12px] font-semibold tracking-[0.1em] text-[#2D6A6A] uppercase">
              {t('tag')}
            </span>

            {/* H2 Title (Amiri 38px 700) */}
            <h2 className="font-amiri text-[30px] sm:text-[38px] font-bold text-[#1A1A1A] leading-[1.2] tracking-tight mt-3">
              {t('title')}
            </h2>

            {/* Paragraph 1 */}
            <p className="font-inter text-[16px] font-normal leading-[1.7] text-[#5C5C5C] mt-5">
              {t('desc1')}
            </p>

            {/* Paragraph 2 */}
            <p className="font-inter text-[16px] font-normal leading-[1.7] text-[#5C5C5C] mt-3">
              {t('desc2')}
            </p>

            {/* Badge & Link */}
            <div className="flex flex-wrap items-center gap-5 mt-7">
              <div className="bg-[#FFFFFF] text-[#1B4D4D] px-[18px] py-[10px] rounded-[8px] font-inter text-[14px] font-semibold shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-[#E5E2DA] inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#2D6A6A]" />
                {t('badge')}
              </div>

              <Link
                href="/hakkimizda"
                className="group inline-flex items-center gap-1.5 font-inter text-[15px] font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] transition-colors"
              >
                <span>{t('learnMore')}</span>
                <ArrowRight className="w-4 h-4 text-[#1B4D4D] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

        </div>

        {/* Bottom 3 Cards (p-7, min-height auto, border-radius 12px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-[60px]">
          {bottomCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#FFFFFF] rounded-[12px] p-7 border border-[#E5E2DA] shadow-sm hover:translate-y-[-4px] hover:shadow-md transition-all duration-300 flex flex-col items-start"
              >
                {/* Icon with 44px circular background */}
                <div className="w-[44px] h-[44px] rounded-full bg-[rgba(27,77,77,0.08)] flex items-center justify-center text-[#1B4D4D]">
                  <Icon className="w-5 h-5" />
                </div>

                {/* Card Title (Amiri 20px 600) */}
                <h3 className="font-amiri text-[20px] font-semibold text-[#1A1A1A] leading-tight mt-4">
                  {card.title}
                </h3>

                {/* Card Description (Inter 15px 400) */}
                <p className="font-inter text-[15px] font-normal leading-[1.6] text-[#5C5C5C] mt-2">
                  {card.desc}
                </p>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
