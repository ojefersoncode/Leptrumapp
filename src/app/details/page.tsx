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
    <div className="flex flex-col min-h-screen bg-white">
      <Sidebar />

      {/* Mobile first */}
      <div className="flex-grow flex">
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

          <CardContent className="basis-full md:basis-1/2 justify-center items-center flex flex-col">
            <div className="flex w-full md:justify-center md:items-center flex-col">
              <div>
                <div className="flex items-center gap-1">
                  <Verified className="text-green-600 w-5 h-5" />
                  <h1 className="text-green-700 font-poppins font-semibold text-sm">
                    Loja Verificada
                  </h1>
                </div>
                <h1 className="text-3xl max-md:text-2xl font-bold">
                  Nome do produto
                </h1>
                <h1 className="line-through">De R$:294,00</h1>
                <div className="flex items-center">
                  <h1 className="text-2xl text-green-600 font-bold">
                    R$:267,90
                  </h1>
                  <h2 className="text-lg text-green-600 font-semibold ml-1">
                    No pix
                  </h2>
                </div>

                <div className="mt-5 flex gap-4">
                  <Button
                    variant="outline"
                    className="border-indigo-700 p-4 text-indigo-700"
                  >
                    <h1 className="mx-4 text-base text-indigo-700">Comprar</h1>
                  </Button>
                  <Button className="bg-indigo-700 p-4 hover:bg-indigo-600">
                    <h1 className="mx-2 text-base">Compartilhar</h1>
                  </Button>
                  <Button className="bg-indigo-50 hover:bg-indigo-50">
                    <Heart className="text-indigo-700" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </div>
      </div>


      <Description />

      <footer className="w-full bg-white py-2 text-slate-950 text-base text-center mt-auto">
        © 2025 Leptrum. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Details;