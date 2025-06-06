'use client';
import { useCart } from '@/app/context/CartContext';
import { useState } from 'react';

export default function CarrinhoPage() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const [quantidades, setQuantidades] = useState(
    cart.reduce((acc: any, item: any) => {
      acc[item.id] = item.quantity;
      return acc;
    }, {})
  );

  const handleQuantityChange = (id: number, value: number) => {
    const novaQuantidade = Math.max(1, value);
    setQuantidades({ ...quantidades, [id]: novaQuantidade });
    updateQuantity(id, novaQuantidade);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6 text-center">Seu Carrinho</h1>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500">Seu carrinho está vazio.</p>
        ) : (
          <>
            <div className="flex justify-end mb-4">
              <button
                className="text-sm font-medium text-red-600 hover:underline"
                onClick={clearCart}
              >
                Limpar Carrinho
              </button>
            </div>

            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center gap-4 py-4">
                  <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded" />
                  <div className="flex-1">
                    <h2 className="font-semibold text-gray-800 text-sm">{item.title}</h2>
                    <div className="mt-2 flex items-center gap-2">
                      <label className="text-sm text-gray-600">Qtd:</label>
                      <input
                        type="number"
                        min={1}
                        value={quantidades[item.id]}
                        onChange={(e) =>
                          handleQuantityChange(item.id, parseInt(e.target.value) || 1)
                        }
                        className="w-16 text-center border rounded-md px-2 py-1 text-sm"
                      />
                    </div>
                    <p className="text-red-600 font-bold text-base mt-1">
                      R$ {(item.price).toFixed(2)}
                    </p>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-sm text-red-600 hover:underline font-medium"
                  >
                    Remover
                  </button>
                </div>
              ))}
            </div>

            <div className="mt-8 border-t pt-6 text-right">
              <p className="text-xl font-bold text-gray-800">Total: R$ {total.toFixed(2)}</p>
              <button
                className="mt-4 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl text-sm font-medium transition-all"
                onClick={() => alert('Essa função ainda não foi implementada.')}
              >
                Finalizar Compra
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
