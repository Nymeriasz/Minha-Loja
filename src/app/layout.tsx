import './globals.css'
import { Providers } from './components/Providers'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Minha Loja',
  description: 'Uma loja simples com Next.js e NextUI',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}