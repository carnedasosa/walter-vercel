'use client'

import { createContext, useContext, useState, useCallback, useEffect, useMemo, type ReactNode } from 'react'
import type { Lang } from '@/data/translations'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: (key: { it: string; en: string }) => string
  tArr: (key: { it: string[]; en: string[] }) => string[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('it')

  // Load language from localStorage once on mount to avoid hydration mismatch
  useEffect(() => {
    const savedLang = window.localStorage.getItem('lang') as Lang
    if (savedLang === 'it' || savedLang === 'en') {
      setLang(savedLang)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    window.localStorage.setItem('lang', lang)
  }, [lang])

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === 'it' ? 'en' : 'it'))
  }, [])

  const t = useCallback(
    (key: { it: string; en: string }) => key[lang],
    [lang]
  )

  const tArr = useCallback(
    (key: { it: string[]; en: string[] }) => key[lang],
    [lang]
  )

  const value = useMemo(() => ({
    lang,
    toggleLang,
    t,
    tArr
  }), [lang, toggleLang, t, tArr])

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
