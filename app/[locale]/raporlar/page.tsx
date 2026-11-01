'use client'

import { useState, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import {
  FileText,
  Search,
  Calendar,
  User,
  Download,
  Eye,
  X,
  Copy,
  Check,
  Filter,
  Sparkles,
  Share2,
  ShieldCheck
} from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

interface ReportItem {
  id: string
  title: string
  date: string
  speaker: string
  location: string
  category: string
  summary: string
  fullContent: string
  pdfSize: string
}

export default function ReportsPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('ALL')
  const [previewReport, setPreviewReport] = useState<ReportItem | null>(null)
  const [copiedId, setCopiedId] = useState<string | null>(null)

  const reports: ReportItem[] = [
    {
      id: 'istisare-4',
      title: isRTL
        ? 'تقرير نتائج المؤتمر التشاوري الرابع: أهمية الدعوة لوحدة الأمة'
        : '4. İstişare Toplantısı Sonuç Raporu: Ümmetin Birliği İçin Davetin Önemi',
      date: '17.05.2026',
      speaker: 'Ömer Korkmaz',
      location: 'İstanbul Toplantı Merkezi (STK Başkanları Katılımıyla)',
      category: 'İstişare Kongresi',
      summary: isRTL
        ? 'تناول اللقاء سبل استنهاض الأمة، ودروس حجة الوداع، وخبرات العمل الميداني في باكستان وآسيا، وصياغة استراتيجية جامعة للعمل الدعوي.'
        : 'STK başkanları ve ilim ehlinin katılımıyla gerçekleştirilen toplantıda; Efendimiz\'in (s.a.v.) Veda Hutbesi tebliğ mirası, Pakistan ve Asya deneyimleri ile modern dünyada tebliğ dili masaya yatırıldı.',
      pdfSize: '2.4 MB',
      fullContent: `ULUSLARARASI İSLAMİ DAVET VAKFI 4. İSTİŞARE TOPLANTISI SONUÇ RAPORU
Tarih: 17.05.2026
Konuşmacı: Ömer Korkmaz
Konu: Ümmetin Birliği İçin Davetin Önemi

Toplantıya Katılanlar:
STK Başkanları, akademisyenler, kanaat önderleri ve davet teşkilatı mensupları.

Öne Çıkan Başlıklar ve Değerlendirmeler:
1. Veda Hutbesi ve Tebliğ Şuuru:
Efendimiz (s.a.v.) Veda Haccı'nda 120.000 sahabeye hitap etmiş; vefatında ise sadece 10.000 sahabe Medine'de kalmıştı. 110.000 sahabe-i kiram davet ve tebliğ için yeryüzünün dört bir yanına hicret etmişti. Vakfımızın temel hedefi bu kutlu sahabe şuurunu 21. yüzyıla taşımaktır.

2. Doğu Asya ve Pakistan Tecrübeleri:
Pakistan ve Asya coğrafyasında yürütülen davet çalışmalarından örnekler verilerek; samimi davetçilerin yerel halkla kurduğu gönül köprülerinin kalıcı medeniyet izleri bıraktığı vurgulandı.

3. Kardeşlik ve Birlik Protokolü:
Davet faaliyetlerinin tefrikaya ve hizipçiliğe karşı en güçlü panzehir olduğu; Müslümanlar arasındaki ihtilafların ancak ortak bir davet vizyonuyla aşılabileceği karara bağlandı.`,
    },
    {
      id: 'istisare-2',
      title: isRTL
        ? 'تقرير المؤتمر التشاوري الثاني: الدعوة في شبه الجزيرة الكورية وآسيا'
        : 'U. İslami Davet Vakfı 2. İstişare Toplantısı: Kore ve Asya Davet Raporu',
      date: '14.02.2026',
      speaker: 'Dr. Süleyman Elik (Seul Eski Dini Ataşesi)',
      location: 'Fatih — İnsan ve İlim Vakfı Merkezi',
      category: 'Bölgesel Raporlar',
      summary: isRTL
        ? 'تحليل تاريخي وميداني لانتشار الإسلام في كوريا منذ حرب 1952 وحتى اليوم، وتأسيس 21 مسجداً جامعاً، وسبل مخاطبة المجتمع الآسيوي.'
        : '1952 Kore Savaşı sırasında Türk askerinin ahlakıyla başlayan hidayet süreci, Seul Merkez Camii ve 21 caminin teşekkülü ile modern ateist toplumlara yönelik davet metodolojisi incelendi.',
      pdfSize: '1.8 MB',
      fullContent: `ULUSLARARASI İSLAMİ DAVET VAKFI 2. İSTİŞARE TOPLANTISI RAPORU
Tarih: 14.02.2026
Yer: Fatih - İnsan ve İlim Vakfı
Konu: Ümmetin Birliği İçin Davetin Önemi
Konuşmacı: Kore Büyükelçiliği Eski Dini Ataşesi Süleyman Elik

Önemli Tutanak ve Tespitler:
1. Medeniyet İddiası ve Doğu Asya:
Güney Kore ve Asya toplumlarında derin bir inanç boşluğu bulunmaktadır. Halkın çoğunluğunun manevi arayışta olduğu bir zeminde, İslam'ın fıtrata uygun hakikatleri doğru bir dille anlatıldığında büyük bir kabul görmektedir.

2. Tarihsel Arka Plan (Ertuğrul Gemisi ve Kore Savaşı):
Asya'da Türk-İslam daveti Ertuğrul Fırkateyni ile başlamış; 1952 Kore Savaşı'nda Türk tugayının kurduğu yetimhaneler ve fedakar ahlakı sayesinde savaş meydanında 11.000 Koreli Müslüman olmuştur. Bugün Kore'de 250.000 Müslüman ve 21 büyük cami mevcuttur.

3. Alınan Kararlar:
Genç davetçilerin Korece, Japonca ve İngilizce dillerinde uzmanlaştırılması, öğrenci değişim programlarının desteklenmesi ve Seul-İstanbul ilim köprüsünün tahkim edilmesi kararlaştırıldı.`,
    },
    {
      id: 'kim-vakfi',
      title: isRTL
        ? 'قرارات الاجتماع التشاوري المشترك مع وقف كيم: استراتيجية الدعوة بـ 15 لغة'
        : 'Kim Vakfı ve İslami Davet Vakfı Ortak İstişare Toplantısı Kararları',
      date: '17.01.2026',
      speaker: 'İSDAV & KİM Vakfı Ortak Heyeti',
      location: 'İstanbul Genel Merkez',
      category: 'Ortak Protokoller',
      summary: isRTL
        ? 'قرارات استراتيجية لإطلاق منصات دعوية بـ 15 لغة حية لغير المسلمين، وتأسيس أكاديمية إعداد الدعاة، وتأهيل جيل شبابي رسالي.'
        : 'Gayrimüslimlere yönelik tebliğde 15 dilde dijital davet ağının kurulması, Davetçi Yetiştirme Akademisi ve kardeş vakıflar arası ortak kaynak kullanımı kararları alındı.',
      pdfSize: '1.2 MB',
      fullContent: `KİM VAKFI İLE İSLAMİ DAVET VAKFI ORTAK İSTİŞARE TOPLANTISINDA ALINAN KARARLAR
Tarih: 17.01.2026

Alınan Stratejik Kararlar:
1. 15 Dilde Küresel Davet:
KİM Vakfı ve İslami Davet Vakfı ortaklığıyla, İngilizce başta olmak üzere 15 dilde gayrimüslimlere yönelik İslami tebliğ materyalleri, videolar ve dijital rehberler hazırlanması hızlandırılacaktır.

2. Davet Akademisi Kuruluşu:
Genç, donanımlı, yabancı dil bilen, Kur'an ve Sünnet omurgasına sımsıkı bağlı davetçiler yetiştirmek üzere ortak bir "Davet Akademisi" kurulması kararlaştırıldı.

3. Üniversite ve Gençlik Çalışmaları:
Üniversite gençliğine yönelik seminerler, kamplar ve atölyeler düzenlenerek gençlerin davet şuuruyla yetişmesi temin edilecektir.

4. Kurumsal Güven ve İş Birliği:
İki vakıf tüm lojistik, idari ve yayın imkanlarını birleştirerek ümmetin birliği için ortak protokol çerçevesinde hareket edecektir.`,
    },
  ]

  // Filter logic
  const filteredReports = reports.filter((r) => {
    const matchesSearch =
      r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.speaker.toLowerCase().includes(searchTerm.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCat = selectedCategory === 'ALL' || r.category === selectedCategory
    return matchesSearch && matchesCat
  })

  const copyReportText = (item: ReportItem) => {
    navigator.clipboard.writeText(`${item.title}\n\n${item.fullContent}`)
    setCopiedId(item.id)
    setTimeout(() => setCopiedId(null), 2000)
  }

  const downloadReportFile = (item: ReportItem) => {
    const element = document.createElement('a')
    const file = new Blob([`${item.title}\n\n${item.fullContent}`], { type: 'text/plain;charset=utf-8' })
    element.href = URL.createObjectURL(file)
    element.download = `${item.id}-raporu.txt`
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            {isRTL ? 'الشفافية والمساءلة الوقفية' : 'Şeffaflık Modülü & Raporlar'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'تقارير المؤتمرات وقرارات الاستشارة' : 'Raporlar ve İstişare Kararları'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'سجل شَفّاف يوثق كافة القرارات المتخذة في اجتماعاتنا التشاورية الدورية، متاح للتحميل والقراءة المباشرة.'
              : 'Vakfımızın periyodik istişare kongrelerinde alınan tarihi kararlar, stratejik değerlendirmeler ve sonuç raporları.'}
          </p>
        </div>
      </section>

      {/* Filter and Search Bar */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Search Box */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-[#94A3B8] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={isRTL ? 'ابحث في العناوين، المتحدثين، أو الموضوعات...' : 'Rapor adı, konuşmacı veya konu ara...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="glass-input pl-10 pr-4 text-sm"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {['ALL', 'İstişare Kongresi', 'Bölgesel Raporlar', 'Ortak Protokoller'].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00D4B2] text-[#080C10]'
                    : 'bg-white/[0.03] text-[#94A3B8] hover:text-[#F0F6FC] border border-white/5'
                }`}
              >
                {cat === 'ALL' ? (isRTL ? 'كافة التقارير' : 'Tüm Raporlar') : cat}
              </button>
            ))}
          </div>

        </div>

        {/* Reports List */}
        <div className="space-y-6">
          {filteredReports.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="glass-card p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border border-white/10 hover:border-[#00D4B2]/40 group"
            >
              {/* Left Details */}
              <div className="space-y-3 max-w-3xl">
                <div className="flex flex-wrap items-center gap-2.5 text-xs">
                  <span className="px-2.5 py-1 rounded bg-[#00D4B2]/10 text-[#00D4B2] font-semibold border border-[#00D4B2]/20">
                    {item.category}
                  </span>
                  <span className="text-[#94A3B8] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                  <span className="text-[#94A3B8] flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    {item.speaker}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#F0F6FC] group-hover:text-[#00D4B2] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] line-clamp-2">
                  {item.summary}
                </p>

                <div className="text-xs text-[#64748B]">
                  📍 {item.location}
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
                {/* Preview Button */}
                <button
                  onClick={() => setPreviewReport(item)}
                  className="btn-turquoise text-xs sm:text-sm px-4 py-2.5 flex-1 sm:flex-initial"
                >
                  <Eye className="w-4 h-4" />
                  <span>{isRTL ? 'معاينة التقرير' : 'Sayfada Önizle'}</span>
                </button>

                {/* Download Button */}
                <button
                  onClick={() => downloadReportFile(item)}
                  className="btn-glass text-xs sm:text-sm px-4 py-2.5 flex-1 sm:flex-initial"
                  title="Metin Belgesi Olarak İndir"
                >
                  <Download className="w-4 h-4" />
                  <span>{item.pdfSize}</span>
                </button>
              </div>
            </motion.div>
          ))}

          {filteredReports.length === 0 && (
            <div className="text-center py-16 text-[#94A3B8] glass-card p-10">
              {isRTL ? 'لم يتم العثور على تقارير مطابقة للبحث.' : 'Arama kriterlerinize uygun rapor bulunamadı.'}
            </div>
          )}
        </div>

      </div>

      {/* Interactive Full Preview Modal */}
      <AnimatePresence>
        {previewReport && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-[#0D1117] border border-white/15 rounded-2xl max-w-3xl w-full max-h-[85vh] flex flex-col shadow-2xl relative overflow-hidden"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              {/* Modal Header */}
              <div className="p-6 border-b border-white/10 flex items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider">
                    {previewReport.category} — {previewReport.date}
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#F0F6FC] mt-1">
                    {previewReport.title}
                  </h3>
                </div>
                <button
                  onClick={() => setPreviewReport(null)}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#94A3B8] hover:text-[#F0F6FC] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Full Parsed Report Text */}
              <div className="p-6 overflow-y-auto space-y-4 font-mono text-xs sm:text-sm leading-relaxed text-[#CBD5E1] whitespace-pre-wrap select-text bg-[#080C10]/60">
                {previewReport.fullContent}
              </div>

              {/* Modal Footer */}
              <div className="p-4 sm:p-6 border-t border-white/10 bg-[#0D1117] flex items-center justify-between gap-3">
                <button
                  onClick={() => copyReportText(previewReport)}
                  className="btn-glass text-xs py-2 px-3.5"
                >
                  {copiedId === previewReport.id ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{isRTL ? 'تم النسخ!' : 'Metin Kopyalandı!'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isRTL ? 'نسخ نص التقرير' : 'Metni Kopyala'}</span>
                    </>
                  )}
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => downloadReportFile(previewReport)}
                    className="btn-turquoise text-xs py-2 px-4"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{isRTL ? 'تحميل الوثيقة' : 'Raporu İndir'}</span>
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
