import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Moneygen | Small Business & Finance Guides',
  description: 'Smart Ways to Earn & Grow. Discover small business ideas, loan guides, and financial tools.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8440388525472608" crossOrigin="anonymous"></script>
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
