'use client'

import { use, useState } from 'react'
import { notFound } from 'next/navigation'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import {
  Calendar,
  Clock,
  User,
  ArrowLeft,
  Share2,
  Bookmark,
  Check,
  ArrowRight,
} from 'lucide-react'
import { staticArticles } from '@/lib/staticData'
import IslamicPattern from '@/components/ui/IslamicPattern'

type Props = {
  params: Promise<{ locale: string; slug: string }>
}

export default function ArticleDetailPage({ params }: Props) {
  const { locale, slug } = use(params)
  const isRTL = locale === 'ar'

  const [copied, setCopied] = useState(false)
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xl'>('normal')

  const article = staticArticles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const handleCopyLink = () => {
    if (typeof window !== 'undefined') {
      navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const fontSizeClass = {
    normal: 'text-base leading-relaxed',
    large: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
  }[fontSize]

  const recommended = staticArticles.filter((art) => art.id !== article.id).slice(0, 3)

  return (
    <div className="bg-[#F7F5F0] min-h-screen pb-20" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Article Header Banner */}
      <section className="relative bg-[#0F2E2E] py-20 text-white overflow-hidden">
        <IslamicPattern opacity={0.04} color="white" size={90} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <Link
            href="/makaleler"
            className="inline-flex items-center gap-2 text-[#3D8B8B] hover:text-white text-xs font-semibold uppercase tracking-wider mb-6 transition-colors font-inter"
          >
            <ArrowLeft className="w-4 h-4" />
            {locale === 'ar' ? 'العودة للمنشورات' : 'Yayınlar & Makaleler'}
          </Link>
          <div className="max-w-4xl">
            <span className="text-[#3D8B8B] font-semibold uppercase tracking-wider text-xs block mb-3 font-inter">
              {article.category}
            </span>
            <h1 className="font-amiri font-bold text-3xl sm:text-4xl md:text-5xl leading-tight text-white mb-6">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-white/80 text-xs sm:text-sm font-inter">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4 text-[#3D8B8B]" />
                {article.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#3D8B8B]" />
                {article.date}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#3D8B8B]" />
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
            <div className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm">
              <h3 className="font-amiri font-bold text-[#1A1A1A] border-b border-[#E5E2DA] pb-3 mb-4 text-base uppercase tracking-wider">
                {locale === 'ar' ? 'المحتويات' : 'İçindekiler'}
              </h3>
              <ul className="space-y-3">
                {article.toc.map((item, i) => (
                  <li key={i}>
                    <a
                      href={`#${item.id}`}
                      className="font-inter text-xs text-[#5C5C5C] hover:text-[#1B4D4D] transition-colors flex items-start gap-2 leading-relaxed"
                    >
                      <span className="font-bold text-[#1B4D4D]">{i + 1}.</span>
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Share and Print actions */}
            <div className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm flex items-center justify-between gap-2">
              <span className="font-inter text-[#8A8A8A] text-xs font-semibold uppercase tracking-wider">
                {locale === 'ar' ? 'مشاركة' : 'Paylaş'}:
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="p-2.5 rounded-lg border border-[#E5E2DA] hover:border-[#1B4D4D] hover:bg-[#F7F5F0] text-[#5C5C5C] hover:text-[#1B4D4D] transition-all"
                  title="Bağlantıyı Kopyala"
                >
                  {copied ? <Check className="w-4 h-4 text-[#1B4D4D]" /> : <Share2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </aside>

          {/* Column 2 (Center Main Article) - 9 Cols */}
          <main className="lg:col-span-9 space-y-8">
            {/* Reading Settings bar */}
            <div className="bg-white border border-[#E5E2DA] rounded-xl px-6 py-3.5 shadow-sm flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-inter text-[#5C5C5C]">
                <Bookmark className="w-4 h-4 text-[#1B4D4D]" />
                <span>Yazı Boyutu:</span>
                <button
                  onClick={() => setFontSize('normal')}
                  className={`px-2 py-1 rounded font-bold ${fontSize === 'normal' ? 'bg-[#1B4D4D] text-white' : 'hover:bg-gray-100'}`}
                >
                  A
                </button>
                <button
                  onClick={() => setFontSize('large')}
                  className={`px-2.5 py-1 rounded font-bold text-sm ${fontSize === 'large' ? 'bg-[#1B4D4D] text-white' : 'hover:bg-gray-100'}`}
                >
                  A+
                </button>
                <button
                  onClick={() => setFontSize('xl')}
                  className={`px-3 py-1 rounded font-bold text-base ${fontSize === 'xl' ? 'bg-[#1B4D4D] text-white' : 'hover:bg-gray-100'}`}
                >
                  A++
                </button>
              </div>
            </div>

            {/* Article Content Container */}
            <article className="bg-white rounded-xl border border-[#E5E2DA] p-8 sm:p-12 shadow-sm">
              {/* Excerpt Lead Box */}
              <div className="bg-[#F7F5F0] border-l-4 border-[#1B4D4D] p-6 rounded-r-xl mb-10">
                <p className="font-amiri text-lg sm:text-xl font-semibold text-[#1A1A1A] leading-relaxed italic">
                  &ldquo;{article.excerpt}&rdquo;
                </p>
              </div>

              {/* Render Structured Content */}
              <div className={`prose prose-lg max-w-none text-[#1A1A1A] font-inter ${fontSizeClass}`}>
                {article.content.split('### ').map((section, idx) => {
                  if (!section.trim()) return null
                  const lines = section.trim().split('\n')
                  const heading = lines[0]
                  const bodyLines = lines.slice(1).join('\n')
                  const tocMatch = article.toc[idx - 1]
                  const sectionId = tocMatch ? tocMatch.id : `sec-${idx}`

                  return (
                    <section key={idx} id={sectionId} className="scroll-mt-28 mb-10">
                      <h2 className="font-amiri font-bold text-2xl sm:text-3xl text-[#1A1A1A] pb-2 border-b border-[#E5E2DA] mb-4">
                        {heading}
                      </h2>
                      <div
                        className="space-y-4 text-[#5C5C5C] leading-relaxed"
                        dangerouslySetInnerHTML={{
                          __html: bodyLines
                            .replace(/- \*\*(.*?)\*\*/g, '<li><strong class="text-[#1B4D4D]">$1</strong>')
                            .replace(/- /g, '<li class="ml-4 list-disc mb-2">')
                            .replace(/\n\n/g, '<p class="mt-4">')
                        }}
                      />
                    </section>
                  )
                })}
              </div>

              {/* Author signature box */}
              <div className="mt-12 pt-8 border-t border-[#E5E2DA] flex items-center gap-4 bg-[#F7F5F0] p-6 rounded-xl">
                <div className="w-12 h-12 rounded-full bg-[#1B4D4D] text-white flex items-center justify-center font-bold text-lg font-amiri shadow-sm">
                  {article.author.charAt(0)}
                </div>
                <div>
                  <span className="text-[11px] text-[#2D6A6A] font-semibold uppercase tracking-wider block font-inter">
                    Yazar / Heyet
                  </span>
                  <h4 className="font-amiri font-bold text-xl text-[#1A1A1A]">
                    {article.author}
                  </h4>
                </div>
              </div>
            </article>

            {/* Recommended Articles */}
            {recommended.length > 0 && (
              <div className="mt-12">
                <h3 className="font-amiri font-bold text-2xl text-[#1A1A1A] mb-6">
                  {locale === 'ar' ? 'مقالات أخرى قد تهمك' : 'İlginizi Çekebilecek Diğer Yayınlar'}
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {recommended.map((item) => (
                    <Link
                      key={item.id}
                      href={`/makaleler/${item.slug}`}
                      className="bg-white border border-[#E5E2DA] rounded-xl p-6 hover:shadow-md transition-all group flex flex-col justify-between"
                    >
                      <div>
                        <span className="text-[10px] font-semibold text-[#1B4D4D] uppercase tracking-wider block mb-2 font-inter">
                          {item.category}
                        </span>
                        <h4 className="font-amiri font-bold text-lg text-[#1A1A1A] group-hover:text-[#1B4D4D] transition-colors leading-snug line-clamp-2">
                          {item.title}
                        </h4>
                      </div>
                      <div className="mt-4 pt-3 border-t border-[#E5E2DA] flex items-center justify-between text-xs text-[#8A8A8A] font-inter">
                        <span>{item.readTime}</span>
                        <ArrowRight className="w-3.5 h-3.5 text-[#1B4D4D] group-hover:translate-x-1 transition-transform" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  )
}
