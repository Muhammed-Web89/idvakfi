'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Users, ShieldCheck, Star, Award, Phone } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function OrganizationPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'
  
  const [activeTab, setActiveTab] = useState<'board' | 'committees' | 'advisory' | 'founders'>('board')
  const [founderFilter, setFounderFilter] = useState<'all' | 'academia' | 'business' | 'law' | 'culture' | 'other'>('all')

  const boardMembers = [
    { name: 'Ömer Faruk Ocakzade', role: 'Genel Başkan', phone: '0549 462 74 17', city: 'İSTANBUL' },
    { name: 'Yusuf Temizsoy', role: 'Başkan Vekili', phone: '0546 213 28 62', city: 'İSTANBUL' },
    { name: 'M. Zahid Gürsoy', role: 'Başkan Yardımcısı', phone: '0532 658 11 33', city: 'İSTANBUL' },
    { name: 'Celal Bucak', role: 'Ekonomik İşlerden Sorumlu Başkan Yardımcısı', phone: '0533 236 49 11', city: 'İSTANBUL' },
    { name: 'Mürsel Sürücü', role: 'Teşkilatlanmadan Sorumlu Başkan Yardımcısı', phone: '0532 062 71 41', city: 'İSTANBUL' },
    { name: 'Cemil Arslan', role: 'Aileden Sorumlu Başkan Yardımcısı (Öğretmen)', phone: '0505 649 79 02', city: 'İSTANBUL' },
    { name: 'Mehmet Arslan', role: 'Kardeş Kuruluşlardan Sorumlu Başkan Yardımcısı', phone: '0505 641 54 39', city: 'İSTANBUL' },
    { name: 'Yılmaz Madenoğlu', role: 'Eğitim İşlerinden Sorumlu Başkan Yardımcısı', phone: '0535 966 48 69', city: 'İSTANBUL' },
    { name: 'Yalçın Cebel', role: 'Finansmandan Sorumlu Başkan Yardımcısı', phone: '0537 636 06 06', city: 'İSTANBUL' },
    { name: 'Ömer Şener Keskin', role: 'Kurumsal Üyelerden Sorumlu Başkan Yardımcısı', phone: '0532 253 52 56', city: 'İSTANBUL' },
    { name: 'Süleyman Gülek', role: 'Davet Okulundan Sorumlu Başkan Yardımcısı', phone: '0541 388 97 06', city: 'İSTANBUL' },
    { name: 'Hacı Ahmet Eroğlu', role: 'Gayrimenkul İşlerinden Sorumlu Yönetim Kurulu Üyesi', phone: '0533 641 70 98', city: 'İSTANBUL' }
  ]

  const committees = [
    {
      title: 'Denetim Kurulu',
      desc: 'Mali ve idari süreçlerin şeffaflığını, vakıf mevzuatına ve iç tüzüğe uygunluğunu denetleyen bağımsız organ.',
      members: [
        { name: 'İhsan Bermekoğlu', role: 'Denetim Kurulu Başkanı', phone: '0544 303 19 04' },
        { name: 'Mehmet Emin Başpehlivan', role: 'Üye', phone: '0532 261 14 45' },
        { name: 'Ahmet Faruk Ocakzade', role: 'Üye', phone: '0506 177 12 27' }
      ]
    },
    {
      title: 'Disiplin Kurulu',
      desc: 'Üyelerin kurumsal etik ilkelere, tüzük maddelerine ve davranış kurallarına uyumunu denetleyen kurul.',
      members: [
        { name: 'Av. İsa Kandemir', role: 'Başkan / Hukukçu', phone: '0506 280 09 63' },
        { name: 'İhsan Bermekoğlu', role: 'Üye', phone: '0544 303 19 04' },
        { name: 'Murat Gürsoy', role: 'Üye', phone: '' }
      ]
    },
    {
      title: 'Tahkim Kurulu',
      desc: 'İdari, hukuki veya kişisel uyuşmazlıkların çözümünde nihai karar merci olarak işlev gören en yetkin kurul.',
      members: [
        { name: 'Doç. Süleyman Akdemir', role: 'Akademisyen / Hukukçu', phone: '0532 272 32 55' },
        { name: 'Av. İhsan Bermekoğlu', role: 'Hukukçu', phone: '0544 303 19 04' },
        { name: 'Av. Kâmil Özçelik', role: 'Hukukçu', phone: '0532 374 57 66' },
        { name: 'Ömer Faruk Ocakzade', role: 'Genel Başkan', phone: '0549 462 74 17' },
        { name: 'Yusuf Temizsoy', role: 'Başkan Vekili', phone: '0546 213 28 62' },
        { name: 'Murat Gürsoy', role: 'Üye', phone: '' }
      ]
    }
  ]

  const advisory = {
    advisors: [
      { name: 'İrşadi Akbaş', role: 'İdari Baş Danışman', phone: '0530 960 66 17' },
      { name: 'Hasan Ali Coşkun', role: 'İktisadi Konularda Baş Danışman', phone: '' },
      { name: 'Metin Aşar', role: 'Stratejik Siyasi Danışman (Cumhurbaşkanı Danışmanı & İş Adamı)', phone: '0532 467 68 55' }
    ],
    council: [
      { name: 'Prof. Dr. Orhan Çeker', role: 'Akademik Üye (İslam Hukuku)', phone: '0555 393 87 82' },
      { name: 'Prof. Dr. Saim Ayaz', role: 'Akademik Üye', phone: '0532 387 57 01' },
      { name: 'Prof. Dr. Musa Kazım', role: 'Akademik Üye', phone: '0532 168 47 41' },
      { name: 'Doç. Dr. Abdulkadir Turan', role: 'Akademik Üye (Araştırmacı Yazar)', phone: '0505 663 45 30' },
      { name: 'Ahmet Bulut', role: 'Medya & Tebliğ Üyesi (Namaz Platformu Başkanı)', phone: '0505 610 50 44' },
      { name: 'Rüstem Altınbaş', role: 'İletişim & Danışma Üyesi', phone: '0532 321 21 49' },
      { name: 'Yaşar Yıldırım', role: 'Üye', phone: '' },
      { name: 'Şafak Soy', role: 'Üye (Türkmen Dernek Federasyonu Temsilcisi)', phone: '' },
      { name: 'Veli Kamiloğlu', role: 'Uluslararası Temsilci (Güney Kore/Finlandiya)', phone: '+358 40 4769341' }
    ],
    spiritual: [
      { name: 'Seyyit Ünal Esmer', role: 'Şeyh', lineage: 'Nakşi-Kadiri', phone: '0544 546 55 10' },
      { name: 'Mesut Arslan', role: 'Şeyh', lineage: 'Nakşi', phone: '0532 354 68 14' },
      { name: 'Fazlı Arslan', role: 'Şeyh', lineage: 'Nakşi', phone: '0533 611 06 05' },
      { name: 'Seyyit Hüseyin Köse Balaban', role: 'Şeyh', lineage: 'Nakşi-Kadiri', phone: '0533 656 70 46' },
      { name: 'Seyyit Ali Paşa Yazan', role: 'Şeyh', lineage: 'Şazeli', phone: '0543 883 34 07' },
      { name: 'Seyyit Muhammet Tevfik Öztürk', role: 'Şeyh', lineage: 'Kadiri-Rufai', phone: '0538 356 02 02' },
      { name: 'Yakup Yıldırım', role: 'Şeyh', lineage: 'Nakşi', phone: '0535 472 77 94' },
      { name: 'Yusuf Ezel', role: 'Şeyh', lineage: 'Nakşi', phone: '0531 232 50 61' },
      { name: 'Abdülhamid Coşkun', role: 'Şeyh', lineage: 'el Kadiri ez Zaferi', phone: '0539 582 44 08' },
      { name: 'Abdullah Dağıstani', role: 'Şeyh (Onursal)', lineage: 'Nakşi', phone: '-' },
      { name: 'Şerafettin Dağıstani', role: 'Seyyit/Halife (Onursal)', lineage: 'Nakşi', phone: '-' },
      { name: 'Yusuf Temizsoy', role: 'Halife', lineage: 'Nakşi', phone: '0546 213 28 62' },
      { name: 'Cemal Aksakallı', role: 'Halife', lineage: 'Kadiri', phone: '0542 602 45 25' },
      { name: 'Ömer Faruk Ocakzade', role: 'Üye (Yönetim Temsilcisi)', lineage: 'Genel Koordinasyon', phone: '0549 462 74 17' }
    ]
  }

  const founders = [
    { name: 'Prof. Bilal Kemikli', category: 'academia', desc: 'Yüksek İstişare & Akademisyen', phone: '0535 399 51 44' },
    { name: 'Prof. Musa Kazım', category: 'academia', desc: 'Akademisyen', phone: '0532 168 47 41' },
    { name: 'Prof. Dr. Orhan Çeker', category: 'academia', desc: 'Akademisyen (İslam Hukuku)', phone: '0555 393 87 82' },
    { name: 'Prof. Dr. Saim Ayaz', category: 'academia', desc: 'Akademisyen', phone: '0532 387 57 01' },
    { name: 'Doç. Dr. Abdulkadir Turan', category: 'academia', desc: 'Akademisyen / Yazar', phone: '0505 663 45 30' },
    { name: 'Doç. Süleyman Akdemir', category: 'academia', desc: 'Akademisyen / Hukukçu', phone: '0532 272 32 55' },
    { name: 'Adnan Vatansever', category: 'academia', desc: 'Eğitimci', phone: '0543 445 27 84' },
    { name: 'Cemil Arslan', category: 'academia', desc: 'Öğretmen', phone: '0505 649 79 02' },
    { name: 'Hamit Ulçay', category: 'business', desc: 'Doktor & İş Adamı', phone: '0552 455 33 87' },
    { name: 'Mükremin Karaağaç', category: 'business', desc: 'Emekli Mühendis', phone: '0532 240 26 26' },
    { name: 'M. Emin Başpehlivan', category: 'business', desc: 'Yayıncı (Bahar Yayınları)', phone: '0532 261 14 45' },
    { name: 'Bilal Acar', category: 'business', desc: 'İş Adamı / Mühendis', phone: '0533 598 77 27' },
    { name: 'İbrahim Güneş', category: 'business', desc: 'Mimar', phone: '0532 466 49 14' },
    { name: 'Ramazan Boztepe', category: 'business', desc: 'Tekniker', phone: '0531 438 18 87' },
    { name: 'Faruk Demirci', category: 'business', desc: 'Teknisyen', phone: '0532 718 33 54' },
    { name: 'Ali Yüksel', category: 'law', desc: 'Milletvekili / Siyasetçi', phone: '0532 638 23 88' },
    { name: 'Erol Kıraç', category: 'law', desc: 'Avukat / Dost Kalkınma Derneği Bşk.', phone: '0532 521 15 46' },
    { name: 'İhsan Bermekoğlu', category: 'law', desc: 'Avukat / Hukuk Başmüşaviri', phone: '0544 303 19 04' },
    { name: 'Seyfettin Gültekin', category: 'law', desc: 'Üst Bürokrat (Üsküdar Belediyesi Temsilcisi)', phone: '0530 039 47 47' },
    { name: 'Suat Gün', category: 'law', desc: 'Emekli Asker / Uluslararası Kudüs Derneği Bşk.', phone: '0543 391 03 56' },
    { name: 'Serkan Yılmaz', category: 'culture', desc: 'Dünya Şampiyonu Sporcu', phone: '0532 342 53 19' },
    { name: 'İsmail Yeşilbağ', category: 'culture', desc: 'Tiyatro Sanatçısı', phone: '0532 256 11 69' },
    { name: 'Yusuf Enginar', category: 'other', desc: 'Veteriner Hekim', phone: '0532 257 41 13' },
    { name: 'Muhammed Şirin Yerdelen', category: 'other', desc: 'Medrese Hocası / Din Görevlisi', phone: '0533 543 54 34' }
  ]

  const filteredFounders = founders.filter(
    (f) => founderFilter === 'all' || f.category === founderFilter
  )

  const tabs = [
    { id: 'board', label: locale === 'ar' ? 'مجلس الإدارة' : 'Yönetim Kurulu', icon: Users },
    { id: 'committees', label: locale === 'ar' ? 'اللجان الرقابية' : 'Kurullar & Denetim', icon: ShieldCheck },
    { id: 'advisory', label: locale === 'ar' ? 'المجلس الاستشاري والروحي' : 'Fikri & Manevi Rehberlik', icon: Star },
    { id: 'founders', label: locale === 'ar' ? 'الهيئة التأسيسية' : 'Kurucular Kurulu', icon: Award }
  ]

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'الهيكل التنظيمي والقيادة' : 'Vakıf Teşkilat Şeması ve Liderlik'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'الهيكل التنظيمي' : 'Organizasyon'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'مجموعة من خيرة الكفاءات الأكاديمية والعملية والإرشادية تعمل بتكامل لتحقيق وحدة الأمة ونهضتها.'
              : 'Akademik bilgi üretimi, idari disiplin, toplumsal rehberlik ve kamusal nüfuz alanlarını bir arada barındıran bütünleşik teşkilat şemamız.'}
          </p>
        </div>
      </section>

      {/* Tabs Navigator */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="flex flex-wrap justify-center gap-2 border-b border-[#E5E2DA] pb-4">
          {tabs.map((tab) => {
            const Icon = tab.icon
            const active = activeTab === tab.id
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-inter text-sm font-semibold transition-all ${
                  active
                    ? 'bg-[#1B4D4D] text-white shadow-sm'
                    : 'text-[#5C5C5C] hover:text-[#1B4D4D] bg-white border border-[#E5E2DA]'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        
        {/* Tab 1: Yönetim Kurulu */}
        {activeTab === 'board' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h2 className="font-amiri font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                {locale === 'ar' ? 'مجلس الإدارة التنفيذي' : 'Yönetim Kurulu ve İdari Liderlik'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <span className="font-inter text-[#2D6A6A] font-semibold uppercase tracking-wider text-[11px] block mb-1">
                      {member.city}
                    </span>
                    <h3 className="font-amiri font-bold text-xl text-[#1A1A1A] mb-1">{member.name}</h3>
                    <p className="font-inter text-[#5C5C5C] text-xs font-medium mb-4">{member.role}</p>
                  </div>
                  {member.phone && (
                    <div className="flex items-center gap-2 text-[#1B4D4D] font-inter text-xs border-t border-[#E5E2DA] pt-4 mt-2">
                      <Phone className="w-3.5 h-3.5" />
                      <a href={`tel:${member.phone.replace(/\s/g, '')}`} className="font-mono hover:underline">
                        {member.phone}
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tab 2: Kurullar & Denetim */}
        {activeTab === 'committees' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-3 gap-8"
          >
            {committees.map((com, idx) => (
              <div
                key={idx}
                className="bg-white border border-[#E5E2DA] rounded-xl p-8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <h3 className="font-amiri font-bold text-2xl text-[#1B4D4D] border-b border-[#E5E2DA] pb-4 mb-4">
                    {com.title}
                  </h3>
                  <p className="font-inter text-[#5C5C5C] text-xs leading-relaxed mb-6">{com.desc}</p>
                  
                  <div className="space-y-4">
                    {com.members.map((mem, i) => (
                      <div key={i} className="flex flex-col gap-0.5 border-l-2 border-[#1B4D4D] pl-3 py-1">
                        <span className="font-inter font-bold text-sm text-[#1A1A1A]">{mem.name}</span>
                        <span className="font-inter text-[#8A8A8A] text-xs">{mem.role}</span>
                        {mem.phone && (
                          <span className="text-[#1B4D4D] font-mono text-xs flex items-center gap-1 mt-0.5">
                            <Phone className="w-3 h-3" />
                            <a href={`tel:${mem.phone.replace(/\s/g, '')}`}>{mem.phone}</a>
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Tab 3: Fikri & Manevi Rehberlik */}
        {activeTab === 'advisory' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            {/* Advisors list */}
            <div>
              <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-6">
                {locale === 'ar' ? 'مستشارو الرئاسة والاستراتيجية' : 'Baş Danışmanlık ve Üst Düzey Rehberlik'}
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {advisory.advisors.map((adv, idx) => (
                  <div key={idx} className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm">
                    <h4 className="font-amiri font-bold text-lg text-[#1A1A1A] mb-1">{adv.name}</h4>
                    <p className="font-inter text-[#5C5C5C] text-xs font-medium mb-3">{adv.role}</p>
                    {adv.phone && (
                      <span className="text-[#1B4D4D] font-mono text-xs flex items-center gap-1.5 border-t border-[#E5E2DA] pt-3">
                        <Phone className="w-3.5 h-3.5" />
                        <a href={`tel:${adv.phone.replace(/\s/g, '')}`}>{adv.phone}</a>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Academic Advisory Board */}
            <div>
              <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-6">
                {locale === 'ar' ? 'الهيئة الأكاديمية والاتصالات' : 'Danışma Kurulu & Akademik Kapasite'}
              </h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {advisory.council.map((mem, idx) => (
                  <div key={idx} className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm flex flex-col justify-between">
                    <div>
                      <h4 className="font-amiri font-bold text-lg text-[#1A1A1A] mb-1">{mem.name}</h4>
                      <p className="font-inter text-[#5C5C5C] text-xs font-medium mb-4">{mem.role}</p>
                    </div>
                    {mem.phone && (
                      <span className="text-[#1B4D4D] font-mono text-xs flex items-center gap-1.5 border-t border-[#E5E2DA] pt-3">
                        <Phone className="w-3.5 h-3.5" />
                        <a href={`tel:${mem.phone.replace(/\s/g, '')}`}>{mem.phone}</a>
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Spiritual Board */}
            <div className="bg-[#0F2E2E] text-white rounded-xl p-8 sm:p-12 overflow-hidden relative">
              <IslamicPattern opacity={0.04} color="white" size={100} />
              <div className="relative z-10">
                <h3 className="font-amiri font-bold text-2xl sm:text-3xl text-white mb-4 text-center">
                  {locale === 'ar' ? 'المجلس الأعلى للاستشارة (شبكة القيم الروحية)' : 'Yüksek İstişare Kurulu ve Manevi Değerler Ağı'}
                </h3>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                  {advisory.spiritual.map((sp, idx) => (
                    <div key={idx} className="bg-white/5 border border-white/10 rounded-xl p-5 hover:bg-white/10 transition-colors">
                      <span className="font-inter text-[#3D8B8B] text-[10px] font-semibold uppercase tracking-wider block mb-1">
                        {sp.lineage}
                      </span>
                      <h4 className="font-amiri font-bold text-white text-lg mb-1">{sp.name}</h4>
                      <p className="font-inter text-white/70 text-xs mb-3">{sp.role}</p>
                      {sp.phone && sp.phone !== '-' && (
                        <span className="font-mono text-white/60 text-xs flex items-center gap-1.5 border-t border-white/10 pt-3">
                          <Phone className="w-3 h-3 text-[#3D8B8B]" />
                          <a href={`tel:${sp.phone.replace(/\s/g, '')}`}>{sp.phone}</a>
                        </span>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Tab 4: Kurucular Kurulu */}
        {activeTab === 'founders' && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h2 className="font-amiri font-bold text-2xl sm:text-3xl text-[#1A1A1A]">
                {locale === 'ar' ? 'أعضاء الهيئة التأسيسية' : 'Kurucular Kurulu'}
              </h2>
            </div>

            {/* Founder categories tab filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {[
                { id: 'all', label: locale === 'ar' ? 'الكل' : 'Tümü' },
                { id: 'academia', label: locale === 'ar' ? 'الأكاديميون والتعليم' : 'Akademisyen & Eğitimci' },
                { id: 'business', label: locale === 'ar' ? 'الأعمال والهندسة' : 'İş Dünyası & Teknik' },
                { id: 'law', label: locale === 'ar' ? 'القانون والسياسة' : 'Hukuk & Siyaset' },
                { id: 'culture', label: locale === 'ar' ? 'الثقافة والرياضة' : 'Kültür & Sanat' },
                { id: 'other', label: locale === 'ar' ? 'أخرى' : 'Diğer Branşlar' }
              ].map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setFounderFilter(filter.id as any)}
                  className={`px-4 py-2 rounded-lg font-inter text-xs font-semibold transition-all ${
                    founderFilter === filter.id
                      ? 'bg-[#1B4D4D] text-white'
                      : 'bg-white text-[#5C5C5C] border border-[#E5E2DA] hover:text-[#1B4D4D]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>

            {/* Founders list render */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {filteredFounders.map((founder, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E2DA] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                  <div>
                    <h4 className="font-amiri font-bold text-[#1A1A1A] text-base mb-1">{founder.name}</h4>
                    <p className="font-inter text-[#8A8A8A] text-xs mb-3">{founder.desc}</p>
                  </div>
                  {founder.phone && (
                    <span className="text-[#1B4D4D] font-mono text-xs flex items-center gap-1 mt-2 border-t border-[#E5E2DA] pt-2">
                      <Phone className="w-3 h-3" />
                      <a href={`tel:${founder.phone.replace(/\s/g, '')}`}>{founder.phone}</a>
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

      </div>
    </div>
  )
}
