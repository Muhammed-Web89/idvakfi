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
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-brand-gold mb-3 border border-brand-gold/30 px-3 py-1 rounded-full">
          {tag}
        </span>
      )}
      <h2
        className={`font-playfair font-bold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 ${
          dark ? 'text-white' : 'text-brand-navy'
        }`}
      >
        {title}{' '}
        {highlight && (
          <span className="text-brand-gold">{highlight}</span>
        )}
      </h2>
      {subtitle && (
        <p
          className={`text-base md:text-lg max-w-2xl leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${dark ? 'text-gray-300' : 'text-gray-600'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}
