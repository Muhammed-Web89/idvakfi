'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { BookOpen, Shield, Users, Award, Zap, Compass, CheckCircle2, ChevronDown, HelpCircle, Heart } from 'lucide-react'
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
      color: 'bg-brand-teal/10 text-brand-teal border-brand-teal/30',
      size: 'col-span-1 md:col-span-2'
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'الرسالة الأساسية والقيادة' : 'Temel Misyon ve Liderlik',
      text: locale === 'ar'
        ? 'تتمثل رسالتنا في جعل توجيه القرآن والسنة ليس مجرد مرجع روحي بل معيار أداء تشغيلي (KPI) لتحقيق وحدة الأمة واستدامة القيادة.'
        : 'Vakfın temel misyonu, ümmetin birliği ve üyelerin stratejik iş birliği hedefleri doğrultusunda, Kuran ve Sünnet rehberliğini sadece manevi bir referans değil, aynı zamanda operasyonel bir performans ölçütü (KPI) olarak konumlandırmaktır.',
      color: 'bg-brand-gold/10 text-brand-goldDark border-brand-gold/30',
      size: 'col-span-1'
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'التركيز على النظام' : 'Sistem Odaklılık',
      text: locale === 'ar'
        ? 'يقضي الوقف على مخاطر الارتباط بالأشخاص السائدة في المؤسسات التقليدية من خلال تطبيق استراتيجية "التركيز على النظام".'
        : 'Vakıf, geleneksel yapılarda sıkça görülen "kişilere bağımlılık" riskini, "sistem odaklılık" stratejisi ile bertaraf etmiştir.',
      color: 'bg-brand-navy/5 text-brand-navy border-brand-navy/10',
      size: 'col-span-1'
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'الهيكل المستدام' : 'Sürdürülebilir Yapı',
      text: locale === 'ar'
        ? 'بفضل مأسسة الذاكرة التنظيمية، يبني الوقف هيكلاً مستداماً قادراً على البقاء مستقلاً عن الأفراد ويحول وعي الأمة إلى انضباط جماعي.'
        : 'Kurumsal hafızanın kurumsallaşması sayesinde vakıf, bireylerin varlığından bağımsız, kendi kendini idame ettirebilen ve ümmet bilincini kolektif bir disipline dönüştüren sürdürülebilir bir yapı inşa etmiştir.',
      color: 'bg-brand-teal/10 text-brand-teal border-brand-teal/30',
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
        ? 'تقع آلية الاستشارة في قلب هذه الاستراتيجية كـ "فلتر للعقل الجماعي". الاستشارة بالنسبة للوقف هي البروتوكول الأساسي للإدارة المرنة (Agile).'
        : 'Bu stratejinin kalbinde, bir "Kolektif Akıl Filtresi" olarak işlev gören istişare mekanizması yer almaktadır. "İstişare", vakıf için yalnızca bir danışma süreci değil, "Agile (Çevik) Yönetişim" anlayışının temel protokolüdür.'
    },
    {
      title: locale === 'ar' ? 'حرية الفكر والكايزن' : 'Fikir Hürriyeti ve Kaizen',
      desc: locale === 'ar'
        ? 'إن ضمان حرية الفكر يحمي الأعضاء من فخ "التفكير الجماعي الموحد". ويدمج فلسفة التحسين المستمر (كايزن) في الحمض النووي للمنظمة.'
        : 'Fikir hürriyetinin kurumsal bir güvence altına alınması, üyelerin düşünsel gelişimini ve değişimini destekleyerek "Groupthink" (Grup Düşüncesi) tuzağına düşülmesini engellemektedir. Sürekli İyileştirme (Kaizen) felsefesini organizasyonun genetiğine işler.'
    },
    {
      title: locale === 'ar' ? 'هدف المجتمع المثالي' : 'Topluluk Hedefi',
      desc: locale === 'ar'
        ? 'يهدف الوقف لبناء مجتمع عالي الجودة والمبادئ بفضل رؤية التغيير والحرية الفكرية هذه، مما يحدد ملامح شبكتنا الاستراتيجية الخارجية.'
        : 'Kaliteli ve ilkeli bir topluluk oluşturma hedefi, bu entelektüel hürriyet ve değişim vizyonuyla mümkün kılınmaktadır. Dış dünyadaki paydaşlarla kurulan stratejik ağın niteliğini de bu belirler.'
    }
  ]

  const characteristics = [
    {
      icon: Heart,
      title: locale === 'ar' ? 'الهوية المعنوية المتميزة (المؤمن)' : 'Manevi Marka Kimliği (Mü\'min)',
      content: locale === 'ar'
        ? 'الصفة الأساسية لعضو إيسداف هي صفة "المؤمن". هذا الالتزام الوثيق لا يمثل واجباً دينياً فحسب، بل يبني "رأس مال الثقة" لدى المجتمع، حيث يمثل سلوك العضو اليومي دليلاً ملموساً على قيم الوقف.'
        : 'İSDAV üyeliğinin temel taşı "Mü\'min" vasfıdır. Bu vasıf, kurumsal literatürde üyenin "Kurumsal Marka Kimliği" olarak konumlandırılır. İslam\'ın ve imanın şartlarına olan bağlılık, toplum nezdinde "Güven Sermayesi" inşa eder. Üyenin yaşantısıyla sergilediği örneklik, değerler sisteminin sahadaki somut kanıtıdır.'
    },
    {
      icon: BookOpen,
      title: locale === 'ar' ? 'انضباط الإدارة والالتزام بالشورى' : 'Yönetişim Disiplini (İstişare ve Sadakat)',
      content: locale === 'ar'
        ? 'تُدار كافة الأعمال بالشورى كرافعة إدارية تضمن عقلانية القرارات وتبنيها من الجميع. كما أن الالتزام الكامل باللوائح الداخلية يضمن الحفاظ على النظام العام ويمنع التشتت التنظيمي.'
        : 'Vakıf bünyesindeki tüm işlerin "istişare" yoluyla yürütülmesi, profesyonel yönetim anlayışının İslami prensiplerle optimize edildiğini gösterir. İstişare kararların rasyonelliğini ve sahiplenilmesini sağlar. Vakfın iç tüzüğüne bağlılık taahhüdü ise kurumsal disiplinin temelidir.'
    },
    {
      icon: Zap,
      title: locale === 'ar' ? 'المرونة الفكرية والابتكار' : 'Entelektüel Çeviklik (Gelenek ve İnovasyon)',
      content: locale === 'ar'
        ? 'يرى الوقف حرية الفكر حقاً أساسياً. التحدي الحقيقي يكمن في الحفاظ على التوازن بين تعلم الدين وعيشه (التراث) والتفكير الابتكاري (الإبداع) للتعبير عن الحقائق الأبدية بلغة العصر.'
        : 'İSDAV, fikir hürriyetini her üye için temel bir hak ve kurumsal bir zenginlik olarak görür. Burada kritik olan, "dinini öğrenme ve yaşama" ilkesi (gelenek) ile "yenilikçi düşünce" (inovasyon) arasındaki hassas dengedir. Yenilikçi düşünce, ebedi hakikatlerin modern zamanın diliyle yeniden ifade edilmesini sağlar.'
    },
    {
      icon: Users,
      title: locale === 'ar' ? 'إدارة رأس المال الاجتماعي (الأخوة والدعوة)' : 'Sosyal Sermaye Yönetimi (Kardeşlik ve Davet)',
      content: locale === 'ar'
        ? 'يمثل ترابط الإخوة في الوقف نظام مناعة داخلياً ينتج تضامناً عالياً. أما خارجياً، فيتم التعامل مع "الدعوة" كاستراتيجية نمو وتوسع في السوق لضم أفراد جدد بشكل عضوي قائم على الثقة.'
        : 'Vakıf içindeki kardeşlik bağı, kurumsal bir iç bağışıklık sistemi işlevi görerek yüksek düzeyde dayanışma üretir. Dış dünyaya yönelik iletişimde ise "Davet" kavramı, kurumsal bir "Pazar Genişletme ve Erişim" (Market Growth/Outreach) stratejisi gibi ele alınır.'
    },
    {
      icon: Shield,
      title: locale === 'ar' ? 'حماية المناخ التنظيمي والالتزام الأخلاقي' : 'Kurumsal Etik ve Uyum (Sıfır Sürtünme)',
      content: locale === 'ar'
        ? 'يجب على الأعضاء تجنب الفتنة والجدل والغيبة تماماً. هذه السلوكيات السلبية تسمى "الاحتكاك التنظيمي" الذي يقلل الولاء ويهدر الطاقات. الوحدة والانسجام هما مفتاح إنتاج الطاقات المشتركة.'
        : 'İSDAV üyelerinin fitne, yalan, münakaşa ve gıybet gibi eylemlerden kesinlikle kaçınması gerekir. Bu negatif davranışlar, "Kurumsal Sürtünme" (Organizational Friction) olarak tanımlanır ve verimliliği baltalar. Uyumlu olma becerisi enerjinin asli projelere harcanmasını sağlar.'
    },
    {
      icon: Award,
      title: locale === 'ar' ? 'التميز التشغيلي والتكنولوجيا' : 'Operasyonel Mükemmeliyet (Plan ve Teknoloji)',
      content: locale === 'ar'
        ? 'يتم اتباع نهج قائم على التخطيط، تطوير المشاريع والإنتاجية بدلاً من النجاحات المصادفة. استخدام التكنولوجيا الحديثة يمثل أداة انتشار وربط مع الجيل الرقمي الجديد.'
        : 'Vakıf çalışmalarında planlama, proje geliştirme ve üretkenlik esaslı yaklaşım, veri ve süreç odaklı çalışmayı temsil eder. Teknolojik gelişmelerin etkin kullanımı, özellikle "Dijital Nesil" ile kurulacak bağın anahtarı ve küresel ölçekte davet aracıdır.'
    }
  ]

  return (
    <div className="bg-brand-cream min-h-screen" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <motion.span
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-brand-gold font-semibold uppercase tracking-widest text-sm block mb-3"
          >
            {locale === 'ar' ? 'رؤيتنا الاستراتيجية' : 'Stratejik Vizyonumuz'}
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6"
          >
            {locale === 'ar' ? 'من نحن' : 'Hakkımızda'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed"
          >
            {locale === 'ar'
              ? 'مؤسسة مجتمع مدني راسخة تُرشد الإنسانية من خلال أنشطة العلم والإرشاد والدعوة في سبيل الحق، وتعمل وفق رؤية إسلامية معاصرة.'
              : 'Hakikat yolunda ilim, irşat ve davet faaliyetleriyle insanlığa rehberlik eden, geleneksel değerleri çağdaş yönetişim modelleriyle birleştiren köklü bir sivil toplum kuruluşu.'}
          </motion.p>
        </div>
      </section>

      {/* Section 1: Temel İlkeler Bento Grid */}
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
                  className={`border border-brand-teal/15 rounded-3xl p-8 backdrop-blur-md bg-white hover:shadow-xl transition-all duration-300 group flex flex-col justify-between ${pr.size}`}
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-brand-tealLight flex items-center justify-center mb-6 text-brand-teal group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-playfair font-bold text-xl text-brand-navy mb-4">{pr.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6">{pr.text}</p>
                  </div>
                  <div className="h-1 w-12 bg-brand-gold rounded-full" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Section 2: Yönetişim Modeli (Glassmorphism Cards on Dark) */}
      <section className="py-20 bg-brand-navy text-white relative overflow-hidden">
        <IslamicPattern opacity={0.03} color="white" size={120} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">
              {locale === 'ar' ? 'الشورى والعمل الجماعي' : 'Yönetişim & Kolektif Akıl'}
            </span>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl mt-2 text-white">
              {locale === 'ar' ? 'نموذج الحوكمة المرن' : 'Çevik Yönetişim ve Kolektif Akıl'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {governance.map((gov, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/5 border border-white/10 backdrop-blur-lg rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-playfair font-bold flex-shrink-0 mt-1">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-playfair font-semibold text-lg text-brand-gold mb-3">{gov.title}</h3>
                    <p className="text-gray-300 text-sm leading-relaxed">{gov.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Üye Vasıfları Accordion */}
      <section className="py-20 bg-brand-cream relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-brand-teal font-semibold uppercase tracking-widest text-xs">
              {locale === 'ar' ? 'خصائص الأعضاء' : 'Kurumsal Kültür & Değerler'}
            </span>
            <h2 className="font-playfair font-bold text-3xl sm:text-4xl mt-2 text-brand-navy">
              {locale === 'ar' ? 'السمات الأخلاقية والمؤسسية للأعضاء' : 'İSDAV Üyelerinin Kurumsal ve Ahlaki Vasıfları'}
            </h2>
          </div>

          <div className="space-y-4">
            {characteristics.map((item, idx) => {
              const Icon = item.icon
              const isOpen = activeAccordion === idx

              return (
                <div
                  key={idx}
                  className="bg-white border border-brand-teal/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <button
                    onClick={() => setActiveAccordion(isOpen ? null : idx)}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                    dir={isRTL ? 'rtl' : 'ltr'}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2.5 rounded-xl ${isOpen ? 'bg-brand-teal text-white' : 'bg-brand-tealLight text-brand-teal'} transition-colors duration-300`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className={`font-playfair font-bold text-base sm:text-lg ${isOpen ? 'text-brand-teal' : 'text-brand-navy'} transition-colors duration-300`}>
                        {item.title}
                      </span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-brand-teal' : ''}`} />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? 'auto' : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-6 pt-0 border-t border-gray-100 text-gray-600 text-sm leading-relaxed" dir={isRTL ? 'rtl' : 'ltr'}>
                      {item.content}
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
