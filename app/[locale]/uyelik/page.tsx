'use client'

import { use } from 'react'
import { useLocale } from 'next-intl'
import { UserPlus, UserCheck, Shield, Wallet, Ban, TrendingUp, HandCoins } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function MembershipPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const steps = [
    {
      title: locale === 'ar' ? 'القبول المبدئي' : 'İlkesel Başvuru',
      desc: locale === 'ar'
        ? 'يمكن لكل من يعتمد القرآن والسنة كمقياس في حياته ويحمل وعي الدعوة أن يتقدم بطلب عضوية.'
        : 'Hayatında Kuran ve Sünneti ölçü alan ve davet şuuruna sahip her birey üyeliğe müracaat edebilir.',
      icon: UserPlus
    },
    {
      title: locale === 'ar' ? 'نظام التزكية (المرجعية)' : 'İki Referans Şartı',
      desc: locale === 'ar'
        ? 'يتطلب قبول العضو الجديد تزكيته وتوقيعه من قبل عضوين قديمين في الوقف لضمان نقاء الهيكل.'
        : 'Yeni üyenin kabulü, mevcut iki eski üyenin referansı ile gerçekleştirilir. Bu sistem, kurum kültürünün niteliğini korur.',
      icon: UserCheck
    },
    {
      title: locale === 'ar' ? 'المسؤولية الجماعية' : 'Kolektif Oto-Kontrol',
      desc: locale === 'ar'
        ? 'الأعضاء المزكون يتحملون المسؤولية التنظيمية عن العضو الجديد، مما يؤدي إلى الحفاظ على تماسك الوقف.'
        : 'Referans olan üyeler, adayın vakıf ilkelerine uyumu konusunda taahhüt altına girer. Bu durum, kurumsal oto-kontrolü sağlar.',
      icon: Shield
    }
  ]

  const duties = [
    {
      title: locale === 'ar' ? 'التنمية المعرفية والعملية' : 'İlmi Gelişim ve Amel',
      desc: locale === 'ar'
        ? 'السعي اليومي للحصول على معرفة جديدة، العمل بما عُلم، ودعوة الأقربين (الأقارب والأصدقاء) كأولوية.'
        : 'Her gün yeni bilgiler edinmek, bildiği ile amel etmek ve bu doğrultuda en yakın sosyal çevresinden başlayarak tebliği yaymak.'
    },
    {
      title: locale === 'ar' ? 'المشاركة والتعليم' : 'Eğitim Faaliyetlerine Katılım',
      desc: locale === 'ar'
        ? 'متابعة وقراءة إصدارات الوقف، والمشاركة في الأنشطة التعليمية وحلقات التكوين كواجب تنظيمي.'
        : 'Vakıf yayınlarını edinip okumak, kurumsal dil birliği sağlamak ve vakıf eğitim çalışmalarına aktif katılım sağlamak.'
    },
    {
      title: locale === 'ar' ? 'التكافل واللقاءات الاجتماعية' : 'Sosyal Dayanışma ve Kaynaşma',
      desc: locale === 'ar'
        ? 'الحرص على التواجد في المناسبات والأعياد والجنائز لتوطيد الروابط الأخلاقية والاجتماعية.'
        : 'Cenaze, düğün, bayram, kandil gibi periyodik toplantılarda bir araya gelerek üyeler arası kaynaşmayı ve birliği canlı tutmak.'
    },
    {
      title: locale === 'ar' ? 'الالتزام بالعضوية المؤسسية' : 'Kurumsal Üyelik Sorumluluğu',
      desc: locale === 'ar'
        ? 'إمكانية تسجيل الشركات والمؤسسات الخاصة بالأعضاء كأعضاء مؤسسيين، والسعي لجلب أعضاء مؤسسيين جدد.'
        : 'Üyelerin kendi işletmelerini vakfa "kurumsal üye" olarak kaydetmeleri ve yeni kurumsal üyeler bularak sektörel ağı genişletmeleri.'
    }
  ]

  const prohibited = [
    {
      behavior: locale === 'ar' ? 'التحزب والفرقة' : 'Tefrika ve Grupçuluk',
      risk: locale === 'ar' ? 'تدمير روح الفريق وتفكيك الهيكل الداخلي.' : 'Ekip ruhunu yok eden ve kurumsal bütünlüğü içeriden kemiren çürüme faktörüdür.'
    },
    {
      behavior: locale === 'ar' ? 'العنصرية والقبلية' : 'Irkçılık ve Ayrımcılık',
      risk: locale === 'ar' ? 'انتهاك مبدأ الأخوة العالمي وضرب صورة الوقف.' : 'İslam\'ın evrensel kardeşlik ilkesine ve vakfın dış itibar yönetimine doğrudan saldırıdır.'
    },
    {
      behavior: locale === 'ar' ? 'الغيبة والجدل العقيم' : 'Gıybet ve Münakaşa',
      risk: locale === 'ar' ? 'إهدار الطاقات في صراعات بدلاً من الدعوة والخدمة.' : 'Kurum içi güveni zehirler ve stratejik enerjinin hizmet yerine iç çekişmelere harcanmasına yol açar.'
    }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'شروط العضوية والواجبات' : 'İSDAV Üyelik Şartları ve Stratejik Vazifeler'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'شروط العضوية' : 'Üyelik'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'إنضمامك إلينا ليس مجرد تسجيل، بل هو عهد مشترك للمساهمة في بناء جيل يحمل أمانة العلم والدعوة.'
              : 'Vakıf üyeliği; bilginin derinleştiği, eylemin karakter kazandığı ve toplumsal tebliğin sistematik bir yapıya kavuştuğu çok katmanlı bir sorumluluk alanıdır.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-20">
        
        {/* Section 1: Referral system */}
        <section>
          <SectionTitle
            tag={locale === 'ar' ? 'بروتوكول القبول' : 'Kabul Protokolü'}
            title={locale === 'ar' ? 'نظام التزكية والأمان التنظيمي' : 'Üye Kabulü ve Referans Sistemi'}
            align="center"
            className="mb-12"
          />

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E2DA] rounded-xl p-8 shadow-sm relative overflow-hidden flex flex-col items-center text-center"
                >
                  <div className="absolute top-0 left-0 right-0 h-1 bg-[#1B4D4D]" />
                  <div className="w-12 h-12 rounded-full bg-[rgba(27,77,77,0.08)] flex items-center justify-center text-[#1B4D4D] mb-6 mt-2">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-amiri font-bold text-xl text-[#1A1A1A] mb-3">{step.title}</h3>
                  <p className="font-inter text-[#5C5C5C] text-xs leading-relaxed">{step.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        {/* Section 2: KPIs & Commitments */}
        <section className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Key KPIs */}
          <div className="lg:col-span-5 bg-[#0F2E2E] text-white rounded-xl p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden">
            <IslamicPattern opacity={0.04} color="white" size={80} />
            <div className="relative z-10">
              <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs">
                {locale === 'ar' ? 'مؤشرات الأداء الأساسية' : 'Temel Performans Göstergeleri'}
              </span>
              <h3 className="font-amiri font-bold text-2xl mt-2 text-white mb-6">
                {locale === 'ar' ? 'مؤشر النمو السنوي للالتزام' : 'Sayısal Büyüme ve KPI Hedefleri'}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white text-xl font-bold font-amiri flex-shrink-0">
                    3
                  </div>
                  <div className="font-inter text-xs text-white/70 leading-relaxed">
                    {locale === 'ar'
                      ? 'يلتزم كل عضو بجلب ما لا يقل عن 3 أعضاء جدد سنوياً لضمان التوسع الجغرافي والعددي للدعوة.'
                      : 'Her üyenin takvim yılı içerisinde en az 3 yeni üye kazandırması, vakfın büyüme hızı için belirlenmiş bir performans standardıdır.'}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-white flex-shrink-0">
                    <Wallet className="w-5 h-5 text-[#3D8B8B]" />
                  </div>
                  <div className="font-inter text-xs text-white/70 leading-relaxed">
                    {locale === 'ar'
                      ? 'الالتزام بدفع رسوم الدخول والاشتراك الشهري بانتظام لضمان الاستقلال المالي والسيادة اللوجستية.'
                      : 'Düzenli giriş aidatı ve taahhüt edilen aylık aidat ödemesi, vakfın dışa bağımsızlığının ve küresel operasyonlarının temel şartıdır.'}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-white/10 text-xs text-[#3D8B8B] font-inter font-semibold flex items-center gap-2">
              <TrendingUp className="w-4 h-4" />
              {locale === 'ar' ? 'نموذج التوسع العضوي المستمر' : 'Performans Odaklı Büyüme'}
            </div>
          </div>

          {/* Member Duties */}
          <div className="lg:col-span-7 bg-white border border-[#E5E2DA] rounded-xl p-8 sm:p-10 shadow-sm flex flex-col justify-between">
            <div>
              <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-8">
                {locale === 'ar' ? 'الواجبات والمهام الفردية للأعضاء' : 'Üye Vazifeleri ve Görev Disiplini'}
              </h3>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {duties.map((duty, idx) => (
                  <div key={idx} className="space-y-2">
                    <h4 className="font-inter font-bold text-sm text-[#1B4D4D] flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1B4D4D]" />
                      {duty.title}
                    </h4>
                    <p className="font-inter text-[#5C5C5C] text-xs leading-relaxed">{duty.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Prohibited and zero tolerance behaviors */}
        <section className="bg-white border border-red-500/20 rounded-xl p-8 sm:p-12 shadow-sm">
          <SectionTitle
            tag={locale === 'ar' ? 'الضوابط الأخلاقية' : 'Etik Sınırlar'}
            title={locale === 'ar' ? 'سلوكيات مرفوضة وسياسة عدم التسامح' : 'Davranış Kodları ve Sıfır Tolerans'}
            align="center"
            className="mb-8"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {prohibited.map((item, idx) => (
              <div key={idx} className="bg-red-50/50 border border-red-100 rounded-xl p-6 relative">
                <div className="w-8 h-8 rounded-full bg-red-100 text-red-600 flex items-center justify-center mb-4">
                  <Ban className="w-4 h-4" />
                </div>
                <h4 className="font-inter font-bold text-red-800 text-sm mb-2">{item.behavior}</h4>
                <p className="font-inter text-gray-600 text-xs leading-relaxed">{item.risk}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Economic Morals */}
        <section className="bg-[#0F2E2E] text-white rounded-xl p-8 sm:p-12 relative overflow-hidden">
          <IslamicPattern opacity={0.04} color="white" size={100} />
          <div className="grid lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-5">
              <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs">
                {locale === 'ar' ? 'الاقتصاد الأخلاقي' : 'İktisadi Ahlak'}
              </span>
              <h3 className="font-amiri font-bold text-3xl mt-2 text-white mb-4">
                {locale === 'ar' ? 'الدائرة الاقتصادية المغلقة للأخوة' : 'Kapalı Devre İktisadi Döngü'}
              </h3>
              <p className="font-inter text-white/70 text-xs leading-relaxed mb-6">
                {locale === 'ar'
                  ? 'يعمل الوقف على تأسيس شبكة اقتصادية تضامنية تعزز العمل الحر والكسب الحلال، وتمنح الأولوية في التبادل التجاري والمشتريات لشركات أعضاء الوقف كنوع من التحصين المالي والاقتصادي.'
                  : 'Helal kazanç bilinci ve helal iş yapma zorunluluğu, vakfın bağımsızlığının ve üyelerin refahının temel taşıdır. Üyeler arasında kapalı devre ve güvene dayalı bir ekonomik ekosistem kurmak birincil stratejidir.'}
              </p>
            </div>

            <div className="lg:col-span-7 bg-white/5 border border-white/10 rounded-xl p-6 sm:p-8 space-y-6">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white/10 rounded-xl text-[#3D8B8B] flex-shrink-0">
                  <HandCoins className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white text-sm mb-1">
                    {locale === 'ar' ? 'بناء الدرع المالي' : 'İktisadi Zırh Oluşturma'}
                  </h4>
                  <p className="font-inter text-white/70 text-xs leading-relaxed">
                    {locale === 'ar'
                      ? 'إن تفضيل الإخوة في التجارة والمعاملات يمنع تسرب الثروة والاعتماد على الجهات الخارجية، مما يؤمن استقلال الوقف وحرية قراره.'
                      : 'Üyelerin ticari faaliyetlerde birbirlerini önceliklendirmesi sermayenin vakıf içinde devridaimini sağlayarak dış bağımlılığı minimize eder.'}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start border-t border-white/5 pt-6">
                <div className="p-3 bg-white/10 rounded-xl text-[#3D8B8B] flex-shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-inter font-bold text-white text-sm mb-1">
                    {locale === 'ar' ? 'التشجيع والتقدير' : 'Dahili Teşvik ve Plaket Sistemleri'}
                  </h4>
                  <p className="font-inter text-white/70 text-xs leading-relaxed">
                    {locale === 'ar'
                      ? 'يمنح الوقف شهادات ودروع تقديرية للأعضاء الذين يساهمون بفاعلية في دفع الاستهلاك الأخلاقي وإنجاح الشراكات البينية.'
                      : 'Başarılı üye işletmeleriyle iskonto anlaşmaları yapılır. Bu döngüde yüksek uyum ve başarı gösteren üyelere plaket takdim edilir.'}
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
