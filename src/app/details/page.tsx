import { Sidebar } from "@/components/sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Details = () => {
  const images = [
    "/images/drones/drone1.jpg",
    "/images/drones/drone2.jpg",
    "/images/drones/drone3.jpg",
  ];

  return (
    <div className="bg-white">
      <Sidebar />

      <div className="flex bg-white justify-center items-center">
        <Card className="flex bg-white flex-col md:flex-row w-full rounded-none p-4 gap-6">
          <div className="basis-full md:basis-1/2 flex justify-center">
            <Carousel className="w-full mt-7 max-w-sm">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} className="w-full">
                    <img
                      className="h-60 w-full object-contain"
                      src={src}
                      alt={`Drone ${index + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>

          <CardContent className="basis-full justify-center items-center mt-7 md:basis-1/2">
            <h1 className="text-3xl max-md:text-2xl font-bold">
              Nome do produto
            </h1>

            <h1 className="line-through mt-3">De R$:294,00</h1>

            <div className="flex items-center mt-2">
              <h1 className="text-2xl font-semibold">R$:267,90</h1>
              <h2 className="text-lg text-green-600 ml-3">10% OFF</h2>
            </div>

            <div className="mt-5 flex gap-4">
              <Button
                variant="outline"
                className="border-indigo-700 text-indigo-700"
              >
                Eu quero
              </Button>
              <Button className="bg-indigo-700 hover:bg-indigo-600">
                Compartilhar
              </Button>
              <Button className="bg-indigo-50 hover:bg-indigo-50">
                <Heart className="text-indigo-700" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mx-7 p-4">
        <div className="flex flex-wrap gap-7 mt-5">
          <div>
            <h1 className="text-xl font-semibold">Cidade</h1>
            <span>Ponte Nova</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Estado</h1>
            <span>Novo</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Estoque</h1>
            <span>10</span>
          </div>
          <div>
            <h1 className="text-xl font-semibold">Frete</h1>
            <span>Gratis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
