'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, HeartHandshake } from 'lucide-react'
import { Link, usePathname } from '@/i18n/routing'
import MobileMenu from './MobileMenu'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const t = useTranslations('nav')
  const locale = useLocale()
  const otherLocale = locale === 'tr' ? 'ar' : 'tr'
  const isRTL = locale === 'ar'
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: isRTL ? 'الرئيسية' : 'Ana Sayfa', href: '/' },
    { label: isRTL ? 'عن الوقف' : 'Hakkımızda', href: '/hakkimizda' },
    { label: isRTL ? 'الأنشطة والواجبات' : 'Faaliyetlerimiz', href: '/faaliyetler' },
    { label: isRTL ? 'تقارير الاستشارة' : 'Raporlar', href: '/raporlar' },
    { label: isRTL ? 'الهيكل التنظيمي' : 'Organizasyon', href: '/organizasyon' },
    { label: isRTL ? 'شروط العضوية' : 'Üyelik', href: '/uyelik' },
    { label: isRTL ? 'اتصل بنا' : 'İletişim', href: '/iletisim' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#080C10]/90 backdrop-blur-md border-b border-white/10 shadow-[0_8px_30px_rgba(0,0,0,0.5)] h-[72px]'
            : 'bg-[#080C10]/60 backdrop-blur-sm border-b border-white/5 h-[76px]'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-[1340px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & Foundation Name */}
          <Link href="/" className="flex items-center gap-3 group shrink-0" dir="ltr">
            <img
              src="/logo-white.png"
              alt="Uluslararası İslami Davet Vakfı Logo"
              style={{ height: '46px', width: 'auto' }}
              className="object-contain transition-transform duration-200 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-inter text-[9px] font-bold tracking-[0.25em] text-[#00D4B2] uppercase leading-tight">
                ULUSLARARASI
              </span>
              <span className="font-inter text-[13px] sm:text-[14px] font-extrabold tracking-tight text-[#F0F6FC] whitespace-nowrap">
                İSLAMİ DAVET VAKFI
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3 py-1.5 font-inter text-[14px] font-medium transition-all duration-200 rounded-lg ${
                    active
                      ? 'text-[#00D4B2] font-semibold bg-[#00D4B2]/10'
                      : 'text-[#94A3B8] hover:text-[#F0F6FC] hover:bg-white/[0.04]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#00D4B2] rounded-full shadow-[0_0_8px_#00D4B2]" />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right Action: Language + Support CTA */}
          <div className="flex items-center gap-3.5">
            {/* Language Switcher */}
            <div className="hidden sm:flex items-center gap-1 text-xs font-semibold px-2 py-1 rounded-lg bg-white/[0.04] border border-white/10 text-[#94A3B8]">
              <Link
                href={pathname}
                locale="tr"
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  locale === 'tr' ? 'bg-[#00D4B2] text-[#080C10] font-bold' : 'hover:text-[#F0F6FC]'
                }`}
              >
                TR
              </Link>
              <span className="opacity-40">|</span>
              <Link
                href={pathname}
                locale="ar"
                className={`px-1.5 py-0.5 rounded transition-colors ${
                  locale === 'ar' ? 'bg-[#00D4B2] text-[#080C10] font-bold' : 'hover:text-[#F0F6FC]'
                }`}
              >
                AR
              </Link>
            </div>

            {/* Quick Donation CTA Button */}
            <a
              href="/#hizli-bagis"
              className="hidden md:inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold px-4 py-2 rounded-xl bg-[#00D4B2] hover:bg-[#33DEC5] text-[#080C10] shadow-[0_0_20px_rgba(0,212,178,0.3)] transition-all hover:-translate-y-0.5"
            >
              <HeartHandshake className="w-4 h-4" />
              <span>{isRTL ? 'تبرع الآن' : 'Bağış Yap'}</span>
            </a>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className="xl:hidden p-2 rounded-lg bg-white/[0.05] border border-white/10 text-[#F0F6FC] hover:text-[#00D4B2] transition-colors"
              aria-label="Menüyü Aç"
              aria-expanded={mobileOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

        </div>
      </header>

      <MobileMenu
        isOpen={mobileOpen}
        onClose={() => setMobileOpen(false)}
        navLinks={navLinks}
        locale={locale}
        otherLocale={otherLocale}
        isRTL={isRTL}
        contactLabel={isRTL ? 'اتصل بنا' : 'İletişim'}
      />
    </>
  )
}
