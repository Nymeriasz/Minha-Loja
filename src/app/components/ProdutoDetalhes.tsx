'use client';

import { useState } from 'react';
import { useCart } from '@/app/context/CartContext';

export default function ProdutoDetalhes({ produto }: { produto: any }) {
  const { addToCart } = useCart();
  const [cep, setCep] = useState('');
  const [frete, setFrete] = useState<string | null>(null);

  const [comentarios, setComentarios] = useState([
    { nome: 'Fulano de tal', nota: 5, texto: 'Produto maravilhoso, chegou rápido!' },
    { nome: 'Cicrano', nota: 4, texto: 'Bom custo-benefício, compraria de novo.' },
  ]);

  const [nome, setNome] = useState('');
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState('');

  const calcularFrete = () => {
    if (cep.trim().length === 8) {
      setFrete('Frete: R$ 14,90 - Entrega em 10 dias úteis.');
    } else {
      setFrete('Por favor, insira um CEP válido com 8 dígitos sem traço (-).');
    }
  };

  const enviarComentario = () => {
    if (nome && comentario && nota >= 1 && nota <= 5) {
      setComentarios([
        ...comentarios,
        { nome, nota, texto: comentario }
      ]);
      setNome('');
      setNota(5);
      setComentario('');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="flex flex-col lg:flex-row gap-10">
        <img
          src={produto.image}
          alt={produto.title}
          className="w-full lg:w-1/2 object-contain h-96"
        />

        <div className="flex-1 space-y-5">
          <h1 className="text-3xl font-bold text-gray-900">{produto.title}</h1>
          <p className="text-gray-700 leading-relaxed">{produto.description}</p>
          <p className="text-2xl text-red-600 font-bold">R$ {produto.price.toFixed(2)}</p>
          <p className="text-yellow-500 font-medium">
            ⭐ {produto.rating.rate} ({produto.rating.count} avaliações)
          </p>

          <button
            onClick={() =>
              addToCart({
                id: produto.id,
                title: produto.title,
                price: produto.price,
                image: produto.image,
                quantity: 1,
              })
            }
            className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-md transition-colors shadow"
          >
            ADICIONAR AO CARRINHO
          </button>
        </div>
      </div>

      {/* Frete */}
      <div className="mt-10 p-6 rounded-lg bg-gray-100">
        <label htmlFor="cep" className="block text-base font-medium text-gray-800 mb-2">
          Calcular frete
        </label>
        <div className="flex items-center gap-3 mb-2">
          <input
            type="text"
            id="cep"
            value={cep}
            onChange={(e) => setCep(e.target.value)}
            placeholder="Digite seu CEP"
            className="border border-gray-300 focus:ring-2 focus:ring-red-400 focus:outline-none px-4 py-2 rounded-md w-48 text-gray-800 shadow-sm"
          />
          <button
            onClick={calcularFrete}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm"
          >
            Calcular
          </button>
        </div>
        {frete && <p className="text-sm text-gray-700 mt-1">{frete}</p>}
      </div>

      {/* Comentários existentes */}
      <div className="mt-12">
        <h3 className="text-xl font-bold text-red-700 mb-6">Comentários:</h3>
        <div className="space-y-6">
          {comentarios.map((c, i) => (
            <div
              key={i}
              className="bg-gray-50 border-l-4 border-red-600 p-4 rounded-md shadow-sm"
            >
              <p className="font-semibold text-gray-900">{c.nome}</p>
              <p className="text-sm text-gray-700">
                {'⭐️'.repeat(c.nota)} - {c.texto}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 p-6 bg-gray-100 rounded-lg">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Deixe seu comentário</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          />
          <select
            value={nota}
            onChange={(e) => setNota(Number(e.target.value))}
            className="border border-gray-300 rounded px-4 py-2 w-full"
          >
            {[5, 4, 3, 2, 1].map((n) => (
              <option key={n} value={n}>
                {n} estrela{n > 1 && 's'}
              </option>
            ))}
          </select>
        </div>
        <textarea
          placeholder="Escreva seu comentário..."
          value={comentario}
          onChange={(e) => setComentario(e.target.value)}
          rows={3}
          className="w-full border border-gray-300 rounded px-4 py-2 mb-4 resize-none"
        />
        <button
          onClick={enviarComentario}
          className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-md text-sm"
        >
          Enviar comentário
        </button>
      </div>
    </div>
  );
}
