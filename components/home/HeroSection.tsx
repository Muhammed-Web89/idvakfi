'use client'

import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, ChevronDown, BookOpen, GraduationCap, Globe, ShieldCheck } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="relative min-h-screen lg:min-h-[860px] flex flex-col justify-between overflow-hidden bg-[#0A2222] text-white"
      aria-label="Hero Bölümü"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* 1. Deep Islamic Petrol/Teal Atmosphere Harmonious with #1B4D4D Stats Bar */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Core Base Gradient: Deep nocturnal teal flowing through #0F2E2E */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 95% 75% at 50% -5%, #133D3D 0%, #0F2E2E 45%, #0A2222 100%)',
          }}
        />

        {/* Seamless Bottom Transition into the #1B4D4D Stats Bar below */}
        <div
          className="absolute inset-x-0 bottom-0 h-48 pointer-events-none"
          style={{
            background:
              'linear-gradient(to bottom, transparent 0%, rgba(27, 77, 77, 0.4) 50%, rgba(27, 77, 77, 0.85) 85%, #1B4D4D 100%)',
          }}
        />

        {/* Soft, Warm Candlelight Golden Ambient Glow (Top right - gentle on the eyes) */}
        <div className="absolute -top-32 right-1/12 w-[650px] h-[650px] bg-[#C8A97E]/[0.07] rounded-full blur-[160px]" />

        {/* Deep Islamic Pine / Teal Depth Glow (Left side - reinforces serenity) */}
        <div className="absolute top-1/4 -left-16 w-[600px] h-[600px] bg-[#1B4D4D]/[0.35] rounded-full blur-[150px]" />

        {/* Subtle Central Spiritual Illumination */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-[#2D6A6A]/[0.16] rounded-full blur-[160px]" />
      </div>

      {/* 2. Minimalist Islamic Geometric Pattern Blending into Background */}
      <IslamicPattern opacity={0.035} color="#D8C7B0" size={90} />

      {/* 3. Main Hero Content */}
      <div className="relative z-10 flex-1 flex items-center pt-[130px] sm:pt-[140px] pb-[70px] px-4 sm:px-8 lg:px-14 max-w-[1360px] w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center w-full">

          {/* Left Column: Mission, Typography, Call To Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">

            {/* Soft Warm Pill Tag with Gentle Gold Accent */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="inline-flex items-center gap-2.5 self-start px-4 py-1.5 rounded-full bg-white/[0.04] border border-[#C8A97E]/30 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.15)] mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A97E]/90 shadow-[0_0_6px_rgba(200,169,126,0.35)]" />
              <span className="font-inter text-[11px] sm:text-[12px] font-medium tracking-[0.14em] text-[#DFCFBA] uppercase">
                {t('tag')}
              </span>
            </motion.div>

            {/* Main H1 Title (Warm Ivory & Champagne Gradient) */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <h1 className="font-amiri text-[38px] sm:text-[48px] lg:text-[54px] font-bold leading-[1.14] tracking-tight text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
                <span className="block text-white">{t('titleLine1')}</span>
                <span className="block bg-gradient-to-r from-white via-[#F7EFE5] to-[#E5CFB3] bg-clip-text text-transparent">
                  {t('titleLine2')}
                </span>
              </h1>

              {/* Sub-Title: Foundation Name in Dignified Warm Gold */}
              <div className="mt-3 font-amiri text-[22px] sm:text-[26px] lg:text-[28px] font-normal text-[#C8A97E] leading-snug">
                <span>{t('titleLine3')}</span>
              </div>
            </motion.div>

            {/* Subtitle Description */}
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-inter text-[15px] sm:text-[17px] font-normal leading-[1.8] text-[#DCE5E0]/85 max-w-[580px] mt-6"
            >
              {t('subtitle')}
            </motion.p>

            {/* Dual Call To Actions: Warm Gold & Pastel Sage */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.36, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <Link
                href="/faaliyetler"
                className="group relative inline-flex items-center gap-2.5 bg-[#C8A97E] hover:bg-[#BFA075] text-[#081813] font-inter text-[15px] font-semibold px-7 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(200,169,126,0.22)] hover:shadow-[0_6px_25px_rgba(200,169,126,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
              >
                <span>{t('cta1')}</span>
                <ArrowRight className={`w-4 h-4 text-[#081813] transition-transform duration-200 ${isRTL ? 'group-hover:-translate-x-1 rotate-180' : 'group-hover:translate-x-1'}`} />
              </Link>

              <Link
                href="/hakkimizda"
                className="inline-flex items-center justify-center bg-white/[0.05] hover:bg-white/[0.10] text-[#E8EDE9] border border-white/20 hover:border-[#C8A97E]/40 font-inter text-[15px] font-medium px-7 py-3.5 rounded-xl backdrop-blur-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-[0_2px_12px_rgba(0,0,0,0.15)]"
              >
                {t('cta2')}
              </Link>
            </motion.div>

            {/* Micro Trust Indicators in Soft, Calm Tones */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-9 pt-6 border-t border-white/[0.08] text-[13px] text-[#A2C4C0]"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C8A97E]" />
                <span>{t('badgeMotto')}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-[#5DB5B5]" />
                <span>{t('badgeGlobal')}</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Frosted Glass Card with Serene Sacred Geometry */}
          <div className="lg:col-span-5 flex items-center justify-center relative">

            {/* Diffused Warm Backlight (Refined frosted glass refraction) */}
            <div className="absolute inset-0 -m-6 rounded-full bg-gradient-to-tr from-[#C8A97E]/[0.08] via-[#1B4D4D]/[0.3] to-transparent blur-[80px] pointer-events-none" />

            {/* Sacred Islamic Star Geometric Watermark (Gentle, Slow & Non-Distracting) */}
            <div className="absolute -inset-10 flex items-center justify-center pointer-events-none opacity-40">
              <div
                className="w-[430px] h-[430px] rounded-full border border-[#C8A97E]/15 border-dashed animate-spin-slow"
                style={{ animationDuration: '120s' }}
              />
              <div
                className="absolute w-[350px] h-[350px] rounded-full border border-[#3D8B8B]/15 animate-spin-slow"
                style={{ animationDuration: '90s', animationDirection: 'reverse' }}
              />
              {/* Sacred 8-Point Star SVG in Soft Gold */}
              <svg viewBox="0 0 200 200" className="absolute w-[390px] h-[390px] text-[#C8A97E]/12" fill="none" stroke="currentColor" strokeWidth="1.2">
                <polygon points="100,10 126,62 182,72 141,113 151,169 100,143 49,169 59,113 18,72 74,62" />
                <polygon points="100,28 121,68 165,77 133,109 141,153 100,132 59,153 67,109 35,77 79,68" stroke="currentColor" strokeOpacity="0.4" />
                <circle cx="100" cy="100" r="42" stroke="currentColor" strokeOpacity="0.5" strokeDasharray="3 3" />
                <circle cx="100" cy="100" r="10" stroke="currentColor" strokeOpacity="0.7" />
              </svg>
            </div>

            {/* The Main Frosted Glassmorphism Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative w-full max-w-[430px] rounded-3xl bg-[#092323]/80 backdrop-blur-xl border border-white/[0.12] p-6 sm:p-7 shadow-[0_20px_50px_rgba(0,0,0,0.4),inset_0_1px_0_rgba(255,255,255,0.12)] overflow-hidden"
            >
              {/* Subtle Warm Top Edge Highlight */}
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C8A97E]/45 to-transparent" />

              {/* Card Header (Clean & Institutional) */}
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/[0.08]">
                <div>
                  <h2 className="font-amiri text-[19px] sm:text-[21px] font-bold text-white leading-none">
                    {t('featuredInitiatives')}
                  </h2>
                  <span className="font-inter text-[10px] tracking-wider text-[#C8A97E]/90 uppercase font-medium mt-1.5 block">
                    {t('cardSubtitle')}
                  </span>
                </div>

                {/* Status Pill (Brand Teal, Calm & Non-Neon) */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium bg-[#1B4D4D]/35 text-[#8ED0D0] border border-[#2D6A6A]/45">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#48A5A5]" />
                  {t('cardStatus')}
                </span>
              </div>

              {/* 3 Featured Initiatives in Soft Gold, Sage, and Warm Sand */}
              <div className="space-y-3">
                {/* Item 1: İlim & İrşat (Soft Warm Gold) */}
                <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-[#C8A97E]/35 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#C8A97E]/12 border border-[#C8A97E]/25 flex items-center justify-center text-[#D4AF37] shrink-0 group-hover:scale-105 transition-transform">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-inter text-[14px] font-semibold text-white group-hover:text-[#E8D4B8] transition-colors">
                        {t('init1Title')}
                      </h3>
                      <span className="text-[11px] font-mono text-[#C8A97E]/75 font-medium">01</span>
                    </div>
                    <p className="font-inter text-[12px] text-[#D0DDD8]/75 leading-relaxed mt-0.5 line-clamp-2">
                      {t('init1Desc')}
                    </p>
                  </div>
                </div>

                {/* Item 2: Eğitim & Burs (Pastel Teal / Pine Green) */}
                <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-[#3D8B8B]/45 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#2D6A6A]/20 border border-[#2D6A6A]/35 flex items-center justify-center text-[#70CDCD] shrink-0 group-hover:scale-105 transition-transform">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-inter text-[14px] font-semibold text-white group-hover:text-[#B6D6CC] transition-colors">
                        {t('init2Title')}
                      </h3>
                      <span className="text-[11px] font-mono text-[#4EA0A0] font-medium">02</span>
                    </div>
                    <p className="font-inter text-[12px] text-[#D0DDD8]/75 leading-relaxed mt-0.5 line-clamp-2">
                      {t('init2Desc')}
                    </p>
                  </div>
                </div>

                {/* Item 3: Küresel Davet (Deep Brand Pine Teal) */}
                <div className="group relative flex items-start gap-3.5 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.07] hover:border-[#C8A97E]/35 transition-all duration-200">
                  <div className="w-10 h-10 rounded-xl bg-[#1B4D4D]/35 border border-[#3D8B8B]/35 flex items-center justify-center text-[#98D8D8] shrink-0 group-hover:scale-105 transition-transform">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <h3 className="font-inter text-[14px] font-semibold text-white group-hover:text-[#E8D4B8] transition-colors">
                        {t('init3Title')}
                      </h3>
                      <span className="text-[11px] font-mono text-[#C8A97E]/75 font-medium">03</span>
                    </div>
                    <p className="font-inter text-[12px] text-[#D0DDD8]/75 leading-relaxed mt-0.5 line-clamp-2">
                      {t('init3Desc')}
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Action link */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.08] flex items-center justify-between">
                <span className="font-inter text-[11px] text-[#A0C4BF]/80">
                  {t('foundationName')}
                </span>
                <Link
                  href="/faaliyetler"
                  className="font-inter text-[12px] font-medium text-[#C8A97E] hover:text-[#E8D4B8] flex items-center gap-1 transition-colors"
                >
                  <span>{t('viewAll')}</span>
                  <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </motion.div>

            {/* Floating Glass Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className={`hidden sm:flex absolute -top-4 ${isRTL ? '-right-3' : '-left-3'} items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0B2525]/95 border border-[#C8A97E]/35 backdrop-blur-xl shadow-[0_6px_20px_rgba(0,0,0,0.3)] text-[12px] text-[#DFCFBA] font-medium z-20 pointer-events-none`}
            >
              <span className="w-2 h-2 rounded-full bg-[#C8A97E]/90" />
              <span>{t('badgeGlobal')}</span>
            </motion.div>

          </div>

        </div>
      </div>

      {/* 4. Elegant, Tranquil Scroll Down Indicator */}
      <div className="relative z-10 mb-8 flex flex-col items-center justify-center gap-1.5 pointer-events-none">
        <span className="font-inter text-[11px] font-medium text-[#95BDB8]/75 tracking-widest uppercase">
          {t('scrollDown')}
        </span>
        <ChevronDown className="w-4 h-4 text-[#C8A97E]/80 animate-bounce" style={{ animationDuration: '2.5s' }} />
      </div>
    </section>
  )
}
