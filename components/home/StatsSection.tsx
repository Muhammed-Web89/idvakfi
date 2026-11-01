'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Globe, Users, Calendar, Award, Sparkles } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'

export default function StatsSection() {
  const locale = useLocale()
  const isAR = locale === 'ar'

  const stats = [
    {
      id: 'languages',
      icon: Globe,
      target: 15,
      suffix: '+',
      title: isAR ? 'لغة حية في الدعوة' : 'Dilde Küresel Davet',
      desc: isAR
        ? 'برامج دعوية وترجمات في آسيا وأوروبا والشرق الأوسط'
        : 'İngilizce başta olmak üzere 15 dilde tebliğ ve yayın faaliyeti',
    },
    {
      id: 'board',
      icon: Users,
      target: 40,
      suffix: '+',
      title: isAR ? 'عضو في الهيئات القيادية' : 'Yönetim ve İstişare Heyeti',
      desc: isAR
        ? 'نخبة من العلماء، الأكاديميين، الحقوقيين ورجال الأعمال'
        : 'Akademisyenler, hukukçular, iş insanları ve ilim ehli kadro',
    },
    {
      id: 'congress',
      icon: Calendar,
      target: 4,
      suffix: '',
      title: isAR ? 'مؤتمرات استشارية دولية' : 'Büyük İstişare Kongresi',
      desc: isAR
        ? 'جلسات دورية لإقرار السياسات ورسم خطط العمل المشترك'
        : 'Ümmetin birliği gündemiyle icra edilen sonuç raporlu kongreler',
    },
    {
      id: 'experience',
      icon: Award,
      target: 20,
      suffix: '+',
      title: isAR ? 'عاماً من العطاء والخبرة' : 'Yıllık İlim & Hizmet Mirası',
      desc: isAR
        ? 'امتداد تاريخي راسخ يجمع بين الأصالة والمعاصرة'
        : 'Kurumsal hafıza, davetçi yetiştirme ve sivil toplum birikimi',
    },
  ]

  return (
    <section className="py-20 relative overflow-hidden bg-[#0A0E14] border-y border-white/5" dir={isAR ? 'rtl' : 'ltr'}>
      {/* Background soft ambient radial light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-[#00D4B2]/05 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            {isAR ? 'بالأرقام والوقائع' : 'Sayılarla Vakfımız'}
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#F0F6FC] tracking-tight">
            {isAR ? 'أثر ملموس في خدمة الأمة والإنسانية' : 'Sahadaki Gerçek Gücümüz ve Etki Alanımız'}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-[#94A3B8]">
            {isAR
              ? 'أرقام حقيقية تعكس ثمار الإخلاص والعمل المؤسسي المنظم.'
              : 'İstişare, ilim ve fedakarlıkla büyüyen kurumsal davet hareketimiz.'}
          </p>
        </div>

        {/* 4 Counter Grid in Glassmorphic Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 sm:p-7 relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Top Icon with Subtle Glow */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D4B2] group-hover:scale-105 group-hover:border-[#00D4B2]/40 group-hover:bg-[#00D4B2]/10 transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="w-2 h-2 rounded-full bg-[#00D4B2]/40 group-hover:bg-[#00D4B2] group-hover:shadow-[0_0_8px_#00D4B2] transition-all" />
                </div>

                {/* Counter Metric */}
                <div>
                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F0F6FC] tracking-tight mb-2">
                    <AnimatedCounter
                      target={item.target}
                      suffix={item.suffix}
                      duration={2000}
                      className="text-[#00D4B2]"
                    />
                  </div>
                  <h3 className="text-base font-semibold text-[#F0F6FC] mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#94A3B8] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
