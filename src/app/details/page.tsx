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

      <div className="bg-indigo-100">
        <Card className="flex items-center flex-wrap w-full rounded-none">
          <CardHeader className="flex w-full items-center">
            <Carousel className="flex justify-center items-center">
              <CarouselContent className="flex w-full justify-center items-center">
                {images.map((src, index) => (
                  <CarouselItem
                    className="flex-shrink-1 md:basis-1/2 lg:basis-1/3"
                    key={index}
                  >
                    <img
                      className="h-60 w-full object-contain"
                      src={src}
                      alt={`Drone ${index + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </CardHeader>

          <CardContent className="w-full items-center">
            <div className="flex w-full">
              <h1 className="text-3xl max-md:text-2xl mx-4 font-bold">
                Nome do produto
              </h1>
            </div>

            <div className="mx-4 mt-3">
              <h1 className="line-through">De R$:294,00</h1>
            </div>

            <div className="flex items-center">
              <h1 className="text-2xl font-semibold mx-4 mb-2">R$:267,90</h1>
              <h2 className="text-lg text-center text-green-600">10% OFF</h2>
            </div>
            <div className=" w-full mt-3 items-center">
              <div className="flex w-full items-center gap-4 mx-4 my-5">
                <Button
                  variant="outline"
                  className="font-semibold border-indigo-700 bg-indigo-50 text-indigo-700 text-lg hover:text-indigo-800 hover:bg-indigo-100"
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

              <div className="flex flex-wrap items-center my-5 mx-4 gap-7">
                <div>
                  <h1 className="text-xl font-semibold">Cidade</h1>
                  <span className="text-base">Ponte Nova</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Estado</h1>
                  <span className="text-base">Novo</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Estoque</h1>
                  <span className="text-base">10</span>
                </div>
                <div>
                  <h1 className="text-xl font-semibold">Frete</h1>
                  <span className="text-base">Gratis</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Details;
