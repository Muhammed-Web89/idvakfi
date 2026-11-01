'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import {
  Target,
  Shield,
  Compass,
  Users,
  CheckCircle2,
  BookOpen,
  Scale,
  Building,
  HeartHandshake,
  TrendingUp,
  FileText,
  Sparkles,
  ArrowRight
} from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'
import { Link } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export default function AboutPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'
  const [activeTab, setActiveTab] = useState<'purpose' | 'principles'>('purpose')

  const amaclar = [
    {
      num: '01',
      title: isRTL ? 'وحدة الأمة والاعتصام بالكتاب والسنة' : 'Ümmetin Birliği ve Kur\'an-Sünnet Ölçüsü',
      desc: isRTL
        ? 'الاهتمام بوحدة الأمة وتماسك أبنائها وتضافر جهود أعضائها، واعتماد القرآن والسنة كمعيار مطلق في كافة الأنشطة والمواقف.'
        : 'Ümmetin birliğini, milletin beraberliğini, üyelerinin güç birliğini ve iş birliğini önemser. Kur\'an ve Sünneti çalışmalarında yegane ölçü olarak kabul eder.',
      icon: Target,
    },
    {
      num: '02',
      title: isRTL ? 'المؤسسية والمحبة وحرية الفكر' : 'Sevgi Merkezli Sistem ve İstişare Hürriyeti',
      desc: isRTL
        ? 'بناء جماعة راقية ذات مبادئ ترتكز على المحبة والتآلف، دون ارتهان للأشخاص، مع إرساء نظام مؤسسي يستند إلى الشورى وصيانة حرية الفكر والتجديد البنّاء.'
        : 'İslami Davet Vakfı sevgi merkezli, kaliteli, ilkeli bir topluluk oluşturmaya çalışır. Kişilere bağlı kalmaz, bir sistem içinde çalışmalarını tamamlar. İstişareyi esas alır ve daima her işini istişare ile alınan kararlara göre yürütür. Herkes için fikir hürriyetini savunur, düşüncede gelişim ve değişimi teşvik eder. Birleştirici olur; ayrımcı, dışlayıcı ve ötekileştirici yaklaşımlardan uzak durur.',
      icon: Compass,
    },
    {
      num: '03',
      title: isRTL ? 'التواصل مع القيادات الفكرية والعلمية' : 'İlim, İrfan ve Fikir Önderleri ile Temas',
      desc: isRTL
        ? 'التواصل البنّاء مع العلماء، والمفكرين، والأدباء، والرموز الاقتصادية والاجتماعية في أمتنا لتوحيد الرؤى والجهود.'
        : 'Ülkemizin ve İslam dünyasının ileri gelenleri ile görüşmeyi önemser (Âlimler, arifler, şairler, yazarlar, düşünürler, iktisadi ve içtimai kanaat önderleri ile periyodik temaslar kurar).',
      icon: Users,
    },
    {
      num: '04',
      title: isRTL ? 'إسناد حركات الدعوة العالمية' : 'Küresel Davetçilere ve Kurumlara Destek',
      desc: isRTL
        ? 'دعم الدعاة والمؤسسات الدعوية في أرجاء العالم الإسلامي، والمشاركة الفاعلة في المشاريع المشتركة المتوافقة مع أهداف الوقف.'
        : 'İslam coğrafyasındaki davetçileri, davet çalışmalarını ve davet için gayret gösteren kurumları destekler. İlkelerine ve amacına uygun çalışmalara katılır, ortak projeler geliştirir.',
      icon: BookOpen,
    },
    {
      num: '05',
      title: isRTL ? 'المناسبات الاجتماعية ومواسم التآلف' : 'Özel Günler, Sohbet ve İkram Kültürü',
      desc: isRTL
        ? 'استثمار الأعياد والمناسبات الاجتماعية (الأفراح، الجنائز، اللقاءات الدورية) وتوظيف الضيافة كجسر للتعارف والتآخي.'
        : 'Özel günleri değerlendirir (Düğün, cenaze, bayram, kandil vb. toplantıları). Sohbeti, muhabbeti ve ikramı üyeler arasında tanışmaya ve kaynaşmaya vesile kabul eder.',
      icon: HeartHandshake,
    },
    {
      num: '06',
      title: isRTL ? 'مناهضة الموبقات والآفات المجتمعية' : 'Büyük Günahlarla ve Ahlaki Yozlaşmayla Mücadele',
      desc: isRTL
        ? 'التعاون مع كافة الفاعلين لمكافحة الآفات المدمرة كالمسكرات، والقمار، والفواحش، والربا، والرشوة صيانةً للأخلاق العامة.'
        : 'Birlikte çalıştığı tüm şahıs ve kurumlarla; başta içki, kumar, zina, faiz, rüşvet olmak üzere büyük günahlara ve toplumsal yozlaşmaya karşı kararlılıkla mücadele eder.',
      icon: Shield,
    },
    {
      num: '07',
      title: isRTL ? 'الاستقلال المالي والمنشآت الاقتصادية' : 'İktisadi Bağımsızlık ve Vakıf İktisadi İşletmeleri',
      desc: isRTL
        ? 'السعي لتأسيس مشروعات اقتصادية وأوقاف استثمارية ذاتية تضمن استدامة الموارد وتغطية نفقات الدعوة باستقلالية تامة.'
        : 'Vakfın iktisadi kuruluşları olsun ister ve tüm faaliyet giderlerini bu öz kaynaklardan karşılamayı planlayarak tam finansal bağımsızlığı hedefler.',
      icon: TrendingUp,
    },
    {
      num: '08',
      title: isRTL ? 'التنسيق والتكامل المؤسسي' : 'Yerel ve Merkezi Yönetimlerle Sağlıklı Diyalog',
      desc: isRTL
        ? 'بناء حوار إيجابي مع الإدارات المحلية والمركزية، ومشاركة ثمرات الدراسات والخبرات لخدمة الصالح العام.'
        : 'Yerel ve merkezi yönetimler ile yapıcı ve şeffaf diyaloglar kurar, tebliğ ve sivil toplum sahasındaki çalışmalarını paylaşır.',
      icon: Building,
    },
    {
      num: '09',
      title: isRTL ? 'رعاية الإخوة وحماية المتضررين' : 'Mağdur Üyelerin Korunması ve Sosyal Taziye',
      desc: isRTL
        ? 'حماية العضو المتضرر تحت أي ظرف، والعمل على سد احتياجاته وصون كرامته في إطار التكافل الأخوي.'
        : 'Her şart altında üyelerinden mağdur olanı korur, ihtiyacını karşılamaya çalışır ve kardeşlik hukukunun gereğini eksiksiz yerine getirir.',
      icon: CheckCircle2,
    },
    {
      num: '10',
      title: isRTL ? 'التقييم المؤسسي وروح الأخوة' : 'Ölçme, Değerlendirme ve Hiyerarşik Kardeşlik Hukuku',
      desc: isRTL
        ? 'إصدار تقارير تقييم دورية لأداء الأعضاء السنوي، مع اعتماد روح الأخوة بدلاً من علاقات الرؤساء والمرؤوسين الجافة.'
        : 'Üyelerinin yıl içindeki çalışmalarını görür, ölçme-değerlendirme raporları çıkarır. Kurumun hiyerarşik bir tüzük yapısı vardır; ancak ast-üst ilişkisi yerine daima samimi kardeşlik hukukunu gözetir.',
      icon: Scale,
    },
    {
      num: '11',
      title: isRTL ? 'الشراكات الاقتصادية والتعاون الشامل' : 'Kardeş Kuruluşlarla İktisadi ve İdari İş Birliği',
      desc: isRTL
        ? 'التعاون مع المؤسسات الشقيقة في المجالات العلمية، والدعوية، والإدارية، والاتفاق على تسهيلات تجارية متبادلة للأعضاء.'
        : 'İslami Davet Vakfı kardeş kuruluşlarla ilmi, İslami, iktisadi, idari ve sosyal çalışmalarda tam iş birliği yapar. Üyelerinin ve kardeş kurumların ticari teşebbüslerine yönelik indirimler ve iktisadi dayanışma ağları kurar.',
      icon: FileText,
    },
  ]

  const ilkeler = [
    {
      id: 1,
      title: isRTL ? 'معيار الكتاب والسنة' : 'Kur\'an ve Sünnet Ölçüsü',
      desc: isRTL
        ? 'يحق لكل من يجعل القرآن والسنة مقياساً في حياته ويحمل هم الدعوة أن ينال شرف عضوية الوقف.'
        : 'Hayatında Kur\'an ve Sünneti ölçü alan ve daveti önemseyen herkes İslami Davet Vakfı\'na üye olabilir.',
    },
    {
      id: 2,
      title: isRTL ? 'صيانة الدين والوطن والأمة' : 'Dine, Vatana ve Millete Sahip Çıkma',
      desc: isRTL
        ? 'أعضاء الوقف يحمون دينهم ووطنهم وأمتهم، ويعتبرون ذلك ثابتاً وقيمة عليا مشتركة.'
        : 'İslami Davet Vakfı üyeleri dinine, vatanına, milletine sahip çıkar ve bunu vazgeçilmez bir ortak değer kabul eder.',
    },
    {
      id: 3,
      title: isRTL ? 'نظام التزكية بالمرجعيات' : 'İki Eski Üye Referansı Kriteri',
      desc: isRTL
        ? 'يتقدم كل عضو جديد بطلب العضوية مقروناً بتزكية اثنين من الأعضاء القدامى لحفظ نقاء الصف.'
        : 'Her yeni üye iki eski üyenin referansı ile üyeliğe müracaat eder; kurumsal nitelik ve güven bu yolla teminat altına alınır.',
    },
    {
      id: 4,
      title: isRTL ? 'تعهد ضم كفاءات جديدة سنوياً' : 'Yılda En Az 3 Yeni Üye Kazandırma',
      desc: isRTL
        ? 'يتعهد كل عضو بالسعي المخلص لجلب 3 أعضاء أكفاء جدد على الأقل سنوياً لتوسيع دائرة الخير.'
        : 'Vakfın her üyesi yılda en az 3 yeni nitelikli üye getirmeyi kabul ve taahhüt ederek teşkilatı dinamik tutar.',
    },
    {
      id: 5,
      title: isRTL ? 'المشاركة الفاعلة والوفاء بالواجبات' : 'Çalışmalara Katılım ve Vazife Sorumluluğu',
      desc: isRTL
        ? 'حضور أنشطة الوقف وأداء المهام الموكلة للعضو واجب تنظيمي وأخلاقي لا تهاون فيه.'
        : 'İslami Davet Vakfı\'nın çalışmalarını önemseyip katılmak ve verilecek vazifeleri eksiksiz yerine getirmek üyelerimiz için zorunludur.',
    },
    {
      id: 6,
      title: isRTL ? 'البراءة من العصبية والشقاق' : 'Grupçuluk, Irkçılık ve Tefrikaya Ret',
      desc: isRTL
        ? 'يحرم قطعاً على الأعضاء ممارسة الحزبية المقيتة، أو العنصرية، أو الغيبة، أو التنازع المفسد.'
        : 'İslami Davet Vakfı üyeleri kimseye karşı grupçuluk, ayrımcılık, ırkçılık, tefrika, gıybet ve kısır münakaşa yapmaz.',
    },
    {
      id: 7,
      title: isRTL ? 'الاشتراكات المالية والشفافية' : 'Giriş ve Aylık Düzenli Aidat Taahhüdü',
      desc: isRTL
        ? 'يقدم كل عضو رسوم انتساب محددة ويسدد اشتراكه الشهري بانتظام دعماً للمسيرة الوقفية.'
        : 'Her üyemiz vakfın tüzüğünde belirtilen giriş aidatını ve taahhüt ettiği aylık düzenli aidatını ödeyerek vakfı destekler.',
    },
    {
      id: 8,
      title: isRTL ? 'الانضباط والامتثال للائحة' : 'Disiplin Kurulu ve Tüzük Denetimi',
      desc: isRTL
        ? 'في حال رصد أي مخالفة لأهداف الوقف ومبادئه، يُحال العضو للجنة الانضباط المختصة وفق اللائحة.'
        : 'Vakfın amaç ve ilkelerine uymayan durumları tespit edilen üyeler, tüzüğe uygun olarak Disiplin Kurulu\'na sevk edilir.',
    },
    {
      id: 9,
      title: isRTL ? 'الالتزام التام بالمبادئ الوقفية' : 'İlkelere Sadakat ve Tüzük Taahhüdü',
      desc: isRTL
        ? 'يوقع كافة الأعضاء على الالتزام الصارم بمبادئ الوقف ومواصلة الدرب بثبات وإخلاص.'
        : 'İslami Davet Vakfı\'nın üyeleri tüzüğümüzde yer alan tüm ilkelere gönülden bağlı olarak çalışmayı kabul ve taahhüt eder.',
    },
  ]

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Hero Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            {isRTL ? 'المنطلقات والمبادئ التأسيسية' : 'Kurumsal Tüzük & Vizyon'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'أهدافنا ومبادئنا الراسخة' : 'Amacımız ve Değişmez İlkelerimiz'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'تأسس وقف الدعوة الإسلامية الدولي لبناء منظومة دعوية عالمية محكمة، تستمد شرعيتها من الكتاب والسنة وتنطلق بروح الأخوة والاستقلالية.'
              : 'İslami Davet Vakfı, kişilere bağlı olmaksızın Kur\'an ve Sünnet rehberliğinde sevgi, samimiyet, istişare ve ilmi disiplinle ümmete hizmet etmek amacıyla kurulmuştur.'}
          </p>

          {/* Navigation Toggle Buttons */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={() => setActiveTab('purpose')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'purpose'
                  ? 'bg-[#00D4B2] text-[#080C10] shadow-[0_0_20px_rgba(0,212,178,0.3)]'
                  : 'bg-white/[0.04] text-[#94A3B8] hover:text-[#F0F6FC] border border-white/10'
              }`}
            >
              {isRTL ? 'أهداف الوقف (١١ بنداً)' : 'Vakfımızın Amacı (11 Madde)'}
            </button>
            <button
              onClick={() => setActiveTab('principles')}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === 'principles'
                  ? 'bg-[#00D4B2] text-[#080C10] shadow-[0_0_20px_rgba(0,212,178,0.3)]'
                  : 'bg-white/[0.04] text-[#94A3B8] hover:text-[#F0F6FC] border border-white/10'
              }`}
            >
              {isRTL ? 'مبادئنا الأساسية (٩ بنود)' : 'Vakfımızın İlkeleri (9 Madde)'}
            </button>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        
        {/* TAB 1: AMACIMIZ (11 Madde) */}
        {activeTab === 'purpose' && (
          <div id="amacimiz" className="space-y-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider block mb-1">
                {isRTL ? 'الوثيقة التأسيسية' : 'Resmi Tüzük Maddeleri'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC]">
                {isRTL ? 'الأهداف الاستراتيجية لوقف الدعوة الإسلامية الدولي' : 'Uluslararası İslami Davet Vakfı\'nın Amaçları'}
              </h2>
              <p className="text-sm text-[#94A3B8] mt-2">
                {isRTL
                  ? 'مستخلصة من الوثيقة الرسمية للوقف المحدثة في أرشيف العمل المؤسسي.'
                  : 'Vakfın güncel resmi tüzüğünde yer alan ve çalışmalarımıza yön veren 11 temel amaç:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {amaclar.map((item, idx) => {
                const Icon = item.icon
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="glass-card p-6 sm:p-7 relative overflow-hidden group hover:border-[#00D4B2]/40"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4B2]/10 border border-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2] shrink-0 font-mono font-bold text-base group-hover:bg-[#00D4B2]/20 transition-all">
                        {item.num}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-[#F0F6FC] group-hover:text-[#00D4B2] transition-colors mb-2.5">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] font-normal">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}

        {/* TAB 2: İLKELERİMİZ (9 Madde) */}
        {activeTab === 'principles' && (
          <div id="ilkelerimiz" className="space-y-10">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider block mb-1">
                {isRTL ? 'ميثاق الشرف الأخلاقي' : 'Vakıf Ahlakı ve Tüzük Şartları'}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#F0F6FC]">
                {isRTL ? 'المبادئ التسعة الحاكمة لحركة الوقف' : 'Uluslararası İslami Davet Vakfı\'nın İlkeleri'}
              </h2>
              <p className="text-sm text-[#94A3B8] mt-2">
                {isRTL
                  ? 'تسري هذه المبادئ على كل عضو منتسب وتحدد ملامح العمل الجماعي المنضبط.'
                  : 'Vakfımıza üye olan her ferdin benimsediği, tefrikadan uzak durmayı ve daveti hayat tarzı kılmayı emreden 9 temel ilke:'}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ilkeler.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  className="glass-card p-6 flex flex-col justify-between group hover:border-[#33DEC5]/40"
                >
                  <div>
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D4B2] font-bold text-sm mb-4">
                      #{item.id}
                    </div>
                    <h3 className="text-base font-bold text-[#F0F6FC] mb-2.5 group-hover:text-[#00D4B2] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.75]">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-white/5 flex items-center gap-1.5 text-xs text-[#00D4B2]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{isRTL ? 'مبدأ ملزم' : 'Bağlayıcı İlke'}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Tüzük İndir & Kurumsal İletişim Alt Kartı */}
        <div className="mt-16 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F0F6FC]">
              {isRTL ? 'الاطلاع على الهيكل التنظيمي واللجان' : 'Vakfımızın Yönetim ve Kurul Yapısını İnceleyin'}
            </h3>
            <p className="text-sm text-[#94A3B8] mt-1 max-w-xl">
              {isRTL
                ? 'تعرف على مجلس الإدارة، وهيئة الرقابة، والمجلس الاستشاري، ولجان التحكيم والانضباط.'
                : 'Yönetim Kurulu, Denetim Kurulu, İstişare Kurulu ve Tahkim Heyeti üyelerimizi ayrıntılı olarak görüntüleyebilirsiniz.'}
            </p>
          </div>
          <Link
            href="/organizasyon"
            className="btn-turquoise shrink-0"
          >
            <span>{isRTL ? 'الهيكل الإداري' : 'Yönetim ve Kurullarımız'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </div>
  )
}
