import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { PHProvider } from './providers'
import dynamic from 'next/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Medical Journal',
  description: 'An app to journal your medical journey in your own authentic  voice.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <PHProvider>
        <body className={inter.className}>{children}</body>
      </PHProvider>
    </html>
  )
}
