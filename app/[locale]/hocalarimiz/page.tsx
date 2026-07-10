'use client'

import { use } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { User, Book, GraduationCap, ArrowRight } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ScholarsPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const scholarsList = [
    { name: 'Prof. Orhan Çeker', role: locale === 'ar' ? 'أستاذ الفقه والشريعة الإسلامية' : 'İslam Hukuku Profesörü & Akademik Danışman' },
    { name: 'Prof. Saim Ayaz', role: locale === 'ar' ? 'أستاذ العقيدة واللغة' : 'Akademisyen & Fikri Danışma Kurulu Üyesi' },
    { name: 'Prof. Dr. Musa Kazım', role: locale === 'ar' ? 'عضو الهيئة الأكاديمية' : 'Akademisyen & Danışma Kurulu Üyesi' },
    { name: 'Doç. Abdulkadir Turan', role: locale === 'ar' ? 'باحث ومؤلف إسلامي' : 'Akademisyen / Araştırmacı Yazar' },
    { name: 'Ahmet Bulut', role: locale === 'ar' ? 'رئيس منصة الصلاة' : 'Medya ve Tebliğ Sorumlusu (Namaz Platformu Başkanı)' },
    { name: 'Veli Kamiloğlu', role: locale === 'ar' ? 'ممثل الوقف الدولي' : 'Uluslararası Temsilci (Güney Kore / Finlandiya)' }
  ]

  return (
    <div className="bg-brand-cream min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm block mb-3">
            {locale === 'ar' ? 'علماؤنا وباحثونا' : 'Fikri Öncülerimiz ve Yazarlarımız'}
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'العلماء' : 'Hocalarımız'}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'مجموعة من الأكاديميين والمربين الذين يشرفون على توجيه مناهجنا التعليمية والدعوية.'
              : 'Vakfımızın eğitim ve davet faaliyetlerine ilmi birikimleriyle rehberlik eden, alanında uzman hocalarımız ve araştırmacılarımız.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {scholarsList.map((sch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-brand-teal/5 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-2xl bg-brand-tealLight text-brand-teal flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7" />
                </div>
                
                <h3 className="font-playfair font-bold text-lg text-brand-navy mb-2">{sch.name}</h3>
                <p className="text-gray-500 text-xs font-medium mb-6 leading-relaxed">{sch.role}</p>
              </div>

              <Link
                href="/makaleler"
                className="inline-flex items-center justify-between text-brand-teal font-semibold text-xs border-t border-gray-50 pt-4 hover:text-brand-tealDark transition-colors"
              >
                <span>{locale === 'ar' ? 'عرض المقالات والأبحاث' : 'Yazılarını & Raporlarını Gör'}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
