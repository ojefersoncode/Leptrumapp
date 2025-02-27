"use client";

import React, { useEffect, useState } from "react";
import ProductSkeleton from "@/components/ProductSkeleton";
import { MapPin, ShoppingCart } from "lucide-react";
import { Sidebar } from "@/components/sidebar";
import { Button } from "@/components/ui/button";
import { NavegationMobile } from "@/components/NavegationMobile";

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
      <div className="flex flex-wrap items-center justify-center bg-gray-300">
        <Sidebar />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-2">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="z-20">
        <Sidebar />
        <NavegationMobile />
      </div>

      <div className="w-full mx-auto bg-gray-300 p-2">
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full rounded-lg bg-slate-50 py-2"
            >
              <div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-contain p-2"
                />
              </div>
              <div className="flex items-center mx-4 my-3 gap-0.5">
                <MapPin className="h-4 w-4 text-slate-800" />
                <span className="text-xs font-sans text-slate-800">
                  Sua localização
                </span>
              </div>
              <div className="mx-4 mt-0.5">
                <h1 className="text-sm font-semibold line-clamp-2">
                  {product.title}
                </h1>
              </div>

              <div className="flex w-full justify-between content-center items-center mb-1 mt-3 px-2">
                <h2 className="font-semibold mx-2 text-xl">
                  R$:{product.price}
                </h2>
                <Button className="flex justify-center items-center content-center bg-gray-900 h-8 w-8 mx-2 hover:bg-gray-800">
                  <ShoppingCart className="w-3 h-3" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
