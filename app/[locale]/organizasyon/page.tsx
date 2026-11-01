'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Users, ShieldCheck, Star, Award, Phone, MapPin, Briefcase, Sparkles } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function OrganizationPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'
  
  const [activeTab, setActiveTab] = useState<'board' | 'audit' | 'advisory' | 'arbitration' | 'founders'>('board')

  const boardMembers = [
    { name: 'Ömer Faruk Ocakzade', role: 'Genel Başkan', phone: '0549 462 74 17', city: 'İSTANBUL', badge: 'Başkanlık' },
    { name: 'Yusuf Temizsoy', role: 'Başkan Vekili', phone: '0546 213 28 62', city: 'İSTANBUL', badge: 'Başkanlık' },
    { name: 'M. Zahid Gürsoy', role: 'Başkan Yardımcısı', phone: '0532 658 11 33', city: 'İSTANBUL', badge: 'Yönetim' },
    { name: 'Celal Bucak', role: 'Ekonomik İşlerden Sorumlu Başkan Yardımcısı', phone: '0533 236 49 11', city: 'İSTANBUL', badge: 'İktisat' },
    { name: 'Mürsel Sürücü', role: 'Teşkilatlanmadan Sorumlu Başkan Yardımcısı', phone: '0532 062 71 41', city: 'İSTANBUL', badge: 'Teşkilat' },
    { name: 'Cemil Arslan', role: 'Aileden Sorumlu Başkan Yardımcısı (Eğitimci)', phone: '0505 649 79 02', city: 'İSTANBUL', badge: 'Aile & Eğitim' },
    { name: 'Mehmet Arslan', role: 'Kardeş Kuruluşlardan Sorumlu Başkan Yardımcısı', phone: '0505 641 54 39', city: 'İSTANBUL', badge: 'İş Birliği' },
    { name: 'Yılmaz Madenoğlu', role: 'Eğitim İşlerinden Sorumlu Başkan Yardımcısı', phone: '0535 966 48 69', city: 'İSTANBUL', badge: 'Eğitim' },
    { name: 'Yalçın Cebel', role: 'Finansmandan Sorumlu Başkan Yardımcısı', phone: '0537 636 06 06', city: 'İSTANBUL', badge: 'Mali İşler' },
    { name: 'Ömer Şener Keskin', role: 'Kurumsal Üyelerden Sorumlu Başkan Yardımcısı', phone: '0532 253 52 56', city: 'İSTANBUL', badge: 'Kurumsal' },
    { name: 'Süleyman Gülek', role: 'Davet Okulundan Sorumlu Başkan Yardımcısı', phone: '0541 388 97 06', city: 'İSTANBUL', badge: 'Davet Okulu' },
    { name: 'Hacı Ahmet Eroğlu', role: 'Gayrimenkul ve Kamp İşlerinden Sorumlu YK Üyesi', phone: '0533 641 70 98', city: 'İSTANBUL', badge: 'Yönetim' },
  ]

  const auditMembers = [
    { name: 'İhsan Bermekoğlu', role: 'Denetim Kurulu Başkanı', city: 'ANKARA', phone: '0544 303 19 04' },
    { name: 'Mehmet Emin Başpehlivan', role: 'Denetim Kurulu Üyesi', city: 'İSTANBUL', phone: '0532 261 14 45' },
    { name: 'Ahmet Faruk Ocakzade', role: 'Denetim Kurulu Üyesi', city: 'İSTANBUL', phone: '0506 177 12 27' },
  ]

  const advisoryMembers = [
    { name: 'Ahmet Bulut', title: 'Namaz Platformu Başkanı / Yazar', role: 'İstişare Kurulu Üyesi' },
    { name: 'Ali Yüksel', title: 'Milli Görüş Eski Genel Başkanı / Milletvekili', role: 'İstişare Kurulu Üyesi' },
    { name: 'Bilal Acar', title: 'İş Adamı / Mühendis', role: 'İstişare Kurulu Üyesi' },
    { name: 'Av. Erol Kıraç', title: 'Hukukçu / Avukat', role: 'İstişare Kurulu Üyesi' },
    { name: 'Av. Kamil Özçelik', title: 'Hukukçu / Avukat', role: 'İstişare Kurulu Üyesi' },
    { name: 'Mustafa Malcıoğlu', title: 'İş Adamı', role: 'İstişare Kurulu Üyesi' },
    { name: 'Semahattin Öztürk', title: 'Vakıflar 2. Bölge Müdürü', role: 'İstişare Kurulu Üyesi' },
    { name: 'Yaşar Özkan', title: 'İş Adamı / Gazeteci', role: 'İstişare Kurulu Üyesi' },
    { name: 'Yusuf Kökten', title: 'İş Adamı', role: 'İstişare Kurulu Üyesi' },
    { name: 'Prof. Dr. Orhan Çeker', title: 'İslam Hukuku Profesörü / Akademisyen', role: 'Danışma Kurulu' },
    { name: 'Doç. Dr. Abdulkadir Turan', title: 'İslam Tarihçisi / Akademisyen', role: 'Danışma Kurulu' },
    { name: 'Rüstem Altınbaş', title: 'Kanaat Önderi', role: 'Danışma Kurulu' },
  ]

  const arbitrationMembers = [
    { name: 'Doç. Dr. Süleyman Akdemir', role: 'Tahkim Kurulu Başkanı / Hukukçu' },
    { name: 'Av. İsa Kandemir', role: 'Disiplin Kurulu Başkanı / Hukukçu' },
    { name: 'Av. İhsan Bermekoğlu', role: 'Disiplin & Tahkim Kurulu Üyesi' },
    { name: 'Av. Kâmil Özçelik', role: 'Tahkim Kurulu Üyesi' },
    { name: 'Murat Gürsoy', role: 'Disiplin Kurulu Üyesi' },
  ]

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter((n) => !n.startsWith('(') && !n.startsWith('Av.') && !n.startsWith('Prof.') && !n.startsWith('Doç.'))
      .slice(0, 2)
      .map((n) => n[0])
      .join('')
      .toUpperCase()
  }

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            {isRTL ? 'الهيكل التنظيمي والقيادي' : 'Kurumsal Teşkilat Şeması'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'مجلس الإدارة والهيئات واللجان' : 'Yönetim ve Kurullarımız'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'نخبة من القيادات العلمية، والأكاديمية، والحقوقية، ورجال الأعمال يقودون مسيرة الوقف بروح الشورى والمؤسسية.'
              : 'Akademi, iş dünyası, hukuk ve sivil toplum sahasının tecrübeli isimlerinden müteşekkil yönetim kadromuz ve bağımsız denetim organlarımız.'}
          </p>

          {/* Navigation Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'board', label: isRTL ? 'مجلس الإدارة' : 'Yönetim Kurulu' },
              { id: 'audit', label: isRTL ? 'هيئة الرقابة' : 'Denetim Kurulu' },
              { id: 'advisory', label: isRTL ? 'المجلس الاستشاري والعلماء' : 'İstişare & Danışma Heyeti' },
              { id: 'arbitration', label: isRTL ? 'لجنة الانضباط والتحكيم' : 'Disiplin ve Tahkim Kurulu' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#00D4B2] text-[#080C10] shadow-[0_0_20px_rgba(0,212,178,0.3)]'
                    : 'bg-white/[0.04] text-[#94A3B8] hover:text-[#F0F6FC] border border-white/10'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        {/* TAB 1: YÖNETİM KURULU */}
        {activeTab === 'board' && (
          <div>
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl font-bold text-[#F0F6FC]">
                  {isRTL ? 'أعضاء مجلس الإدارة التنفيذي' : 'Yönetim Kurulu Üyeleri'}
                </h2>
                <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                  {isRTL ? 'المسؤولون عن قيادة الأعمال اليومية ومتابعة خطط العمل' : 'Vakfın icra ve yürütme organını teşkil eden yetkili heyet'}
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-[#00D4B2]/10 text-[#00D4B2] border border-[#00D4B2]/20 font-mono">
                {boardMembers.length} Üye
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {boardMembers.map((member, idx) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  className="glass-card p-6 flex flex-col justify-between group hover:border-[#00D4B2]/40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2] font-bold text-sm tracking-wider">
                        {getInitials(member.name)}
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded bg-white/[0.04] border border-white/10 text-[#94A3B8]">
                        {member.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F0F6FC] group-hover:text-[#00D4B2] transition-colors mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#00D4B2] font-medium mb-3">
                      {member.role}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5" />
                      {member.city}
                    </span>
                    <span className="flex items-center gap-1 font-mono">
                      <Phone className="w-3.5 h-3.5" />
                      {member.phone}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: DENETİM KURULU */}
        {activeTab === 'audit' && (
          <div>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-bold text-[#F0F6FC]">
                {isRTL ? 'هيئة الرقابة والتدقيق المستقلة' : 'Denetim Kurulu'}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                {isRTL
                  ? 'الهيئة المسؤولة عن التدقيق المالي والإداري وضمان الشفافية ومطابقة القوانين.'
                  : 'Vakfın tüm mali, idari ve tüzük süreçlerini bağımsız olarak denetleyen yetkili kurul.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {auditMembers.map((member, idx) => (
                <div key={member.name} className="glass-card p-6 flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#33DEC5] font-bold text-sm mb-4">
                      {getInitials(member.name)}
                    </div>
                    <h3 className="text-lg font-bold text-[#F0F6FC] mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#33DEC5] font-medium mb-3">
                      {member.role}
                    </p>
                  </div>
                  <div className="pt-4 border-t border-white/5 flex items-center justify-between text-xs text-[#64748B]">
                    <span>📍 {member.city}</span>
                    <span className="font-mono">{member.phone}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: İSTİŞARE VE DANIŞMA HEYETİ */}
        {activeTab === 'advisory' && (
          <div>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-bold text-[#F0F6FC]">
                {isRTL ? 'المجلس الاستشاري وهيئة كبار العلماء' : 'İstişare ve Danışma Kurulu'}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                {isRTL
                  ? 'قادة الفكر والعلماء وأصحاب الخبرة الذين يمدون الوقف بالرؤى الاستراتيجية.'
                  : 'Vakfımızın stratejik kararlarına rehberlik eden ilim ehli, yazarlar ve kanaat önderleri.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {advisoryMembers.map((member, idx) => (
                <div key={member.name} className="glass-card p-6 flex flex-col justify-between group hover:border-[#00D4B2]/40">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D4B2] font-bold text-xs">
                        {getInitials(member.name)}
                      </div>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#00D4B2]/10 text-[#00D4B2] font-semibold">
                        {member.role}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#F0F6FC] mb-1 group-hover:text-[#00D4B2] transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-xs text-[#94A3B8]">
                      {member.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: DİSİPLİN VE TAHKİM */}
        {activeTab === 'arbitration' && (
          <div>
            <div className="max-w-2xl mb-8">
              <h2 className="text-2xl font-bold text-[#F0F6FC]">
                {isRTL ? 'لجنة الانضباط وهيئة التحكيم' : 'Disiplin ve Tahkim Kurulu'}
              </h2>
              <p className="text-xs sm:text-sm text-[#94A3B8] mt-1">
                {isRTL
                  ? 'المرجعية الأخلاقية والقانونية لفض أي نزاع وضمان الانضباط التام للائحة الوقف.'
                  : 'Vakıf içi etik standartların korunması, tüzük uyumu ve uyuşmazlıkların çözümünde yetkili hukukçu heyeti.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {arbitrationMembers.map((member, idx) => (
                <div key={member.name} className="glass-card p-6">
                  <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#00D4B2] font-bold text-xs mb-3">
                    {getInitials(member.name)}
                  </div>
                  <h3 className="text-base font-bold text-[#F0F6FC] mb-1">
                    {member.name}
                  </h3>
                  <p className="text-xs text-[#33DEC5]">
                    {member.role}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
