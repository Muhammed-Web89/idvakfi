'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Landmark, Copy, Check, FileText, Download, Building2, TrendingUp, Handshake } from 'lucide-react'
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
    navigator.clipboard.writeText(iban)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const reports = [
    { title: '4. İstişare Toplantısı Sonuç Raporu', date: '17.05.2026', size: '2.4 MB' },
    { title: 'U. İslami Davet Vakfı 2. İstişare Raporu', date: '14.02.2026', size: '1.8 MB' },
    { title: 'Kim Vakfı & İSDAV İstişare Kararları', date: '17.01.2026', size: '1.2 MB' },
    { title: 'Vakıf Yönetim ve Denetim Kurulu Listesi', date: '09.06.2026', size: '3.1 MB' }
  ]

  const corporatePillars = [
    {
      icon: TrendingUp,
      title: locale === 'ar' ? 'الاستقلال المالي' : 'Finansal Bağımsızlık & İktisadi Döngü',
      desc: locale === 'ar'
        ? 'بناء نموذج اقتصادي قائم على استثمار الأصول الذاتية وتأسيس مؤسسات اقتصادية تدعم أنشطة الوقف بشكل مستدام.'
        : 'Vakfın uzun vadeli stratejik başarısı, finansal bağımsızlık üzerine kuruludur. Vakıf, bağış odaklı bir modelden ziyade, kendi öz kaynaklarını üreten ve iktisadi işletmeler tesis eden bir aktördür.'
    },
    {
      icon: Building2,
      title: locale === 'ar' ? 'القياس والتقييم' : 'Ölçme, Değerlendirme ve KPI',
      desc: locale === 'ar'
        ? 'مراقبة الأداء التنظيمي السنوي بدقة وفق مؤشرات قياس أداء واضحة لضمان الفعالية ومنع الارتباك الإداري.'
        : 'Kurumsal verimlilik, STK sektöründe az rastlanan "Ölçme ve Değerlendirme Raporları" ile denetlenmekte; üyelerin yıllık çalışmaları somut verilerle takip edilmektedir.'
    },
    {
      icon: Handshake,
      title: locale === 'ar' ? 'نموذج الحوافز والتعاون' : 'Dahili Ekosistem Teşvik Modeli',
      desc: locale === 'ar'
        ? 'تطوير شراكات تجارية واتفاقيات تخفيض مع الشركات الأعضاء والمؤسسات الشقيقة لخلق دورة اقتصادية مغلقة ومحفزة.'
        : 'Kardeş kuruluşlarla ve üyelerin ticari işletmeleriyle yapılan indirim anlaşmaları ve iş birlikleriyle bir "Kapalı Devre İktisadi Döngü" oluşturulmaktadır.'
    }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'الهيكل الإداري والمالي' : 'Kurumsal Yapı ve Operasyonel Şeffaflık'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'الهيكل المؤسسي' : 'Kurumsal'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'نهج إداري شفاف وقائم على مبادئ الكفاءة والمساءلة، مدعوماً ببنية مالية متينة وشبكة شراكات واسعة.'
              : 'Vakfımızın operasyonel sürdürülebilirliği ve kamu nezdindeki güven endeksi, şeffaf ve denetlenebilir bir mali yapı üzerine inşa edilmiştir.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Section 1: Financial Identifiers */}
        <section>
          <div className="grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5">
              <SectionTitle
                tag={locale === 'ar' ? 'الشفافية المالية' : 'Mali İzlenebilirlik'}
                title={locale === 'ar' ? 'البنية التحتية المالية والتعريفات' : 'Kurumsal Finansal Tanımlayıcılar'}
                align="left"
              />
              <p className="font-inter text-[#5C5C5C] text-sm leading-relaxed mt-4">
                {locale === 'ar'
                  ? 'يتم إدارة الموارد المالية للوقف عبر قنوات مصرفية مركزية ورسمية بالكامل. هذا الهيكل يضمن شفافية التدفقات وموثوقية المعاملات للمانحين.'
                  : 'Kurumsal finans yönetiminin merkezi bir bankacılık kanalı üzerinden yürütülmesi, vakfın mali izlenebilirlik matrisindeki yerini belirlemektedir. Mali hareketlerin resmi kayıt altında tutulması, vakfın operasyonel şeffaflık ilkesine bağlılığını kanıtlamaktadır.'}
              </p>
            </div>
            
            <div className="lg:col-span-7">
              <motion.div
                whileHover={{ y: -4 }}
                className="bg-[#0F2E2E] text-white rounded-xl p-8 border border-white/10 shadow-lg relative overflow-hidden"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#3D8B8B]">
                    <Landmark className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-amiri font-bold text-xl text-white">
                      {locale === 'ar' ? 'معلومات التبرع الرسمي' : 'Resmi Bağış Hesap Bilgileri'}
                    </h3>
                    <p className="font-inter text-white/60 text-xs">Vakıfbank / Resmi Cari Hesabı</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <div className="font-inter text-white/60 text-xs uppercase tracking-wider mb-1">
                      {locale === 'ar' ? 'اسم البنك والفرع' : 'Banka ve Şube'}
                    </div>
                    <div className="font-inter font-semibold text-white text-base">
                      {locale === 'ar' ? 'بنك الأوقاف - فرع أيكوسان إيكيتيلّي' : 'Vakıfbank Aykosan İkitelli Şubesi'}
                    </div>
                  </div>

                  <div className="bg-black/30 border border-white/10 rounded-lg p-4 flex items-center justify-between gap-4">
                    <div className="w-full">
                      <div className="font-inter text-white/60 text-xs uppercase tracking-wider mb-1">IBAN</div>
                      <div className="font-mono text-sm sm:text-base font-bold text-white tracking-wider select-all">
                        {iban}
                      </div>
                    </div>
                    <button
                      onClick={copyToClipboard}
                      className="p-3 bg-white/10 hover:bg-white/20 rounded-lg text-white transition-all flex-shrink-0 flex items-center justify-center"
                      title={locale === 'ar' ? 'نسخ الحساب' : 'Kopyala'}
                    >
                      {copied ? <Check className="w-5 h-5 text-[#3D8B8B]" /> : <Copy className="w-5 h-5" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 2: Operasyonel İktisat */}
        <section>
          <div className="text-center mb-12">
            <SectionTitle
              tag={locale === 'ar' ? 'الاستدامة الاقتصادية' : 'İktisadi Sürdürülebilirlik'}
              title={locale === 'ar' ? 'النموذج الاقتصادي المغلق للوقف' : 'Operasyonel Verimlilik & İktisadi Döngü'}
              align="center"
            />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {corporatePillars.map((item, idx) => {
              const Icon = item.icon
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-8 border border-[#E5E2DA] shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[rgba(27,77,77,0.08)] text-[#1B4D4D] flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-amiri font-bold text-xl text-[#1A1A1A] mb-3">{item.title}</h3>
                    <p className="font-inter text-[#5C5C5C] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 3: Raporlar ve Belgeler */}
        <section>
          <div className="bg-white rounded-xl border border-[#E5E2DA] p-8 sm:p-12 shadow-sm">
            <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-6">
              {locale === 'ar' ? 'التقارير والمستندات الرسمية' : 'Resmi Rapor ve Belgeler'}
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {reports.map((rep, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-lg bg-[#F7F5F0] border border-[#E5E2DA] flex items-center justify-between hover:bg-white hover:border-[#1B4D4D] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-[#1B4D4D]" />
                    <div>
                      <h4 className="font-inter text-sm font-semibold text-[#1A1A1A]">{rep.title}</h4>
                      <span className="font-inter text-xs text-[#8A8A8A]">{rep.date} · {rep.size}</span>
                    </div>
                  </div>
                  <button className="p-2 text-[#1B4D4D] hover:text-[#2D6A6A]">
                    <Download className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </div>
  )
}
