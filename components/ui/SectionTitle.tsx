interface SectionTitleProps {
  tag?: string
  title: string
  highlight?: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  dark?: boolean
  className?: string
}

export default function SectionTitle({
  tag,
  title,
  highlight,
  subtitle,
  align = 'center',
  dark = false,
  className = '',
}: SectionTitleProps) {
  const alignClass = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[align]

  return (
    <div className={`${alignClass} ${className}`}>
      {tag && (
        <span
          className={`inline-block font-inter text-[12px] font-semibold tracking-[0.1em] uppercase mb-3 px-3 py-1 rounded ${
            dark
              ? 'text-white/60 bg-white/10'
              : 'text-[#2D6A6A] bg-[rgba(27,77,77,0.08)]'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-amiri font-bold text-[32px] md:text-[38px] lg:text-[42px] leading-tight mb-4 ${
          dark ? 'text-white' : 'text-[#1A1A1A]'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className={dark ? 'text-[#3D8B8B]' : 'text-[#1B4D4D]'}>
            {highlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`font-inter text-[16px] md:text-[17px] max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-white/70' : 'text-[#5C5C5C]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
