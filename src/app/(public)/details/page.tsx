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
import { Accessibility, Heart, Verified } from "lucide-react";
import Description from "@/components/Descrption";

const Details = () => {
  const images = [
    "/images/drones/drone1.jpg",
    "/images/drones/drone2.jpg",
    "/images/drones/drone3.jpg",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Sidebar />

      {/* Mobile first */}
      <div className="flex-grow flex w-full pt-4 pb-1">
        <div className="flex flex-col md:flex-row w-full p-4">
          <div className="basis-full md:basis-1/2 flex items-center justify-center">
            <Carousel className="w-full max-w-sm">
              <CarouselContent>
                {images.map((src, index) => (
                  <CarouselItem key={index} className="w-full">
                    <img
                      className="h-72 w-full object-contain"
                      src={src}
                      alt={`Drone ${index + 1}`}
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="max-md:hidden" />
              <CarouselNext className="max-md:hidden" />
            </Carousel>
          </div>

          <CardContent className="flex justify-center items-center flex-col ">
            <div className="flex w-full justify-center items-center my-6 flex-col">
              <div>
                <div className="flex justify-start my-1 items-start gap-1">
                  <Verified className="text-gray-400 size-5" />
                  <h1 className="text-gray-400 font-poppins font-semibold text-sm">
                    Loja Verificada
                  </h1>
                </div>
                <h1 className="text-5xl text-gray-100 max-md:text-4xl font-bold">
                  Nome do produto
                </h1>
                <h1 className="">De R$:294,00</h1>
                <div className="flex items-center">
                  <h1 className="text-2xl text-green-600 font-bold">
                    R$:267,90
                  </h1>
                  <h2 className="text-base text-green-600 font-semibold ml-0.5">
                    No pix
                  </h2>
                </div>

                <div className="mt-5 flex gap-4">
                  <Button
                    variant="outline"
                    className="border-red-700 p-4 text-red-700"
                  >
                    <h1 className="mx-4 text-base text-red-700">Comprar</h1>
                  </Button>
                  <Button className="bg-red-700 p-4 hover:bg-red-600">
                    <h1 className="mx-2 text-base">Compartilhar</h1>
                  </Button>
                  <Button className="bg-indigo-50 hover:bg-indigo-50">
                    <Heart className="text-red-700" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>


      <Description />

      <footer className="w-full bg-gray-900 py-2 text-gray-200 text-base text-center mt-auto">
        © 2025 Leptrum. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Details;