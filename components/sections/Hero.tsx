'use client'

import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { projects } from '@/data/projects'

export function Hero() {
  const { t, tArr } = useLanguage()
  const hero = translations.hero
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const [currentDiscipline] = useState(0)
  const disciplines = tArr(hero.discipline)
  const taglineLines = t(hero.tagline).split('\n')

  useGSAP(() => {
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out',
    })
  }, { scope: containerRef })

  return (
    <section
      ref={containerRef}
      id="hero"
      className="relative flex min-h-[100dvh] flex-col justify-between overflow-hidden px-6 pt-28 pb-12 md:px-10"
      aria-label="Hero - Walter Ianieri"
    >
      {/* Background grid lines */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          backgroundImage:
              'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '80px 80px',
        }}
      />

      {/* Atmosphere / Aurora */}
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-[600px] w-[600px] rounded-full opacity-5 blur-[120px]"
        style={{
          background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Top meta row */}
      <div className="relative flex items-center justify-between">
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {new Date().getFullYear()} - Puglia, IT
        </span>
        <span className="font-mono text-xs tracking-widest uppercase text-muted-foreground">
          {t(hero.roleLabel)}
        </span>
      </div>

      {/* Main headline */}
      <div className="relative mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center py-16">
        {/* Discipline ticker */}
        <div className="mb-6 flex items-center gap-3">
          <span className="block h-px w-10 bg-accent/40" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.3em] text-accent uppercase">
            {disciplines[currentDiscipline]}
          </span>
        </div>

        {/* Giant tagline */}
        <h1
          ref={headingRef}
          className="text-balance font-sans text-6xl leading-none font-black tracking-tight text-foreground md:text-7xl lg:text-8xl xl:text-9xl"
        >
          {taglineLines.map((line, i) => (
            <span key={i} className="block">
              {i === 0 ? (
                <span className="text-foreground/72">{line}</span>
              ) : i === 1 ? (
                <span className="text-foreground">{line}</span>
              ) : (
                <span className="text-foreground/82">{line}</span>
              )}
            </span>
          ))}
        </h1>

        <p className="mt-8 max-w-lg font-mono text-sm leading-relaxed tracking-wide text-muted-foreground">
          {t(hero.subtitle)}
        </p>

        {/* CTA */}
        <div className="mt-12 flex items-center gap-8">
          <a
            href="#projects"
            className="glass group relative inline-flex items-center gap-3 px-8 py-4 font-mono text-xs tracking-widest text-foreground/90 uppercase transition-all duration-300 hover:bg-white/5 hover:text-accent rounded-full"
          >
            {t(hero.cta)}
            <svg
              className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M1 6h10M6 1l5 5-5 5"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <span className="hidden font-mono text-xs tracking-widest text-muted-foreground uppercase md:block">
            - {projects.length} {t(hero.projectsLabel)}
          </span>
        </div>
      </div>

      {/* Bottom row */}
      <div className="relative flex items-end justify-between">
        {/* Scroll indicator - static */}
        <div className="flex flex-col items-center gap-3" aria-hidden="true">
          <div className="h-12 w-px overflow-hidden bg-border">
            <div className="h-full w-full origin-top bg-foreground/10" />
          </div>
          <span className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase [writing-mode:vertical-rl]">
            {t(hero.scrollLabel)}
          </span>
        </div>

        {/* Stats */}
        <div className="hidden items-end gap-12 md:flex">
          {[
            { value: '4+', label: t(hero.stats.patents) },
            { value: '12+', label: t(hero.stats.years) },
            { value: '30+', label: t(hero.stats.projects) },
          ].map((stat) => (
            <div key={stat.label} className="text-right">
              <div className="font-sans text-3xl font-black text-foreground/90">{stat.value}</div>
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
