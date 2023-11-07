import type { Metadata } from 'next'
import './globals.css';

export const metadata: Metadata = {
  title: 'CV Creator',
  description: 'Generate your CV with several models directly by JSON',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
        <body>{children}</body>
    </html>
  )
}
