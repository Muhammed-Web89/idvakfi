'use client'

import { Link } from '@/i18n/routing'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowRight, BookOpen, GraduationCap, Globe, Heart, Mic2 } from 'lucide-react'
import SectionTitle from '@/components/ui/SectionTitle'
import ScrollReveal from '@/components/ui/ScrollReveal'
import IslamicPattern from '@/components/ui/IslamicPattern'
import { staggerContainer, itemVariants } from '@/lib/animations'

const ACTIVITIES = [
  {
    id: 'education',
    icon: GraduationCap,
    titleKey: 'education' as const,
    descKey: 'educationDesc' as const,
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&q=80',
    large: true,
  },
  {
    id: 'publishing',
    icon: BookOpen,
    titleKey: 'publishing' as const,
    descKey: 'publishingDesc' as const,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    large: false,
  },
  {
    id: 'irsat',
    icon: Mic2,
    titleKey: 'irsat' as const,
    descKey: 'irsatDesc' as const,
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&q=80',
    large: false,
  },
  {
    id: 'social',
    icon: Heart,
    titleKey: 'social' as const,
    descKey: 'socialDesc' as const,
    image: 'https://images.unsplash.com/photo-1593113630400-ea4288922559?w=400&q=80',
    large: false,
  },
  {
    id: 'international',
    icon: Globe,
    titleKey: 'international' as const,
    descKey: 'internationalDesc' as const,
    image: 'https://images.unsplash.com/photo-1532375810709-75b1da00537c?w=400&q=80',
    large: false,
  },
]

function ActivityCard({
  activity,
  large = false,
}: {
  activity: typeof ACTIVITIES[0]
  large?: boolean
}) {
  const t = useTranslations('activities')
  const Icon = activity.icon

  return (
    <Link
      href={`/faaliyetler/${activity.id}`}
      className="group relative overflow-hidden rounded-2xl block"
      style={{ aspectRatio: large ? '4/3' : '16/9' }}
    >
      <Image
        src={activity.image}
        alt={t(activity.titleKey)}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
        sizes={large ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-brand-navy/90 via-brand-navy/30 to-transparent group-hover:from-brand-teal/80 transition-all duration-500" />

      {/* Content */}
      <div className="absolute inset-0 p-5 flex flex-col justify-end">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-brand-gold/80 transition-colors duration-300">
            <Icon className="w-4 h-4 text-white" />
          </div>
        </div>
        <h3 className={`font-playfair font-bold text-white mb-1 ${large ? 'text-2xl' : 'text-lg'}`}>
          {t(activity.titleKey)}
        </h3>
        <p className="text-gray-200 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400">
          {t(activity.descKey)}
        </p>
        <span className="inline-flex items-center gap-1 text-brand-gold text-xs font-medium mt-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 delay-75">
          İncele <ArrowRight className="w-3 h-3" />
        </span>
      </div>
    </Link>
  )
}

export default function ActivitiesPreview() {
  const t = useTranslations('sections')
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <section
      className="section-padding bg-brand-navy relative overflow-hidden"
      aria-label="Faaliyetler"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <IslamicPattern opacity={0.04} color="white" size={90} />

      <div className="relative container-narrow">
        <div className="flex items-end justify-between mb-12">
          <ScrollReveal>
            <SectionTitle
              tag="Faaliyetler"
              title={t('activities')}
              align="left"
              dark
            />
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/faaliyetler"
              className="hidden sm:flex items-center gap-2 text-brand-gold font-semibold hover:text-brand-goldLight transition-colors group text-sm"
            >
              {t('viewAll')}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {/* Large card - spans 2 rows on lg */}
          <motion.div variants={itemVariants} className="lg:row-span-2 lg:col-span-1">
            <ActivityCard activity={ACTIVITIES[0]} large />
          </motion.div>

          {/* 4 smaller cards */}
          {ACTIVITIES.slice(1).map((activity) => (
            <motion.div key={activity.id} variants={itemVariants}>
              <ActivityCard activity={activity} />
            </motion.div>
          ))}
        </motion.div>

        <div className="sm:hidden text-center mt-8">
          <Link href="/faaliyetler" className="btn-primary">
            {t('viewAll')} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
