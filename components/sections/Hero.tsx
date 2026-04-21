'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export function Hero() {
  const { t } = useLanguage()
  const heroT = translations.hero
  const headingRef = useRef<HTMLHeadingElement>(null)

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, [])

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 py-32 md:px-10"
      aria-labelledby="hero-heading"
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 70% 50% at 50% 40%, color-mix(in srgb, var(--accent) 4%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl">
        <h1
          id="hero-heading"
          ref={headingRef}
          className="text-balance font-sans text-6xl font-black leading-tight tracking-tight text-foreground md:text-8xl lg:text-9xl"
        >
          {t(heroT.title)}
        </h1>
      </div>
    </section>
  )
}
