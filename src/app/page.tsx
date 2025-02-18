"use client";
import { RippleButton } from "@/components/magicui/ripple-button";
import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { AnimatedListDemo } from "@/components/Animated-notifications";
import { MeteorHero } from "@/components/meteors";
import { AnimatedWidget } from "@/components/Animated-widget";
import { AnimatedTittleSection1, AnimatedTittleSection2 } from "@/components/animate-tittle";
import { AnimatedCard } from "@/components/animated-card";

const Page = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-screen w-full bg-[#0A0000] text-white flex flex-col items-center justify-center px-6 text-center">
        <header className="w-full fixed top-0 z-10 bg-red-700 px-4 flex justify-between items-center py-2">
          <h1 className="text-2xl font-bold flex items-center">Leptrum</h1>
          <nav className="hidden md:flex space-x-6 font-semibold">
            <a href="#" className="hover:text-indigo-400">
              Início
            </a>
            <a href="#" className="hover:text-indigo-400">
              Sobre
            </a>
            <a href="#" className="hover:text-indigo-400">
              Preços
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <RippleButton onClick={handleLoginClick} rippleColor="#ADD8E6">
              Entrar
            </RippleButton>
          </div>
        </header>

        <main>
          <MeteorHero />
        </main>


        <div className="flex w-full my-7">
          <AnimatedCard />
        </div>

        <section className="flex flex-wrap w-full justify-around items-center my-7 gap-7">
          <div className="flex flex-col justify-center items-center">
          <AnimatedTittleSection1 />
            <p className="text-center text-xl text-yellow-50 font-semibold max-w-lg px-4 mt-7">
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

        <section className="flex flex-col w-full mt-6 mb-4">
          <div>
            <AnimatedTittleSection2 />
          </div>

          <div className="flex w-full">
            <AnimatedWidget />
          </div>
        </section>

        <footer className="w-full py-2 text-base text-center">
          © 2025 Leptrum. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
};

export default Page;
