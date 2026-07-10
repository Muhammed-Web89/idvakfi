'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Landmark, Copy, Check, FileText, Settings, Users, Activity, Share2, Shield, Calendar, ArrowRight } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function CorporatePage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'
  
  const [copied, setCopied] = useState(false)
  const iban = 'TR77 0001 5001 5800 7324 3307 19'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const partners = [
    {
      category: locale === 'ar' ? 'منظمات المجتمع المدني ومراكز الفكر' : 'Sivil Toplum & Düşünce Kuruluşları',
      items: [
        {
          name: locale === 'ar' ? 'جمعية أسيليار لسادة الأناضول' : 'Asilyar Anadolu Seyyidleri Derneği',
          role: locale === 'ar' ? 'رأس المال الاجتماعي والثقافي' : 'Sosyal ve kültürel sermaye'
        },
        {
          name: locale === 'ar' ? 'جمعية إسطنبول للفكر الاستراتيجي' : 'İstanbul Stratejik Düşünce Derneği',
          role: locale === 'ar' ? 'التخطيط الفكري والاستراتيجي' : 'Entelektüel ve stratejik planlama'
        }
      ]
    },
    {
      category: locale === 'ar' ? 'الشركات التجارية والشركاء التقنيين' : 'Ticari ve Teknik İştirakler',
      items: [
        {
          name: 'Osmanlı Mimari İnşaat A.Ş',
          role: locale === 'ar' ? 'تشييد المباني التعليمية ومراكز الوقف والقدرات التقنية' : 'Vakıf merkezleri ve eğitim alanlarının inşası için teknik kapasite'
        },
        {
          name: 'Bortek Mekanik Mühendislik',
          role: locale === 'ar' ? 'التجهيزات الميكانيكية واستدامة البنية التحتية الهندسية للمشاريع' : 'Mühendislik altyapısının ve teknik donanımın sürdürülebilirliği'
        },
        {
          name: 'Bünyamin Arslan Sigorta',
          role: locale === 'ar' ? 'إدارة المخاطر والتأمين لحماية أصول الوقف والعمليات' : 'Vakıf varlıklarının ve süreçlerin güvence altında tutulması'
        },
        {
          name: 'Güzel Kent A.Ş & Sancak International A.Ş',
          role: locale === 'ar' ? 'تعزيز القدرات اللوجستية والوصول إلى قطاع أوسع' : 'Lojistik ve sektörel erişim kapasitesi'
        }
      ]
    },
    {
      category: locale === 'ar' ? 'الهياكل الاجتماعية والرياضية' : 'Sosyal ve Sportif Yapılar',
      items: [
        {
          name: 'Bülent Akarcalı Anadolu Feneri Spor Kulübü',
          role: locale === 'ar' ? 'إدماج الشباب والمشاركة المجتمعية الواسعة' : 'Gençlik ve sosyal katılım'
        }
      ]
    }
  ]

  return (
    <div className="bg-brand-cream min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm block mb-3">
            {locale === 'ar' ? 'الهيكل الإداري والمالي' : 'Kurumsal Yapı ve Operasyonel Şeffaflık'}
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'الهيكل المؤسسي' : 'Kurumsal'}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'نهج إداري شفاف وقائم على مبادئ الكفاءة والمساءلة، مدعوماً ببنية مالية متينة وشبكة شراكات واسعة.'
              : 'Vakfımızın operasyonel sürdürülebilirliği ve kamu nezdindeki güven endeksi, şeffaf ve denetlenebilir bir mali yapı üzerine inşa edilmiştir.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Section 1: Financial Identifiers (Glassmorphism Card) */}
        <section>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <SectionTitle
                tag={locale === 'ar' ? 'الشفافية المالية' : 'Mali İzlenebilirlik'}
                title={locale === 'ar' ? 'البنية التحتية المالية والتعريفات' : 'Kurumsal Finansal Tanımlayıcılar'}
                align="left"
              />
              <p className="text-gray-600 text-sm leading-relaxed mt-4">
                {locale === 'ar'
                  ? 'يتم إدارة الموارد المالية للوقف عبر قنوات مصرفية مركزية ورسمية بالكامل. هذا الهيكل يضمن شفافية التدفقات وموثوقية المعاملات للمانحين.'
                  : 'Kurumsal finans yönetiminin merkezi bir bankacılık kanalı üzerinden yürütülmesi, vakfın mali izlenebilirlik matrisindeki yerini belirlemektedir. Mali hareketlerin dijital ve resmi kayıt altında tutulması, vakfın operasyonel şeffaflık ilkesine bağlılığını kanıtlamaktadır.'}
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                whileHover={{ y: -5 }}
                className="bg-brand-navyMid text-white rounded-3xl p-8 border border-brand-teal/30 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 rounded-full bg-brand-teal/10 blur-2xl pointer-events-none" />
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 border border-brand-gold/30 flex items-center justify-center text-brand-gold">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-lg text-brand-gold">
                      {locale === 'ar' ? 'معلومات التبرع الرسمي' : 'Resmi Bağış Hesap Bilgileri'}
                    </h3>
                    <p className="text-gray-400 text-xs">Vakıfbank / Resmi Cari Hesabı</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">
                      {locale === 'ar' ? 'اسم البنك والفرع' : 'Banka ve Şube'}
                    </div>
                    <div className="font-semibold text-white text-base">
                      {locale === 'ar' ? 'بنك الأوقاف - فرع أيكوسان إيكيتيلّي' : 'Vakıfbank Aykosan İkitelli Şubesi'}
                    </div>
                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-xl p-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <div className="text-gray-400 text-xs uppercase tracking-wider mb-1">IBAN</div>
                      <div className="font-mono text-sm sm:text-base font-bold text-brand-gold tracking-wider select-all">
                        {iban}
                      </div>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-xl text-white transition-all flex-shrink-0 flex items-center justify-center"
                      title={locale === 'ar' ? 'نسخ الحساب' : 'Kopyala'}
                    >
                      {copied ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Operational Model (Split interactive layout) */}
        <section className="bg-white border border-brand-teal/10 rounded-3xl p-8 sm:p-12 shadow-sm">
          <SectionTitle
            tag={locale === 'ar' ? 'نموذج التشغيل' : 'Operasyonel Model'}
            title={locale === 'ar' ? 'بروتوكول الخدمة المشتركة والتعاون' : 'Ortak Hizmet ve İş Birliği Protokolü'}
            align="center"
            className="mb-12"
          />

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-teal/5">
              <div className="w-10 h-10 rounded-xl bg-brand-teal text-white flex items-center justify-center mb-4">
                <FileText className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-brand-navy mb-3">
                {locale === 'ar' ? 'الأهداف الاستراتيجية' : 'Stratejik Amaçlar'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'التعليم، الإرشاد الروحي، الرعاية والخدمات الاجتماعية، وإدارة الأزمات كالمطابخ الخيرية ودعم متضرري الكوارث.'
                  : 'Eğitim, manevi rehberlik, sosyal yardım ve kriz yönetimi (aşevi, afet yardımı) gibi multidisipliner alanlarda ortaklık hedeflenmektedir.'}
              </p>
            </div>

            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-teal/5">
              <div className="w-10 h-10 rounded-xl bg-brand-gold text-brand-navy flex items-center justify-center mb-4">
                <Settings className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-brand-navy mb-3">
                {locale === 'ar' ? 'توزيع المسؤوليات' : 'Görev ve Yükümlülük Analizi'}
              </h3>
              <ul className="space-y-3 text-gray-600 text-sm leading-relaxed">
                <li>
                  <strong className="text-brand-teal">
                    {locale === 'ar' ? 'الطرف أ (الدعم الإداري واللوجستي):' : 'A Tarafı (Lojistik):'}
                  </strong>{' '}
                  {locale === 'ar' ? 'التنسيق التنظيمي، توفير الأماكن، والتراخيص الرسمية.' : 'Operasyonel koordinasyon, mekân tahsisi ve resmi izinler.'}
                </li>
                <li>
                  <strong className="text-brand-goldDark">
                    {locale === 'ar' ? 'الطرف ب (التمويل والتنفيذ):' : 'B Tarafı (Uygulama):'}
                  </strong>{' '}
                  {locale === 'ar' ? 'توفير التمويل، توظيف وتأمين الموظفين، وإيصال المساعدات.' : 'Personel istihdamı, SGK süreçleri ve finansman yükümlülükleri.'}
                </li>
              </ul>
            </div>

            <div className="bg-brand-cream rounded-2xl p-6 border border-brand-teal/5">
              <div className="w-10 h-10 rounded-xl bg-brand-navy text-white flex items-center justify-center mb-4">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="font-playfair font-bold text-lg text-brand-navy mb-3">
                {locale === 'ar' ? 'الرقابة والشفافية' : 'Denetim ve Şeffaflık'}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'بموجب المادة 8 من البروتوكول، يلتزم الشركاء بتقديم تقارير دورية كل 3 أشهر والخضوع للتدقيق الموقعي لمنع التداخل والتعارض.'
                  : 'Protokolün 8. maddesi uyarınca getirilen "üç aylık raporlama" ve "yerinde inceleme" şartı, kurumsal hesap verebilirliğin en üst düzeyde tutulmasını sağlar.'}
              </p>
            </div>
          </div>
        </section>

        {/* Section 3: Stakeholders Ecosystem (Responsive Grid) */}
        <section>
          <SectionTitle
            tag={locale === 'ar' ? 'الشركاء والاتحادات' : 'Paydaş Ekosistemi'}
            title={locale === 'ar' ? 'منظومة الشركاء والتحالفات الاستراتيجية' : 'Paydaş Ekosistemi ve Stratejik Ortaklıklar'}
            align="center"
            className="mb-12"
          />

          <div className="space-y-8">
            {partners.map((category, idx) => (
              <div key={idx} className="space-y-4">
                <h3 className="text-brand-teal font-playfair font-bold text-lg border-b border-brand-teal/10 pb-2">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.01 }}
                      className="bg-white rounded-2xl p-6 border border-brand-teal/5 shadow-sm hover:shadow-md transition-all duration-300"
                    >
                      <h4 className="font-bold text-brand-navy mb-2">{item.name}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{item.role}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Digital Presence & Timeline */}
        <section className="bg-brand-navy text-white rounded-3xl p-8 sm:p-12 overflow-hidden relative">
          <IslamicPattern opacity={0.03} color="white" size={100} />
          
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="text-brand-gold font-semibold uppercase tracking-widest text-xs">
                {locale === 'ar' ? 'التواجد الرقمي' : 'Dijital Varlık'}
              </span>
              <h3 className="font-playfair font-bold text-3xl mt-2 text-white mb-4">
                {locale === 'ar' ? 'الاتصال والجمهور العام' : 'Kamuoyu İletişim Analizi'}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                {locale === 'ar'
                  ? 'نشهد عملية تحول استراتيجي في طريقة تواصلنا الرقمي، حيث ننتقل من النموذج التفاعلي البسيط إلى نموذج تواصل مؤسسي استباقي لنشر الرسالة لشرائح واسعة.'
                  : 'İslami Davet Vakfı\'nın dijital dünyadaki varlığı, kurumun iletişim stratejisinde son dönemde gerçekleşen bir "formalleşme" sürecine işaret etmektedir. Reaktif bir yapıdan proaktif bir kurumsal iletişim modeline geçiş hedeflenmektedir.'}
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-brand-gold/10 rounded-xl text-brand-gold flex-shrink-0">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-brand-gold mb-1">X (Twitter) - @islamidavetvkf</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {locale === 'ar'
                      ? 'تم تفعيل الحساب في ديسمبر 2024 ليمثل الواجهة الفورية الرسمية للتفاعل والتوجيه الإخباري للوقف.'
                      : 'Aralık 2024 itibarıyla aktifleşen hesap, vakfın dijital kimliğini resmi bir kurumsal düzleme taşımaktadır.'}
                  </p>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-6 flex gap-4 items-start">
                <div className="p-3 bg-brand-teal/20 rounded-xl text-brand-tealLight flex-shrink-0">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-white mb-1">YouTube - @İslamiDavetVakfı</h4>
                  <p className="text-gray-300 text-xs leading-relaxed">
                    {locale === 'ar'
                      ? 'قناة الوقف المرئية الرسمية التي تضم خطب ومواعظ وتفسير فضيلة الشيخ عمر فاروق أوجاقزاده بشكل دوري ومنتظم.'
                      : 'Vakfımızın resmi YouTube kanalı, Sayın Ömer Faruk Ocakzade\'nin anlatımlarıyla zengin görsel/video arşivine sahiptir.'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
