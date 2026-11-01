import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NextIntlClientProvider, hasLocale } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { routing } from '@/i18n/routing'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import '@/app/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Uluslararası İslami Davet Vakfı',
    template: '%s | Uluslararası İslami Davet Vakfı',
  },
  description: 'Hakikat yolunda ilim, irşat ve davet faaliyetleriyle insanlığa rehberlik eden köklü bir sivil toplum kuruluşu.',
  keywords: ['İslami Davet Vakfı', 'vakıf', 'İslam', 'davet', 'irşat', 'ilim', 'Kore daveti', 'Japonya camileri'],
  openGraph: {
    siteName: 'Uluslararası İslami Davet Vakfı',
    type: 'website',
  },
}

type Props = {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}

export default async function RootLayout({ children, params }: Props) {
  const { locale } = await params

  if (!hasLocale(routing.locales, locale)) {
    notFound()
  }

  const messages = await getMessages()
  const isRTL = locale === 'ar'

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className="scroll-smooth dark">
      <body className="min-h-screen flex flex-col bg-[#080C10] text-[#F0F6FC] font-inter antialiased selection:bg-[#00D4B2]/30 selection:text-[#00D4B2]">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
