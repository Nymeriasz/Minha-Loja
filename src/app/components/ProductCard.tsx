'use client';
import Link from "next/link";
import { Card, CardBody } from "@nextui-org/react";

export default function ProductCard({ produto }: { produto: any }) {
  return (
    <Link href={`/produtos/${produto.id}`} className="block focus:outline-none focus:ring-2 focus:ring-red-500 rounded-xl">
      <Card isHoverable isPressable className="w-full border border-gray-200 rounded-2xl shadow-md transition-all hover:shadow-lg">
        <CardBody className="p-4 flex flex-col items-center">
          <img
            src={produto.image}
            alt={produto.title}
            className="h-48 w-full object-contain mb-4"
          />
          <h3 className="text-center text-base font-medium text-gray-800 line-clamp-2 mb-2">
            {produto.title}
          </h3>
          <p className="text-red-600 font-bold text-lg">
            R$ {produto.price.toFixed(2)}
          </p>
        </CardBody>
      </Card>
    </Link>
  );
}
