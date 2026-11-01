'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Landmark, Copy, Check, ShieldCheck, HeartHandshake, Info } from 'lucide-react'

export default function QuickDonation() {
  const locale = useLocale()
  const isAR = locale === 'ar'
  const [copied, setCopied] = useState(false)

  const iban = 'TR77 0001 5001 5800 7324 3307 19'
  const accountHolder = isAR
    ? 'وقف الدعوة الإسلامية الدولي'
    : 'Uluslararası İslami Davet Vakfı'
  const bankName = 'VakıfBank'

  const handleCopy = () => {
    navigator.clipboard.writeText(iban.replace(/\s/g, ''))
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section id="hizli-bagis" className="py-20 relative overflow-hidden" dir={isAR ? 'rtl' : 'ltr'}>
      {/* Subtle ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[#00D4B2]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#00D4B2]/10 border border-[#00D4B2]/20 text-[#00D4B2] text-xs font-semibold tracking-wider uppercase mb-3">
            <HeartHandshake className="w-3.5 h-3.5" />
            {isAR ? 'الدعم والتبرع السريع' : 'Hızlı Bağış & Destek'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#F0F6FC] tracking-tight">
            {isAR ? 'ساهم في نشر رسالة الهدى' : 'Hayra Ortak Olun, Daveti Destekleyin'}
          </h2>
          <p className="mt-3 text-base text-[#94A3B8] max-w-2xl mx-auto leading-relaxed">
            {isAR
              ? 'تُوجه كافة التبرعات لدعم أنشطة الدعوة، وحلقات العلم، والمخيمات التربوية ورعاية طلاب العلم حول العالم.'
              : 'Yapacağınız bağışlar ilmi araştırmalara, küresel tebliğ faaliyetlerine, öğrenci burslarına ve eğitim merkezlerimize aktarılmaktadır.'}
          </p>
        </motion.div>

        {/* Glassmorphic Bank Account Box */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-card p-6 sm:p-8 md:p-10 border border-white/10 hover:border-[#00D4B2]/40 relative overflow-hidden group"
        >
          {/* Decorative Corner Glow */}
          <div className="absolute -top-16 -right-16 w-36 h-36 bg-[#00D4B2]/15 rounded-full blur-2xl pointer-events-none group-hover:bg-[#00D4B2]/25 transition-all" />

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Bank Details */}
            <div className="md:col-span-8 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#00D4B2]/15 border border-[#00D4B2]/30 flex items-center justify-center text-[#00D4B2]">
                  <Landmark className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-[#94A3B8] font-medium">
                    {isAR ? 'البنك الرسمي المعتمد' : 'Resmi Vakıf Banka Hesabı'}
                  </div>
                  <div className="text-xl font-bold text-[#F0F6FC] flex items-center gap-2">
                    {bankName}
                    <span className="text-xs px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-normal">
                      TL / TRY
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-[#94A3B8] mb-1">
                  {isAR ? 'اسم صاحب الحساب' : 'Hesap Sahibi (Alıcı)'}
                </div>
                <div className="text-base sm:text-lg font-semibold text-[#F0F6FC]">
                  {accountHolder}
                </div>
              </div>

              <div>
                <div className="text-xs text-[#94A3B8] mb-1">
                  {isAR ? 'رقم الآيبان (IBAN)' : 'IBAN Numarası'}
                </div>
                <div className="p-3.5 rounded-xl bg-[#080C10]/80 border border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <span className="font-mono text-base sm:text-lg font-bold text-[#00D4B2] tracking-wider select-all">
                    {iban}
                  </span>
                  <button
                    onClick={handleCopy}
                    className={`inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 shrink-0 ${
                      copied
                        ? 'bg-emerald-500 text-white'
                        : 'bg-[#00D4B2] hover:bg-[#33DEC5] text-[#080C10]'
                    }`}
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4" />
                        {isAR ? 'تم النسخ!' : 'Kopyalandı!'}
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4" />
                        {isAR ? 'نسخ الآيبان' : 'IBAN Kopyala'}
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>

            {/* Right Quick Note & Security Card */}
            <div className="md:col-span-4 bg-white/[0.02] border border-white/5 rounded-xl p-5 flex flex-col justify-between h-full space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm font-semibold text-[#F0F6FC]">
                  <ShieldCheck className="w-4 h-4 text-[#00D4B2]" />
                  {isAR ? 'شبهات وإعفاءات رسمية' : 'Resmi & Güvenli Bağış'}
                </div>
                <p className="text-xs text-[#94A3B8] leading-relaxed">
                  {isAR
                    ? 'يرجى كتابة "تبرع" في خانة الوصف عند التحويل المصرفي لضمان توجيهه في الأوجه الشرعية المحددة.'
                    : 'Havale ve EFT işlemlerinde açıklama kısmına "Bağış" yazılması rica olunur. Tüm işlemler vakıf tüzüğü ve mevzuatına uygundur.'}
                </p>
              </div>

              <div className="pt-3 border-t border-white/5 flex items-start gap-2 text-[11px] text-[#64748B]">
                <Info className="w-3.5 h-3.5 text-[#00D4B2] shrink-0 mt-0.5" />
                <span>
                  {isAR
                    ? 'للتحويلات الدولية أو العملات الأجنبية، يرجى التواصل معنا عبر البريد.'
                    : 'Döviz veya uluslararası transferler için lütfen vakfımızla iletişime geçiniz.'}
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
