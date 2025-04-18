'use client';

import React, { useEffect, useState } from 'react';
import ProductSkeleton from '../../components/ProductSkeleton';
import { ShoppingBag } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Products = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=30')
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  if (!products.length) {
    return (
      <div className="flex flex-wrap items-center justify-center bg-gray-300">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="scroll-smooth">
      <div className="w-full mx-auto bg-slate-200">
        <Card className="w-full mx-auto">
          <CardHeader className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 p-2">
            {products.slice(0).map((product) => (
              <CardContent
                key={product.id}
                className="bg-white shadow-md p-2 flex flex-col justify-between h-[330px] 
                max-sm:h-[340px]"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-44 object-contain py-2 p-4 transition-all hover:scale-110"
                />
                <CardFooter className="flex flex-col justify-between flex-1 p-1">
                  <div>
                    <h1 className="w-full text-center text-sm line-clamp-2 text-slate-900">
                      {product.title}
                    </h1>
                    <div className="flex w-full justify-center items-center gap-2 mt-2">
                      <h2 className="text-base font-bold text-red-600 max-sm:font-bold">
                        R$: {product.price.toFixed(2)}
                      </h2>
                      <h2 className="text-red-600 font-semibold text-sm">
                        no PIX
                      </h2>
                    </div>
                  </div>

                  <div className="flex w-full justify-center items-center mx-4 max-sm:mx-6">
                    <button className="flex w-full justify-center items-center rounded-lg bg-red-600 hover:bg-red-500 text-white hover:text-white mt-2">
                      <span className="flex items-center gap-2 text-sm py-1.5">
                        Adicionar <ShoppingBag className="size-4" />
                      </span>
                    </button>
                  </div>
                </CardFooter>
              </CardContent>
            ))}
          </CardHeader>
        </Card>
      </div>
    </div>
  );
};

export default Products;
