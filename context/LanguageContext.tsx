'use client'

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from 'react'
import type { Lang } from '@/data/translations'

interface LanguageContextValue {
  lang: Lang
  toggleLang: () => void
  t: (key: { it: string; en: string }) => string
  tArr: (key: { it: string[]; en: string[] }) => string[]
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') {
      return 'it'
    }
    const savedLang = window.localStorage.getItem('lang')
    return savedLang === 'it' || savedLang === 'en' ? savedLang : 'it'
  })

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

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t, tArr }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider')
  return ctx
}
