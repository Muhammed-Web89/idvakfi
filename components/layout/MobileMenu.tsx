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
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
          />

          {/* Panel */}
          <motion.div
            initial={{ x: isRTL ? '-100%' : '100%' }}
            animate={{ x: 0 }}
            exit={{ x: isRTL ? '-100%' : '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 ${isRTL ? 'left-0' : 'right-0'} bottom-0 z-50 w-80 max-w-full bg-brand-navy flex flex-col lg:hidden`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10">
              <img
                src="/logo.png"
                alt="Uluslararası İslami Davet Vakfı Logo"
                className="h-8 w-auto object-contain"
              />
              <button
                onClick={onClose}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                aria-label="Menüyü kapat"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="flex-1 overflow-y-auto p-6">
              <ul className="space-y-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="flex items-center py-3 px-4 rounded-xl text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200 font-medium"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            {/* Footer actions */}
            <div className="p-6 border-t border-white/10 space-y-3">
              <Link
                href="/iletisim"
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full bg-brand-teal hover:bg-brand-tealDark text-white font-medium py-3 px-4 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4" />
                {contactLabel}
              </Link>
              <Link
                href={pathname}
                locale={otherLocale}
                onClick={onClose}
                className="flex items-center justify-center gap-2 w-full border border-white/20 text-gray-300 hover:text-white hover:border-white/50 font-medium py-3 px-4 rounded-xl transition-colors text-sm"
              >
                <Globe className="w-4 h-4" />
                {otherLocale === 'ar' ? 'العربية' : 'Türkçe'}
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
