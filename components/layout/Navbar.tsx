'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useTranslations, useLocale } from 'next-intl'
import { Menu, X, Globe, Phone } from 'lucide-react'
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
    const handler = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const navLinks = [
    { label: t('home'), href: '/' },
    { label: t('about'), href: '/hakkimizda' },
    { label: t('activities'), href: '/faaliyetler' },
    { label: t('news'), href: '/gundem' },
    { label: t('articles'), href: '/makaleler' },
    { label: t('scholars'), href: '/hocalarimiz' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? 'bg-brand-navy/95 backdrop-blur-md shadow-lg py-3'
            : 'bg-transparent py-5'
          }`}
        dir={isRTL ? 'rtl' : 'ltr'}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center group">
              <Image
                src="/logo.png?v=3"
                alt="Uluslararası İslami Davet Vakfı Logo"
                width={138}
                height={40}
                className="h-10 w-auto object-contain group-hover:opacity-90 transition-opacity duration-300"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-200 hover:text-white transition-colors duration-200 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-gold group-hover:w-4/5 transition-all duration-300 rounded-full" />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-3">
              {/* Language toggle */}
              <Link
                href={pathname}
                locale={otherLocale}
                className="hidden md:flex items-center gap-1.5 text-xs font-medium text-gray-300 hover:text-white transition-colors border border-white/20 rounded-full px-3 py-1.5 hover:border-white/50"
                aria-label="Dil değiştir"
              >
                <Globe className="w-3.5 h-3.5" />
                {otherLocale.toUpperCase()}
              </Link>

              {/* Contact CTA */}
              <Link
                href="/iletisim"
                className="hidden md:flex items-center gap-2 bg-brand-teal hover:bg-brand-tealDark text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-brand-teal/25"
              >
                <Phone className="w-3.5 h-3.5" />
                {t('contact')}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 text-white hover:text-brand-gold transition-colors"
                aria-label="Menüyü aç"
                aria-expanded={mobileOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
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
