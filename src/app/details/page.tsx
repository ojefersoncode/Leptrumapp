import { Sidebar } from "@/components/sidebar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { Card, CardContent, CardHeader } from "@/components/ui/card";

const Details = () => {
  const images = [
    "/images/drones/drone1.jpg",
    "/images/drones/drone2.jpg",
    "/images/drones/drone3.jpg",
  ];

  return (
    <div>
      <Sidebar />
      <Card className="flex flex-wrap w-full">
        <CardHeader className="flex w-full items-center">
          <Carousel className="flex">
            <CarouselContent className="flex w-full items-center">
              {images.map((src, index) => (
                <CarouselItem
                  className="flex-shrink-0 md:basis-1/2 lg:basis-1/3 mx-2"
                  key={index}
                >
                  <img
                    className="h-56 w-full object-contain"
                    src={src}
                    alt={`Drone ${index + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </CardHeader>

        <CardContent className="flex justify-center items-center">
          <div className="m-4">
            <h1 className="text-xl font-semibold">Nome do produto</h1>
            <span>Descrição do produto</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Details;
