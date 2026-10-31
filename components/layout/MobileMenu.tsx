'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Globe, Phone } from 'lucide-react'
import { Link, usePathname } from '@/i18n/routing'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  navLinks: { label: string; href: string }[]
  locale: string
  otherLocale: string
  isRTL: boolean
  contactLabel: string
}

export default function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  locale,
  otherLocale,
  isRTL,
  contactLabel,
}: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm lg:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 z-50 w-80 max-w-full bg-[#FFFFFF] flex flex-col lg:hidden shadow-2xl`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#E5E2DA]">
              <div className="flex items-center gap-2.5" dir="ltr">
                <img
                  src="/logo-dark.png"
                  alt="Logo"
                  className="h-10 w-auto object-contain"
                />
                <div className="flex flex-col">
                  <div className="flex justify-between w-full font-inter text-[9.5px] font-semibold text-[#1A1A1A]">
                    {'ULUSLARARASI'.split('').map((char, i) => (
                      <span key={i}>{char}</span>
                    ))}
                  </div>
                  <span className="font-inter text-[12px] font-bold text-[#1B4D4D] whitespace-nowrap">
                    İSLAMİ DAVET VAKFI
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 text-[#5C5C5C] hover:text-[#1A1A1A] transition-colors rounded-lg"
                aria-label="Menüyü Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-1">
                {navLinks.map((link, i) => {
                  const active = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 + 0.05 }}
                    >
                      <Link
                        href={link.href}
                        onClick={onClose}
                        className={`flex items-center py-3 px-4 rounded-lg font-inter text-[15px] font-medium transition-colors ${
                          active
                            ? 'bg-[rgba(27,77,77,0.08)] text-[#1B4D4D] font-semibold'
                            : 'text-[#1A1A1A] hover:bg-[#F7F5F0] hover:text-[#1B4D4D]'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
            </nav>

            {/* Footer actions */}
            <div className="p-6 border-t border-[#E5E2DA] space-y-3 bg-[#F7F5F0]">
              <Link
                href="/iletisim"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-[#1B4D4D] hover:bg-[#2D6A6A] text-white font-inter text-[14px] font-medium py-3 px-4 rounded-[6px] transition-colors shadow-sm"
              >
                <Phone className="w-4 h-4" />
                {contactLabel}
              </Link>
              <div className="flex items-center justify-center gap-4 pt-2 font-inter text-[14px]">
                <Link
                  href={pathname}
                  locale="tr"
                  onClick={onClose}
                  className={`px-3 py-1.5 rounded ${
                    locale === 'tr'
                      ? 'bg-[#1B4D4D] text-white font-semibold'
                      : 'text-[#5C5C5C] hover:text-[#1A1A1A]'
                  }`}
                >
                  Türkçe
                </Link>
                <Link
                  href={pathname}
                  locale="ar"
                  onClick={onClose}
                  className={`px-3 py-1.5 rounded ${
                    locale === 'ar'
                      ? 'bg-[#1B4D4D] text-white font-semibold'
                      : 'text-[#5C5C5C] hover:text-[#1A1A1A]'
                  }`}
                >
                  العربية
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
