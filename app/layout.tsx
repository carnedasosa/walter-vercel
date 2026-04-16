import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'Walter Ianieri — Engineering Provocation. Architecting Profits.',
  description:
    'Industrial designer and innovator specializing in cyber-industrial product design, patented systems, and high-tech solutions for Ho.Re.Ca, luxury nautical, and industrial sectors.',
  keywords: ['industrial design', 'innovation', 'product design', 'MENTIME', 'cocktail station', 'luxury design', 'Walter Ianieri'],
  authors: [{ name: 'Walter Ianieri' }],
  openGraph: {
    title: 'Walter Ianieri — Engineering Provocation. Architecting Profits.',
    description: 'Industrial designer and innovator creating patented, profitable products.',
    type: 'website',
    locale: 'it_IT',
    alternateLocale: 'en_US',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="it" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
