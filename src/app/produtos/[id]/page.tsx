import { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: { id: string }
}): Promise<Metadata> {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const produto = await res.json()

  return {
    title: produto.title,
    description: produto.description,
  }
}

// Página do produto individual
export default async function ProdutoPage({
  params,
}: {
  params: { id: string }
}) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const produto = await res.json()

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{produto.title}</h1>
      <img
        src={produto.image}
        alt={produto.title}
        className="h-60 mx-auto object-contain mb-4"
      />
      <p className="mb-2">{produto.description}</p>
      <p className="text-lg font-semibold text-blue-600">R$ {produto.price}</p>
    </div>
  )
}