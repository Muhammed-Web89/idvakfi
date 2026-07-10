'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import IslamicPattern from '@/components/ui/IslamicPattern'
import { staggerContainer, itemVariants } from '@/lib/animations'

export default function StatsSection() {
  const t = useTranslations('stats')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const stats = [
    { value: 11, suffix: ' ' + t('thousand') + '+', label: t('koreaTitle'), subtitle: t('koreaSubtitle'), desc: t('koreaDesc') },
    { value: 100, suffix: ' ' + t('thousand') + '+', label: t('japanHidayetTitle'), subtitle: t('japanHidayetSubtitle'), desc: t('japanHidayetDesc') },
    { value: 401, suffix: '', label: t('japanCamiTitle'), subtitle: t('japanCamiSubtitle'), desc: t('japanCamiDesc') },
    { value: 1740, suffix: '+', label: t('teskilatTitle'), subtitle: t('teskilatSubtitle'), desc: t('teskilatDesc') },
  ]

  return (
    <section
      className="relative py-24 bg-brand-navyMid overflow-hidden"
      aria-label="İstatistikler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <IslamicPattern opacity={0.06} color="white" size={90} />

      {/* Top/bottom gold line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-gold/50 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className={`text-center flex flex-col items-center px-2 py-4 ${
                i < stats.length - 1 ? 'lg:border-r lg:border-white/10' : ''
              }`}
            >
              <div className="font-playfair font-bold text-4xl sm:text-5xl text-brand-gold mb-3">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} duration={2200} />
              </div>
              <div className="text-white font-semibold text-base mb-1">{stat.label}</div>
              <div className="text-brand-gold/80 font-medium text-xs mb-3 italic">{stat.subtitle}</div>
              <div className="text-gray-400 text-xs leading-relaxed text-center max-w-[260px]">{stat.desc}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
