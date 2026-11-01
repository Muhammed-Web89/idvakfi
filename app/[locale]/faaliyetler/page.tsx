'use client'

import { useState, use } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useLocale } from 'next-intl'
import {
  BookOpen,
  HeartHandshake,
  UserPlus,
  ShieldBan,
  Users2,
  Library,
  Scale,
  Building2,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Globe
} from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import EducationIllustration from '@/components/illustrations/EducationIllustration'
import { Link } from '@/i18n/routing'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ActivitiesPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'
  const [activeTab, setActiveTab] = useState(0)

  const vazifeler = [
    {
      id: 0,
      title: isRTL ? 'طلب العلم المستمر والعمل بالدعوة' : 'İlmi Gelişim ve Küresel Davet',
      shortDesc: isRTL ? 'التعلم اليومي والعمل بما علمه الإنسان' : 'Her gün yeni bilgiler edinmek, amel etmek ve sevdiklerine tebliğ etmek',
      icon: BookOpen,
      fullText: isRTL
        ? 'يحرص أعضاء وقف الدعوة الإسلامية على اكتساب المعارف الشرعية والفكرية النافعة كل يوم، والعمل بما تعلموه مخلصين، ونقل هذا النور إلى دوائرهم القريبة. إن واجب كل عضو هو العمل الجاد ليفهم العالم حقيقة الإسلام ويعيش ببركته.'
        : 'İslami Davet Vakfı üyeleri her gün yeni bilgiler edinmeyi, bildiği ile ihlasla amel etmeyi ve bildiklerini sevdiklerine hikmetle anlatmayı en öncelikli vazife kabul eder. Üyelerimizin temel vazifesi, dünya çapında davet şuurunun anlaşılması, yaşanması ve insanlığa taşınmasıdır.',
      actionItems: isRTL
        ? [
            'المواظبة على القراءة الشرعية والفكرية اليومية',
            'تطبيق ما يتعلمه العضو في سلوكه وأخلاقه أولاً',
            'نقل الدعوة إلى الأهل والأصدقاء بالحكمة والموعظة الحسنة',
            'المشاركة في برامج إعداد الدعاة وتدريبهم بـ 15 لغة'
          ]
        : [
            'Her gün düzenli Kur\'an, sünnet ve ilmi kaynak okuması yapmak',
            'Öğrenilen hakikatlerle önce bizzat amel edip örnek şahsiyet olmak',
            'En yakın çevreden başlayarak hikmet ve sevgi diliyle tebliğde bulunmak',
            'Dünya dillerinde hazırlanan dijital davet materyallerini yaygınlaştırmak'
          ],
      quote: isRTL
        ? '«لأن يهدي الله بك رجلاً واحداً خير لك من حُمْر النَّعَم» — حديث شريف'
        : '«Senin vasıtanla bir kişinin hidayete kavuşması, senin için dünya ve içindekilerden daha hayırlıdır.» — Hadis-i Şerif',
    },
    {
      id: 1,
      title: isRTL ? 'حقوق الأخوة والتضامن الشامل' : 'Kardeşlik Hukuku ve Birlik Şuuru',
      shortDesc: isRTL ? 'صون حقوق المسلمين وستر عيوبهم' : 'Müslümanım diyen herkesi kardeş bilmek ve ayıpları araştırmamak',
      icon: HeartHandshake,
      fullText: isRTL
        ? 'أعضاء الوقف يحبون دينهم، ووطنهم، وأمتهم، وإخوانهم حباً صادقاً. يعتبرون كل من شهد أن لا إله إلا الله أخاً كريماً دون إقصاء أو تجريح. يطبقون حقوق الأخوة الإسلامية كاملة، ولا يتتبعون العورات، بل يسعون لجبر النقص وستر الزلات برحمة وتكامل.'
        : 'İslami Davet Vakfı\'nın üyeleri; dinini, milletini, vatanını ve kardeşlerini derin bir muhabbetle sever ve bu uğurda fedakarca çalışır. "Müslümanım" diyen herkesi istisnasız kardeş kabul eder; kimseyi dışlamaz veya ötekileştirmez. Aralarında İslam kardeşliği hukukunu bihakkın uygular. Kardeşlerinin eksikliklerini ve ayıplarını asla araştırmaz; varsa bir eksik, onu şefkatle telafi etmeye gayret eder.',
      actionItems: isRTL
        ? [
            'الاعتصام بحبل الله والابتعاد عن الشقاق والفرقة',
            'ستر عيوب المسلمين والدفاع عن كرامتهم في غيابهم',
            'المبادرة بالصلح وإصلاح ذات البين عند أي خلاف',
            'بناء جسور التكافل المادي والمعنوي مع كافة الإخوة'
          ]
        : [
            'Ümmetin her bir ferdine hürmet ve şefkatle yaklaşmak',
            'Gıybet, tecessüs ve kusur aramaktan titizlikle sakınmak',
            'Müminler arasında ihtilaf çıktığında yapıcı ve uzlaştırıcı olmak',
            'Kardeşinin darlığında maddi ve manevi olarak yanında durmak'
          ],
      quote: isRTL
        ? '«المسلم أخو المسلم، لا يظلمه ولا يسلمه» — حديث شريف'
        : '«Müslüman müslümanın kardeşidir; ona zulmetmez, onu tehlikede yalnız bırakmaz.» — Hadis-i Şerif',
    },
    {
      id: 2,
      title: isRTL ? 'الاشتراك المالي وضم ٣ أعضاء سنوياً' : 'Teşkilatlanma ve Yıllık 3 Yeni Üye',
      shortDesc: isRTL ? 'توسيع الصف بالاشتراك وبناء الكفاءات' : 'Vakfa aidat vermek ve her yıl en az 3 nitelikli yeni üye kazandırmak',
      icon: UserPlus,
      fullText: isRTL
        ? 'يقوم كل عضو بدفع اشتراكه المالي المنتظم لدعم ميزانية الدعوة المستقلة، ويعتبر واجباً أساسياً عليه أن يسعى لضم ثلاثة أعضاء مؤهلين وأمناء على الأقل سنوياً لتعزيز مسيرة الوقف وضمان استمرار تجدد دماء العمل المؤسسي.'
        : 'Her üyemiz vakfımızın bağımsız faaliyetlerini sürdürebilmesi için düzenli aidat verir. Ayrıca her yıl en az 3 yeni, ahlaklı ve liyakatli üyeyi vakfımıza kazandırmayı kutlu bir vazife bilir. Böylece kurumsal yapı sürekli genç, dinamik ve donanımlı kalır.',
      actionItems: isRTL
        ? [
            'الانتظام في سداد الالتزامات المالية والاشتراكات الوقفية',
            'البحث عن الشخصيات المخلصة والمؤثرة لدعوتها للعضوية',
            'تزكية الأعضاء الجدد بمسؤولية وفق نظام المرجعيات',
            'مرافقة الأعضاء الجدد وتأهيلهم لخدمة أهداف الوقف'
          ]
        : [
            'Aylık taahhüt edilen aidatları aksatmadan ifa etmek',
            'Çevresindeki ilim, ahlak ve aksiyon ehli fertleri vakfa davet etmek',
            'Yeni üye referansında samimiyet ve liyakati esas almak',
            'Vakfa yeni katılan kardeşlerin oryantasyon ve eğitimine destek olmak'
          ],
      quote: isRTL
        ? '«وتعاونوا على البر والتقوى ولا تعاونوا على الإثم والعدوان» — المائدة: ٢'
        : '«İyilik ve takva üzerinde yardımlaşın, günah ve düşmanlıkta yardımlaşmayın.» — Mâide: 2',
    },
    {
      id: 3,
      title: isRTL ? 'الاعتصام ونبذ التفرق والمراء' : 'Tefrikadan ve Münakaşadan Uzak Durma',
      shortDesc: isRTL ? 'ترك الحزبية والعنصرية والجدال العقيم' : 'Grupçuluk, ırkçılık, ayrımcılık ve haklı dahi olsa münakaşayı terk etmek',
      icon: ShieldBan,
      fullText: isRTL
        ? 'أعضاء وقف الدعوة الإسلامية ينأون بأنفسهم عن كافة أشكال الفرقة والتحزب والعصبية القومية أو الإقليمية. يمتنعون عن الخوض في أعراض الناس، ويتركون المراء والجدال العقيم حتى وإن كانوا على حق، حرصاً على جمع كلمة المسلمين وطهارة القلوب.'
        : 'İslami Davet Vakfı üyeleri tefrikadan, kutuplaşmadan ve ayrıştırıcı dilden fersah fersah uzak durur; asla kimsenin aleyhinde konuşmazlar. Grupçuluk, ırkçılık, bölgecilik ve mezhep taassubundan sakınırlar. Haklı dahi olsalar gönül kırıcı ve kısır münakaşalardan uzak durarak kardeşlik hukukunu korurlar.',
      actionItems: isRTL
        ? [
            'تجنب الخصومات العقيمة والجدل على منصات التواصل',
            'الترفع عن النزعات العرقية أو الفئوية الضيقة',
            'نشر ثقافة الحوار الهادئ والإنصاف مع المخالفين',
            'صيانة لسان الداعية عن الغيبة والطعن والهمز واللمز'
          ]
        : [
            'Sosyal medyada ve meclislerde kısır tartışmalara girmemek',
            'Irk, coğrafya veya cemaat asabiyetine asla prim vermemek',
            'Farklı meşrep ve görüşteki Müslümanlara hüsn-ü zanla bakmak',
            'Dili dedikodudan, gıybetten ve polemiklerden muhafaza etmek'
          ],
      quote: isRTL
        ? '«أنا زعيم ببيت في رَبَضِ الجنة لمن ترك المِرَاءَ وإن كان مُحِقّاً» — حديث شريف'
        : '«Haklı olduğu halde münakaşayı terk eden kimseye cennetin kenarında bir köşk verileceğine kefilim.» — Hadis-i Şerif',
    },
    {
      id: 4,
      title: isRTL ? 'التلاقي في المناسبات وإكرام الضيف' : 'Özel Günler, Sohbet ve İkram',
      shortDesc: isRTL ? 'التواجد في الأفراح والأتراح والمواسم الفاضلة' : 'Cenaze, düğün, bayram, kandil ve istişarelerde buluşup kaynaşmak',
      icon: Users2,
      fullText: isRTL
        ? 'يولي أعضاء الوقف أهمية بالغة للاجتماع في الجنائز، والأفراح، والأعياد، ومواسم الفضل، واللقاءات التشاورية. يجعلون من المجالس الطيبة والضيافة الكريمة مناسبة عظمى للتعارف وتوطيد أواصر المودة وخدمة وحدة الأمة الإسلامية.'
        : 'İslami Davet Vakfı üyeleri cenaze, düğün, bayram, kandil ve periyodik toplantı günlerinde bir araya gelmeyi canla başla önemser. Bu buluşmalarda ilmi sohbeti, muhabbeti ve ikramı bereket vesilesi kabul ederler. Bir araya gelmeyi tanışmaya, kaynaşmaya ve ümmetin birliğine harç kılarlar.',
      actionItems: isRTL
        ? [
            'حضور مجالس العزاء وتشييع الجنائز ومواساة المصابين',
            'مشاركة الإخوة في أفراحهم ومناسباتهم الاجتماعية',
            'إحياء ليالي الأعياد والمواسم المباركة بالطاعات الجماعية',
            'إكرام الضيوف وعمارة البيوت والمراكز بالمجالس الإيمانية'
          ]
        : [
            'Cenazelere katılıp taziye ve vefa borcunu yerine getirmek',
            'Kardeşlerin sevinçli düğün ve müjdeli günlerini paylaşmak',
            'Bayram ve kandil günlerinde ziyaretleşip helalleşmek',
            'Sohbet halkalarında ikram kültürünü ihya ederek kaynaşmayı artırmak'
          ],
      quote: isRTL
        ? '«يا أيها الناس، أفشوا السلام، وأطعموا الطعام، وصلوا الأرحام» — حديث شريف'
        : '«Ey insanlar! Selamı yayın, yemek yedirin, akrabalık bağlarını gözetin...» — Hadis-i Şerif',
    },
    {
      id: 5,
      title: isRTL ? 'إحياء ثقافة القراءة ونشر المطبوعات' : 'Kitap Okuma ve Yayın Seferberliği',
      shortDesc: isRTL ? 'قراءة إصدارات الوقف وإقامة حلقات العلم' : 'Vakfın kitaplarını okumak, yaşamak ve çevresinde kitap günleri düzenlemek',
      icon: Library,
      fullText: isRTL
        ? 'يؤمن أعضاء الوقف بأن العلم هو أساس الدعوة الراشدة. يحرص كل عضو على اقتناء إصدارات الوقف وقراءتها وتطبيق مضامينها في حياته اليومية. كما ينظم الأعضاء حلقات لقراءة الكتب والمناقشات الفكرية في أحيائهم وبيئاتهم لنشر الثقافة الإسلامية الأصيلة.'
        : 'İslami Davet Vakfı üyeleri ilmi ve sahih bilgiyi her şeyin üstünde tutar. Vakfın neşrettiği kitapları edinir, dikkatle okur ve öğrendiklerini yaşamayı gaye bilir. Her üyemiz kendi çevresinde kitap okuma günleri düzenler, gençlere okuma alışkanlığı kazandırır ve ilmi sohbetlerle cehalete karşı set olur.',
      actionItems: isRTL
        ? [
            'اقتناء وقراءة الكتب والمطبوعات الصادرة عن دار النشر التابعة للوقف',
            'تأسيس حلقات قراءة أسبوعية في المنازل والمراكز المجتمعية',
            'تشجيع الأجيال الشابة على القراءة والبحث العلمي الرصين',
            'المساهمة في ترجمة ونشر المؤلفات القيمة بـ 15 لغة عالمية'
          ]
        : [
            'Vakfımızın hazırladığı telif ve tercüme eserleri kütüphanesine katmak',
            'Aile ve dost meclislerinde haftalık kitap tahlil günleri başlatmak',
            'Gençlere kitap hediye ederek ilim sevgisini aşılamak',
            'Yayınlanan makale ve eserlerin dijital mecralarda yayılmasını sağlamak'
          ],
      quote: isRTL
        ? '«اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ» — العلق: ١'
        : '«Yaratan Rabbinin adıyla oku!» — Alak: 1',
    },
    {
      id: 6,
      title: isRTL ? 'الكسب الحلال والنزاهة الاقتصادية' : 'Helal Lokma ve İktisadi Ahlak',
      shortDesc: isRTL ? 'تحري الحلال والابتعاد عن كل مكسب مشبوه' : 'Helal işler yapmak, haramlardan sakınmak ve meşru bir kazanç sahibi olmak',
      icon: Scale,
      fullText: isRTL
        ? 'اللقمة الحلال هي عمود استقامة الداعية ونور قلبه. يحرص أعضاء الوقف على أن تكون تجارتهم وأعمالهم مبنية على الحلال المحض، مجتنبين الربا، والغش، والاحتكار، وسائر المنهيات الشرعية. يجب أن يكون لكل عضو عمل مشروع ومصدر رزق شريف يغنيه عن المسألة.'
        : 'İslami Davet Vakfı\'nın üyeleri helal lokmayı ibadetin ve davetin ruhu kabul eder. Yalnızca dinimizin meşru kıldığı helal işlerle meşgul olur; haram, faiz, rüşvet ve şüpheli kazançlardan titizlikle kaçınır. Her üyemizin meşru bir mesleği, helal bir kazancı ve alnının teriyle kazandığı bir rızkı olmalıdır.',
      actionItems: isRTL
        ? [
            'تحري الحلال في كل معاملة مالية وتجنب الشبهات والربا',
            'الالتزام بالصدق والأمانة في التجارة والوظيفة والحرف',
            'مساعدة الشباب في إيجاد فرص عمل شريفة ومشاريع حلال',
            'تزكية الأموال بأداء الزكاة والصدقات والإنفاق في وجوه الخير'
          ]
        : [
            'Ticarette ve meslekte sıdk, emanet ve helal ölçülerine riayet etmek',
            'Faiz, haksız kazanç ve gayrimeşru muamelelere asla bulaşmamak',
            'Helal kazanç bilincini ailede ve cemiyette canlı tutmak',
            'Genç müteşebbislere helal iş sahaları açmak ve desteklemek'
          ],
      quote: isRTL
        ? '«طلب الحلال فريضة بعد الفريضة» — حديث شريف'
        : '«Helal kazanç aramak, farzlardan sonra farzdır.» — Hadis-i Şerif',
    },
    {
      id: 7,
      title: isRTL ? 'العضوية المؤسسية والتكامل التجاري' : 'Kurumsal Üyelik ve Güç Birliği',
      shortDesc: isRTL ? 'ربط الشركات والمؤسسات برسالة الوقف' : 'Kurumların vakfa kurumsal üye olması ve iş birlikleriyle ekosistem oluşturulması',
      icon: Building2,
      fullText: isRTL
        ? 'يمكن لمؤسسات الأعضاء وشركاتهم التجارية أن تنال العضوية المؤسسية في الوقف. يتحمل كل عضو مسؤولية تعريف مؤسسة جديدة ودعوتها للانضمام، حيث ينسق الوقف برامج تعاون مشتركة ويبرم اتفاقيات تسهيلات وخصومات متبادلة لصالح الأنشطة الخيرية.'
        : 'İslami Davet Vakfı üyelerinin kendi ticari şirketleri, dernekleri ve kurumları da vakfımıza "Kurumsal Üye" olabilirler. Her üyemiz en az bir kurumsal üye bulup vakıf ailesine katmaktan sorumludur. Vakfımız bu kurumsal üyelerimizle ortak projeler geliştirir, indirim anlaşmaları ve ticari güç birliği sağlar.',
      actionItems: isRTL
        ? [
            'تسجيل المؤسسات والشركات الخاصة تحت مظلة العضوية المؤسسية',
            'تقديم خصومات ومزايا حصرية لأعضاء الوقف ومشاريعه',
            'تمويل المشروعات الدعوية من أرباح المؤسسات الشريكة',
            'بناء شبكة تجارية واقتصادية نزيهة تخدم تطلعات الأمة'
          ]
        : [
            'Sahip olunan ya da yönetilen şirketleri vakfa kurumsal üye yapmak',
            'Üyeler arasında karşılıklı ticari indirim ve dayanışma sağlamak',
            'Vakfımızın yayın ve kamp gibi projelerine kurumsal sponsorluk vermek',
            'Kardeş STK ve müesseselerle stratejik hizmet protokolleri imzalamak'
          ],
      quote: isRTL
        ? '«المؤمن للمؤمن كالبنيان يشد بعضه بعضاً» — حديث شريف'
        : '«Müminin müminle ilişkisi, parçaları birbirini kenetleyen sağlam bir bina gibidir.» — Hadis-i Şerif',
    },
  ]

  const currentVazife = vazifeler[activeTab]
  const CurrentIcon = currentVazife.icon

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header Banner */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Globe className="w-3.5 h-3.5" />
            {isRTL ? 'منهاج العمل الميداني' : 'Saha Çalışmaları & Rehber'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'أنشطتنا وواجبات أعضاء الوقف' : 'Faaliyetlerimiz ve Üye Vazifelerimiz'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'تحدد هذه اللائحة واجبات كل داغية ينتمي إلى وقف الدعوة الإسلامية الدولي، لتكون أعمالنا اليومية منسجمة مع غاية كبرى تخدم أمتنا الإنسانية.'
              : 'Vakfımızın güncel tüzüğünde belirlenen, her üyemizin hayatına tatbik etmekle mükellef olduğu 8 ana vazife ve kurumsal faaliyet alanımız.'}
          </p>
        </div>
      </section>

      {/* Main Interactive Dikey Sekmeler (Vertical Tabs) Area */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Dikey Sekmeler (Vertical Tabs Navigation - 5 Cols) */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-semibold text-[#00D4B2] uppercase tracking-wider px-2 mb-3">
              {isRTL ? 'اختر الواجب أو النشاط' : 'Vazife / Faaliyet Alanını Seçin'}
            </div>

            {vazifeler.map((item) => {
              const Icon = item.icon
              const isSelected = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-xl border transition-all duration-200 flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#00D4B2]/15 to-white/[0.04] border-[#00D4B2] shadow-[0_0_25px_rgba(0,212,178,0.2)]'
                      : 'bg-white/[0.02] border-white/5 hover:bg-white/[0.05] hover:border-white/10'
                  }`}
                >
                  <div className="flex items-center gap-3.5 min-w-0">
                    <div
                      className={`w-11 h-11 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#00D4B2] text-[#080C10]'
                          : 'bg-white/[0.04] text-[#00D4B2]'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <div className={`text-sm sm:text-base font-bold truncate ${isSelected ? 'text-[#00D4B2]' : 'text-[#F0F6FC]'}`}>
                        {item.title}
                      </div>
                      <div className="text-xs text-[#94A3B8] truncate mt-0.5">
                        {item.shortDesc}
                      </div>
                    </div>
                  </div>

                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-all ${
                      isSelected
                        ? 'text-[#00D4B2] translate-x-1 opacity-100'
                        : 'text-[#64748B] opacity-40'
                    } ${isRTL ? 'rotate-180' : ''}`}
                  />
                </button>
              )
            })}
          </div>

          {/* Right Column: Tab Content Details & 2D Vector Graphics (7 Cols) */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 20 : -20 }}
                transition={{ duration: 0.35 }}
                className="glass-panel p-8 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden"
              >
                {/* Ambient Top Glow */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4B2]/10 rounded-full blur-3xl pointer-events-none" />

                {/* Top Badge & Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] shrink-0">
                    <CurrentIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[#00D4B2] tracking-wider uppercase">
                      {isRTL ? `البند رقم ${activeTab + 1}` : `Vazife No: 0${activeTab + 1}`}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#F0F6FC] tracking-tight">
                      {currentVazife.title}
                    </h2>
                  </div>
                </div>

                {/* Full Explanation Paragraph */}
                <div className="p-5 sm:p-6 rounded-xl bg-white/[0.02] border border-white/5 mb-8">
                  <p className="text-sm sm:text-base text-[#F0F6FC] leading-[1.85] font-normal">
                    {currentVazife.fullText}
                  </p>
                </div>

                {/* Action Items List */}
                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-wider text-[#00D4B2] font-semibold mb-4">
                    {isRTL ? 'إجراءات التطبيق العملية في الميدان' : 'Bu Vazifenin Sahadaki Pratik Uygulamaları'}
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentVazife.actionItems.map((act, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white/[0.02] border border-white/5 text-xs sm:text-sm text-[#94A3B8]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#00D4B2] shrink-0 mt-0.5" />
                        <span>{act}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Spiritual Quote Card */}
                <div className="p-4 rounded-xl bg-[#00D4B2]/08 border border-[#00D4B2]/20 flex items-center gap-3">
                  <Sparkles className="w-5 h-5 text-[#00D4B2] shrink-0" />
                  <p className="text-xs sm:text-sm font-medium text-[#33DEC5] italic">
                    {currentVazife.quote}
                  </p>
                </div>

                {/* Embedded 2D Illustration on First Tab */}
                {activeTab === 0 && (
                  <div className="mt-8 pt-6 border-t border-white/5 flex justify-center">
                    <EducationIllustration className="max-w-[280px]" />
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Bottom CTA to Membership */}
        <div className="mt-16 glass-card p-8 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-[#F0F6FC]">
              {isRTL ? 'هل تود الانضمام وتحمل شرف هذه الواجبات؟' : 'Bu Kutlu Vazifelerde Görev Almak İster misiniz?'}
            </h3>
            <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
              {isRTL
                ? 'قدم طلب عضويتك وتعرف على متطلبات الانتساب وشروط التزكية.'
                : 'Üyelik vasıflarını inceleyerek vakfımızın küresel davet ailesine müracaat edebilirsiniz.'}
            </p>
          </div>
          <Link href="/uyelik" className="btn-turquoise shrink-0">
            <span>{isRTL ? 'شروط العضوية' : 'Üyelik Vasıfları'}</span>
            <ArrowRight className={`w-4 h-4 ${isRTL ? 'rotate-180' : ''}`} />
          </Link>
        </div>

      </div>
    </div>
  )
}
