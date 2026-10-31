'use client'

import { useState, use } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { MapPin, Phone, Mail, Send, CheckCircle2, Clock } from 'lucide-react'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string }>
}

export default function ContactPage({ params }: Props) {
  const { locale } = use(params)
  const isRTL = locale === 'ar'

  const [submitted, setSubmitted] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Page Hero */}
      <section className="relative bg-[#0F2E2E] py-24 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={100} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8">
          <span className="font-inter text-[#3D8B8B] font-semibold uppercase tracking-widest text-xs block mb-3">
            {locale === 'ar' ? 'تواصل مع وقفنا' : 'Doğrudan İletişim'}
          </span>
          <h1 className="font-amiri font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6">
            {locale === 'ar' ? 'اتصل بنا' : 'İletişim'}
          </h1>
          <p className="font-inter text-white/80 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            {locale === 'ar'
              ? 'يسعدنا تواصلكم واستقبال استفساراتكم واقتراحاتكم في أي وقت لتعزيز أواصر التعاون والعمل المشترك.'
              : 'Görüş, öneri ve iş birliği talepleriniz için bizimle dilediğiniz zaman iletişime geçebilirsiniz.'}
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E2DA] rounded-xl p-8 sm:p-12 shadow-sm">
            <h2 className="font-amiri font-bold text-2xl sm:text-3xl text-[#1A1A1A] mb-2">
              {locale === 'ar' ? 'أرسل لنا رسالة' : 'Bize Mesaj Gönderin'}
            </h2>
            <p className="font-inter text-gray-500 text-sm mb-8 leading-relaxed">
              {locale === 'ar'
                ? 'يرجى ملء النموذج أدناه وسيتم الرد عليكم في أقرب وقت ممكن.'
                : 'Aşağıdaki formu doldurarak bize doğrudan ulaşabilirsiniz. Ekibimiz en kısa sürede dönüş sağlayacaktır.'}
            </p>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[rgba(27,77,77,0.08)] border border-[#1B4D4D]/20 rounded-xl p-8 text-center"
              >
                <CheckCircle2 className="w-12 h-12 text-[#1B4D4D] mx-auto mb-4" />
                <h3 className="font-amiri font-bold text-2xl text-[#1B4D4D] mb-2">
                  {locale === 'ar' ? 'تم استلام رسالتكم بنجاح' : 'Mesajınız Alındı'}
                </h3>
                <p className="font-inter text-[#5C5C5C] text-sm">
                  {locale === 'ar'
                    ? 'شكراً لتواصلكم معنا. سنقوم بمراجعة طلبكم والرد في أقرب فرصة.'
                    : 'Geri bildiriminiz için teşekkür ederiz. İlgili birimimiz en kısa sürede tarafınıza dönüş yapacaktır.'}
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-inter text-[#5C5C5C] text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'الاسم الكامل' : 'Ad Soyad'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm font-inter focus:border-[#1B4D4D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-[#5C5C5C] text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'البريد الإلكتروني' : 'E-posta'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm font-inter focus:border-[#1B4D4D] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="font-inter text-[#5C5C5C] text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'رقم الهاتف' : 'Telefon'}
                    </label>
                    <input
                      type="tel"
                      value={formState.phone}
                      onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm font-inter focus:border-[#1B4D4D] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="font-inter text-[#5C5C5C] text-xs font-semibold block mb-1">
                      {locale === 'ar' ? 'الموضوع' : 'Konu'}
                    </label>
                    <select
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-[#F7F5F0] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm font-inter focus:border-[#1B4D4D] focus:outline-none"
                    >
                      <option value="general">{locale === 'ar' ? 'عام' : 'Genel Bilgi'}</option>
                      <option value="membership">{locale === 'ar' ? 'عضوية وتطوع' : 'Gönüllülük & Üyelik'}</option>
                      <option value="project">{locale === 'ar' ? 'اقتراح مشروع' : 'Proje İş Birliği'}</option>
                      <option value="other">{locale === 'ar' ? 'أخرى' : 'Diğer'}</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-inter text-[#5C5C5C] text-xs font-semibold block mb-1">
                    {locale === 'ar' ? 'الرسالة' : 'Mesaj'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-[#F7F5F0] border border-[#E5E2DA] rounded-lg px-4 py-3 text-sm font-inter focus:border-[#1B4D4D] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#1B4D4D] hover:bg-[#2D6A6A] text-white font-inter text-sm font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  {locale === 'ar' ? 'إرسال الرسالة' : 'Gönder'}
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Info & Map (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0F2E2E] text-white rounded-xl p-8 border border-white/10 shadow-sm relative overflow-hidden">
              <IslamicPattern opacity={0.04} color="white" size={80} />
              
              <h3 className="font-amiri font-bold text-2xl text-white mb-6">
                {locale === 'ar' ? 'معلومات الاتصال' : 'İletişim Bilgileri'}
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-[#3D8B8B] flex-shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-sm text-white mb-1">{locale === 'ar' ? 'العنوان' : 'Adres'}</h4>
                    <p className="font-inter text-white/70 text-xs leading-relaxed">
                      {locale === 'ar'
                        ? 'منطقة هيسكووب الصناعية (HESKOOP)، بلوك M-7 رقم 111 باشاك شهير / إسطنبول، تركيا'
                        : 'HESKOOP San. Sit. M-7 Blok No:111 Başakşehir / İstanbul, Türkiye'}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-[#3D8B8B] flex-shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-sm text-white mb-1">{locale === 'ar' ? 'الهاتف' : 'Telefon'}</h4>
                    <a href="tel:+905320627141" className="font-inter text-white/70 text-xs hover:text-white transition-colors">
                      +90 532 062 71 41
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl text-[#3D8B8B] flex-shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-inter font-bold text-sm text-white mb-1">{locale === 'ar' ? 'البريد الإلكتروني' : 'E-posta'}</h4>
                    <a href="mailto:islamidavetvakfi@gmail.com" className="font-inter text-white/70 text-xs hover:text-white transition-colors">
                      islamidavetvakfi@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
