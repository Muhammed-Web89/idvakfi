import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import HeroSection from '@/components/home/HeroSection'
import StatsSection from '@/components/home/StatsSection'
import CoreHighlights from '@/components/home/CoreHighlights'
import QuickDonation from '@/components/home/QuickDonation'
import FeaturedArticles from '@/components/home/FeaturedArticles'
import VolunteerSupportCTA from '@/components/home/VolunteerSupportCTA'
import { getPostsByCategory, CATEGORIES } from '@/lib/wordpress'

type Props = {
  params: Promise<{ locale: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  const isAR = locale === 'ar'
  return {
    title: isAR ? 'وقف الدعوة الإسلامية الدولي - الصفحة الرئيسية' : 'Uluslararası İslami Davet Vakfı | Ana Sayfa',
    description: isAR
      ? 'مؤسسة وقفية دولية تسترشد بالقرآن والسنة، وتعمل على نشر الوعي الإسلامي، وتوثيق أواصر الأخوة بـ 15 لغة حية.'
      : 'Kur\'an ve Sünnet rehberliğinde küresel davet, ilim halkaları ve kardeşlik hukukuyla insanlığa hizmet eden köklü vakıf.',
    alternates: {
      canonical: '/',
      languages: { tr: '/', ar: '/ar' },
    },
  }
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params

  // Gracefully fetch posts or fallback to static data
  const [newsPosts, articlePosts] = await Promise.allSettled([
    getPostsByCategory(CATEGORIES.GUNDEM, 3),
    getPostsByCategory(CATEGORIES.MAKALE, 3),
  ])

  return (
    <div className="bg-[#080C10] text-[#F0F6FC] min-h-screen">
      {/* 1. Hero Bölümü: Karşılama, Slogan, 2D Vektör İllüstrasyon, 2 Ana Buton */}
      <HeroSection />

      {/* 2. Sayılarla Vakfımız: Animasyonlu CountUp Gerçek Veriler (15+ Dil, 40+ Heyet, 4 Kongre, 20+ Yıl) */}
      <StatsSection />

      {/* 3. Öne Çıkanlar: Amacımız, İlkelerimiz, Faaliyetlerimiz (3'lü Glassmorphism Kart) */}
      <CoreHighlights />

      {/* 4. Hızlı Bağış Alanı: Kopyalanabilir IBAN, VakıfBank, Hesap Adı */}
      <QuickDonation />

      {/* 5. Öne Çıkan Makaleler ve Raporlar */}
      <FeaturedArticles articles={articlePosts.status === 'fulfilled' ? articlePosts.value : undefined} />

      {/* 6. Gönüllü Ol ve Katıl CTA */}
      <VolunteerSupportCTA />
    </div>
  )
}
