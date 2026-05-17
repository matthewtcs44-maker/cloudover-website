// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'CloudOver | AI & Digital Transformation Partner',
  description: 'AI-first digital services for SMB and Enterprise clients.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}