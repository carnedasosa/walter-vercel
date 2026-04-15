export type ProjectCategory = 'product' | 'interior' | 'research'
export type Lang = 'it' | 'en'

export interface Project {
  id: string
  slug: string
  accentColor: string
  category: ProjectCategory
  year: number
  image: string
  title: { it: string; en: string }
  tagline: { it: string; en: string }
  description: { it: string; en: string }
  tags: string[]
  highlight: { it: string; en: string }
}

export const projects: Project[] = [
  {
    id: 'mentime',
    slug: 'mentime',
    accentColor: '#d9d9d9',
    category: 'product',
    year: 2023,
    image: '/assets/projects/mentime-design.png',
    title: { it: 'MENTIME', en: 'MENTIME' },
    tagline: {
      it: 'Stazione cocktail semi-automatica',
      en: 'Semi-automatic cocktail station',
    },
    description: {
      it: "Il progetto che industrializza la qualità artigianale. MENTIME trasforma la preparazione di cocktail premium in un processo scalabile ad altissima resa per l'industria Ho.Re.Ca.",
      en: 'The project that industrializes artisanal quality. MENTIME transforms premium cocktail preparation into a scalable, high-yield process for the Ho.Re.Ca industry.',
    },
    tags: ['Ho.Re.Ca', 'Automation', 'Patent', 'Industrial'],
    highlight: {
      it: 'Produzione industriale della qualità artigianale',
      en: 'Industrial production of artisanal quality',
    },
  },
  {
    id: 'uwasso',
    slug: 'uwasso',
    accentColor: '#c7c7c7',
    category: 'product',
    year: 2022,
    image: '/assets/projects/uvassow-design.png',
    title: { it: "U'WASSO'", en: "U'WASSO'" },
    tagline: {
      it: 'Vassoio pubblico + Spazio pubblicitario',
      en: 'Public tray + Advertising space',
    },
    description: {
      it: "Innovazione nel marketing urbano. U'WASSO' reinterpreta l'arredo urbano trasformandolo in uno spazio pubblicitario premium e un servizio di trasporto ordinato per l'utente finale.",
      en: "Innovation in urban marketing. U'WASSO' reinterprets urban furniture, transforming it into a premium advertising space and an organized transport service for the end user.",
    },
    tags: ['Urban', 'Marketing', 'Patent', 'Public Service'],
    highlight: {
      it: 'Innovazione nel marketing urbano',
      en: 'Innovation in urban marketing',
    },
  },
  {
    id: 'glass',
    slug: 'glass',
    accentColor: '#b0b0b0',
    category: 'research',
    year: 2023,
    image: '/assets/projects/glass-design.png',
    title: { it: 'G.lass', en: 'G.lass' },
    tagline: {
      it: 'Bicchiere funzionale provocatorio',
      en: 'Provocative functional glassware',
    },
    description: {
      it: "La provocazione come funzione. G.lass nasconde benefici tecnici reali (riduzione del ghiaccio, esperienza sensoriale potenziata) dietro una forma scultorea che sfida la definizione di bicchiere.",
      en: 'Provocation as function. G.lass hides real technical benefits (ice reduction, enhanced sensory experience) behind a sculptural form that challenges the definition of a glass.',
    },
    tags: ['Concept', 'Functional Art', 'Luxury', 'Beverage'],
    highlight: {
      it: 'Benefici tecnici nascosti nell\'arte',
      en: 'Technical benefits hidden in art',
    },
  },
  {
    id: 'seven',
    slug: 'seven',
    accentColor: '#9b9b9b',
    category: 'interior',
    year: 2022,
    image: '/assets/projects/seven-design.png',
    title: { it: 'SEVEN', en: 'SEVEN' },
    tagline: {
      it: 'Interior design lusso nautico',
      en: 'Luxury nautical interior design',
    },
    description: {
      it: "Materiali yacht-grade incontrano il design contemporaneo. La collezione SEVEN dimostra la padronanza dei materiali di alto livello — Alcantara, acciaio lucidato, legni rari — applicati al settore nautico di lusso.",
      en: 'Yacht-grade materials meet contemporary design. The SEVEN collection demonstrates mastery of high-level materials — Alcantara, polished steel, rare woods — applied to the luxury nautical sector.',
    },
    tags: ['Luxury', 'Nautical', 'Interior', 'Yacht'],
    highlight: {
      it: 'Materiali yacht-grade e design di lusso',
      en: 'Yacht-grade materials and luxury design',
    },
  },
]
