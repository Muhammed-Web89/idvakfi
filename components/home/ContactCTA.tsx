'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Link } from '@/i18n/routing'
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function ContactCTA() {
  const t = useTranslations('contact')

  return (
    <section className="section-padding bg-[#0F2E2E] text-white relative overflow-hidden">
      <IslamicPattern opacity={0.04} color="white" size={120} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-[#3D8B8B] font-inter text-xs font-semibold tracking-widest uppercase border border-[#3D8B8B]/40 rounded-full px-4 py-1.5 mb-6">
            {t('tag')}
          </span>

          <h2 className="font-amiri font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-6 max-w-2xl mx-auto leading-tight">
            {t('title')}
          </h2>

          <p className="font-inter text-white/80 max-w-xl mx-auto text-base sm:text-lg mb-10 leading-relaxed">
            {t('subtitle')}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/iletisim"
              className="bg-white text-[#1B4D4D] hover:bg-[#F7F5F0] font-inter font-semibold px-8 py-3.5 rounded-lg text-sm transition-all shadow-md"
            >
              {t('ctaButton')}
            </Link>
            <Link
              href="/hakkimizda"
              className="border border-white/30 text-white hover:bg-white/10 font-inter font-semibold px-8 py-3.5 rounded-lg text-sm transition-all"
            >
              {t('learnMore')}
            </Link>
          </div>

          {/* Quick info row */}
          <div className="grid sm:grid-cols-3 gap-6 pt-12 border-t border-white/10 max-w-3xl mx-auto text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#3D8B8B] flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <span className="font-inter text-xs text-white/80">{t('address')}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#3D8B8B] flex-shrink-0">
                <Phone className="w-5 h-5" />
              </div>
              <a href="tel:+905320627141" className="font-inter text-xs text-white/80 hover:text-white transition-colors">
                +90 532 062 71 41
              </a>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#3D8B8B] flex-shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <a href="mailto:islamidavetvakfi@gmail.com" className="font-inter text-xs text-white/80 hover:text-white transition-colors">
                islamidavetvakfi@gmail.com
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
