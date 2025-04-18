'use client';

import React, { useEffect, useState } from 'react';
import ProductSkeleton from '../../components/ProductSkeleton';
import { MapPin, ShoppingBag, ShoppingBasket } from 'lucide-react';
import { ScrollToTop } from '../../components/landing/ScrollToTop';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

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
      <div className="w-full mx-auto bg-slate-100 p-2">
        <Card className="w-full mx-auto">
          <CardHeader className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-0.5 p-2">
            {products.map((product) => (
              <CardContent key={product.id} className="bg-white shadow-md p-2">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-36 object-contain mt-2 p-2 transition-all hover:scale-110"
                />
                <CardFooter className="flex w-full flex-col gap-1 mt-2">
                  <h1 className="w-full justify-center text-center text-sm line-clamp-1 mt-3 text-slate-900">
                    {product.title}
                  </h1>
                  <div className="flex items-center gap-1 mt-1">
                    <h2 className="flex justify-center text-center text-base font-bold text-red-600 max-sm:font-bold text-base">
                      R$: {product.price.toFixed(2)}
                    </h2>
                    <h2 className="text-red-600 font-semibold text-sm sm:mt-1">
                      no PIX
                    </h2>
                  </div>
                  <div className="flex w-full pt-4">
                    <button className="flex w-full bg-red-600 py-2 sm:px-7 text-white rounded-lg hover:bg-red-500 hover:text-white transition-all">
                      <div className="flex w-full items-center justify-center gap-2 px-2">
                        <span className="text-xs font-semibold">Adicionar</span>
                        <ShoppingBag className="size-4" />
                      </div>
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
