'use client';
import { useCart } from '@/app/context/CartContext';

export default function CarrinhoPage() {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Carrinho de Compras</h1>

      {cart.length === 0 ? (
        <p>Seu carrinho está vazio.</p>
      ) : (
        <>
          <div>
            <button
              className="text-red-600 hover:underline"
              onClick={clearCart}
            >
              Limpar Carrinho
            </button>
          </div>
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center border-b py-4">
              <img src={item.image} className="w-16 h-16 object-contain" />
              <div className="flex-1 ml-4">
                <p>{item.title}</p>
                <p className="text-red-600 font-bold">
                  R$ {(item.price).toFixed(2)} ({item.quantity}x)
                </p>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-600 hover:underline"
              >
                Remover
              </button>
            </div>
          ))}
          <div className="mt-8 text-right">
            <p className="text-xl font-bold mb-4">Total: R$ {total.toFixed(2)}</p>
            <button
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
              onClick={() => alert('Essa função ainda não foi implementada.')}
            >
              Finalizar Compra
            </button>
          </div>
        </>
      )}
    </div>
  );
}
