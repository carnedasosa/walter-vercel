'use client'

import { useState, type FormEvent } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { translations } from '@/data/translations'

type Status = 'idle' | 'sending' | 'success' | 'error'

export function Contact() {
  const { t } = useLanguage()
  const contactT = translations.contact
  const [status, setStatus] = useState<Status>('idle')
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const titleLines = t(contactT.title).split('\n')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    try {
      // Simulate send (replace with actual API route or email action)
      await new Promise((res) => setTimeout(res, 1500))
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section
      id="contact"
      className="relative border-t border-border py-24"
      data-gsap-section
      aria-labelledby="contact-heading"
    >
      {/* Background accent */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 50% 50% at 100% 100%, rgba(255,255,255,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 md:px-10">
        {/* Section header */}
        <div className="mb-4 flex items-center gap-4">
          <span className="block h-px w-12 bg-border" aria-hidden="true" />
          <span className="font-mono text-xs tracking-[0.3em] uppercase text-muted-foreground">
            {t(contactT.sectionLabel)}
          </span>
        </div>

        <div className="grid gap-16 md:grid-cols-2 md:gap-24">
          {/* Left: Title + info */}
          <div className="flex flex-col gap-8">
            <h2
              id="contact-heading"
              className="text-balance font-sans text-5xl font-black leading-tight tracking-tight text-foreground md:text-6xl"
            >
              {titleLines.map((line, i) => (
                <span key={i} className="block">
                  {i === 0 ? (
                    <span className="text-foreground/74">{line}</span>
                  ) : i === 1 ? (
                    <span className="text-foreground/84">{line}</span>
                  ) : (
                    <span className="text-foreground">{line}</span>
                  )}
                </span>
              ))}
            </h2>

            <p className="font-mono text-sm tracking-wide text-muted-foreground">
              {t(contactT.subtitle)}
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-4 border-t border-border pt-8">
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {t(contactT.emailLabel)}
                </p>
                <a
                  href="mailto:walter@walterianieri.com"
                  className="font-sans text-base font-medium text-foreground/90 transition-colors hover:text-foreground"
                >
                  walter@walterianieri.com
                </a>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {t(contactT.locationLabel)}
                </p>
                <p className="font-sans text-base text-foreground/86">
                  {t(contactT.locationValue)}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground mb-1">
                  {t(contactT.linkedInLabel)}
                </p>
                <a
                  href="https://linkedin.com/in/walterianieri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-sans text-base font-medium text-foreground/90 transition-colors hover:text-foreground"
                >
                  /in/walterianieri
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div>
            {status === 'success' ? (
              <div className="flex h-full flex-col items-start justify-center gap-4 border border-foreground/45 bg-card/90 p-10">
                <div className="font-mono text-xs tracking-widest text-foreground/90 uppercase">
                  [OK] {t(contactT.successTitle)}
                </div>
                <p className="font-sans text-lg font-bold text-foreground/92">
                  {t(contactT.successMsg)}
                </p>
                <button
                  onClick={() => { setStatus('idle'); setForm({ name: '', email: '', message: '' }) }}
                  className="mt-4 font-mono text-xs tracking-widest uppercase text-muted-foreground transition-colors hover:text-foreground underline"
                >
                  {t(contactT.sendAnother)}
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-6"
                noValidate
                aria-label="Contact form"
              >
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="name"
                    className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    {t(contactT.namePlaceholder)}
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={t(contactT.namePlaceholder)}
                    className="border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="email"
                    className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    {t(contactT.emailPlaceholder)}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder={t(contactT.emailPlaceholder)}
                    className="border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="message"
                    className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground"
                  >
                    {t(contactT.messageLabel)}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder={t(contactT.messagePlaceholder)}
                    className="resize-none border border-border bg-transparent px-4 py-3 font-sans text-sm text-foreground placeholder:text-muted-foreground/40 transition-colors focus:border-foreground focus:outline-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="font-mono text-xs text-muted-foreground" role="alert">
                    {t(contactT.errorMsg)}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="group relative inline-flex items-center justify-between border border-foreground/85 bg-foreground/95 px-8 py-4 font-mono text-xs tracking-widest text-background uppercase transition-all duration-300 hover:bg-transparent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <span>
                    {status === 'sending' ? t(contactT.sending) : t(contactT.submit)}
                  </span>
                  {status !== 'sending' && (
                    <svg
                      className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
                      viewBox="0 0 12 12"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
