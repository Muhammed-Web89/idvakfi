'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Users, Heart, ArrowRight } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function VolunteerSupportCTA() {
  const t = useTranslations('cta')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="relative py-[80px] sm:py-[100px] px-4 sm:px-10 lg:px-20 bg-[linear-gradient(135deg,#1B4D4D_0%,#0F2E2E_100%)] text-white overflow-hidden"
      aria-label="Gönüllü Ol ve Destek Ol"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Subtle Islamic pattern */}
      <IslamicPattern opacity={0.05} color="#FFFFFF" size={90} />

      <div className="relative max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Left Card — Gönüllü Ol (Padding 40px, bg-white/[0.06], rounded 12px) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/[0.06] backdrop-blur-[10px] border border-white/10 rounded-[12px] p-8 sm:p-10 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
          >
            <div>
              {/* Icon (40px) */}
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                <Users className="w-5 h-5 text-white" />
              </div>

              {/* Title (Amiri 24px 700) */}
              <h3 className="font-amiri text-[24px] font-bold text-white">
                {t('volunteerTitle')}
              </h3>

              {/* Description (Inter 15px 400, color rgba(255,255,255,0.8), line-height 1.6, max-width 400px) */}
              <p className="font-inter text-[15px] font-normal leading-[1.6] text-white/80 max-w-[400px] mt-3">
                {t('volunteerDesc')}
              </p>
            </div>

            {/* Button (padding 12px 24px) */}
            <div className="mt-8 pt-2">
              <Link
                href="/iletisim"
                className="group inline-flex items-center gap-2 bg-[#FFFFFF] hover:bg-[#F7F5F0] text-[#1B4D4D] font-inter text-[15px] font-semibold px-6 py-3 rounded-[6px] transition-all duration-200"
              >
                <span>{t('volunteerBtn')}</span>
                <ArrowRight className="w-4 h-4 text-[#1B4D4D] group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

          {/* Right Card — Destek Ol (Padding 40px, bg-white/[0.06], rounded 12px) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="bg-white/[0.06] backdrop-blur-[10px] border border-white/10 rounded-[12px] p-8 sm:p-10 flex flex-col justify-between hover:translate-y-[-4px] transition-all duration-300"
          >
            <div>
              {/* Icon (40px) */}
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-5">
                <Heart className="w-5 h-5 text-white" />
              </div>

              {/* Title (Amiri 24px 700) */}
              <h3 className="font-amiri text-[24px] font-bold text-white">
                {t('supportTitle')}
              </h3>

              {/* Description (Inter 15px 400, color rgba(255,255,255,0.8), line-height 1.6, max-width 400px) */}
              <p className="font-inter text-[15px] font-normal leading-[1.6] text-white/80 max-w-[400px] mt-3">
                {t('supportDesc')}
              </p>

              {/* Bank Info (Inter 13px 400, font-mono, bg rgba(0,0,0,0.15), padding 10px 14px, rounded 6px, margin-top 16px) */}
              <div className="bg-black/15 border border-white/10 rounded-[6px] px-3.5 py-2.5 mt-4">
                <p className="font-mono text-[13px] font-normal text-white/50 select-all leading-tight">
                  {t('bankInfo')}
                </p>
              </div>
            </div>

            {/* Button (padding 12px 24px, bg transparent, border 1px rgba(255,255,255,0.3)) */}
            <div className="mt-8 pt-2">
              <Link
                href="/kurumsal"
                className="group inline-flex items-center gap-2 bg-transparent hover:bg-white/10 text-[#FFFFFF] border border-white/30 hover:border-white font-inter text-[15px] font-semibold px-6 py-3 rounded-[6px] transition-all duration-200"
              >
                <span>{t('supportBtn')}</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
