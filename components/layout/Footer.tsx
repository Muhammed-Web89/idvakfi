'use client'

import { useTranslations, useLocale } from 'next-intl'
import { MapPin, Phone, Mail, FileCheck, ShieldCheck, HeartHandshake } from 'lucide-react'
import { Link } from '@/i18n/routing'
import IslamicPattern from '@/components/ui/IslamicPattern'

function XIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function YoutubeIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
    </svg>
  )
}

const SOCIAL_LINKS = [
  { Icon: XIcon, href: 'https://x.com/islamidavetvkf', label: 'X (Twitter)' },
  { Icon: YoutubeIcon, href: 'https://youtube.com/@İslamiDavetVakfı', label: 'YouTube' },
  { Icon: InstagramIcon, href: 'https://instagram.com/islamidavetvakfi', label: 'Instagram' },
]

export default function Footer() {
  const t = useTranslations('footer')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  const corporateLinks = [
    { label: isRTL ? 'عن الوقف' : 'Hakkımızda', href: '/hakkimizda' },
    { label: isRTL ? 'الأهداف والمبادئ' : 'Amacımız ve İlkelerimiz', href: '/hakkimizda#amacimiz' },
    { label: isRTL ? 'مجلس الإدارة واللجان' : 'Yönetim ve Kurullarımız', href: '/organizasyon' },
    { label: isRTL ? 'شروط العضوية' : 'Üyelik Vasıfları', href: '/uyelik' },
  ]

  const activityLinks = [
    { label: isRTL ? 'واجبات وأنشطة الوقف' : 'Faaliyetlerimiz & Vazifelerimiz', href: '/faaliyetler' },
    { label: isRTL ? 'تقارير المؤتمرات التشاورية' : 'Raporlar & İstişare Kararları', href: '/raporlar' },
    { label: isRTL ? 'المقالات والأبحاث' : 'Yayınlar ve Makaleler', href: '/makaleler' },
    { label: isRTL ? 'الدعم والتبرع' : 'Hızlı Bağış & Destek', href: '/#hizli-bagis' },
  ]

  return (
    <footer
      className="bg-[#05080B] text-[#F0F6FC] pt-16 pb-12 px-4 sm:px-6 lg:px-8 border-t border-white/10 relative overflow-hidden"
      aria-label="Site Alt Bilgisi"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <IslamicPattern opacity={0.02} color="#00D4B2" size={80} />

      <div className="relative max-w-[1280px] mx-auto z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          
          {/* Col 1: Marka & Logo (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-flex items-center gap-3 group" dir="ltr">
              <img
                src="/logo-white.png"
                alt="Uluslararası İslami Davet Vakfı"
                style={{ height: '46px', width: 'auto' }}
                className="object-contain"
              />
              <div className="flex flex-col">
                <span className="font-inter text-[8px] font-bold tracking-[0.25em] text-[#00D4B2] uppercase">
                  ULUSLARARASI
                </span>
                <span className="font-inter text-[13px] font-extrabold text-[#F0F6FC] tracking-tight">
                  İSLAMİ DAVET VAKFI
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#94A3B8] leading-[1.8] max-w-sm">
              {isRTL
                ? 'مؤسسة وقفية دولية تسترشد بالقرآن والسنة، وتعمل على نشر الوعي الإسلامي، وتوثيق أواصر الأخوة، وإعداد الدعاة بـ 15 لغة حية حول العالم.'
                : 'Kur\'an ve Sünnet rehberliğinde küresel davet, ilim halkaları, gençlik eğitim kampları ve kardeşlik hukukuyla insanlığa hizmet eden köklü sivil toplum kuruluşu.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center text-[#94A3B8] hover:text-[#00D4B2] hover:border-[#00D4B2]/40 transition-colors"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Kurumsal (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00D4B2]">
              {isRTL ? 'عن الوقف' : 'Kurumsal'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {corporateLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#F0F6FC] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Faaliyetler & Raporlar (2.5 Cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00D4B2]">
              {isRTL ? 'الأنشطة والتقارير' : 'Faaliyet & Rapor'}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {activityLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-[#94A3B8] hover:text-[#F0F6FC] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Resmi İletişim ve UETS (3 Cols) */}
          <div className="lg:col-span-4 space-y-3.5 text-xs sm:text-sm">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#00D4B2]">
              {isRTL ? 'المقر والتواصل الرسمي' : 'Resmi İletişim'}
            </h4>

            <div className="flex items-start gap-2.5 text-[#94A3B8]">
              <MapPin className="w-4 h-4 text-[#00D4B2] shrink-0 mt-0.5" />
              <span>Güvercintepe Mah. Fatih Cad. No: 190-192 İç Kapı No: 2 Başakşehir / İstanbul</span>
            </div>

            <div className="flex items-center gap-2.5 text-[#94A3B8]">
              <Mail className="w-4 h-4 text-[#00D4B2] shrink-0" />
              <a href="mailto:islamidavetvakfi@gmail.com" className="hover:text-[#F0F6FC] font-mono">
                islamidavetvakfi@gmail.com
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-[#94A3B8]">
              <Phone className="w-4 h-4 text-[#00D4B2] shrink-0" />
              <span className="font-mono text-[#CBD5E1]">+90 534 662 70 40 / 0549 462 74 17</span>
            </div>

            {/* UETS Badge */}
            <div className="pt-2">
              <div className="p-3 rounded-xl bg-white/[0.03] border border-white/5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileCheck className="w-3.5 h-3.5 text-[#00D4B2]" />
                  <span className="text-[11px] font-semibold text-[#CBD5E1]">UETS E-Tebligat:</span>
                </div>
                <span className="font-mono text-[11px] text-[#00D4B2] select-all">42690-96005-14189</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright + Mandatory KVKK and Cookie Links */}
        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#64748B]">
          <div>
            © 2026 Uluslararası İslami Davet Vakfı. Tüm hakları saklıdır.
          </div>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/iletisim#kvkk" className="hover:text-[#00D4B2] transition-colors">
              KVKK Aydınlatma Metni
            </Link>
            <span className="opacity-30">•</span>
            <Link href="/iletisim#cerez" className="hover:text-[#00D4B2] transition-colors">
              Çerez Politikası
            </Link>
            <span className="opacity-30">•</span>
            <Link href="/hakkimizda#tuzuk" className="hover:text-[#00D4B2] transition-colors">
              Vakıf Resmi Tüzüğü
            </Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
