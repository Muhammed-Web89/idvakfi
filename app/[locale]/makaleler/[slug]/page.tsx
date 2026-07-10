'use client'

import { use, useState } from 'react'
import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Link, useRouter } from '@/i18n/routing'
import { Calendar, User, Clock, Copy, Check, Share2, ZoomIn, ZoomOut, Eye, Bookmark, Printer, ArrowLeft } from 'lucide-react'
import { staticArticles } from '@/lib/staticData'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export default function ArticleDetailPage({ params }: Props) {
  const { locale, slug } = use(params)
  const isRTL = locale === 'ar'
  const router = useRouter()

  // Find article
  const article = staticArticles.find((art) => art.slug === slug)

  // Reader state
  const [fontSize, setFontSize] = useState<'base' | 'lg' | 'xl'>('lg')
  const [theme, setTheme] = useState<'light' | 'sepia' | 'dark'>('light')
  const [copied, setCopied] = useState(false)

  if (!article) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-cream text-center p-8">
        <h1 className="font-playfair font-bold text-3xl text-brand-navy mb-4">
          {locale === 'ar' ? 'التقرير غير موجود' : 'Rapor Bulunamadı'}
        </h1>
        <p className="text-gray-500 mb-8 max-w-md">
          {locale === 'ar'
            ? 'نعتذر، التقرير الذي تبحث عنه غير متوفر أو تم نقله.'
            : 'Aradığınız stratejik rapor ya da makale sistemde bulunamadı.'}
        </p>
        <Link href="/makaleler" className="btn-primary">
          <ArrowLeft className="w-4 h-4" />
          {locale === 'ar' ? 'العودة للمنشورات' : 'Yayınlara Dön'}
        </Link>
      </div>
    )
  }

  // Copy link action
  const copyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  // Font size mapper
  const fontClass = {
    base: 'text-sm sm:text-base leading-relaxed',
    lg: 'text-base sm:text-lg leading-relaxed',
    xl: 'text-lg sm:text-xl leading-relaxed'
  }[fontSize]

  // Theme mapper
  const themeClass = {
    light: 'bg-white text-gray-800 border-gray-100',
    sepia: 'bg-[#fcf8f2] text-[#5c3a21] border-[#f3e7da]',
    dark: 'bg-brand-navyMid text-gray-200 border-white/5'
  }[theme]

  // Recommended articles filtering
  const recommended = staticArticles.filter((art) => art.id !== article.id)

  return (
    <div className="bg-brand-cream min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Article Header Banner */}
      <section className="relative bg-brand-navy py-20 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={90} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-dark/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/makaleler"
            className="inline-flex items-center gap-2 text-brand-gold hover:text-white text-xs font-semibold uppercase tracking-wider mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'ar' ? 'العودة للمنشورات' : 'Yayınlar & Raporlar'}
          </Link>
          <div className="max-w-4xl">
            <span className="text-brand-gold font-semibold uppercase tracking-wider text-xs block mb-3">
              {article.category}
            </span>
            <h1 className="font-playfair font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-gray-300 text-xs sm:text-sm">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-brand-gold" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-brand-gold" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-gold" />
                {article.readTime} okuma
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Column 1 (Left Sticky TOC) - 3 Cols */}
          <aside className="lg:col-span-3 lg:sticky lg:top-24 space-y-6">
            <div className="bg-white border border-brand-teal/10 rounded-2xl p-6 shadow-sm">
              <h3 className="font-playfair font-bold text-brand-navy border-b border-gray-100 pb-3 mb-4 text-sm uppercase tracking-wider">
                {locale === 'ar' ? 'المحتويات' : 'İçindekiler'}
              </h3>
              <ul className="space-y-3">
                {article.toc.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.id}`}
                      className="text-xs text-gray-500 hover:text-brand-teal transition-colors flex items-start gap-2 leading-relaxed"
                    >
                      <span className="font-bold text-brand-gold">{i + 1}.</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share and Print actions */}
            <div className="bg-white border border-brand-teal/10 rounded-2xl p-6 shadow-sm flex items-center justify-between gap-2">
              <span className="text-gray-400 text-xs font-semibold uppercase tracking-wider">
                {locale === 'ar' ? 'مشاركة' : 'Paylaş'}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={copyLink}
                  className="p-2.5 rounded-xl border border-gray-100 hover:bg-brand-tealLight hover:text-brand-teal transition-all text-gray-400"
                  title="Linki Kopyala"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                </button>
                <a
                  href={`https://api.whatsapp.com/send?text=${encodeURIComponent(article.title)}%20${typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : ''}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-xl border border-gray-100 hover:bg-green-50 hover:text-green-600 transition-all text-gray-400"
                  title="WhatsApp"
                >
                  <Share2 className="w-4 h-4" />
                </a>
              </div>
            </div>
          </aside>

          {/* Column 2 (Center Content prose container) - 6 Cols */}
          <main className="lg:col-span-6 space-y-6">
            {/* Reading preferences toolbar */}
            <div className="bg-white border border-brand-teal/10 rounded-2xl px-6 py-4 shadow-sm flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-gray-400" />
                <span className="text-gray-400 text-xs font-semibold">Odak Modu</span>
              </div>
              
              {/* Font controls & Theme toggler */}
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-gray-100 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setFontSize('base')}
                    className={`px-3 py-1.5 text-xs font-bold transition-all ${fontSize === 'base' ? 'bg-brand-teal text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize('lg')}
                    className={`px-3 py-1.5 text-sm font-bold transition-all ${fontSize === 'lg' ? 'bg-brand-teal text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    A+
                  </button>
                  <button
                    onClick={() => setFontSize('xl')}
                    className={`px-3 py-1.5 text-base font-bold transition-all ${fontSize === 'xl' ? 'bg-brand-teal text-white' : 'text-gray-500 hover:bg-gray-50'}`}
                  >
                    A++
                  </button>
                </div>

                <div className="flex items-center gap-1.5 border border-gray-100 rounded-xl p-1 bg-gray-50">
                  {(['light', 'sepia', 'dark'] as const).map((t) => (
                    <button
                      key={t}
                      onClick={() => setTheme(t)}
                      className={`w-6 h-6 rounded-lg capitalize text-[10px] font-bold border transition-all ${
                        theme === t
                          ? 'border-brand-teal bg-white shadow-sm'
                          : 'border-transparent text-gray-400 hover:text-brand-navy'
                      }`}
                      style={{
                        backgroundColor: t === 'light' ? '#fff' : t === 'sepia' ? '#f5ece2' : '#0f2240'
                      }}
                      title={`${t} tema`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Reading Container Box */}
            <article className={`rounded-3xl p-8 border shadow-lg transition-colors duration-500 ${themeClass}`}>
              <div
                className={`prose max-w-none prose-teal prose-headings:font-playfair prose-headings:font-bold prose-headings:text-brand-navy prose-h3:text-brand-teal dark:prose-invert ${fontClass}`}
                style={{
                  color: theme === 'dark' ? '#cbd5e1' : theme === 'sepia' ? '#5c3a21' : '#374151'
                }}
              >
                {/* Format subheadings and sections with beautiful visual splits */}
                <div
                  dangerouslySetInnerHTML={{
                    __html: article.content
                      .trim()
                      .replace(/\n\n/g, '<p class="mb-5"></p>')
                      .replace(/- \*\*(.*?)\*\*/g, '<li><strong class="text-brand-gold">$1</strong>')
                      .replace(/- (.*?)/g, '<li>$1</li>')
                      .replace(/### (.*?)\n/g, '<h3 id="$1" class="font-playfair font-bold text-xl text-brand-teal mt-8 border-b border-brand-teal/10 pb-2 mb-4">$1</h3>')
                  }}
                />
              </div>
            </article>
          </main>

          {/* Column 3 (Right Recommendation Sidebar) - 3 Cols */}
          <aside className="lg:col-span-3 space-y-6">
            <div className="bg-white border border-brand-teal/10 rounded-2xl p-6 shadow-sm">
              <h3 className="font-playfair font-bold text-brand-navy border-b border-gray-100 pb-3 mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                <Bookmark className="w-4 h-4 text-brand-teal" />
                {locale === 'ar' ? 'مقترحات القراءة' : 'Diğer Yayınlar'}
              </h3>

              <div className="space-y-6">
                {recommended.map((art) => (
                  <div key={art.id} className="group border-b border-gray-50 pb-4 last:border-none last:pb-0">
                    <span className="text-[9px] text-brand-gold font-semibold uppercase tracking-wider block mb-1">
                      {art.category}
                    </span>
                    <Link
                      href={`/makaleler/${art.slug}`}
                      className="font-playfair font-bold text-sm text-brand-navy group-hover:text-brand-teal transition-colors leading-snug block mb-2"
                    >
                      {art.title}
                    </Link>
                    <span className="text-[10px] text-gray-400 block">{art.date}</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </div>
    </div>
  )
}
