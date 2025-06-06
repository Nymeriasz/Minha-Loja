import '@/app/globals.css';
import type { Metadata } from 'next'
import { Providers } from '@/app/components/Providers';
import Navbar from '@/app/components/Navbar'
import { CartProvider } from '@/app/context/CartContext';

export const metadata: Metadata = {
  title: 'Minha Loja',
  description: 'Uma loja simples com Next.js e NextUI',
  icons: {
    icon: '/favicon.png',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-black flex flex-col min-h-screen">
        <CartProvider>
          <Providers>
            <Navbar />
            <main className="flex-grow p-4">{children}</main>
            <footer className="bg-gray-50 border-t border-gray-200 text-sm text-gray-600">
              <div className="bg-gray-200 text-center py-4 text-xs text-gray-500">
                © {new Date().getFullYear()} Minha Loja — Todos os direitos reservados.
              </div>
            </footer>
          </Providers>
        </CartProvider>
      </body>
    </html>
  )
}
