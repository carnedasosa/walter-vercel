'use client'

import { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

gsap.registerPlugin(ScrollTrigger)

export function Navigation() {
  const { t } = useLanguage()
  const navT = translations.navigation
  const navRef = useRef<HTMLElement>(null)

  useGSAP(() => {
    const nav = navRef.current
    if (!nav) return

    ScrollTrigger.create({
      start: 80,
      onEnter: () => {
        nav.classList.add('scrolled')
        gsap.to(nav, {
          opacity: 1,
          backdropFilter: 'blur(0px)',
          duration: 0.3,
          ease: 'power1.out',
        })
      },
      onLeaveBack: () => {
        nav.classList.remove('scrolled')
        gsap.to(nav, {
          opacity: 1,
          backdropFilter: 'blur(8px)',
          duration: 0.3,
          ease: 'power1.out',
        })
      },
    })
  }, [])

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 z-50 w-full border-b border-transparent px-6 py-4 transition-colors md:px-10"
      aria-label={t(navT.ariaLabel)}
      style={{ opacity: 1, backdropFilter: 'blur(8px)' }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <span className="font-mono text-sm font-bold tracking-widest uppercase text-foreground">
          {t(navT.logo)}
        </span>

        <ul className="flex items-center gap-8" role="list">
          {navT.links.map((link: { label: { en: string; it: string }; href: string }) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(link.label)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
