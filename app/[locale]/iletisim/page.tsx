'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import {
  MapPin,
  Phone,
  Mail,
  Send,
  CheckCircle2,
  Copy,
  Check,
  Landmark,
  ShieldCheck,
  FileCheck,
  Clock,
  Sparkles
} from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ContactPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [submitted, setSubmitted] = useState(false)
  const [copiedIban, setCopiedIban] = useState(false)
  const [copiedUets, setCopiedUets] = useState(false)

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'genel',
    message: '',
    kvkk: false,
  })

  const iban = 'TR77 0001 5001 5800 7324 3307 19'
  const uets = '42690-96005-14189'

  const handleCopyIban = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ''))
    setCopiedIban(true)
    setTimeout(() => setCopiedIban(false), 2000)
  }

  const handleCopyUets = () => {
    navigator.clipboard.writeText(uets)
    setCopiedUets(true)
    setTimeout(() => setCopiedUets(false), 2000)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen pt-[100px] pb-24" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Header */}
      <section className="relative py-16 overflow-hidden border-b border-white/5">
        <IslamicPattern opacity={0.03} color="#00D4B2" size={90} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold uppercase tracking-wider mb-4">
            <Mail className="w-3.5 h-3.5" />
            {isRTL ? 'التواصل المباشر والرسمي' : 'Doğrudan & Resmi İletişim'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F0F6FC] tracking-tight mb-4">
            {isRTL ? 'اتصل بنا ودعم الوقف' : 'İletişim ve Bağış'}
          </h1>
          <p className="text-base sm:text-lg text-[#94A3B8] max-w-3xl mx-auto leading-relaxed">
            {isRTL
              ? 'يسعدنا تواصلكم لتقديم المقترحات أو الاستفسارات أو دعم أنشطة الوقف من خلال قنواتنا الرسمية المعتمدة.'
              : 'Görüş, öneri, istişare talepleriniz ve hayır destekleriniz için resmi kanallarımızdan dilediğiniz an bizimle irtibat kurabilirsiniz.'}
          </p>
        </div>
      </section>

      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8 mt-14">
        
        {/* Top 2 Columns: Contact Form & Official Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Clean Contact Form (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-2xl border border-white/10">
            <h2 className="text-2xl font-bold text-[#F0F6FC] mb-2">
              {isRTL ? 'أرسل رسالة إلى إدارة الوقف' : 'Vakıf Yönetimine Mesaj Gönderin'}
            </h2>
            <p className="text-xs sm:text-sm text-[#94A3B8] mb-8 leading-relaxed">
              {isRTL
                ? 'املأ النموذج أدناه، وسيقوم فريق العلاقات العامة بالرد عليكم في أقرب وقت.'
                : 'İletmek istediğiniz soru veya iş birliği tekliflerinizi aşağıdaki form aracılığıyla güvenle ulaştırabilirsiniz.'}
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-[#00D4B2]/10 border border-[#00D4B2]/30 text-center">
                <CheckCircle2 className="w-12 h-12 text-[#00D4B2] mx-auto mb-3" />
                <h3 className="text-lg font-bold text-[#F0F6FC] mb-2">
                  {isRTL ? 'تم إرسال رسالتكم بنجاح!' : 'Mesajınız Başarıyla İletildi!'}
                </h3>
                <p className="text-xs sm:text-sm text-[#94A3B8]">
                  {isRTL
                    ? 'نشكركم على اهتمامكم، وسنتواصل معكم عبر البريد الإلكتروني المدخل.'
                    : 'Geri bildiriminiz için teşekkür ederiz. İlgili birimimiz en kısa sürede dönüş sağlayacaktır.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                      {isRTL ? 'الاسم الكامل' : 'Ad Soyad *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="glass-input"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                      {isRTL ? 'البريد الإلكتروني' : 'E-posta *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="glass-input"
                      placeholder="ornek@domain.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                      {isRTL ? 'رقم الهاتف' : 'Telefon *'}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="glass-input"
                      placeholder="+90 5XX XXX XX XX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                      {isRTL ? 'موضوع الرسالة' : 'Konu'}
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="glass-input bg-[#0D1117]"
                    >
                      <option value="genel">{isRTL ? 'استفسار عام' : 'Genel Bilgi & İstişare'}</option>
                      <option value="uyelik">{isRTL ? 'طلب العضوية والتطوع' : 'Üyelik ve Gönüllülük'}</option>
                      <option value="bagis">{isRTL ? 'التبرعات والدعم' : 'Bağış ve Destek Projeleri'}</option>
                      <option value="yayin">{isRTL ? 'الكتب والمطبوعات' : 'Yayınlar ve Kitap Talebi'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#94A3B8] mb-1.5">
                    {isRTL ? 'نص الرسالة' : 'Mesajınız *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="glass-input resize-none"
                    placeholder="Mesajınızı buraya yazınız..."
                  />
                </div>

                {/* KVKK Checkbox */}
                <div className="flex items-start gap-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="kvkk-check"
                    required
                    checked={formState.kvkk}
                    onChange={(e) => setFormState({ ...formState, kvkk: e.target.checked })}
                    className="mt-1 rounded accent-[#00D4B2]"
                  />
                  <label htmlFor="kvkk-check" className="text-xs text-[#94A3B8] leading-relaxed cursor-pointer">
                    {isRTL ? (
                      <>أوافق على معالجة بياناتي وفقاً لسياسة الخصوصية وحماية البيانات الشخصية (KVKK).</>
                    ) : (
                      <>
                        <a href="#kvkk" className="text-[#00D4B2] hover:underline">
                          KVKK Aydınlatma Metni
                        </a>
                        'ni okudum, kişisel verilerimin bu kapsamda işlenmesini kabul ediyorum.
                      </>
                    )}
                  </label>
                </div>

                <button type="submit" className="btn-turquoise w-full sm:w-auto px-8">
                  <Send className="w-4 h-4" />
                  <span>{isRTL ? 'إرسال الرسالة' : 'Mesajı Gönder'}</span>
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Official Channels & UETS Details (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 space-y-6">
              <h3 className="text-lg font-bold text-[#F0F6FC] border-b border-white/5 pb-3">
                {isRTL ? 'بيانات المقر الرسمي والاتصال' : 'Resmi Merkez ve İletişim Bilgileri'}
              </h3>

              <div className="space-y-5 text-xs sm:text-sm">
                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00D4B2]/10 border border-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#F0F6FC] mb-1">
                      {isRTL ? 'العنوان الرسمي للمقر' : 'Resmi Vakıf Adresi'}
                    </div>
                    <div className="text-[#94A3B8] leading-relaxed">
                      Güvercintepe Mah. Fatih Cad. No: 190-192 İç Kapı No: 2 Başakşehir / İstanbul
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00D4B2]/10 border border-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2] shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#F0F6FC] mb-1">
                      {isRTL ? 'البريد الإلكتروني المعتمد' : 'Resmi E-posta'}
                    </div>
                    <a
                      href="mailto:islamidavetvakfi@gmail.com"
                      className="text-[#00D4B2] hover:underline font-mono"
                    >
                      islamidavetvakfi@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phones */}
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-[#00D4B2]/10 border border-[#00D4B2]/20 flex items-center justify-center text-[#00D4B2] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-semibold text-[#F0F6FC] mb-1">
                      {isRTL ? 'هواتف التواصل المباشر' : 'İletişim Telefonları'}
                    </div>
                    <div className="space-y-1 font-mono text-[#CBD5E1]">
                      <div>
                        <a href="tel:+905346627040" className="hover:text-[#00D4B2]">
                          +90 534 662 70 40
                        </a>
                      </div>
                      <div>
                        <a href="tel:05494627417" className="hover:text-[#00D4B2]">
                          +90 549 462 74 17
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* UETS (Ulusal Elektronik Tebligat Sistemi) Badge Card */}
            <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-[#00D4B2]/40 relative overflow-hidden group">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2 text-xs font-bold text-[#00D4B2] uppercase tracking-wider">
                  <FileCheck className="w-4 h-4" />
                  <span>UETS Resmi E-Tebligat Adresi</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  Aktif / Resmi
                </span>
              </div>

              <div className="p-3 rounded-xl bg-[#080C10] border border-white/10 flex items-center justify-between gap-3">
                <span className="font-mono text-sm font-bold text-[#F0F6FC] tracking-wider select-all">
                  {uets}
                </span>
                <button
                  onClick={handleCopyUets}
                  className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-[#00D4B2] transition-colors"
                  title="UETS Adresini Kopyala"
                >
                  {copiedUets ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-[#64748B] mt-2 leading-relaxed">
                Adalet Bakanlığı ve PTT Ulusal Elektronik Tebligat Sistemi resmi tebligat adresimizdir.
              </p>
            </div>

          </div>

        </div>

        {/* Section 2: Full Bank Donation Panel (IBAN Click-to-Copy) */}
        <div id="bagis" className="mt-16 glass-card p-8 sm:p-10 rounded-3xl border border-white/10 relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-6 border-b border-white/10">
            <div>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#00D4B2] uppercase tracking-wider mb-1">
                <Landmark className="w-4 h-4" />
                {isRTL ? 'الحساب المصرفي المعتمد' : 'Resmi Vakıf Banka Hesabı'}
              </span>
              <h2 className="text-2xl font-bold text-[#F0F6FC]">
                {isRTL ? 'معلومات التبرع والتحويل البنكي' : 'Banka Hesap ve Bağış Bilgileri'}
              </h2>
            </div>
            <div className="flex items-center gap-2 text-xs text-[#94A3B8]">
              <ShieldCheck className="w-4 h-4 text-[#00D4B2]" />
              <span>Vakıflar Genel Müdürlüğü Mevzuatına Uygun</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-6">
            <div className="lg:col-span-8 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-[#94A3B8] mb-0.5">{isRTL ? 'البنك' : 'Banka Adı'}</div>
                  <div className="text-base font-bold text-[#F0F6FC]">VakıfBank</div>
                </div>
                <div>
                  <div className="text-xs text-[#94A3B8] mb-0.5">{isRTL ? 'صاحب الحساب' : 'Hesap Sahibi'}</div>
                  <div className="text-base font-bold text-[#F0F6FC]">Uluslararası İslami Davet Vakfı</div>
                </div>
              </div>

              <div>
                <div className="text-xs text-[#94A3B8] mb-1.5">{isRTL ? 'رقم الآيبان (IBAN)' : 'IBAN (Türk Lirası / TRY)'}</div>
                <div className="p-4 rounded-xl bg-[#080C10] border border-[#00D4B2]/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-inner">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#00D4B2] tracking-wider select-all">
                    {iban}
                  </span>
                  <button
                    onClick={handleCopyIban}
                    className="btn-turquoise text-xs py-2 px-4 shrink-0"
                  >
                    {copiedIban ? (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Kopyalandı!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        <span>IBAN Kopyala</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-3 text-xs text-[#94A3B8]">
              <div className="font-semibold text-[#F0F6FC] text-sm">
                {isRTL ? 'ملاحظة هامة عند التحويل' : 'Havale ve EFT Açıklaması'}
              </div>
              <p className="leading-relaxed">
                Transfer sırasında açıklama kısmına <strong>"Bağış"</strong> veya ilgili faaliyet adının yazılması tavsiye edilir.
              </p>
              <p className="leading-relaxed text-[11px] text-[#64748B]">
                Vakfımız 5737 sayılı Vakıflar Kanunu hükümlerine tabi olup, tüm harcamalar bağımsız denetim organlarımızca düzenli olarak incelenmektedir.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
