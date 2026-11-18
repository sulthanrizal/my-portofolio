import { createContext, useCallback, useContext, useEffect, useState } from 'react'
import { strings } from './strings'

const LanguageContext = createContext(null)
const STORAGE_KEY = 'portfolio-lang'

function initialLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'id') return saved
  } catch {
    /* localStorage unavailable */
  }
  return 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.setAttribute('lang', lang)
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* localStorage unavailable */
    }
  }, [lang])

  const toggleLang = useCallback(() => setLang((l) => (l === 'en' ? 'id' : 'en')), [])

  const t = useCallback(
    (path) => {
      const node = path.split('.').reduce((acc, key) => acc?.[key], strings[lang])
      return node ?? path
    },
    [lang],
  )

  return <LanguageContext.Provider value={{ lang, toggleLang, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
