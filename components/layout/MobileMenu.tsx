'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Globe, HeartHandshake } from 'lucide-react'
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
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm xl:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 320, damping: 32 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 z-50 w-80 max-w-full bg-[#0D1117] border-l border-white/10 flex flex-col xl:hidden shadow-2xl`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <div className="flex items-center gap-2.5" dir="ltr">
                <img
                  src="/logo-white.png"
                  alt="İslami Davet Vakfı"
                  style={{ height: '38px', width: 'auto' }}
                  className="object-contain"
                />
                <div className="flex flex-col">
                  <span className="font-inter text-[8px] font-bold tracking-[0.2em] text-[#00D4B2] uppercase">
                    ULUSLARARASI
                  </span>
                  <span className="font-inter text-[12px] font-bold text-[#F0F6FC]">
                    İSLAMİ DAVET VAKFI
                  </span>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-white/5 text-[#94A3B8] hover:text-[#F0F6FC]"
                aria-label="Kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Nav Links */}
            <nav className="flex-1 overflow-y-auto px-6 py-6 space-y-1.5">
              {navLinks.map((link) => {
                const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-xl font-inter text-[15px] font-medium transition-colors ${
                      active
                        ? 'bg-[#00D4B2]/15 text-[#00D4B2] font-semibold border border-[#00D4B2]/30'
                        : 'text-[#94A3B8] hover:text-[#F0F6FC] hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            {/* Footer with Language and Support Button */}
            <div className="p-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs text-[#94A3B8]">{isRTL ? 'اللغة' : 'Dil Seçimi'}</span>
                <div className="flex items-center gap-2">
                  <Link
                    href={pathname}
                    locale="tr"
                    className={`px-3 py-1 rounded text-xs font-semibold ${
                      locale === 'tr' ? 'bg-[#00D4B2] text-[#080C10]' : 'text-[#94A3B8]'
                    }`}
                  >
                    TR
                  </Link>
                  <Link
                    href={pathname}
                    locale="ar"
                    className={`px-3 py-1 rounded text-xs font-semibold ${
                      locale === 'ar' ? 'bg-[#00D4B2] text-[#080C10]' : 'text-[#94A3B8]'
                    }`}
                  >
                    AR
                  </Link>
                </div>
              </div>

              <a
                href="/#hizli-bagis"
                onClick={onClose}
                className="btn-turquoise w-full text-center text-sm py-2.5"
              >
                <HeartHandshake className="w-4 h-4" />
                <span>{isRTL ? 'تبرع الآن' : 'Bağış Yap'}</span>
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
