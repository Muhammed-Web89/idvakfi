'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Users, Heart, ArrowRight, Sparkles } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function VolunteerSupportCTA() {
  const t = useTranslations('cta')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-[#090D12] text-[#F0F6FC] overflow-hidden border-t border-white/5"
      aria-label="Gönüllü Ol ve Destek Ol"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />

      <div className="relative max-w-[1240px] mx-auto z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Gönüllü Ol */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
            className="glass-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#00D4B2]/40"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center mb-6 text-[#00D4B2]">
                <Users className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#F0F6FC] mb-3">
                {t('volunteerTitle')}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-[1.8] max-w-md">
                {t('volunteerDesc')}
              </p>
            </div>

            <div className="mt-8 pt-4">
              <Link
                href="/uyelik"
                className="btn-turquoise group inline-flex"
              >
                <span>{t('volunteerBtn')}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>
            </div>
          </motion.div>

          {/* Card 2: Destek Ol / Bağış */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-card p-8 sm:p-10 flex flex-col justify-between group hover:border-[#33DEC5]/40"
          >
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 text-[#33DEC5]">
                <Heart className="w-6 h-6" />
              </div>

              <h3 className="text-2xl font-bold text-[#F0F6FC] mb-3">
                {t('supportTitle')}
              </h3>

              <p className="text-sm text-[#94A3B8] leading-[1.8] max-w-md">
                {t('supportDesc')}
              </p>

              <div className="mt-4 p-3 rounded-lg bg-[#080C10] border border-white/10 text-xs font-mono text-[#00D4B2]">
                {t('bankInfo')}
              </div>
            </div>

            <div className="mt-8 pt-4">
              <a
                href="#hizli-bagis"
                className="btn-glass group inline-flex"
              >
                <span>{t('supportBtn')}</span>
                <ArrowRight className={`w-4 h-4 text-[#00D4B2] transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
