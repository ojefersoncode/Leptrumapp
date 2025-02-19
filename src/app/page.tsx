"use client";
import { Ripple } from "@/components/magicui/ripple";
import { useRouter } from "next/navigation";
import { AnimatedListDemo } from "@/components/Animated-notifications";
import { Hero } from "@/components/hero";
import { AnimatedWidget } from "@/components/Animated-widget";
import { AnimatedTittleSection2 } from "@/components/animate-tittle";
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
        <header className="w-full fixed top-0 z-20 bg-gray-800 bg-opacity-90 px-6 flex justify-between items-center py-4">
          <div className="flex gap-2 text-2xl font-bold items-center">
            <img className="size-10" src="/logo/Leptrum.png" alt="logo" />
            <div className="flex">
              <h1 className="text-red-600">Lep</h1> <h1 className="text-red-50">trum</h1>
            </div>
          </div>
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

        <main className="mb-7 max-md:mt-10 overflow-hidden">
          <div className="flex relative z-10 flex-col w-auto overflow-hidden">
            <Ripple />
            <Hero />
          </div>
        </main>

        <div className="flex w-full lg:my-14">
          <AnimatedCard />
        </div>

        <section className="flex flex-wrap w-full justify-around items-center mt-7 px-6 gap-7">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-extrabold max-sm:text-3xl text-gray-400">
              Tenha mais resultados em poucos dias
            </h1>
            <p className="text-center text-base md:text-xl text-yellow-50 font-semibold max-w-lg mt-7">
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

        <section className="flex w-full mb-6">
          <div className="flex flex-wrap w-full justify-around items-center rounded-xl bg-gray-800 gap-12 mx-6 p-6">
            <AnimatedWidget />
            <AnimatedTittleSection2 />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Page;
