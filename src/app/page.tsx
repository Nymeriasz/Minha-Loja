async function getProdutos() {
  const res = await fetch('https://fakestoreapi.com/products')
  return res.json()
}

export default async function HomePage() {
  const produtos = await getProdutos()

  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {produtos.map((produto: any) => (
        <a key={produto.id} href={`/produtos/${produto.id}`} className="border p-4 rounded shadow">
          <img src={produto.image} alt={produto.title} className="h-40 object-contain mx-auto" />
          <h2 className="text-lg font-bold">{produto.title}</h2>
          <p className="text-sm">R$ {produto.price}</p>
        </a>
      ))}
    </div>
  )
}
