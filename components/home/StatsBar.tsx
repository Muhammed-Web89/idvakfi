'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsBar() {
  const t = useTranslations('quickStats')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const items = [
    {
      value: 75,
      suffix: '',
      title: t('foundersTitle'),
      desc: t('foundersDesc'),
    },
    {
      value: 15,
      suffix: '+',
      title: t('regionsTitle'),
      desc: t('regionsDesc'),
    },
    {
      value: 15,
      suffix: '+',
      title: t('partnersTitle'),
      desc: t('partnersDesc'),
    },
  ]

  return (
    <section
      className="bg-[#1B4D4D] py-[40px] text-white border-y border-white/10"
      aria-label="Hızlı İstatistikler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <div className="max-w-[1240px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 items-center">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col items-center text-center px-4 sm:px-8 relative"
            >
              {/* Stat Number (Amiri 44px 700) */}
              <div className="font-amiri text-[44px] font-bold text-white leading-none">
                <AnimatedCounter target={item.value} suffix={item.suffix} duration={2500} />
              </div>

              {/* Stat Title (Inter 16px 600) */}
              <h3 className="font-inter text-[16px] font-semibold text-white mt-2">
                {item.title}
              </h3>

              {/* Stat Description (Inter 14px 400, color rgba(255,255,255,0.7), max-w 280px) */}
              <p className="font-inter text-[14px] font-normal text-white/70 max-w-[280px] mx-auto mt-1 leading-relaxed">
                {item.desc}
              </p>

              {/* Vertical divider (1px, height 50px, background rgba(255,255,255,0.15)) */}
              {index < items.length - 1 && (
                <div
                  className={`hidden md:block absolute top-1/2 -translate-y-1/2 w-[1px] h-[50px] bg-white/15 ${
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
