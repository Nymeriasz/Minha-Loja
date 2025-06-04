'use client';

import { useCart } from '@/app/context/CartContext';

export default function ProdutoDetalhes({ produto }: { produto: any }) {
  const { addToCart } = useCart();

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col lg:flex-row gap-10 bg-white rounded-xl shadow">
      <img src={produto.image} alt={produto.title} className="w-full lg:w-1/2 object-contain h-96" />
      <div className="flex-1 space-y-4">
        <h1 className="text-2xl font-bold text-gray-900">{produto.title}</h1>
        <p className="text-gray-700">{produto.description}</p>
        <p className="text-2xl text-red-600 font-semibold">R$ {produto.price.toFixed(2)}</p>
        <p className="text-yellow-500">⭐ {produto.rating.rate} ({produto.rating.count} avaliações)</p>

        <button
          onClick={() => addToCart({
            id: produto.id,
            title: produto.title,
            price: produto.price,
            image: produto.image,
            quantity: 1 
          })}
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors mt-4"
        >
          ADICIONAR AO CARRINHO
        </button>
      </div>
    </div>
  );
}
