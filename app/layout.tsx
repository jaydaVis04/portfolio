import type { Metadata } from 'next'
import './globals.css'
import { ThemeProvider } from '@/lib/ThemeContext'

export const metadata: Metadata = {
  title: 'Jaydyn Davis | Computer Science & Cybersecurity Portfolio',
  description: 'CS & Cybersecurity student specializing in offensive/defensive security and full-stack development. View projects, experience, and get in touch.',
  keywords: ['cybersecurity', 'software engineering', 'computer science', 'portfolio'],
  authors: [{ name: 'Jaydyn Davis' }],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
