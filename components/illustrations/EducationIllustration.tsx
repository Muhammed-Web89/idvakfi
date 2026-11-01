'use client'

import React from 'react'

export default function EducationIllustration({ className = "w-full max-w-[420px] h-auto" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-[#00D4B2]/10 via-transparent to-[#33DEC5]/10 rounded-full blur-2xl" />

      <svg
        viewBox="0 0 460 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
      >
        <defs>
          <linearGradient id="bookGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#121820" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#1A232E" stopOpacity="0.9" />
          </linearGradient>

          <linearGradient id="glowLight" x1="50%" y1="100%" x2="50%" y2="0%">
            <stop offset="0%" stopColor="#00D4B2" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#00D4B2" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Ring */}
        <circle cx="230" cy="190" r="140" stroke="#00D4B2" strokeOpacity="0.12" strokeWidth="1.5" strokeDasharray="5 5" />
        <circle cx="230" cy="190" r="110" stroke="#33DEC5" strokeOpacity="0.08" strokeWidth="1" />

        {/* Light Fan Behind Book */}
        <polygon points="230,220 120,60 340,60" fill="url(#glowLight)" />

        {/* Traditional Book Stand (Rahle) Wooden / Glass Base */}
        <path
          d="M 170 290 L 230 240 L 290 290 L 310 280 L 230 215 L 150 280 Z"
          fill="#0D1117"
          stroke="#00D4B2"
          strokeOpacity="0.3"
          strokeWidth="1.5"
        />

        {/* Open Book - Left Page */}
        <path
          d="M 230 220 C 190 205 140 210 110 220 L 115 130 C 145 120 195 115 230 130 Z"
          fill="url(#bookGrad)"
          stroke="#00D4B2"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        {/* Open Book - Right Page */}
        <path
          d="M 230 220 C 270 205 320 210 350 220 L 345 130 C 315 120 265 115 230 130 Z"
          fill="url(#bookGrad)"
          stroke="#00D4B2"
          strokeOpacity="0.5"
          strokeWidth="1.5"
        />

        {/* Book Spine Center Line */}
        <line x1="230" y1="130" x2="230" y2="225" stroke="#33DEC5" strokeWidth="2" strokeLinecap="round" />

        {/* Left Page Text Lines */}
        <line x1="140" y1="145" x2="205" y2="140" stroke="#00D4B2" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
        <line x1="135" y1="162" x2="210" y2="157" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
        <line x1="138" y1="179" x2="205" y2="174" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
        <line x1="145" y1="196" x2="195" y2="192" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />

        {/* Right Page Text Lines */}
        <line x1="255" y1="140" x2="320" y2="145" stroke="#00D4B2" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round" />
        <line x1="250" y1="157" x2="325" y2="162" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
        <line x1="255" y1="174" x2="322" y2="179" stroke="rgba(255,255,255,0.2)" strokeWidth="2" strokeLinecap="round" />
        <line x1="265" y1="192" x2="315" y2="196" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeLinecap="round" />

        {/* Geometric Star Motif Above Center (Hikmet Nur) */}
        <g transform="translate(230, 90)">
          <rect x="-12" y="-12" width="24" height="24" fill="#00D4B2" fillOpacity="0.15" stroke="#00D4B2" strokeWidth="1.2" transform="rotate(45)" />
          <rect x="-12" y="-12" width="24" height="24" fill="#00D4B2" fillOpacity="0.15" stroke="#33DEC5" strokeWidth="1.2" />
          <circle cx="0" cy="0" r="3" fill="#33DEC5" />
        </g>

        {/* Rising Particles / Sparkles of Knowledge */}
        <circle cx="190" cy="85" r="2.5" fill="#00D4B2" />
        <circle cx="270" cy="75" r="2" fill="#33DEC5" />
        <circle cx="150" cy="100" r="1.5" fill="#00D4B2" opacity="0.7" />
        <circle cx="310" cy="95" r="2" fill="#33DEC5" opacity="0.8" />
      </svg>
    </div>
  )
}
