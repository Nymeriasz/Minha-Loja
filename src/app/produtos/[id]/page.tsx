type Props = { params: { id: string } }

export default async function ProdutoPage({ params }: Props) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`)
  const produto = await res.json()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">{produto.title}</h1>
      <img src={produto.image} alt={produto.title} className="h-60 object-contain mb-4" />
      <p>{produto.description}</p>
      <p className="text-xl mt-2 font-semibold">R$ {produto.price}</p>
    </div>
  )
}
