'use client'

import { use } from 'react'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { GraduationCap, BookOpen, HeartHandshake, ShieldAlert, Globe, ArrowRight } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ActivitiesPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const activitiesList = [
    {
      icon: GraduationCap,
      title: locale === 'ar' ? 'التعليم والتدريب' : 'Eğitim Çalışmaları',
      desc: locale === 'ar'
        ? 'دورات علمية، ندوات أكاديمية، وبرامج تأهيل وتدريب الدعاة علمياً وفكرياً.'
        : 'İlmi kurslar, seminerler, akademik programlar ve davetçilerimizin entelektüel gelişimini destekleyici eğitim programları.',
      borderColor: 'border-[#1B4D4D]'
    },
    {
      icon: BookOpen,
      title: locale === 'ar' ? 'النشر والإعلام' : 'Yayıncılık & Medya',
      desc: locale === 'ar'
        ? 'إنتاج الكتب والمجلات والنشرات الرقمية وترجمتها إلى 15 لغة مختلفة لنشر الدعوة عالمياً.'
        : 'Kitap, dergi ve dijital yayıncılık faaliyetleri. Bahar Yayınları iş birliğiyle hazırlanan eserlerin 15 dilde dağıtımı.',
      borderColor: 'border-[#2D6A6A]'
    },
    {
      icon: ShieldAlert,
      title: locale === 'ar' ? 'الإرشاد والتوجيه' : 'İrşat Hizmetleri',
      desc: locale === 'ar'
        ? 'تقديم التوجيه الديني والمحاضرات العامة في كبرى الجوامع لنشر الفكر السليم والأخلاق الإسلامية.'
        : 'Cami sohbetleri, irşat faaliyetleri ve manevi danışmanlık hizmetleriyle toplumsal bilincin artırılması.',
      borderColor: 'border-[#3D8B8B]'
    },
    {
      icon: HeartHandshake,
      title: locale === 'ar' ? 'الخدمة الاجتماعية والرعاية' : 'Sosyal Hizmet & Kriz Yönetimi',
      desc: locale === 'ar'
        ? 'تشغيل المطابخ الخيرية، تقديم الإغاثة في حالات الكوارث، ورعاية الأيتام والمحتاجين.'
        : 'Aşevleri, afet yardımı ve insani yardım projeleri. Her şart altında ihtiyaç sahibi üyelerimizin ve toplumun desteklenmesi.',
      borderColor: 'border-[#1B4D4D]'
    },
    {
      icon: Globe,
      title: locale === 'ar' ? 'النشاط الدولي والبعثات' : 'Uluslararası Davet',
      desc: locale === 'ar'
        ? 'متابعة وتنسيق الأنشطة الخارجية في مناطق مختلفة مثل كوريا الجنوبية واليابان وأوروبا لبناء روابط وثيقة.'
        : 'Dünya genelinde davet faaliyetleri. Güney Kore, Japonya, Avrupa gibi stratejik bölgelerde sınır ötesi koordinasyon ve çalışmalar.',
      borderColor: 'border-[#2D6A6A]'
    }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'أنشطتنا وخدماتنا' : 'Vakıf Faaliyet Alanları'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'الأنشطة' : 'Faaliyetler'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'مجموعة من الأنشطة المتكاملة تهدف لنشر الوعي، خدمة المجتمع، وتقديم الدعم الإنساني حول العالم.'
              : 'Eğitimden yayıncılığa, irşattan sosyal yardıma kadar geniş bir yelpazede yürüttüğümüz toplumsal fayda projeleri.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activitiesList.map((act, idx) => {
            const Icon = act.icon
            return (
              <div
                key={idx}
                className={`bg-white rounded-xl p-8 border-t-4 ${act.borderColor} border-x border-b border-[#E5E2DA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between`}
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[rgba(27,77,77,0.08)] text-[#1B4D4D] flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-3">{act.title}</h3>
                  <p className="font-inter text-[#5C5C5C] text-sm leading-relaxed mb-6">{act.desc}</p>
                </div>
                
                <Link
                  href="/iletisim"
                  className="inline-flex items-center justify-between text-[#1B4D4D] font-inter font-semibold text-xs border-t border-[#E5E2DA] pt-4 hover:text-[#2D6A6A] transition-colors"
                >
                  <span>{locale === 'ar' ? 'طلب معلومات / مشاركة' : 'Bilgi Al / Katıl'}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
