"use client";
import { RippleButton } from "@/components/magicui/ripple-button";
import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { AnimatedListDemo } from "@/components/Animated-notifications";
import { Hero } from "@/components/hero";
import { AnimatedWidget } from "@/components/Animated-widget";
import {
  AnimatedTittleSection1,
  AnimatedTittleSection2,
} from "@/components/animate-tittle";
import { AnimatedCard } from "@/components/animated-card";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Footer } from "@/components/footer";

const Page = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-screen w-full mx-auto bg-gray-900 text-white flex flex-col items-center justify-center text-center">
        <header className="w-full fixed top-0 z-10 bg-gray-800 bg-opacity-90 px-6 flex justify-between items-center py-4">
          <h1 className="text-2xl text-red-600 font-bold flex items-center">
            Leptrum
          </h1>
          <nav className="hidden md:flex space-x-6 font-semibold">
            <a href="#" className="text-red-50 hover:text-red-600">
              Início
            </a>
            <a href="#" className="text-red-50 hover:text-red-600">
              Sobre
            </a>
            <a href="#" className="text-red-50 hover:text-red-600">
              Preços
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <ShimmerButton
              onClick={handleLoginClick}
              className="shadow-2xl py-3 px-6"
            >
              <span className="whitespace-pre-wrap text-xs leading-none tracking-tight text-white">
                Entrar
              </span>
            </ShimmerButton>
          </div>
        </header>

        <main className="px-6">
          <Hero />
        </main>

        <div className="flex w-full my-7">
          <AnimatedCard />
        </div>

        <section className="flex flex-wrap w-full justify-around items-center my-7 px-6 gap-7">
          <div className="flex flex-col justify-center items-center">
            <AnimatedTittleSection1 />
            <p className="text-center text-lg text-yellow-50 font-semibold max-w-lg px-4 mt-7">
              analise suas metricas e crie novas estrategias para destacar seus
              produtos, alem de melhorar a perfomaçe dos seus anuncios
              direiciando para a pagina d0 seu produto, economize tempo e
              esforço para gerenciar seu negocio.
            </p>
          </div>

          <div className="flex justify-end">
            <AnimatedListDemo />
          </div>
        </section>

        <section className="flex flex-wrap w-full gap-12 justify-around items-center px-4 my-7 md:my-16">
          <AnimatedWidget />
          <AnimatedTittleSection2 />
        </section>


        <Footer />

      </div>
    </>
  );
};

export default Page;
