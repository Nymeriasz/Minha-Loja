'use client'
export default function Error({ error }: { error: Error }) {
  return <p className="text-red-500 text-center mt-10">Erro: {error.message}</p>
}