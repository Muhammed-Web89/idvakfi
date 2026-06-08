'use client'

import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { BookOpen, GraduationCap, Globe, ArrowRight } from 'lucide-react'
import ScrollReveal from '@/components/ui/ScrollReveal'
import SectionTitle from '@/components/ui/SectionTitle'
import IslamicPattern from '@/components/ui/IslamicPattern'
import { staggerContainer, itemVariants } from '@/lib/animations'

const features = [
  {
    icon: GraduationCap,
    titleKey: 'feature1Title' as const,
    descKey: 'feature1Desc' as const,
  },
  {
    icon: BookOpen,
    titleKey: 'feature2Title' as const,
    descKey: 'feature2Desc' as const,
  },
  {
    icon: Globe,
    titleKey: 'feature3Title' as const,
    descKey: 'feature3Desc' as const,
  },
]

export default function AboutPreview() {
  const t = useTranslations('about')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section className="section-padding bg-brand-cream relative overflow-hidden" dir={isRTL ? 'rtl' : 'ltr'}>
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — Decorative visual */}
          <ScrollReveal variant="fadeInLeft">
            <div className="relative flex items-center justify-center">
              {/* Background circle */}
              <div className="absolute w-80 h-80 rounded-full bg-brand-tealLight opacity-40" />
              {/* Islamic pattern overlay */}
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-2 border-brand-teal/20 bg-brand-tealLight flex items-center justify-center">
                <IslamicPattern opacity={0.2} color="#0d6e6e" size={70} className="!relative inset-auto w-full h-full" />
                {/* Center logo placeholder */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-brand-navy/90 flex items-center justify-center shadow-2xl">
                    <svg viewBox="0 0 80 80" className="w-20 h-20" fill="none">
                      <polygon points="40,5 65,20 70,48 55,70 25,70 10,48 15,20" stroke="#0d6e6e" strokeWidth="2" fill="none"/>
                      <polygon points="40,18 57,28 60,48 50,62 30,62 20,48 23,28" stroke="#c9a84c" strokeWidth="1.5" fill="none"/>
                      <circle cx="40" cy="40" r="10" stroke="#0d6e6e" strokeWidth="2" fill="rgba(13,110,110,0.2)"/>
                      <circle cx="40" cy="40" r="4" fill="#c9a84c"/>
                    </svg>
                  </div>
                </div>
              </div>
              {/* Floating accent */}
              <div className="absolute -bottom-4 -right-4 w-20 h-20 rounded-2xl bg-brand-gold/20 border border-brand-gold/30 flex items-center justify-center">
                <span className="text-brand-gold font-playfair font-bold text-2xl">15+</span>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Text */}
          <div>
            <ScrollReveal delay={0.1}>
              <SectionTitle
                tag={t('tag')}
                title={t('title')}
                align="left"
                className="mb-6"
              />
            </ScrollReveal>

            <div className="space-y-4 mb-8">
              {[t('desc1'), t('desc2'), t('desc3')].map((desc, i) => (
                <ScrollReveal key={i} delay={0.15 + i * 0.1}>
                  <p className="text-gray-600 leading-relaxed">{desc}</p>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.45}>
              <Link
                href="/hakkimizda"
                className="inline-flex items-center gap-2 text-brand-teal font-semibold hover:text-brand-tealDark transition-colors group"
              >
                {t('learnMore')}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-3 gap-6 mt-20"
        >
          {features.map(({ icon: Icon, titleKey, descKey }) => (
            <motion.div
              key={titleKey}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 border-l-4 border-brand-teal shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-tealLight flex items-center justify-center mb-4 group-hover:bg-brand-teal transition-colors duration-300">
                <Icon className="w-5 h-5 text-brand-teal group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-brand-navy mb-2">{t(titleKey)}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{t(descKey)}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
