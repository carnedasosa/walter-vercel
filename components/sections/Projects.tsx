'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'
import { projects, type Project } from '@/data/projects'

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { lang, t } = useLanguage()
  const projT = translations.projects
  const [imageLoaded, setImageLoaded] = useState(false)
  const isEven = index % 2 === 0

  return (
    <article
      id={project.slug}
      className={`group relative flex flex-col gap-8 border-t border-border py-16 md:flex-row md:items-center md:gap-16 ${
        isEven ? '' : 'md:flex-row-reverse'
      }`}
      aria-label={project.title[lang]}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden md:w-1/2 rounded-2xl border border-glass">
        <div
          className={`absolute inset-0 transition-opacity duration-700 ${imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{ background: 'linear-gradient(135deg, #050505 0%, #111 100%)' }}
          aria-hidden="true"
        />
        <Image
          src={project.image}
          alt={`${project.title[lang]} — ${project.tagline[lang]}`}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          onLoad={() => setImageLoaded(true)}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Accent overlay */}
        <div
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-10"
          style={{ background: `radial-gradient(circle at center, ${project.accentColor}, transparent 70%)` }}
          aria-hidden="true"
        />
        {/* Year badge */}
        <div className="glass absolute bottom-4 left-4 font-mono text-[10px] tracking-widest text-white/80 px-3 py-1 rounded-full">
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 md:w-1/2">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          <span
            className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border rounded-full glass relative"
            style={{ borderColor: `${project.accentColor}40`, color: project.accentColor }}
          >
            {project.category}
          </span>
          {project.tags.slice(0, 2).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] tracking-[0.15em] uppercase px-3 py-1.5 border border-border/40 text-muted-foreground/80 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Project number + title */}
        <div>
          <span className="font-mono text-xs text-muted-foreground">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2
            className="mt-1 font-sans text-4xl font-black tracking-tight text-foreground transition-colors duration-300 group-hover:[color:var(--hover-color)] md:text-5xl"
            style={{ '--hover-color': project.accentColor } as React.CSSProperties}
          >
            {project.title[lang]}
          </h2>
        </div>

        {/* Tagline */}
        <p
          className="font-mono text-sm tracking-wide"
          style={{ color: project.accentColor }}
        >
          {project.tagline[lang]}
        </p>

        {/* Description */}
        <p className="font-sans text-sm leading-relaxed text-muted-foreground">
          {project.description[lang]}
        </p>

        {/* Highlight */}
        <div className="border-l-2 pl-4 py-1" style={{ borderColor: project.accentColor }}>
          <p className="font-mono text-xs tracking-wide text-foreground/80">
            {project.highlight[lang]}
          </p>
        </div>

        {/* CTA */}
        <a
          href={`#${project.slug}`}
          className="group/btn mt-2 inline-flex items-center gap-3 font-mono text-xs tracking-widest text-foreground uppercase transition-colors hover:[color:var(--hover-color)]"
          style={{ '--hover-color': project.accentColor } as React.CSSProperties}
          aria-label={`${t(projT.viewProject)} ${project.title[lang]}`}
        >
          {t(projT.viewProject)}
          <span
            className="inline-block h-px w-8 transition-all duration-300 group-hover/btn:w-16"
            style={{ background: project.accentColor }}
            aria-hidden="true"
          />
        </a>
      </div>
    </article>
  )
}

export function Projects() {
  const { t } = useLanguage()
  const projT = translations.projects

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-24 md:px-10"
      aria-labelledby="projects-heading"
    >
      {/* Section header */}
      <div className="mb-4 flex items-center gap-4">
        <span className="block h-px w-12 bg-border" aria-hidden="true" />
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
          {t(projT.sectionLabel)}
        </span>
      </div>

      <div className="flex items-end justify-between border-b border-border pb-12">
        <h2
          id="projects-heading"
          className="font-sans text-5xl font-black tracking-tight text-foreground md:text-6xl"
        >
          {t(projT.heading)}
        </h2>
        <span className="font-mono text-xs text-muted-foreground">
          {String(projects.length).padStart(2, '0')} {t(projT.countLabel)}
        </span>
      </div>

      {/* Projects list */}
      <div className="flex flex-col">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}
