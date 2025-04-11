'use client';

import { useParams } from 'react-router-dom';
import { products } from '../SearchComponents/mockProducts';
import { Button } from '@/components/ui/button';
import Navbar from '../HomeComponents/Navbar';
import { Footer } from '../landing/Footer';
import { Truck } from 'lucide-react';

export function Detalhes() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(1));

  if (!product) {
    return (
      <div className="p-6 text-center text-red-500">
        Produto não encontrado.
      </div>
    );
  }

  return (
    <div className="w-full mx-auto">
      <div>
        <div className="flex justify-center items-center w-full bg-red-500 hover:bg-red-600/80 transition-all duration-200 p-3">
          <div className="flex items-center text-sm max-sm:text-xs font-semibold text-white">
            <Truck className="size-6 max-sm:size-5 mr-2" /> Frete grátis para
            minas gerais
          </div>
        </div>
        <Navbar />
      </div>
      <div className="px-4 py-16 max-sm:py-7 rounded-xl bg-slate-200">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col gap-7 w-full items-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-sm:w-full sm:h-80 sm:w-80 rounded-2xl object-cover"
            />

            <div className="flex gap-7">
              <img
                src={product.image}
                alt={product.name}
                className="h-32 rounded-2xl object-cover"
              />
              <img
                src={product.image}
                alt={product.name}
                className="h-32 rounded-2xl object-cover"
              />
              <img
                src={product.image}
                alt={product.name}
                className="h-32 rounded-2xl object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col pt-4 max-sm:pt-4">
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-slate-800 text-sm mb-2">
              {product.category} - {product.gender}
            </p>

            <p className="text-lg mb-4">{product.description}</p>
            <p className="text-2xl text-primary font-bold mb-4">
              R$ {product.price.toFixed(2)}
            </p>
            <div className="flex flex-col md:w-3/4 gap-5 mt-4">
              <Button
                variant={'ghost'}
                className="w-full md:w-auto text-slate-200 p-4 hover:bg-black/80 hover:text-slate-100"
              >
                Salvar em favoritos
              </Button>
              <Button
                variant={'ghost'}
                className="w-full md:w-auto text-slate-200 p-4 bg-red-600 hover:bg-red-600/80 hover:text-slate-100"
              >
                Adicionar ao carrinho
              </Button>

              <div className="flex w-full justify-center items-center mt-7 border border-slate-900 cursor-pointer select-none rounded-md">
                <span className="flex gap-2 text-slate-900 p-4">
                  <Truck />
                  Frete graís disponivel para sua região
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
