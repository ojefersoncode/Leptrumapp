'use client';

import React, { useEffect, useState } from 'react';
import ProductSkeleton from '../../components/ProductSkeleton';
import { MapPin } from 'lucide-react';
import { ScrollToTop } from '../../components/landing/ScrollToTop';
import { Footer } from '../../components/landing/Footer';

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
      <div>
        <ScrollToTop />
      </div>

      <div className="w-full mx-auto bg-gray-300 p-2">
        <div className="w-full mx-auto p-4">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-md p-3 transition-all hover:shadow-lg hover:-translate-y-1"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-52 object-contain p-2"
                />
                <div className="flex items-center gap-1 mt-2">
                  <MapPin className="size-4 text-gray-600" />
                  <span className="text-xs text-gray-600">Sua localização</span>
                </div>
                <h1 className="text-sm font-semibold line-clamp-2 mt-1 text-slate-900">
                  {product.title}
                </h1>
                <div className="mt-2">
                  <h2 className="text-lg font-bold text-green-600">
                    R$ {product.price.toFixed(2)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
