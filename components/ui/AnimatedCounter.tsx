'use client'

import { useEffect, useRef, useState } from 'react'
import { useLocale } from 'next-intl'

interface AnimatedCounterProps {
  target: number
  suffix?: string
  duration?: number
  formatThousands?: boolean
  className?: string
}

const toArabicDigits = (val: number | string): string => {
  const arabicDigits = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩']
  return val.toString().replace(/[0-9]/g, (w) => arabicDigits[+w])
}

export default function AnimatedCounter({
  target,
  suffix = '',
  duration = 2500,
  formatThousands = false,
  className = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)
  const hasAnimated = useRef(false)
  const locale = useLocale()
  const isAR = locale === 'ar'

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          setIsVisible(true)
          hasAnimated.current = true
        }
      },
      { threshold: 0.05, rootMargin: '150px' }
    )
    if (ref.current) observer.observe(ref.current)

    // Fallback timer: ensure it counts up even if screenshot or fast render doesn't trigger scroll
    const fallbackTimer = setTimeout(() => {
      if (!hasAnimated.current) {
        setIsVisible(true)
        hasAnimated.current = true
      }
    }, 800)

    return () => {
      observer.disconnect()
      clearTimeout(fallbackTimer)
    }
  }, [])

  useEffect(() => {
    if (!isVisible) return
    let startTime: number
    const startValue = 0

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out-cubic
      setCount(Math.floor(eased * (target - startValue) + startValue))
      if (progress < 1) requestAnimationFrame(animate)
      else setCount(target)
    }

    requestAnimationFrame(animate)
  }, [isVisible, target, duration])

  const formattedValue = formatThousands
    ? count.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    : count.toString()

  const displayCount = isAR ? toArabicDigits(formattedValue) : formattedValue
  const displaySuffix = isAR ? toArabicDigits(suffix) : suffix

  return (
    <span ref={ref} className={className}>
      {displayCount}
      {displaySuffix}
    </span>
  )
}
