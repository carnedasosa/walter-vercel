'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { brands, sectors } from '@/data/brands'

export function WallOfBrands() {
  const { t } = useLanguage()
  const brandsT = translations.brands

  return (
    <section
      id="brands"
      className="relative overflow-hidden border-t border-border py-24"
      data-gsap-section
      aria-labelledby="brands-heading"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(0,212,255,0.04) 0%, transparent 70%)',
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
            {t(brandsT.title).split('\n').map((line, i) => (
              <span key={i} className={`block ${i === 1 ? 'text-neon-blue glow-blue' : ''}`}>
                {line}
              </span>
            ))}
          </h2>
          <div className="flex flex-col justify-end">
            <p className="font-sans text-sm leading-relaxed text-muted-foreground">
              {t(brandsT.subtitle)}
            </p>
            {/* Sector legend */}
            <div className="mt-8 flex flex-wrap gap-4">
              {Object.entries(sectors).map(([key, sector]) => (
                <div key={key} className="flex items-center gap-2">
                  <span
                    className="block h-1.5 w-4"
                    style={{ background: sector.color }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                    {sector.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Brands grid */}
        <div
          className="mt-16 grid grid-cols-2 gap-px bg-border md:grid-cols-3"
          role="list"
          aria-label="Brand collaborations"
          data-gsap-stagger
        >
          {brands.map((brand) => {
            const sectorColor = sectors[brand.sector].color
            return (
              <div
                key={brand.id}
                role="listitem"
                className="group relative flex flex-col gap-3 bg-background p-8 transition-colors duration-300 hover:bg-card"
              >
                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 h-px w-0 transition-all duration-500 group-hover:w-full"
                  style={{ background: sectorColor }}
                  aria-hidden="true"
                />

                {/* Sector dot */}
                <div className="flex items-center gap-2">
                  <span
                    className="block h-1.5 w-1.5 rounded-full"
                    style={{ background: sectorColor }}
                    aria-hidden="true"
                  />
                  <span className="font-mono text-[9px] tracking-widest uppercase text-muted-foreground">
                    {sectors[brand.sector].label}
                  </span>
                </div>

                <h3 className="font-sans text-lg font-bold tracking-tight text-foreground">
                  {brand.name}
                </h3>
              </div>
            )
          })}
        </div>

        {/* Confidentiality note */}
        <p className="mt-8 font-mono text-[10px] tracking-wide text-muted-foreground/50">
          * Some collaborations are under NDA and shown in a generalized form.
        </p>
      </div>
    </section>
  )
}
