'use client'

import { useState, useEffect } from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, Globe, Phone } from 'lucide-react'
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
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/hakkimizda' },
    { label: t('activities'), href: '/faaliyetler' },
    { label: t('articles'), href: '/makaleler' },
    { label: t('scholars'), href: '/hocalarimiz' },
    { label: t('contact'), href: '/iletisim' },
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
            ? 'bg-white/95 backdrop-blur-[10px] shadow-[0_1px_3px_rgba(0,0,0,0.05)] h-[72px]'
            : 'bg-transparent h-[72px]'
        }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-[1240px] h-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Left / Right: Logo & Typography */}
          <Link href="/" className="flex items-center gap-3 group" dir="ltr">
            <img
              src={scrolled ? "/logo-dark.png" : "/logo-white.png"}
              alt="Uluslararası İslami Davet Vakfı Logo"
              style={{ height: '48px', width: 'auto' }}
              className="object-contain transition-all duration-200"
            />
            <div className="flex flex-col">
              <div
                className={`flex justify-between w-full font-inter text-[10px] font-semibold transition-colors duration-200 ${
                  scrolled ? 'text-[#1A1A1A]' : 'text-white'
                }`}
              >
                {'ULUSLARARASI'.split('').map((char, i) => (
                  <span key={i}>{char}</span>
                ))}
              </div>
              <span
                className={`font-inter text-[13px] font-bold tracking-tight whitespace-nowrap transition-colors duration-200 ${
                  scrolled ? 'text-[#1B4D4D]' : 'text-white'
                }`}
              >
                İSLAMİ DAVET VAKFI
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 font-inter text-[15px] font-medium transition-colors duration-200 ${
                    scrolled
                      ? active
                        ? 'text-[#1B4D4D] font-semibold'
                        : 'text-[#1A1A1A] hover:text-[#1B4D4D]'
                      : active
                      ? 'text-white font-semibold'
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[2px] rounded-full ${
                        scrolled ? 'bg-[#1B4D4D]' : 'bg-[#3D8B8B]'
                      }`}
                    />
                  )}
                </Link>
              )
            })}
          </nav>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector: TR | EN */}
            <div
              className={`hidden md:flex items-center gap-1.5 font-inter text-[14px] transition-colors ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
            >
              <Link
                href={pathname}
                locale="tr"
                className={`transition-colors ${
                  locale === 'tr'
                    ? scrolled
                      ? 'text-[#1B4D4D] font-semibold'
                      : 'text-white font-semibold'
                    : 'text-[#8A8A8A] hover:text-[#1B4D4D]'
                }`}
              >
                TR
              </Link>
              <span className="text-[#8A8A8A] opacity-60">|</span>
              <Link
                href={pathname}
                locale="ar"
                className={`transition-colors ${
                  locale === 'ar'
                    ? scrolled
                      ? 'text-[#1B4D4D] font-semibold'
                      : 'text-white font-semibold'
                    : 'text-[#8A8A8A] hover:text-[#1B4D4D]'
                }`}
              >
                AR
              </Link>
            </div>

            {/* Contact CTA Button */}
            <Link
              href="/iletisim"
              className={`hidden md:inline-flex items-center justify-center font-inter text-[14px] font-semibold px-5 py-2.5 rounded-[6px] shadow-sm transition-all duration-200 ${
                scrolled
                  ? 'bg-[#1B4D4D] hover:bg-[#2D6A6A] text-white'
                  : 'bg-[#FFFFFF] hover:bg-[#F7F5F0] text-[#1B4D4D]'
              }`}
            >
              {t('contact')}
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 transition-colors ${
                scrolled ? 'text-[#1A1A1A]' : 'text-white'
              }`}
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
        contactLabel={t('contact')}
      />
    </>
  )
}
