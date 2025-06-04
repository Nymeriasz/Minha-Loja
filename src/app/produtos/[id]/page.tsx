'use client';

import { useEffect, useState } from 'react';
import ProdutoDetalhes from '@/app/components/ProdutoDetalhes';
import { useRouter } from 'next/navigation';

export default function DetalhesProduto({ params }: { params: { id: string } }) {
  const [produto, setProduto] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchProduto() {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
        if (!res.ok) throw new Error('Produto não encontrado');
        const data = await res.json();
        setProduto(data);
      } catch (error) {
        router.push('/');
      } finally {
        setLoading(false);
      }
    }

    fetchProduto();
  }, [params.id, router]);

  if (loading) return <p className="p-6">Carregando produto...</p>;

  return produto ? <ProdutoDetalhes produto={produto} /> : null;
}
