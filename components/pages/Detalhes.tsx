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
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { CalcFrete } from '../DetailsComponents/CalcFrete';
import { Newsletter } from '../landing/Newsletter';
import { Description } from '../DetailsComponents/Description';
import { Fab } from '../ui/Fab';
import { Separator } from '@radix-ui/react-select';

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
      <Fab />

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

          <Card className="flex flex-col w-full justify-center items-center p-2 pt-4 max-sm:pt-4">
            <CardHeader className="flex flex-col w-full justify-center items-center px-4">
              <div className="sm:flex w-full items-center justify-between max-sm:flex-col mb-1">
                <h1 className="text-xl max-sm:text-xl font-bold">
                  {product.name}
                </h1>
                <p className="text-slate-800 text-sm max-sm:text-xs sm:px-3">
                  {product.category} - {product.gender}
                </p>
              </div>

              <p className="flex w-full justify-start text-lg text-primary font-bold pb-2">
                R$ {product.price.toFixed(2)}
              </p>
            </CardHeader>

            <CardContent className="flex w-full flex-col justify-center items-center gap-5">
              <div className="flex w-full justify-between items-center gap-7">
                <Button
                  variant={'ghost'}
                  className="w-full text-base rounded-lg text-slate-200 p-5 bg-red-600 hover:bg-red-600/80 hover:text-slate-100"
                >
                  Comprar agora
                </Button>
                <Button
                  variant={'outline'}
                  className="text-base text-black p-5 hover:bg-slate-400/30 hover:text-slate-800"
                >
                  <ShoppingCart className="text-red-600" />
                </Button>
              </div>
            </CardContent>

            <CardFooter className="flex flex-col w-full justify-center items-center py-2">
              <div className="flex w-full items-center justify-center mb-4">
                <Description />
              </div>
              <CalcFrete />
            </CardFooter>
          </Card>
        </div>
      </main>
      <div>
        <Footer />
      </div>
    </div>
  );
}
