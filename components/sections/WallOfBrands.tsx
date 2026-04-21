'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { brands, sectors } from '@/data/brands'

gsap.registerPlugin(ScrollTrigger)

export function WallOfBrands() {
  const { t } = useLanguage()
  const brandsT = translations.brands
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>('.brand-card')
    if (!cards || cards.length === 0) return

    gsap.from(cards, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
    })
  }, [])

  return (
    <section
      id="brands"
      className="relative overflow-hidden border-t border-border py-24"
      aria-labelledby="brands-heading"
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, color-mix(in srgb, var(--accent) 2%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-4">
          <span className="block h-px w-12 bg-border" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {t(brandsT.sectionLabel)}
          </span>
        </div>

        <div className="grid gap-12 border-b border-border pb-16 md:grid-cols-2">
          <h2
            id="brands-heading"
            className="text-balance font-sans text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl"
          >
            {t(brandsT.title)
              .split('\n')
              .map((line: string, i: number) => (
                <span
                  key={i}
                  className={i === 1 ? 'block text-muted-foreground' : 'block'}
                >
                  {line}
                </span>
              ))}
          </h2>

          <p className="self-end text-base leading-relaxed text-muted-foreground md:text-lg">
            {t(brandsT.description)}
          </p>
        </div>

        {/* Sectors */}
        {sectors.map((sector) => (
          <div key={sector.id} className="border-b border-border py-12 last:border-b-0">
            <h3 className="mb-8 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
              {t(sector.label)}
            </h3>

            <div
              ref={containerRef}
              className="flex flex-wrap gap-3"
              role="list"
              aria-label={t(sector.label)}
            >
              {brands
                .filter((brand) => brand.sectorId === sector.id)
                .map((brand) => (
                  <span
                    key={brand.id}
                    className="brand-card inline-flex items-center rounded-full border border-border px-4 py-2 font-mono text-sm text-foreground transition-colors hover:border-accent hover:text-accent"
                    role="listitem"
                  >
                    {t(brand.name)}
                  </span>
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
