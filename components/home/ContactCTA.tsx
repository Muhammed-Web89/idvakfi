'use client'

import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import ScrollReveal from '@/components/ui/ScrollReveal'

export default function ContactCTA() {
  const t = useTranslations('sections')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="relative py-24 overflow-hidden"
      aria-label="İletişim CTA"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Diagonal gradient background */}
      <div className="absolute inset-0 gradient-teal" />
      <IslamicPattern opacity={0.08} color="white" size={80} />

      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />

      <div className="relative container-narrow text-center">
        <ScrollReveal>
          <span className="inline-block text-brand-gold text-xs font-semibold tracking-widest uppercase border border-brand-gold/40 rounded-full px-4 py-1.5 mb-6">
            Bize Ulaşın
          </span>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-playfair font-bold text-3xl sm:text-4xl lg:text-5xl text-white leading-tight mb-6 max-w-3xl mx-auto text-balance">
            {t('contactCTATitle')}
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-teal-100 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            {t('contactCTADesc')}
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <Link
            href="/iletisim"
            className="btn-primary text-base px-8 py-4 shadow-xl shadow-black/20"
            id="contact-cta-btn"
          >
            {t('contactCTABtn')}
            <ArrowRight className="w-5 h-5" />
          </Link>
        </ScrollReveal>
      </div>
    </section>
  )
}
