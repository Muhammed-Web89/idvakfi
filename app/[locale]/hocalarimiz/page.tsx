'use client'

import { use } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { GraduationCap, ArrowRight } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ScholarsPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const scholarsList = [
    { name: 'Prof. Dr. Orhan Çeker', role: locale === 'ar' ? 'أستاذ الفقه والشريعة الإسلامية' : 'İslam Hukuku Profesörü & Akademik Danışman' },
    { name: 'Prof. Dr. Saim Ayaz', role: locale === 'ar' ? 'أستاذ العقيدة واللغة' : 'Akademisyen & Fikri Danışma Kurulu Üyesi' },
    { name: 'Prof. Dr. Musa Kazım', role: locale === 'ar' ? 'عضو الهيئة الأكاديمية' : 'Akademisyen & Danışma Kurulu Üyesi' },
    { name: 'Doç. Dr. Abdulkadir Turan', role: locale === 'ar' ? 'باحث ومؤلف إسلامي' : 'Akademisyen / Araştırmacı Yazar' },
    { name: 'Ahmet Bulut', role: locale === 'ar' ? 'رئيس منصة الصلاة' : 'Medya ve Tebliğ Sorumlusu (Namaz Platformu Başkanı)' },
    { name: 'Veli Kamiloğlu', role: locale === 'ar' ? 'ممثل الوقف الدولي' : 'Uluslararası Temsilci (Güney Kore / Finlandiya)' }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'علماؤنا وباحثونا' : 'Fikri Öncülerimiz ve Yazarlarımız'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'العلماء' : 'Hocalarımız'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
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
              className="bg-white rounded-xl p-8 border border-[#E5E2DA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-14 h-14 rounded-xl bg-[rgba(27,77,77,0.08)] text-[#1B4D4D] flex items-center justify-center mb-6">
                  <GraduationCap className="w-7 h-7" />
                </div>
                
                <h3 className="font-amiri font-bold text-xl text-[#1A1A1A] mb-2">{sch.name}</h3>
                <p className="font-inter text-[#5C5C5C] text-xs font-medium mb-6 leading-relaxed">{sch.role}</p>
              </div>

              <Link
                href="/makaleler"
                className="inline-flex items-center justify-between text-[#1B4D4D] font-inter font-semibold text-xs border-t border-[#E5E2DA] pt-4 hover:text-[#2D6A6A] transition-colors"
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
