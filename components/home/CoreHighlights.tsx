'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Target, Shield, Compass, ArrowRight, BookOpen, Heart } from 'lucide-react'
import { Link } from '@/i18n/routing'

export default function CoreHighlights() {
  const locale = useLocale()
  const isAR = locale === 'ar'

  const highlights = [
    {
      id: 'purpose',
      icon: Target,
      tag: isAR ? 'الرؤية والهدف' : 'Vakfımızın Amacı',
      title: isAR ? 'هدفنا الأسمى' : 'Amacımız',
      summary: isAR
        ? 'الاهتمام بوحدة الأمة وتكاتف أبنائها وتنسيق طاقاتهم، واعتماد القرآن والسنة مقياساً أوحد لكافة الأعمال. بناء مؤسسة قائمة على المحبة والمشورة الصادقة دون الارتهان للأشخاص.'
        : 'Ümmetin birliğini, milletin beraberliğini ve üyelerinin güç birliğini önemser. Kur\'an ve Sünneti yegane ölçü kabul eder; kişilere bağlı kalmaksızın sevgi merkezli, ilkeli ve istişareye dayalı kurumsal bir sistem kurar.',
      link: '/hakkimizda#amacimiz',
      accentColor: 'from-[#00D4B2]/20 to-transparent',
    },
    {
      id: 'principles',
      icon: Shield,
      tag: isAR ? 'المبادئ والقيم' : 'Değişmez İlkeler',
      title: isAR ? 'مبادئنا الراسخة' : 'İlkelerimiz',
      summary: isAR
        ? 'البراءة التامة من النعرات الحزبية والعرقية والغيبة والشقاق. صيانة الدين والوطن واعتبارهما قيمة عليا جامعة، والالتزام بالسعي الدائم لضم كفاءات مخلصة لنصرة الدعوة.'
        : 'Kimseye karşı grupçuluk, ayrımcılık, ırkçılık, tefrika veya gıybet yapmaz. Dinine, vatanına ve milletine sahip çıkarak bunu ortak değer kabul eder; üyeleri daveti bir hayat tarzı olarak benimser.',
      link: '/hakkimizda#ilkelerimiz',
      accentColor: 'from-[#33DEC5]/20 to-transparent',
    },
    {
      id: 'duties',
      icon: Compass,
      tag: isAR ? 'الأنشطة والواجبات' : 'Saha Çalışmaları',
      title: isAR ? 'أنشطتنا وواجباتنا' : 'Faaliyetlerimiz',
      summary: isAR
        ? 'نشر الوعي بـ 15 لغة حية، إقامة معسكرات التربية للشباب، تعزيز الأخوة الصادقة في المناسبات، ونشر المطبوعات والكتب، وترسيخ أمانة الكسب الحلال والتعاون المؤسسي.'
        : 'Dünya çapında 15 dilde davet ve tebliğ, ilim halkaları, gençlik eğitim kampları, kitap yayıncılığı, helal lokma bilinci ve kardeş kuruluşlarla koordineli küresel hizmet seferberliği.',
      link: '/faaliyetler',
      accentColor: 'from-[#00D4B2]/20 to-transparent',
    },
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-[#080C10]" dir={isAR ? 'rtl' : 'ltr'}>
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-3">
            <Compass className="w-3.5 h-3.5" />
            {isAR ? 'الركائز الثلاث' : 'Öne Çıkanlar'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight">
            {isAR ? 'ثوابت الوقف ومحاور الانطلاق' : 'Vakfımızın Temel Dayanakları'}
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] leading-relaxed">
            {isAR
              ? 'نظام مؤسسي متكامل يجمع بين وضوح الهدف، وأصالة المبدأ، وجدية العمل في الميدان.'
              : 'Amacımız, ilkelerimiz ve faaliyetlerimizle hem kurumsal hafızayı hem de gönülleri inşa ediyoruz.'}
          </p>
        </div>

        {/* 3'lü Glassmorphism Kart Yapısı */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {highlights.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-8 flex flex-col justify-between relative group hover:border-[#00D4B2]/40 overflow-hidden"
              >
                {/* Ambient Top Corner Light */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${item.accentColor} rounded-bl-full pointer-events-none group-hover:scale-125 transition-transform duration-500`} />

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D4B2] group-hover:bg-[#00D4B2]/15 group-hover:border-[#00D4B2]/40 transition-all duration-300">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-[#94A3B8] uppercase px-3 py-1 rounded-full bg-white/[0.03] border border-white/5">
                      {item.tag}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F0F6FC] mb-4 group-hover:text-[#00D4B2] transition-colors">
                    {item.title}
                  </h3>

                  {/* 2-3 Sentences Summary */}
                  <p className="text-sm text-[#94A3B8] leading-[1.8] mb-8 font-normal">
                    {item.summary}
                  </p>
                </div>

                {/* "Detaylı Bilgi" Button */}
                <Link
                  href={item.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#00D4B2] group-hover:text-[#33DEC5] pt-4 border-t border-white/5 transition-colors self-start"
                >
                  <span>{isAR ? 'معرفة المزيد بالتفصيل' : 'Detaylı Bilgi'}</span>
                  <ArrowRight className={`w-4 h-4 transition-transform duration-200 ${isAR ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`} />
                </Link>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
