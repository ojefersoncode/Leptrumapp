"use client";

import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/ProductSkeleton";
import { MapPin } from "lucide-react";
import { Sidebar } from "@/components/sidebar";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
};

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=30")
      .then((res) => res.json())
      .then((data: Product[]) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  if (!products.length) {
    return (
      <div>
        <Sidebar />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>

    );
  }

  return (


    <div>

      <Sidebar />

      <div className="w-full mx-auto bg-slate-100 p-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <div key={product.id} className="w-full bg-slate-50 py-2">
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-2"
                />
              </div>
              <div className="mx-4 my-2">
                <h3 className="text-sm font-semibold line-clamp-2">{product.title}</h3>
              </div>
              <div className="flex items-center mx-4 my-3 gap-0.5">
                <MapPin className="h-4 w-4 text-slate-800" />
                <span className="text-xs font-sans text-slate-800">Sua localização</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>


  );
};

export default Home;
