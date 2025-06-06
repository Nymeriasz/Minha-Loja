'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <Link
          href="/"
          aria-label="Página inicial"
          className="text-2xl font-semibold tracking-wide text-red-600 hover:text-red-700 transition-colors"
          style={{ fontFamily: "'Poppins', sans-serif" }} 
        >
          Minha Loja
        </Link>

        <div className="flex items-center gap-8 text-gray-700 font-medium text-base">
          <Link href="/" className="relative group">
            Início
            <span className="block max-w-0 group-hover:max-w-full transition-all h-[2px] bg-red-600 mt-1"></span>
          </Link>
          <Link href="/login" className="relative group">
            Login
            <span className="block max-w-0 group-hover:max-w-full transition-all h-[2px] bg-red-600 mt-1"></span>
          </Link>

          <Link
            href="/carrinho"
            aria-label={`Carrinho de compras com ${totalItems} itens`}
            className="relative text-gray-700 hover:text-red-600 transition-colors flex items-center"
          >
            <ShoppingCart className="w-5 h-5" />
            {totalItems > 0 && (
              <span
                className="absolute -top-2 -right-3 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold"
                aria-live="polite"
              >
                {totalItems > 9 ? '9+' : totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
