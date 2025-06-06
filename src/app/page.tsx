'use client';
import { useEffect, useState } from 'react';
import ProductCard from '@/app/components/ProductCard';

export default function HomePage() {
  const [produtos, setProdutos] = useState<any[]>([]);
  const [limit, setLimit] = useState(8);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then(res => res.json())
      .then(data => {
        setProdutos(data);
        setLoading(false);
      });
  }, [limit]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Produtos em Destaque</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {produtos.map(produto => (
          <ProductCard key={produto.id} produto={produto} />
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setLimit(limit + 4)}
          disabled={loading}
          className="bg-red-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-red-700 transition-all disabled:opacity-50"
        >
          {loading ? 'Carregando...' : 'Carregar mais'}
        </button>
      </div>
    </div>
  );
}
