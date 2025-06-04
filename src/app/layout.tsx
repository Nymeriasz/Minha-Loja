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
      <body className="bg-white text-black">
        <CartProvider>
          <Providers>
            <Navbar />
            <main className="p-4">{children}</main>
          </Providers>
        </CartProvider>
      </body>
    </html>
  );
}
