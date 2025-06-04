'use client';
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/react";

export default function ProductCard({ produto }: { produto: any }) {
  return (
    <Link href={`/produtos/${produto.id}`} className="block focus:outline-none focus:ring-2 focus:ring-red-500 rounded-lg">
      <Card isHoverable isPressable className="w-full border border-gray-200 rounded-xl">
        <CardBody className="p-4">
          <img
            src={produto.image}
            alt={produto.title}
            className="h-64 w-full object-contain"
          />
          <h3 className="mt-2 text-sm line-clamp-2">{produto.title}</h3>
          <p className="text-red-500 font-bold">R$ {produto.price.toFixed(2)}</p>
        </CardBody>
      </Card>
    </Link>
  );
}
