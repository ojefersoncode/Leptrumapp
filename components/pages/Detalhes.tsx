'use client';

import { useParams } from 'react-router-dom';
import { products } from '../SearchComponents/mockProducts';
import { Button } from '@/components/ui/button';
import Navbar from '../HomeComponents/Navbar';
import { Footer } from '../landing/Footer';
import { ShoppingCart, Truck } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel';
import { Card, CardContent } from '../ui/card';
import { CalcFrete } from '../DetailsComponents/CalcFrete';
import { Newsletter } from '../landing/Newsletter';
import { Description } from '../DetailsComponents/Description';

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
        <div className="flex justify-center items-center w-full bg-red-500 hover:bg-red-600/80 transition-all duration-200 p-2">
          <div className="flex items-center text-sm max-sm:text-xs font-semibold text-white">
            <Truck className="size-6 max-sm:size-5 mr-2" /> Frete grátis para
            minas gerais
          </div>
        </div>
        <Navbar />
      </div>
      <main className="px-4 py-16 max-sm:py-7 rounded-xl bg-slate-100">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="flex flex-col w-full items-center">
            <Carousel className="w-full max-w-sm max-sm:max-w-xs">
              <CarouselContent>
                {Array.from({ length: 1 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="p-1">
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full rounded-xl object-cover"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <div className="flex flex-col w-full justify-center items-center pt-4 max-sm:pt-4">
            <div className="flex flex-col w-full px-4">
              <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
              <p className="text-slate-800 text-sm mb-2">
                {product.category} - {product.gender}
              </p>

              <p className="text-lg mb-4">{product.description}</p>
              <p className="text-3xl text-primary font-bold mb-4">
                R$ {product.price.toFixed(2)}
              </p>
            </div>

            <div className="flex flex-col w-full justify-center items-center gap-5 mt-2">
              <div className="flex gap-4 w-full px-2">
                <Button
                  variant={'ghost'}
                  className="w-full sm:max-w-md text-base text-slate-200 p-6 bg-red-600 hover:bg-red-600/80 hover:text-slate-100"
                >
                  Comprar agora
                </Button>
                <Button
                  variant={'outline'}
                  className="text-base text-black p-6 hover:bg-slate-400/30 hover:text-slate-800"
                >
                  <ShoppingCart />
                </Button>
              </div>
              <div className="flex w-full justify-start pt-4">
                <Description />
              </div>
              <div className="flex w-full py-4">
                <CalcFrete />
              </div>
            </div>
          </div>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
