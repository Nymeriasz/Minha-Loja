'use client';

import { useEffect, useState } from 'react';
import { Card, CardBody, Image } from '@nextui-org/react';

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <Card key={product.id} shadow="md" isHoverable>
          <CardBody className="flex flex-col items-center p-4">
            <Image
              src={product.image}
              alt={product.title}
              width={150}
              height={150}
              className="object-contain mb-2"
            />
            <h3 className="font-medium text-sm text-center">{product.title}</h3>
            <p className="text-lg font-semibold mt-2">R$ {product.price.toFixed(2)}</p>
          </CardBody>
        </Card>
      ))}
    </div>
  );
}
