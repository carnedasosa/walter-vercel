'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export function Navigation() {
  const { lang, toggleLang } = useLanguage()
  const nav = translations.nav
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: nav.work[lang], href: '#projects' },
    { label: nav.brands[lang], href: '#brands' },
    { label: nav.about[lang], href: '#about' },
    { label: nav.contact[lang], href: '#contact' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-500 ${
          scrolled ? 'border-b border-border bg-background/80 backdrop-blur-xl' : 'bg-transparent'
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-xs font-bold tracking-[0.2em] text-foreground uppercase"
            aria-label={nav.homeAria[lang]}
            data-gsap-intro
            data-gsap-delay="0.05"
          >
            WALTER <span className="text-neon-red">IANIERI</span>
          </a>

          {/* Desktop links */}
          <ul
            className="hidden items-center gap-8 md:flex"
            role="list"
            data-gsap-intro
            data-gsap-delay="0.12"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors duration-200 hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4" data-gsap-intro data-gsap-delay="0.2">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'it' ? 'English' : 'Italian'}`}
              className="font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-neon-red"
            >
              <span className={lang === 'it' ? 'text-foreground' : 'text-muted-foreground'}>IT</span>
              <span className="mx-1 text-border">/</span>
              <span className={lang === 'en' ? 'text-foreground' : 'text-muted-foreground'}>EN</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="flex flex-col gap-[5px] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-all duration-300 ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background px-10 transition-all duration-500 md:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-8" role="list">
          {links.map((link, i) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-4xl font-bold tracking-tight text-foreground transition-colors hover:text-neon-red"
                style={{ transitionDelay: `${i * 50}ms` }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="mt-16 border-t border-border pt-8">
          <p className="font-mono text-xs text-muted-foreground">walter@walterianieri.com</p>
        </div>
      </div>
    </>
  )
}
