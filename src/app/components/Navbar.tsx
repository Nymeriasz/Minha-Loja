'use client';

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/app/context/CartContext';

export default function Navbar() {
  const { cart } = useCart();
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-red-600">
          Minha Loja
        </Link>

        <div className="flex items-center gap-6 text-gray-700 text-base">
          <Link href="/" className="hover:text-red-600 transition-colors">Início</Link>
          <Link href="/login" className="hover:text-red-600 transition-colors">Login</Link>

          <Link href="/carrinho" className="relative hover:text-red-600 transition-colors">
            <ShoppingCart className="w-6 h-6" />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
