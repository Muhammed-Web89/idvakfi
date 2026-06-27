'use client'

import { useEffect, useRef, useState } from 'react'
import { Link } from '@/i18n/routing'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, ChevronDown } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

function Particles() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {Array.from({ length: 25 }).map((_, i) => (
        <div
          key={i}
          className="particle absolute rounded-full bg-white"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${Math.random() * 20}%`,
            width: `${Math.random() * 4 + 1}px`,
            height: `${Math.random() * 4 + 1}px`,
            animationDuration: `${Math.random() * 15 + 10}s`,
            animationDelay: `${Math.random() * 10}s`,
            opacity: Math.random() * 0.5 + 0.1,
          }}
        />
      ))}
    </div>
  )
}

export default function HeroSection() {
  const t = useTranslations('hero')
  const ts = useTranslations('stats')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const stats = [
    { value: 15, suffix: '+', label: ts('years') },
    { value: 120, suffix: '+', label: ts('projects') },
    { value: 5000, suffix: '+', label: ts('members') },
  ]

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden"
      aria-label="Ana hero bölümü"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <IslamicPattern opacity={0.05} color="white" size={100} />
      <Particles />

      {/* Radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-brand-teal/10 blur-3xl pointer-events-none" />

      {/* Content */}
      <div className="relative flex-1 flex items-center">
        <div className="container-narrow w-full pt-32 pb-20">
          <div className="grid lg:grid-cols-5 gap-12 items-center">

            {/* Left — text (60%) */}
            <div className="lg:col-span-3">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 border border-brand-teal/50 bg-brand-teal/10 rounded-full px-4 py-1.5 mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-brand-teal animate-pulse-slow" />
                <span className="text-brand-teal text-xs font-semibold tracking-widest uppercase">
                  {t('badge')}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="font-playfair font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6"
              >
                <span className="text-white block">{t('title1')}</span>
                <span className="text-brand-gold block">{t('title2')}</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mb-10"
              >
                {t('subtitle')}
              </motion.p>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  href="/faaliyetler"
                  className="btn-primary group"
                  id="hero-cta-primary"
                >
                  {t('cta1')}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/hakkimizda"
                  className="btn-secondary"
                  id="hero-cta-secondary"
                >
                  {t('cta2')}
                </Link>
              </motion.div>
            </div>

            {/* Right — decorative visual (40%) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.3 }}
              className="lg:col-span-2 hidden lg:flex items-center justify-center"
            >
              <div className="relative w-full max-w-xs aspect-square">
                {/* Rotating ring */}
                <div className="absolute inset-0 rounded-full border border-brand-teal/20 animate-spin" style={{ animationDuration: '30s' }} />
                <div className="absolute inset-4 rounded-full border border-brand-gold/15 animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }} />
                {/* Geometric shape */}
                <div className="absolute inset-8 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center backdrop-blur-sm">
                  <svg viewBox="0 0 200 200" className="w-3/4 h-3/4 opacity-60" fill="none">
                    <polygon points="100,10 155,40 180,95 155,150 100,180 45,150 20,95 45,40" stroke="var(--color-brand-teal)" strokeWidth="1.5" fill="none" />
                    <polygon points="100,35 140,58 158,100 140,142 100,165 60,142 42,100 60,58" stroke="var(--color-brand-gold)" strokeWidth="1" fill="none" />
                    <polygon points="100,65 122,80 130,105 122,130 100,145 78,130 70,105 78,80" stroke="var(--color-brand-teal)" strokeWidth="0.8" fill="rgba(0,35,222,0.1)" />
                    <circle cx="100" cy="100" r="18" stroke="var(--color-brand-gold)" strokeWidth="1.5" fill="rgba(201,168,76,0.1)" />
                    <circle cx="100" cy="100" r="5" fill="var(--color-brand-gold)" />
                  </svg>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.8 }}
        className="relative border-t border-white/10 bg-black/20 backdrop-blur-sm"
      >
        <div className="container-narrow py-6">
          <div className="flex flex-wrap justify-center md:justify-between gap-8">
            {stats.map((stat, i) => (
              <div key={i} className={`text-center ${i > 0 ? 'md:border-l md:border-white/15 md:pl-8' : ''}`}>
                <div className="font-playfair font-bold text-3xl sm:text-4xl text-brand-gold">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-gray-400 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400 text-xs"
      >
        <span>{t('scrollDown')}</span>
        <ChevronDown className="w-4 h-4 animate-bounce-slow" />
      </motion.div>
    </section>
  )
}
