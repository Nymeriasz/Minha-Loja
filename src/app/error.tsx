'use client';

export default function Error({ error }: { error: Error }) {
  return <p className="text-center text-red-500">Erro ao carregar produtos: {error.message}</p>;
}
