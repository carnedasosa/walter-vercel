'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { projects } from '@/data/projects'

gsap.registerPlugin(ScrollTrigger)

export function Projects() {
  const { t } = useLanguage()
  const projectsT = translations.projects
  const containerRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    const cards = containerRef.current?.querySelectorAll<HTMLElement>('.project-card')
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
      id="projects"
      className="relative overflow-hidden border-t border-border py-24"
      aria-labelledby="projects-heading"
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
            {t(projectsT.sectionLabel)}
          </span>
        </div>

        <h2
          id="projects-heading"
          className="mb-16 text-balance font-sans text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl"
        >
          {t(projectsT.title)}
        </h2>

        <div
          ref={containerRef}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          role="list"
        >
          {projects.map((project) => (
            <article
              key={project.id}
              className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-accent"
              role="listitem"
            >
              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 font-sans text-xl font-bold text-foreground">
                  {t(project.title)}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t(project.description)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag: string) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
