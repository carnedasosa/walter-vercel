'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export function Navigation() {
  const { lang, toggleLang } = useLanguage()
  const nav = translations.nav
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const links = [
    { label: nav.work[lang], href: '#projects' },
    { label: nav.brands[lang], href: '#brands' },
    { label: nav.about[lang], href: '#about' },
    { label: nav.contact[lang], href: '#contact' },
  ]

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 py-4 navbar-glass-refined border-b border-border-30 transition-all duration-300"
      >
        <nav
          className="mx-auto flex max-w-7xl items-center justify-between px-6 md:px-10"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            className="font-mono text-xs font-bold tracking-[0.2em] text-foreground uppercase group"
            aria-label={nav.homeAria[lang]}
          >
            WALTER <span className="text-accent group-hover:text-foreground">IANIERI</span>
          </a>

          {/* Desktop links */}
          <ul
            className="hidden items-center gap-8 md:flex"
            role="list"
          >
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-foreground inline-block"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Right side */}
          <div className="flex items-center gap-4">
            {/* Lang toggle */}
            <button
              onClick={toggleLang}
              aria-label={`Switch to ${lang === 'it' ? 'English' : 'Italian'}`}
              className="font-mono text-xs tracking-widest text-muted-foreground uppercase hover:text-accent"
            >
              <span className={lang === 'it' ? 'text-accent' : 'text-muted-foreground'}>IT</span>
              <span className="mx-1 opacity-20">/</span>
              <span className={lang === 'en' ? 'text-accent' : 'text-muted-foreground'}>EN</span>
            </button>

            {/* Mobile menu toggle */}
            <button
              className="flex flex-col gap-[5px] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              <span
                className={`block h-px w-6 bg-foreground transition-transform ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-opacity ${menuOpen ? 'opacity-0' : ''}`}
              />
              <span
                className={`block h-px w-6 bg-foreground transition-transform ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col justify-center bg-background px-10 md:hidden transition-all duration-300 ${menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
          }`}
        aria-hidden={!menuOpen}
      >
        <ul className="flex flex-col gap-8" role="list">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-sans text-4xl font-bold tracking-tight text-foreground hover:text-muted-foreground"
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
