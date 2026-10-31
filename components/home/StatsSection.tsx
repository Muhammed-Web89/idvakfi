'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function StatsSection() {
  const t = useTranslations('impact')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const impactCards = [
    {
      value: 11000,
      suffix: '+',
      title: t('koreaTitle'),
      subtitle: t('koreaSubtitle'),
      desc: t('koreaDesc'),
    },
    {
      value: 100000,
      suffix: '+',
      title: t('japanTitle'),
      subtitle: t('japanSubtitle'),
      desc: t('japanDesc'),
    },
    {
      value: 401,
      suffix: '',
      title: t('mosquesTitle'),
      subtitle: t('mosquesSubtitle'),
      desc: t('mosquesDesc'),
    },
    {
      value: 1740,
      suffix: '+',
      title: t('membersTitle'),
      subtitle: t('membersSubtitle'),
      desc: t('membersDesc'),
    },
  ]

  return (
    <section
      className="bg-[#0F2E2E] py-[80px] sm:py-[100px] text-white relative overflow-hidden"
      aria-label="Etki Alanlarımız"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Subtle Islamic pattern */}
      <IslamicPattern opacity={0.04} color="#FFFFFF" size={80} />

      <div className="relative max-w-[1240px] mx-auto px-4 sm:px-8">
        
        {/* Header (Title + Subtitle) */}
        <div className="text-center mb-[60px]">
          <span className="font-inter text-[12px] font-semibold tracking-[0.1em] text-white/50 uppercase">
            {t('tag')}
          </span>
          <h2 className="font-amiri text-[32px] sm:text-[36px] font-bold text-white mt-3">
            {t('title')}
          </h2>
          <p className="font-inter text-[16px] sm:text-[17px] font-normal text-white/70 mt-2 max-w-xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* 4 Impact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 text-center">
          {impactCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, delay: index * 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center px-4 sm:px-6 relative"
            >
              {/* Stat Number (Amiri 44px 700 with dotted format) */}
              <div className="font-amiri text-[44px] font-bold text-white leading-none">
                <AnimatedCounter
                  target={card.value}
                  suffix={card.suffix}
                  duration={2500}
                  formatThousands={true}
                />
              </div>

              {/* Title (Inter 18px 600) */}
              <h3 className="font-inter text-[18px] font-semibold text-white mt-3 leading-snug">
                {card.title}
              </h3>

              {/* Subtitle (Inter 14px 500 italic #3D8B8B) */}
              <p className="font-inter text-[14px] font-medium text-[#3D8B8B] italic mt-1">
                {card.subtitle}
              </p>

              {/* Description (Inter 14px 400, max-w 260px, color white/65) */}
              <p className="font-inter text-[14px] font-normal leading-[1.6] text-white/65 max-w-[260px] mx-auto mt-2">
                {card.desc}
              </p>

              {/* Vertical divider (1px, height 80px, background rgba(255,255,255,0.1)) */}
              {index < impactCards.length - 1 && (
                <div
                  className={`hidden lg:block absolute top-1/2 -translate-y-1/2 w-[1px] h-[80px] bg-white/10 ${
                    isRTL ? 'left-0' : 'right-0'
                  }`}
                />
              )}
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
