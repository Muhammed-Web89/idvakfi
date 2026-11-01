'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, HeartHandshake, Compass, Globe, Sparkles, BookOpen } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'
import DawahGlobalIllustration from '@/components/illustrations/DawahGlobalIllustration'

export default function HeroSection() {
  const t = useTranslations('hero')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="relative min-h-[90vh] lg:min-h-[880px] flex items-center justify-center overflow-hidden bg-[#080C10] text-[#F0F6FC] pt-[100px] pb-16"
      aria-label="Karşılama Alanı"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      {/* 1. Deep Atmospheric Dark Background with Ambient Turquoise Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Core ambient radial spotlight */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle 800px at 50% 20%, rgba(0, 212, 178, 0.08) 0%, rgba(13, 17, 23, 0.8) 50%, #080C10 100%)',
          }}
        />

        {/* Top-Right Soft Turquoise Light Orb */}
        <div className="absolute -top-24 right-0 w-[600px] h-[600px] bg-[#00D4B2]/10 rounded-full blur-[160px]" />

        {/* Bottom-Left Deep Teal Aura */}
        <div className="absolute -bottom-20 -left-20 w-[550px] h-[550px] bg-[#00D4B2]/08 rounded-full blur-[170px]" />
      </div>

      {/* 2. Minimalist Subtle Islamic Geometric Watermark */}
      <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />

      {/* 3. Main Hero Content Container */}
      <div className="relative z-10 max-w-[1320px] w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Slogan, Name, Description, Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left"
          >
            {/* Top Badge: Vakfın Adı & Vizyon Rozeti */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-6 self-center lg:self-start shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#00D4B2] shadow-[0_0_8px_#00D4B2]" />
              <span className="font-inter text-xs sm:text-sm font-semibold tracking-wide text-[#00D4B2] uppercase">
                {isRTL ? 'وقف الدعوة الإسلامية الدولي' : 'Uluslararası İslami Davet Vakfı'}
              </span>
            </div>

            {/* Vurucu Slogan / H1 */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#F0F6FC] tracking-tight leading-[1.18] mb-6">
              {isRTL ? (
                <>
                  دعوة إلى العلم والحكمة <br />
                  <span className="text-[#00D4B2]">لوحدة الأمة وخير الإنسانية</span>
                </>
              ) : (
                <>
                  İlme, İrfana ve Hikmete Çağrı <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00D4B2] to-[#33DEC5]">
                    Ümmetin Birliği ve İnsanlığın Kurtuluşu İçin
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle / Description */}
            <p className="text-base sm:text-lg text-[#94A3B8] font-normal leading-[1.75] max-w-2xl mb-8 self-center lg:self-start">
              {isRTL
                ? 'مؤسسة وقفية دولية تسترشد بالقرآن والسنة، وتعمل على نشر الوعي الإسلامي، وتوثيق أواصر الأخوة، وإعداد الدعاة بـ 15 لغة حية حول العالم.'
                : 'Kur\'an ve Sünneti yegane ölçü kabul eden, 15 dilde tebliğ, ilim meclisleri, gençlik eğitim kampları ve samimi istişare kültürüyle yeryüzüne huzur ve kardeşlik taşıyan köklü davet vakfı.'}
            </p>

            {/* Action Buttons: Faaliyetlerimiz & Bağış Yap */}
            <div className="flex flex-col sm:flex-row items-center gap-4 self-center lg:self-start w-full sm:w-auto">
              {/* Primary Button: Faaliyetlerimiz */}
              <Link
                href="/faaliyetler"
                className="btn-turquoise w-full sm:w-auto group"
              >
                <span>{isRTL ? 'أنشطتنا وواجباتنا' : 'Faaliyetlerimiz'}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
              </Link>

              {/* Secondary Button: Bağış Yap / Destek Ol */}
              <a
                href="#hizli-bagis"
                className="btn-glass w-full sm:w-auto"
              >
                <HeartHandshake className="w-4 h-4 text-[#00D4B2]" />
                <span>{isRTL ? 'تبرع / ادعم الوقف' : 'Bağış Yap / Destek Ol'}</span>
              </a>
            </div>

            {/* Micro Feature Badges Under CTA */}
            <div className="grid grid-cols-3 gap-3 sm:gap-6 mt-10 pt-8 border-t border-white/10 max-w-lg self-center lg:self-start text-left">
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#00D4B2]">15+ Dil</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{isRTL ? 'ترجمة ودعوة' : 'Küresel Tebliğ'}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#F0F6FC]">40+ Heyet</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{isRTL ? 'أعضاء المؤسسين' : 'Yönetim & İstişare'}</div>
              </div>
              <div>
                <div className="text-lg sm:text-xl font-bold text-[#33DEC5]">%100</div>
                <div className="text-xs text-[#94A3B8] mt-0.5">{isRTL ? 'شفافية وأمانة' : 'Şeffaf Tüzük'}</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Custom Modern 2D Vector Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <DawahGlobalIllustration />
          </motion.div>

        </div>
      </div>
    </section>
  )
}
