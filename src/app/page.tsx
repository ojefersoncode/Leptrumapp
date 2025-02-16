"use client";
import { RippleButton } from "@/components/magicui/ripple-button";
import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { AnimatedListDemo } from "@/components/Animatednotifications";
import { MeteorHero } from "@/components/meteors";

const Page = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-screen w-full bg-indigo-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <header className="w-full mx-4 flex justify-between items-center py-4">
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
          <div className="flex justify-center my-10 items-center">
            <HeroVideoDialogDemo />
          </div>
        </main>

        <section className="flex flex-wrap w-full justify-around items-center gap-7">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-4xl font-semibold">
              Tenha mais resultados em poucos dias
            </h1>
            <p className="text-center max-w-md mt-7">
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

        <footer className="w-full py-2 text-base text-center">
          © 2025 Leptrum. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
};

export default Page;
