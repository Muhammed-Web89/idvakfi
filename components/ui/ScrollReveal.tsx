'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { fadeInUp } from '@/lib/animations'

interface ScrollRevealProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'scaleIn'
}

export default function ScrollReveal({
  children,
  className = '',
  delay = 0,
  variant = 'fadeInUp',
}: ScrollRevealProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const variants = {
    fadeInUp: { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } },
    fadeInLeft: { hidden: { opacity: 0, x: -30 }, visible: { opacity: 1, x: 0 } },
    fadeInRight: { hidden: { opacity: 0, x: 30 }, visible: { opacity: 1, x: 0 } },
    scaleIn: { hidden: { opacity: 0, scale: 0.92 }, visible: { opacity: 1, scale: 1 } },
  }

  return (
    <motion.div
      ref={ref}
      variants={variants[variant]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
