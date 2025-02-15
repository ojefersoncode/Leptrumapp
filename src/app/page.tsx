"use client";
import { RippleButton } from "@/components/magicui/ripple-button";
import { useRouter } from "next/navigation";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";

const Page = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleResgisterClick = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className="min-h-screen w-full bg-indigo-950 text-white flex flex-col items-center justify-center px-6 text-center">
        <header className="w-full mx-4 flex justify-between items-center py-4">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-indigo-400">Lep</span>{" "}
            <span className="">trum</span>
          </h1>
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
        <main className="flex-1 flex flex-col mt-20 mb-16 items-center justify-center">
          <h1 className="text-3xl md:text-5xl max-md:text-start font-bold text-center">
            Construa seu catálogo com poucos cliques.
          </h1>
          <p className="flex items-center justify-center text-lg max-md:text-start text-center font-sans max-w-3xl mt-4">
            A Leptrum é a plataforma ideal para organizar produtos com
            eficiência. Conte com nossa dashboard avançada e análises de IA para
            otimizar estratégias e crescer seu negócio. 🚀
          </p>
          <div className="flex items-center justify-center mt-6 gap-4">
            <ShimmerButton 
            onClick={handleResgisterClick}
            className="shadow-2xl">
              <span className="whitespace-pre-wrap text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
                COMEÇAR AGORA
              </span>
            </ShimmerButton>

            <ShinyButton
            onClick={handleLoginClick}
            >Acessar conta</ShinyButton>
          </div>

          <div className="flex justify-center mt-10 items-center">
            <HeroVideoDialogDemo />
          </div>
        </main>

        <footer className="w-full py-2 text-base text-center">
          © 2025 Leptrum. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
};

export default Page;
