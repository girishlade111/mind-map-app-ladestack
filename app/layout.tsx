import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Mind Map App',
  description: 'Interactive mind mapping app — brainstorm ideas on an infinite canvas',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
