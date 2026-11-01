'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import {
  UserCheck,
  Shield,
  Sparkles,
  HeartHandshake,
  CheckCircle2,
  Users,
  Compass,
  Cpu,
  Flame,
  FileCheck,
  Send,
  ArrowRight
} from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function MembershipPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [formSubmitted, setFormSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    profession: '',
    references: '',
    message: '',
  })

  const vasiflar = [
    {
      num: '01',
      title: isRTL ? 'صفات المؤمن الحق والقدوة الحسنة' : 'Mü\'min Ahlakı ve Örnek Şahsiyet',
      desc: isRTL
        ? 'يحمل عضو الوقف صفات المؤمن الصادق، ويلتزم بأركان الإسلام والإيمان قولاً وعملاً، ويكون في سلوكه قدوة مباركة لمن حوله.'
        : 'İslami Davet Vakfı\'nın üyeleri Mü\'min vasıfları taşır. İslam\'ın ve imanın şartlarına sıkı sıkıya bağlıdır. Yaşantısıyla, edebiyle ve dürüstlüğüyle çevresine örnek olur.',
      icon: Shield,
    },
    {
      num: '02',
      title: isRTL ? 'الشورى والالتزام باللائحة الداخلية' : 'İstişare Kültürü ve Tüzüğe Bağlılık',
      desc: isRTL
        ? 'يدير كافة أعماله بالشورى، ويتعهد بالانضباط التام للائحة الداخلية للوقف وتطبيق قراراتها برضى وتسليم.'
        : 'Tüm işlerini istişare ederek yürütür. Vakfın iç tüzüğüne ve alınan ortak kararlara bağlı kalmayı peşinen kabul ve taahhüt eder.',
      icon: Users,
    },
    {
      num: '03',
      title: isRTL ? 'صيانة حرية الفكر واحترام الآراء' : 'Fikir Hürriyeti ve Görüşlere Saygı',
      desc: isRTL
        ? 'يؤمن بحرية الفكر لكل إنسان، ويحترم الآراء المتنوعة ويعامل أصحابها بالإنصاف والمودة دون تعصب.'
        : 'Herkes için fikir hürriyetini samimiyetle kabul eder; farklı görüş ve düşüncelere saygı gösterir, onları bir zenginlik bilir ve önem verir.',
      icon: Compass,
    },
    {
      num: '04',
      title: isRTL ? 'التفقه الدائم والدعوة بالحكمة' : 'Sürekli Öğrenme ve Davet Temelli İletişim',
      desc: isRTL
        ? 'حريص دوماً على تعلم دينه والعمل به، ويبقى على صلة وثيقة بإخوانه بينما يخاطب سائر الناس بلغة الدعوة والرحمة.'
        : 'Vakfın üyeleri daima dinini öğrenme ve yaşama ilkesine bağlıdır. Kardeşleriyle muhabbetle iletişimde kalırken diğer insanlarla da davet temelli iletişim kurar.',
      icon: Sparkles,
    },
    {
      num: '05',
      title: isRTL ? 'الحرص على وحدة الصف والائتلاف' : 'Müslüman Kardeşleriyle Birlik Gayreti',
      desc: isRTL
        ? 'يتفانى في جمع كلمة المسلمين، ويسعى بصدق ليكون عضواً موحداً لا مفرقاً في جسد الأمة الواحد.'
        : 'Müslüman kardeşleri ile bir olmayı, beraber olmayı yürekten ister; tefrikaya karşı durarak ümmetin birliği için azami gayreti gösterir.',
      icon: HeartHandshake,
    },
    {
      num: '06',
      title: isRTL ? 'اجتناب الفتن والغيبة والجدال' : 'Fitne, Yalan, Münakaşa ve Gıybetten Kaçınma',
      desc: isRTL
        ? 'يترفع عن الفتن، والأكاذيب، والغيبة، والمراء العقيم، ويدرك فن التواؤم من أجل إدامة الوحدة والألفة.'
        : 'Fitne, yalan, kırıcı münakaşa ve gıybetten titizlikle kaçınır; cemiyetin huzuru ve birlik için uyumlu, anlayışlı ve sabırlı olmayı bilir.',
      icon: Shield,
    },
    {
      num: '07',
      title: isRTL ? 'تشجيع التجديد وتطوير الفكر' : 'Yenilikçi Düşünce ve Zihni Gelişim',
      desc: isRTL
        ? 'يقدر الفكر المبدع المتجدد، ويسهم في تطوير المعرفة الإسلامية المعاصرة لمواجهة تحديات العصر.'
        : 'Yenilikçi düşünceyi önemser; düşüncenin gelişmesi, çağa hitap eden ilmi açılımların üretilmesi için gayret ve tefekkür eder.',
      icon: Sparkles,
    },
    {
      num: '08',
      title: isRTL ? 'التخطيط ومواكبة التقنية الحديثة' : 'Planlama, Proje ve Teknoloji Hakimiyeti',
      desc: isRTL
        ? 'يعمل بأسلوب التخطيط والمشاريع المبتكرة، ويتابع التقنيات الحديثة ويوظفها بفاعلية في خدمة الدعوة.'
        : 'Planlama, proje geliştirme ve üretkenlik esaslı çalışır; teknolojik gelişmeleri yakından takip eder ve çalışmalarında etkin olarak kullanır.',
      icon: Cpu,
    },
    {
      num: '09',
      title: isRTL ? 'تبني الدعوة كمنهاج حياة كامل' : 'İslami Daveti Hayat Tarzı Olarak Benimseme',
      desc: isRTL
        ? 'يجعل من الدعوة الإسلامية غاية حياته وشغله الشاغل، ويعيش مبادئها في بيته، وعمله، وسائر شؤونه.'
        : 'İslami daveti en yüce değer olarak önemser ve yaşar; tebliği sadece bir vazife değil, bütünüyle bir hayat tarzı olarak benimser.',
      icon: Flame,
    },
  ]

  const requirements = [
    {
      title: isRTL ? 'نظام التزكية بالمرجعيات' : 'İki Eski Üye Referansı',
      desc: isRTL
        ? 'يتطلب طلب العضوية تزكية كتابية من عضوين فاعلين في الوقف لضمان الالتزام بمبادئنا.'
        : 'Vakfa müracaat eden adayın, vakfın mevcut en az 2 eski üyesinin yazılı referansına sahip olması şarttır.',
    },
    {
      title: isRTL ? 'تعهد ضم ٣ أعضاء سنوياً' : 'Yıllık 3 Yeni Üye Taahhüdü',
      desc: isRTL
        ? 'يتعهد العضو بالسعي المخلص لضم 3 كفاءات متميزة سنوياً لرفد حركة الدعوة.'
        : 'Her üyemiz, her takvim yılı içinde ahlaklı ve donanımlı en az 3 yeni üyeyi vakfa kazandırmayı taahhüt eder.',
    },
    {
      title: isRTL ? 'الاشتراك المالي المنتظم' : 'Giriş ve Düzenli Aylık Aidat',
      desc: isRTL
        ? 'المساهمة في ميزانية الوقف باشتراك الدخول والالتزام الشهري لدعم الأنشطة الوقفية.'
        : 'Vakfın tüzüğünde öngörülen giriş aidatı ile taahhüt edilen düzenli aylık aidatın eksiksiz ödenmesi esastır.',
    },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            {isRTL ? 'ميثاق الانتساب والعضوية' : 'İSDAV Üyelik Şartları'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'صفات ومؤهلات أعضاء الوقف' : 'İSDAV Üyelerinin Vasıfları'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'تحدد هذه الوثيقة المرجعية الصفات الإيمانية، والأخلاقية، والمنهجية التي يتحلى بها كل داعية ينتمي لوقف الدعوة الإسلامية الدولي.'
              : 'Vakfımızın güncel tüzüğünde yer alan, vakfa gönüllü veya üye olmak isteyen her ferdin taşıması gereken temel vasıflar ve başvuru kriterleri.'}
          </p>
        </div>
      </section>

      {/* 9 Vasıf Grid */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-2xl mb-10">
          <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider block mb-1">
            {isRTL ? 'الصفات الأخلاقية والمنهجية' : 'Tüzük Maddeleri'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC]">
            {isRTL ? 'السمات الأساسية التسع للداعية' : 'Vakıf Üyelerimizin 9 Temel Vasıf Ölçütü'}
          </h2>
          <p className="text-sm text-[#94A3B8] mt-2">
            {isRTL
              ? 'مستخرجة مباشرة من وثيقة "صفات أعضاء وقف الدعوة الإسلامية المحدثة".'
              : '"İSDAV Üyelerinin Vasıfları Güncel" resmi tüzük dokümanımızdan derlenen temel ölçütler:'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {vasiflar.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.04 }}
                className="glass-card p-6 sm:p-7 flex flex-col justify-between group hover:border-[#00D4B2]/40"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-11 h-11 rounded-xl bg-[#00D4B2]/10 border border-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2] font-mono font-bold text-sm">
                      {item.num}
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-white/[0.04] flex items-center justify-center text-[#94A3B8]">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#F0F6FC] group-hover:text-[#00D4B2] transition-colors mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00D4B2]">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isRTL ? 'صفة أصيلة' : 'Temel Vasıf'}</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* 3 Başvuru Kriteri */}
        <div className="mt-20">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider block mb-1">
              {isRTL ? 'إجراءات وشروط الانتساب' : 'Müracaat Şartları'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC]">
              {isRTL ? 'شروط قبول العضو الجديد في الوقف' : 'Yeni Üyelik Kabul Kriterleri ve Taahhütler'}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {requirements.map((req, i) => (
              <div key={i} className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 relative overflow-hidden">
                <div className="w-10 h-10 rounded-xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] mb-4 font-bold">
                  {i + 1}
                </div>
                <h3 className="text-lg font-bold text-[#F0F6FC] mb-2">{req.title}</h3>
                <p className="text-xs sm:text-sm text-[#94A3B8] leading-relaxed">{req.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Üyelik Ön Başvuru Formu */}
        <div className="mt-20 glass-panel p-8 sm:p-12 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="max-w-2xl mx-auto text-center mb-10">
            <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider">
              {isRTL ? 'طلب انتساب مبدئي' : 'Gönüllü & Üyelik'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC] mt-1">
              {isRTL ? 'استمارة طلب العضوية في الوقف' : 'Üyelik Ön Başvuru Formu'}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-2">
              {isRTL
                ? 'يرجى تعبئة النموذج بدقة، وسيتم التواصل معكم من قبل لجنة العضوية لاستكمال التزكيات الرسمية.'
                : 'Bilgilerinizi eksiksiz doldurunuz. Başvurunuz Teşkilatlanma Komisyonumuz tarafından incelenip sizinle irtibata geçilecektir.'}
            </p>
          </div>

          {formSubmitted ? (
            <div className="p-8 rounded-2xl bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-center max-w-lg mx-auto">
              <CheckCircle2 className="w-12 h-12 text-[#00D4B2] mx-auto mb-3" />
              <h4 className="text-xl font-bold text-[#F0F6FC] mb-2">
                {isRTL ? 'تم استلام طلبكم بنجاح!' : 'Başvurunuz Başarıyla Alındı!'}
              </h4>
              <p className="text-xs sm:text-sm text-[#94A3B8]">
                {isRTL
                  ? 'نشكركم على رغبتكم في الانضمام. سنتواصل معكم قريباً عبر الهاتف أو البريد.'
                  : 'Vakfımıza gösterdiğiniz teveccüh için teşekkür ederiz. Heyetimiz en kısa sürede sizinle iletişime geçecektir.'}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    {isRTL ? 'الاسم واللقب' : 'Ad Soyad *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="glass-input"
                    placeholder="Adınız Soyadınız"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    {isRTL ? 'رقم الهاتف' : 'Telefon *'}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="glass-input"
                    placeholder="05XX XXX XX XX"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    {isRTL ? 'البريد الإلكتروني' : 'E-posta *'}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="glass-input"
                    placeholder="ornek@domain.com"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    {isRTL ? 'المدينة / الدولة' : 'İl / Şehir *'}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="glass-input"
                    placeholder="İstanbul, Ankara vb."
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                  {isRTL ? 'المهنة / مجال التخصص' : 'Meslek / Uzmanlık Alanı'}
                </label>
                <input
                  type="text"
                  value={formData.profession}
                  onChange={(e) => setFormData({ ...formData, profession: e.target.value })}
                  className="glass-input"
                  placeholder="Öğretmen, Mühendis, Hukukçu, Esnaf vb."
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                  {isRTL ? 'أسماء المزكّين (إن وجد)' : 'Referans Olan İSDAV Üyeleri (Varsa 2 Kişi)'}
                </label>
                <input
                  type="text"
                  value={formData.references}
                  onChange={(e) => setFormData({ ...formData, references: e.target.value })}
                  className="glass-input"
                  placeholder="Referans aldığınız üyelerimizin isimleri"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                  {isRTL ? 'رسالة أو دوافع الانضمام' : 'Kendinizi ve Katkı Sağlayabileceğiniz Alanları Belirtin'}
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="glass-input resize-none"
                  placeholder="Vakıf çalışmalarında nasıl görev almak istersiniz?"
                />
              </div>

              <div className="pt-2 text-center">
                <button type="submit" className="btn-turquoise w-full sm:w-auto px-10">
                  <Send className="w-4 h-4" />
                  <span>{isRTL ? 'إرسال طلب العضوية' : 'Üyelik Ön Başvurusunu Gönder'}</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  )
}
