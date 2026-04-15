export interface Brand {
  id: string
  name: string
  sector: 'horeca' | 'luxury' | 'industrial'
  description: { it: string; en: string }
}

export const brands: Brand[] = [
  {
    id: 'beverage-group',
    name: 'Beverage Group',
    sector: 'horeca',
    description: { it: 'Sistema di automazione per beverage premium', en: 'Automation system for premium beverage' },
  },
  {
    id: 'hotel-luxury',
    name: 'Hotel Collection',
    sector: 'luxury',
    description: { it: 'Interior design per suite di lusso', en: 'Interior design for luxury suites' },
  },
  {
    id: 'yacht-design',
    name: 'Yacht Design',
    sector: 'luxury',
    description: { it: 'Arredo e interior per superyacht', en: 'Furniture and interior for superyachts' },
  },
  {
    id: 'industrial-partner',
    name: 'Industrial Partner',
    sector: 'industrial',
    description: { it: 'Progettazione componenti industriali brevettati', en: 'Patented industrial component design' },
  },
  {
    id: 'horeca-chain',
    name: 'Ho.Re.Ca Chain',
    sector: 'horeca',
    description: { it: 'Soluzioni di servizio scalabili', en: 'Scalable service solutions' },
  },
  {
    id: 'urban-services',
    name: 'Urban Services',
    sector: 'industrial',
    description: { it: 'Arredo urbano innovativo', en: 'Innovative urban furniture' },
  },
]

export const sectors = {
  horeca: { label: 'Ho.Re.Ca', color: '#ff2d2d' },
  luxury: { label: 'Luxury / Nautica', color: '#c9a84c' },
  industrial: { label: 'Industrial', color: '#00d4ff' },
}
