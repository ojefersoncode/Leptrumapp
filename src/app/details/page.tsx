import { Sidebar } from "@/components/sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const Details = () => {
  const images = [
    "/images/drones/drone1.jpg",
    "/images/drones/drone2.jpg",
    "/images/drones/drone3.jpg",
  ];

  return (
    <div>
      <Sidebar />
      <Card className="flex flex-wrap w-full rounded-none">
        <CardHeader className="flex w-full items-center">
          <Carousel className="flex justify-center items-center">
            <CarouselContent className="flex w-full items-center">
              {images.map((src, index) => (
                <CarouselItem
                  className="flex-shrink-0 md:basis-1/2 lg:basis-1/3"
                  key={index}
                >
                  <img
                    className="h-60 w-full object-contain mix-blend-screen"
                    src={src}
                    alt={`Drone ${index + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <div>
            <h1 className="text-2xl max-md:text-xl font-semibold">
              Nome do produto
            </h1>
            <div className="flex w-full justify-center items-center gap-4 my-3">
              <Button
                variant="outline"
                className="border-indigo-700 bg-indigo-50 text-indigo-700 text-lg font-semibold hover:text-indigo-800 hover:bg-indigo-100"
              >
                <h1>Eu quero</h1>
              </Button>
              <Button className="bg-indigo-700 font-semibold hover:bg-indigo-600">
                <h1>Compartilar</h1>
              </Button>
              <Button className="bg-indigo-50 hover:bg-indigo-50">
                <Heart className="text-indigo-700" />
              </Button>
            </div>

            <div>
              <div className="flex flex-wrap gap-7">
                <div>
                  <h1 className="text-base font-semibold">Cidade</h1>
                  <span className="text-xs">Ponte Nova</span>
                </div>
                <div>
                  <h1 className="text-base font-semibold">Estado</h1>
                  <span className="text-xs">Novo</span>
                </div>
                <div>
                  <h1 className="text-base font-semibold">Estoque</h1>
                  <span className="text-xs">10</span>
                </div>
                <div>
                  <h1 className="text-base font-semibold">Frete</h1>
                  <span className="text-xs">Gratis</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
