import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { Playfair_Display, Inter, Noto_Naskh_Arabic } from 'next/font/google'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/app/globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  variable: '--font-arabic',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    default: 'İslami Davet Vakfı',
    template: '%s | İslami Davet Vakfı',
  },
  description: 'Hakikat yolunda ilim, irşat ve davet faaliyetleriyle insanlığa rehberlik eden köklü bir sivil toplum kuruluşu.',
  keywords: ['İslami Davet Vakfı', 'vakıf', 'İslam', 'davet', 'irşat', 'ilim'],
  openGraph: {
    siteName: 'İslami Davet Vakfı',
    type: 'website',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html
      lang={locale}
      dir={isRTL ? 'rtl' : 'ltr'}
      className={`${playfair.variable} ${inter.variable} ${notoNaskhArabic.variable}`}
    >
      <body className={`font-inter bg-brand-cream antialiased ${isRTL ? 'font-arabic' : ''}`}>
        <NextIntlClientProvider messages={messages}>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
