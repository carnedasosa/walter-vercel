import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Space_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['300', '400', '500', '600', '700'],
})

const spaceMono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
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
    <html lang="it" className={`${spaceGrotesk.variable} ${spaceMono.variable} bg-background`}>
      <body className="font-sans antialiased noise">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

