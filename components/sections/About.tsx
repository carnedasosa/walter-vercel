'use client'

import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

const skills = [
  'Rhinoceros 3D',
  'V-Ray',
  'KeyShot',
  'AutoCAD',
  'SolidWorks',
  'Adobe CC',
  'Blender',
  'Cinema 4D',
]

export function About() {
  const { t } = useLanguage()
  const aboutT = translations.about
  const titleLines = t(aboutT.title).split('\n')

  return (
    <section
      id="about"
      className="relative border-t border-border py-24"
      aria-labelledby="about-heading"
    >
      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 0% 50%, color-mix(in srgb, var(--accent) 5%, transparent) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-4">
          <span className="block h-px w-12 bg-border" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {t(aboutT.sectionLabel)}
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left: Text content */}
          <div className="flex flex-col gap-8">
            <h2
              id="about-heading"
              className="text-balance font-sans text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl"
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span className="text-foreground/74">{line}</span>
                  ) : i === 1 ? (
                    <span className="text-foreground">{line}</span>
                  ) : (
                    <span className="text-foreground/84">{line}</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="font-sans text-base leading-relaxed text-muted-foreground/95">
              {t(aboutT.bio)}
            </p>

            {/* Approach */}
            <div className="border-l-2 border-accent/40 pl-5 py-2">
              <p className="mb-1 font-mono text-[10px] tracking-widest text-accent uppercase">
                {t(aboutT.approachLabel)}
              </p>
              <p className="font-sans text-sm text-foreground/80 leading-relaxed">
                {t(aboutT.approach)}
              </p>
            </div>

            {/* Skills */}
            <div>
              <p className="mb-4 font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
                {t(aboutT.skillsLabel)}
              </p>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Software skills">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="glass relative border-border/40 px-4 py-1.5 font-mono text-[10px] tracking-wide text-foreground/70 transition-all hover:border-accent/40 hover:text-accent rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download PDF */}
            <a
              href="/assets/walter-ianieri-portfolio.pdf"
              className="glass relative group inline-flex items-center gap-3 self-start px-8 py-4 font-mono text-xs tracking-widest text-foreground/90 uppercase transition-all duration-300 hover:bg-white/5 hover:text-accent rounded-full"
              download
              aria-label={t(aboutT.downloadAria)}
            >
              {t(aboutT.downloadLabel)}
              <svg
                className="h-3 w-3 transition-transform duration-300 group-hover:translate-y-0.5"
                viewBox="0 0 12 12"
                fill="none"
                aria-hidden="true"
              >
                <path d="M6 1v8M2 7l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>

          {/* Right: Portrait */}
          <div className="relative group">
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-glass">
              <Image
                src="/assets/about/walter-portrait.png"
                alt="Walter Ianieri — Industrial Designer and Innovator"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Floating stat card */}
            <div className="glass absolute -bottom-6 -right-6 p-6 md:p-8 rounded-2xl shadow-2xl">
              <div className="font-sans text-4xl font-black text-accent">12+</div>
              <div className="mt-1 font-mono text-[10px] tracking-widest uppercase text-muted-foreground">
                {t(aboutT.experienceLabel)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
