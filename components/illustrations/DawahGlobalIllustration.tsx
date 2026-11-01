'use client'

import React from 'react'

export default function DawahGlobalIllustration({ className = "w-full max-w-[480px] h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Background ambient radial glow */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4B2]/15 via-transparent to-[#33DEC5]/10 rounded-full blur-2xl" />

      <svg
        viewBox="0 0 520 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
      >
        <defs>
          <linearGradient id="turquoiseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D4B2" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#33DEC5" stopOpacity="0.3" />
          </linearGradient>

          <linearGradient id="globeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#121820" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#080C10" stopOpacity="0.95" />
          </linearGradient>

          <linearGradient id="beamGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#00D4B2" stopOpacity="0.4" />
            <stop offset="100%" stopColor="#00D4B2" stopOpacity="0" />
          </linearGradient>

          <filter id="glowFilter" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Orbit Rings (Thin turquoise lines) */}
        <ellipse cx="260" cy="220" rx="210" ry="85" stroke="#00D4B2" strokeOpacity="0.2" strokeWidth="1.5" strokeDasharray="6 6" />
        <ellipse cx="260" cy="220" rx="170" ry="140" stroke="#00D4B2" strokeOpacity="0.15" strokeWidth="1.2" transform="rotate(-25 260 220)" />

        {/* Central Globe Body */}
        <circle cx="260" cy="220" r="120" fill="url(#globeGrad)" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" />

        {/* Globe Longitude and Latitude Curvatures */}
        <ellipse cx="260" cy="220" rx="60" ry="120" stroke="#00D4B2" strokeOpacity="0.25" strokeWidth="1.2" />
        <line x1="140" y1="220" x2="380" y2="220" stroke="#00D4B2" strokeOpacity="0.25" strokeWidth="1.2" />
        <ellipse cx="260" cy="180" rx="100" ry="35" stroke="#00D4B2" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />
        <ellipse cx="260" cy="260" rx="100" ry="35" stroke="#00D4B2" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="3 3" />

        {/* Continents Abstract 2D Stylized Polygons */}
        {/* Eurasia / Middle East */}
        <path
          d="M 230 160 Q 250 145 280 150 Q 300 160 320 180 Q 310 200 280 205 Q 260 195 240 210 Q 220 190 230 160 Z"
          fill="#00D4B2"
          fillOpacity="0.22"
          stroke="#00D4B2"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />

        {/* Africa / Global South */}
        <path
          d="M 240 215 Q 260 225 270 250 Q 260 285 240 290 Q 225 260 235 235 Z"
          fill="#00D4B2"
          fillOpacity="0.18"
          stroke="#00D4B2"
          strokeOpacity="0.5"
          strokeWidth="1.2"
        />

        {/* East Asia & Pacific Nodes */}
        <path
          d="M 330 170 Q 355 180 360 200 Q 345 220 330 210 Z"
          fill="#00D4B2"
          fillOpacity="0.2"
          stroke="#00D4B2"
          strokeOpacity="0.6"
          strokeWidth="1.2"
        />

        {/* Spiritual Light Beams Upwards */}
        <polygon points="260,110 210,0 310,0" fill="url(#beamGrad)" />

        {/* Architectural 2D Mosque Silhouette on Globe Peak */}
        <g transform="translate(230, 80)">
          {/* Main Dome */}
          <path d="M 15 35 Q 30 12 45 35 Z" fill="#00D4B2" fillOpacity="0.9" />
          <line x1="30" y1="12" x2="30" y2="5" stroke="#00D4B2" strokeWidth="2" />
          <circle cx="30" cy="5" r="2" fill="#33DEC5" />

          {/* Left Minaret */}
          <rect x="5" y="15" width="4" height="25" fill="#33DEC5" rx="1" />
          <polygon points="5,15 7,7 9,15" fill="#00D4B2" />

          {/* Right Minaret */}
          <rect x="51" y="15" width="4" height="25" fill="#33DEC5" rx="1" />
          <polygon points="51,15 53,7 55,15" fill="#00D4B2" />
        </g>

        {/* Glowing Network Nodes (Davet Merkezleri: İstanbul, Seul, Tokyo, vb.) */}
        {/* Node 1: Istanbul (Center-West) */}
        <g filter="url(#glowFilter)">
          <circle cx="245" cy="175" r="5" fill="#33DEC5" />
          <circle cx="245" cy="175" r="10" stroke="#00D4B2" strokeWidth="1.5" strokeOpacity="0.8" />
        </g>

        {/* Node 2: East Asia / Seoul */}
        <g filter="url(#glowFilter)">
          <circle cx="340" cy="190" r="4.5" fill="#00D4B2" />
          <circle cx="340" cy="190" r="9" stroke="#33DEC5" strokeWidth="1.2" strokeOpacity="0.7" />
        </g>

        {/* Node 3: Tokyo / Far East */}
        <circle cx="360" cy="205" r="3.5" fill="#00D4B2" />

        {/* Node 4: Africa */}
        <circle cx="250" cy="265" r="3.5" fill="#00D4B2" />

        {/* Connecting Light Arch (Davet Köprüsü) */}
        <path
          d="M 245 175 Q 300 135 340 190"
          stroke="#00D4B2"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 4"
        />

        {/* Floating Translucent Glass Badge 1: 15+ Dilde Davet */}
        <g transform="translate(40, 140)">
          <rect width="135" height="52" rx="12" fill="rgba(18, 24, 32, 0.85)" stroke="rgba(0, 212, 178, 0.35)" strokeWidth="1" />
          <circle cx="22" cy="26" r="10" fill="rgba(0, 212, 178, 0.15)" />
          <text x="22" y="30" textAnchor="middle" fill="#00D4B2" fontSize="11" fontWeight="bold">15</text>
          <text x="40" y="22" fill="#F0F6FC" fontSize="11" fontWeight="600">Dilde Davet</text>
          <text x="40" y="36" fill="#94A3B8" fontSize="9">Küresel İletişim</text>
        </g>

        {/* Floating Translucent Glass Badge 2: İlim ve Kardeşlik */}
        <g transform="translate(345, 270)">
          <rect width="145" height="52" rx="12" fill="rgba(18, 24, 32, 0.85)" stroke="rgba(0, 212, 178, 0.35)" strokeWidth="1" />
          <circle cx="24" cy="26" r="10" fill="rgba(0, 212, 178, 0.15)" />
          <text x="24" y="30" textAnchor="middle" fill="#00D4B2" fontSize="13">✦</text>
          <text x="42" y="22" fill="#F0F6FC" fontSize="11" fontWeight="600">Ümmetin Birliği</text>
          <text x="42" y="36" fill="#94A3B8" fontSize="9">İstişare & Davet</text>
        </g>
      </svg>
    </div>
  )
}
