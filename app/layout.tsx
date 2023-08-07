import { ToastContextProvider } from '@/providers/toast_context_provider'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home',
  keywords: ['My App', 'Demo', 'Sample'],
  description: 'My App',
  authors: [
    { name: 'Jayrick Gacayan' }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`relative`}>
        <ToastContextProvider>
          {children}
        </ToastContextProvider>
      </body>
    </html>
  )
}
