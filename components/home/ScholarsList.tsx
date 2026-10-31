'use client'

import { motion } from 'framer-motion'
import { useLocale } from 'next-intl'
import { Link } from '@/i18n/routing'
import { GraduationCap, ArrowRight } from 'lucide-react'

const scholars = [
  { name: 'Prof. Dr. Orhan Çeker', role: 'İslam Hukuku & Kelam', initial: 'OÇ' },
  { name: 'Prof. Dr. Saim Ayaz', role: 'Tefsir & Akâid', initial: 'SA' },
  { name: 'Prof. Dr. Musa Kazım', role: 'Fikir & Davet', initial: 'MK' },
  { name: 'Doç. Dr. Abdulkadir Turan', role: 'Tarih & Tebliğ', initial: 'AT' },
]

export default function ScholarsList() {
  const locale = useLocale()
  const isRTL = locale === 'ar'

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {scholars.map((sch, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: idx * 0.1 }}
          className="bg-white border border-[#E5E2DA] rounded-xl p-6 shadow-sm hover:shadow-md transition-all text-center"
        >
          <div className="w-16 h-16 rounded-full bg-[rgba(27,77,77,0.08)] text-[#1B4D4D] font-amiri font-bold text-xl flex items-center justify-center mx-auto mb-4 border border-[#1B4D4D]/20">
            {sch.initial}
          </div>
          <h3 className="font-amiri font-bold text-lg text-[#1A1A1A] mb-1">{sch.name}</h3>
          <p className="font-inter text-xs text-[#5C5C5C] mb-4">{sch.role}</p>
          <Link
            href="/makaleler"
            className="font-inter text-xs font-semibold text-[#1B4D4D] hover:text-[#2D6A6A] inline-flex items-center gap-1"
          >
            <span>Yazıları</span>
            <ArrowRight className="w-3 h-3" />
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
