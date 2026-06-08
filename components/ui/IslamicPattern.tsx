import { useId } from 'react'

interface IslamicPatternProps {
  opacity?: number
  color?: string
  className?: string
  size?: number
}

export default function IslamicPattern({
  opacity = 0.05,
  color = 'white',
  className = '',
  size = 80,
}: IslamicPatternProps) {
  const generatedId = useId()
  const id = `islamic-pattern-${generatedId.replace(/:/g, '')}`

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <svg
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={id}
            x="0"
            y="0"
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            {/* 8-pointed Islamic star */}
            <g fill="none" stroke={color} strokeWidth="0.8">
              {/* Outer octagon */}
              <polygon
                points={`
                  ${size * 0.5},${size * 0.08}
                  ${size * 0.73},${size * 0.15}
                  ${size * 0.92},${size * 0.35}
                  ${size * 0.92},${size * 0.65}
                  ${size * 0.73},${size * 0.85}
                  ${size * 0.5},${size * 0.92}
                  ${size * 0.27},${size * 0.85}
                  ${size * 0.08},${size * 0.65}
                  ${size * 0.08},${size * 0.35}
                  ${size * 0.27},${size * 0.15}
                `}
              />
              {/* 8-pointed star */}
              <polygon
                points={`
                  ${size * 0.5},${size * 0.15}
                  ${size * 0.59},${size * 0.38}
                  ${size * 0.85},${size * 0.35}
                  ${size * 0.67},${size * 0.5}
                  ${size * 0.85},${size * 0.65}
                  ${size * 0.59},${size * 0.62}
                  ${size * 0.5},${size * 0.85}
                  ${size * 0.41},${size * 0.62}
                  ${size * 0.15},${size * 0.65}
                  ${size * 0.33},${size * 0.5}
                  ${size * 0.15},${size * 0.35}
                  ${size * 0.41},${size * 0.38}
                `}
              />
              {/* Inner square rotated 45° */}
              <rect
                x={size * 0.35}
                y={size * 0.35}
                width={size * 0.3}
                height={size * 0.3}
                transform={`rotate(45, ${size * 0.5}, ${size * 0.5})`}
              />
              {/* Center circle */}
              <circle cx={size * 0.5} cy={size * 0.5} r={size * 0.07} />
              {/* Corner dots */}
              <circle cx="0" cy="0" r={size * 0.04} />
              <circle cx={size} cy="0" r={size * 0.04} />
              <circle cx="0" cy={size} r={size * 0.04} />
              <circle cx={size} cy={size} r={size * 0.04} />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  )
}
