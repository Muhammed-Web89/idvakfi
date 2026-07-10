'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { MapPin, Phone, Mail, Send, CheckCircle2 } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'
import SectionTitle from '@/components/ui/SectionTitle'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ContactPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: 'general', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormState({ name: '', email: '', phone: '', subject: 'general', message: '' })
    }, 3000)
  }

  return (
    <div className="bg-brand-cream min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-brand-navy py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.05} color="white" size={100} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="text-brand-gold font-semibold uppercase tracking-widest text-sm block mb-3">
            {locale === 'ar' ? 'اتصل بنا' : 'Bizimle İletişime Geçin'}
          </span>
          <h1 className="font-playfair font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'الاتصال' : 'İletişim'}
          </h1>
          <p className="text-gray-300 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'تواصل معنا للحصول على معلومات عن وقفنا، أو المشاركة في أنشطتنا أو تقديم الدعم.'
              : 'Vakfımız hakkında bilgi almak, faaliyetlerimize katılmak veya destek olmak için bizimle iletişime geçin.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-brand-teal/10 rounded-3xl p-8 shadow-sm">
            <h2 className="font-playfair font-bold text-2xl text-brand-navy mb-6">
              {locale === 'ar' ? 'أرسل لنا رسالة' : 'Mesaj Gönderin'}
            </h2>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500/10 border border-green-500/20 text-green-800 rounded-2xl p-6 flex flex-col items-center text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-green-600 mb-4 animate-bounce" />
                <h3 className="font-bold mb-1">
                  {locale === 'ar' ? 'تم الإرسال بنجاح!' : 'Mesajınız Gönderildi!'}
                </h3>
                <p className="text-gray-600 text-xs">
                  {locale === 'ar'
                    ? 'نشكرك على تواصلك معنا. سنقوم بالرد عليك في أقرب وقت ممكن.'
                    : 'Bizimle iletişime geçtiğiniz için teşekkür ederiz. En kısa sürede tarafınıza dönüş yapılacaktır.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-gray-600 text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'الاسم الكامل' : 'Ad Soyad'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-teal/10 rounded-xl px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-gray-600 text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'البريد الإلكتروني' : 'E-posta'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-brand-cream border border-brand-teal/10 rounded-xl px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-semibold block mb-1">
                    {locale === 'ar' ? 'الهاتف' : 'Telefon'}
                  </label>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-teal/10 rounded-xl px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-semibold block mb-1">
                    {locale === 'ar' ? 'الموضوع' : 'Konu'}
                  </label>
                  <select
                    value={formState.subject}
                    onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-teal/10 rounded-xl px-4 py-3 text-sm focus:border-brand-teal focus:outline-none"
                  >
                    <option value="general">{locale === 'ar' ? 'عام' : 'Genel'}</option>
                    <option value="membership">{locale === 'ar' ? 'العضوية' : 'Üyelik'}</option>
                    <option value="project">{locale === 'ar' ? 'مشروع' : 'Proje'}</option>
                    <option value="media">{locale === 'ar' ? 'الإعلام' : 'Medya'}</option>
                  </select>
                </div>

                <div>
                  <label className="text-gray-600 text-xs font-semibold block mb-1">
                    {locale === 'ar' ? 'الرسالة' : 'Mesaj'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-brand-cream border border-brand-teal/10 rounded-xl px-4 py-3 text-sm focus:border-brand-teal focus:outline-none resize-none"
                  />
                </div>

                <button type="submit" className="btn-teal w-full flex items-center justify-center gap-2">
                  <Send className="w-4 h-4" />
                  {locale === 'ar' ? 'إرسال الرسالة' : 'Gönder'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-brand-navy text-white rounded-3xl p-8 border border-brand-teal/10 shadow-sm relative overflow-hidden">
              <IslamicPattern opacity={0.03} color="white" size={80} />
              
              <h3 className="font-playfair font-bold text-xl text-brand-gold mb-6">
                {locale === 'ar' ? 'معلومات الاتصال' : 'İletişim Bilgileri'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-gold flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">{locale === 'ar' ? 'العنوان' : 'Adres'}</h4>
                    <p className="text-gray-300 text-xs leading-relaxed">
                      {locale === 'ar'
                        ? 'منطقة هسكون الصناعية (HESKOOP)، بلوك M-7 رقم 111 باشاك شهير / إسطنبول، تركيا'
                        : 'HESKOOP San. Sit. M-7 Blok No:111 Başakşehir / İstanbul, Türkiye'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-gold flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">{locale === 'ar' ? 'الهاتف' : 'Telefon'}</h4>
                    <p className="text-gray-300 text-xs font-mono">+90 212 000 00 00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-brand-gold flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-white mb-1">{locale === 'ar' ? 'البريد الإلكتروني' : 'E-posta'}</h4>
                    <p className="text-gray-300 text-xs font-mono">islamidavetvakfi@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Static Google Maps placeholder */}
            <div className="bg-white border border-brand-teal/10 rounded-3xl overflow-hidden shadow-sm aspect-video flex items-center justify-center text-center p-6">
              <div>
                <MapPin className="w-8 h-8 text-brand-teal mx-auto mb-2 animate-bounce" />
                <h4 className="font-bold text-brand-navy text-sm mb-1">
                  {locale === 'ar' ? 'مقر الوقف الرئيسي' : 'Vakıf Genel Merkezi'}
                </h4>
                <p className="text-gray-500 text-[10px] leading-relaxed max-w-xs mx-auto">
                  Başakşehir, İstanbul, Türkiye
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
