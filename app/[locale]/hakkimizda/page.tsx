'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { Compass, Shield, Users, Award, ChevronDown, CheckCircle2 } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function AboutPage({ params }: Props) {
  const { locale } = use(params)
  const t = useTranslations('about')
  const isRTL = locale === 'ar'
  
  // Accordion state
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0)

  const principles = [
    {
      icon: Compass,
      title: locale === 'ar' ? 'فلسفة الوجود' : 'Varlık Felsefesi',
      text: locale === 'ar'
        ? 'يقوم وقف الدعوة الإسلامية الدولي ببناء فلسفة وجوده على توليفة متطورة تجمع بين القيم الإسلامية العالمية وانضباط الإدارة الاستراتيجية الحديثة.'
        : 'Uluslararası İslami Davet Vakfı, varlık felsefesini evrensel İslami değerler ile modern stratejik yönetim disiplininin sofistike bir sentezi üzerine kurgulamıştır.',
      size: 'col-span-1 md:col-span-2'
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'الرسالة الأساسية والقيادة' : 'Temel Misyon ve Liderlik',
      text: locale === 'ar'
        ? 'تتمثل رسالتنا في جعل توجيه القرآن والسنة ليس مجرد مرجع روحي بل معيار أداء تشغيلي (KPI) لتحقيق وحدة الأمة واستدامة القيادة.'
        : 'Vakfın temel misyonu, ümmetin birliği ve üyelerin stratejik iş birliği hedefleri doğrultusunda, Kuran ve Sünnet rehberliğini sadece manevi bir referans değil, aynı zamanda operasyonel bir performans ölçütü (KPI) olarak konumlandırmaktır.',
      size: 'col-span-1'
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'التركيز على النظام' : 'Sistem Odaklılık',
      text: locale === 'ar'
        ? 'يقضي الوقف على مخاطر الارتباط بالأشخاص السائدة في المؤسسات التقليدية من خلال تطبيق استراتيجية "التركيز على النظام".'
        : 'Vakıf, geleneksel yapılarda sıkça görülen "kişilere bağımlılık" riskini, "sistem odaklılık" stratejisi ile bertaraf etmiştir.',
      size: 'col-span-1'
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'الهيكل المستدام' : 'Sürdürülebilir Yapı',
      text: locale === 'ar'
        ? 'بفضل مأسسة الذاكرة التنظيمية، يبني الوقف هيكلاً مستداماً قادراً على البقاء مستقلاً عن الأفراد ويحول وعي الأمة إلى انضباط جماعي.'
        : 'Kurumsal hafızanın kurumsallaşması sayesinde vakıf, bireylerin varlığından bağımsız, kendi kendini idame ettirebilen ve ümmet bilincini kolektif bir disipline dönüştüren sürdürülebilir bir yapı inşa etmiştir.',
      size: 'col-span-1 md:col-span-2'
    }
  ]

  const governance = [
    {
      title: locale === 'ar' ? 'التنمية والاستقرار' : 'İstikrar İçinde Gelişim',
      desc: locale === 'ar'
        ? 'يتبع الوقف استراتيجية إدارة ديناميكية تتجنب الركود الناجم عن الوضع الراهن، مع مراعاة مبدأ "التنمية والاستقرار" في صنع القرار.'
        : 'Vakıf, kurumsal karar alma süreçlerinde "istikrar içinde gelişim" prensibini gözeterek, statükonun getirdiği ataletten kaçınan dinamik bir yönetişim stratejisi izlemektedir.'
    },
    {
      title: locale === 'ar' ? 'آلية الاستشارة (الشورى)' : 'İstişare Mekanizması',
      desc: locale === 'ar'
        ? 'تمثل الاستشارة جوهر هذه الاستراتيجية كمرشح للعقل الجماعي، وهي البروتوكول الأساسي لنموذج الحوكمة المرن.'
        : 'Bu stratejinin kalbinde, bir "Kolektif Akıl Filtresi" olarak işlev gören istişare mekanizması yer almaktadır. "İstişare", vakıf için yalnızca bir danışma süreci değil, "Çevik Yönetişim" anlayışının temel protokolüdür.'
    },
    {
      title: locale === 'ar' ? 'حرية الفكر والتحسين المستمر' : 'Fikir Hürriyeti ve Kaizen',
      desc: locale === 'ar'
        ? 'يضمن الوقف حرية الفكر لمنع الوقوع في فخ التفكير الجماعي، محولاً الأفكار الفردية إلى قيمة مؤسسية مضافة وفلسفة تحسين مستمر.'
        : 'Fikir hürriyetinin kurumsal bir güvence altına alınması, üyelerin düşünsel gelişimini destekleyerek statükoyu reddeder ve "Sürekli İyileştirme" (Kaizen) felsefesini organizasyonun genetiğine işler.'
    },
    {
      title: locale === 'ar' ? 'بناء مجتمع نوعي ومبدئي' : 'İlkeli Topluluk Hedefi',
      desc: locale === 'ar'
        ? 'الهدف من هذا العمق الفكري والنضج المنهجي هو بناء مجتمع نوعي ومبدئي يحدد جودة شبكة العلاقات الاستراتيجية مع العالم الخارجي.'
        : 'Kaliteli ve ilkeli bir topluluk oluşturma hedefi, bu entelektüel hürriyet ve değişim vizyonuyla mümkün kılınmakta; dış dünyadaki paydaşlarla kurulan stratejik ağın niteliğini belirlemektedir.'
    }
  ]

  const memberTraits = [
    {
      category: locale === 'ar' ? 'السمات الأخلاقية والروحية' : 'Ahlaki ve Manevi Vasıflar',
      items: locale === 'ar' ? [
        'الالتزام التام بالفرائض واجتناب الكبائر (كالربا والرشوة وسوء الخلق)',
        'الصدق والأمانة والإخلاص في القول والعمل والسر والعلن',
        'التحلي بروح الأخوة الإيمانية والتسامح وتجنب الجدال والخصومة',
        'الحفاظ على السرية وحماية خصوصية الدعاة والكوادر الميدانية'
      ] : [
        'Farzlara tam riayet etmek ve büyük günahlardan (faiz, rüşvet, ahlaki zaaflar) kesinlikle uzak durmak.',
        'Sözünde ve işinde sıdk, emanet ve ihlas üzere hareket etmek.',
        'Kardeşlik hukukunu gözetmek, gıybet ve münakaşadan kaçınarak hüsn-ü zannı esas almak.',
        'Vakfın kurumsal mahremiyetine ve davet kadrolarının bilgilerine sadakatle riayet etmek.'
      ]
    },
    {
      category: locale === 'ar' ? 'الكفاءة والمسؤولية التنظيمية' : 'Liyakat ve Teşkilat Bilinci',
      items: locale === 'ar' ? [
        'امتلاك ثقافة العمل المؤسسي والانضباط ضمن الهيكل التنظيمي للوقف',
        'المشاركة الفعالة في جلسات الاستشارة وتقديم الرأي الصادق دون تردد',
        'الاستعداد للتعلم المستمر واكتساب المهارات الحديثة واللغات الحية',
        'الالتزام بواجبات التكليف والمسؤوليات الميدانية الموكلة بدقة'
      ] : [
        'Kurumsal aidiyet şuuruna sahip olmak ve hiyerarşik intizama riayet etmek.',
        'İstişare süreçlerine aktif katılmak ve yapıcı eleştirileri dürüstçe sunmak.',
        'Sürekli öğrenmeye açık olmak, yabancı dil ve modern iletişim araçlarını davet gayesiyle öğrenmek.',
        'Üzerine aldığı vazife ve sorumlulukları zamanında ve mükemmeliyet anlayışıyla yerine getirmek.'
      ]
    },
    {
      category: locale === 'ar' ? 'الوعي الاجتماعي والعمل التطوعي' : 'Sosyal Sorumluluk ve Dayanışma',
      items: locale === 'ar' ? [
        'الاستعداد لخدمة الأمة وبذل الجهد والمال في مشاريع الدعوة والإغاثة',
        'دعم ومساندة الإخوة في الوقف وقت الأزمات والشدائد ضمن نظام التكافل',
        'بناء جسور التواصل الإيجابي مع فئات المجتمع المختلفة والشباب',
        'التحلي بروح المبادرة والإيجابية في مواجهة التحديات المعاصرة'
      ] : [
        'Ümmetin dertleriyle dertlenmek, fedakarlık ve infak ahlakını canlı tutmak.',
        'İçsel dayanışma ve sigorta sistemi çerçevesinde ihtiyaç sahibi üyelere sahip çıkmak.',
        'Gençlerle ve toplumun farklı kesimleriyle yapıcı, kucaklayıcı diyaloglar geliştirmek.',
        'Zorluklar karşısında atalete düşmeyip daima çözüm ve proje odaklı olmak.'
      ]
    }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[#3D8B8B] font-inter font-semibold uppercase tracking-widest text-xs block mb-3"
          >
            {locale === 'ar' ? 'رؤيتنا الاستراتيجية' : 'Stratejik Vizyonumuz'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            {locale === 'ar' ? 'من نحن' : 'Hakkımızda'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            {locale === 'ar'
              ? 'مؤسسة مجتمع مدني راسخة تُرشد الإنسانية من خلال أنشطة العلم والإرشاد والدعوة في سبيل الحق، وتعمل وفق رؤية إسلامية معاصرة.'
              : 'Hakikat yolunda ilim, irşat ve davet faaliyetleriyle insanlığa rehberlik eden, 1952\'den bu yana Asya coğrafyasında kök salmış ve geleneksel değerleri çağdaş yönetişim modelleriyle birleştiren köklü bir sivil toplum kuruluşu.'}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Temel İlkeler */}
      <section className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            tag={locale === 'ar' ? 'المبادئ الأساسية' : 'Temel İlkelerimiz'}
            title={locale === 'ar' ? 'مؤسسة راسخة في طريق الدعوة' : 'Kurumsal Hafızanın Kurumsallaşması'}
            align="center"
            className="mb-16"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {principles.map((pr, idx) => {
              const Icon = pr.icon
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`border border-[#E5E2DA] rounded-xl p-8 bg-white hover:shadow-md transition-all duration-200 flex flex-col justify-between ${pr.size}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[rgba(27,77,77,0.08)] flex items-center justify-center mb-6 text-[#1B4D4D]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-4">{pr.title}</h3>
                    <p className="font-inter text-[#5C5C5C] text-sm leading-relaxed mb-6">{pr.text}</p>
                  </div>
                  <div className="h-1 w-12 bg-[#1B4D4D] rounded-full" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Yönetişim Modeli */}
      <section className="py-20 bg-[#0F2E2E] text-white relative overflow-hidden">
        <IslamicPattern opacity={0.03} color="white" size={120} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs">
              {locale === 'ar' ? 'الشورى والعمل الجماعي' : 'Yönetişim & Kolektif Akıl'}
            </span>
            <h2 className="font-amiri font-bold text-3xl sm:text-4xl mt-2 text-white">
              {locale === 'ar' ? 'نموذج الحوكمة المرن' : 'Çevik Yönetişim ve Kolektif Akıl'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governance.map((gov, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 rounded-xl p-8 hover:bg-white/10 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white font-amiri font-bold flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-amiri font-bold text-xl text-white mb-2">{gov.title}</h3>
                    <p className="font-inter text-white/70 text-sm leading-relaxed">{gov.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Üye Vasıfları Accordion */}
      <section className="py-20 bg-[#F7F5F0] relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="font-inter text-[#2D6A6A] font-semibold uppercase tracking-widest text-xs">
              {locale === 'ar' ? 'خصائص الأعضاء' : 'Kurumsal Kültür & Değerler'}
            </span>
            <h2 className="font-amiri font-bold text-3xl sm:text-4xl mt-2 text-[#1A1A1A]">
              {locale === 'ar' ? 'صفات ومعايير أعضاء الوقف' : 'İSDAV Üyelerinin Vasıfları'}
            </h2>
          </div>

          <div className="space-y-4">
            {memberTraits.map((category, idx) => {
              const isOpen = activeAccordion === idx
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E2DA] rounded-xl overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between font-amiri font-bold text-xl text-[#1A1A1A] hover:bg-[#F7F5F0] transition-colors"
                  >
                    <span>{category.category}</span>
                    <ChevronDown className={`w-5 h-5 text-[#1B4D4D] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="p-6 pt-0 border-t border-[#E5E2DA] mt-2">
                      <ul className="space-y-3 pt-4">
                        {category.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3 text-sm text-[#5C5C5C] font-inter">
                            <CheckCircle2 className="w-4 h-4 text-[#1B4D4D] flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
