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

  return (
    <section
      id="about"
      className="relative border-t border-border py-24"
      data-gsap-section
      aria-labelledby="about-heading"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 40% 60% at 0% 50%, rgba(201,168,76,0.04) 0%, transparent 70%)',
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
              {t(aboutT.title).split('\n').map((line, i) => (
                <span key={i} className={`block ${i === 1 ? 'text-neon-gold glow-gold' : ''}`}>
                  {line}
                </span>
              ))}
            </h2>

            <p className="font-sans text-base leading-relaxed text-muted-foreground">
              {t(aboutT.bio)}
            </p>

            {/* Approach */}
            <div className="border-l-2 border-neon-gold pl-5 py-2">
              <p className="font-mono text-xs tracking-widest uppercase text-neon-gold mb-1">
                {t(aboutT.approachLabel)}
              </p>
              <p className="font-sans text-sm text-foreground">
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
                    className="border border-border px-3 py-1 font-mono text-xs tracking-wide text-foreground/80 transition-colors hover:border-neon-gold hover:text-neon-gold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Download PDF */}
            <a
              href="/assets/walter-ianieri-portfolio.pdf"
              className="group inline-flex items-center gap-3 border border-neon-gold px-8 py-4 font-mono text-xs tracking-widest uppercase text-neon-gold transition-all duration-300 hover:bg-neon-gold hover:text-background self-start"
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
          <div className="relative">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src="/assets/about/walter-portrait.png"
                alt="Walter Ianieri — Industrial Designer and Innovator"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Corner accents */}
              <div
                className="absolute top-0 right-0 h-12 w-12 border-t border-r border-neon-gold"
                aria-hidden="true"
              />
              <div
                className="absolute bottom-0 left-0 h-12 w-12 border-b border-l border-neon-gold"
                aria-hidden="true"
              />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -right-6 border border-border bg-card p-6 md:p-8">
              <div className="font-sans text-4xl font-black text-foreground">12+</div>
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
