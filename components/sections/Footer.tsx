'use client'

import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

export function Footer() {
  const { t } = useLanguage()
  const footerT = translations.footer
  const year = new Date().getFullYear()

  return (
    <footer
      className="border-t border-border"
      role="contentinfo"
      data-gsap-section
    >
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Left */}
          <div className="flex flex-col gap-3">
            <div className="font-mono text-lg font-bold tracking-[0.15em] uppercase text-foreground">
              WALTER <span className="text-neon-red">IANIERI</span>
            </div>
            <p className="font-mono text-xs tracking-wide text-muted-foreground">
              {t(footerT.tagline)}
            </p>
          </div>

          {/* Center nav */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-6" role="list">
              {[
                { label: t(footerT.nav.work), href: '#projects' },
                { label: t(footerT.nav.brands), href: '#brands' },
                { label: t(footerT.nav.about), href: '#about' },
                { label: t(footerT.nav.contact), href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right */}
          <p className="font-mono text-xs text-muted-foreground">
            © {year} Walter Ianieri. {t(footerT.rights)}
          </p>
        </div>
      </div>
    </footer>
  )
}
