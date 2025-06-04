'use client';
import { useEffect, useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

export default function HomePage() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [limit, setLimit] = useState(8);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(res => res.json())
      .then(setProdutos);
  }, [limit]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map(produto => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>
      <div className="flex justify-center mt-6">
        <button
          onClick={() => setLimit(limit + 4)}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Carregar mais
        </button>
      </div>
    </div>
  );
}