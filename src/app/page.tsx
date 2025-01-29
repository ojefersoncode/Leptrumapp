"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  return (
    <>
      <div className="min-h-screen bg-indigo-100 text-white flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute top-0 left-0 right-0 bottom-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
         bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

        <header className="w-full mx-4 flex justify-between items-center py-6">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-indigo-600">Lep</span> <span className="text-black">trum</span>
          </h1>
          <nav className="hidden md:flex space-x-6 font-semibold relative z-10 text-black">
            <a href="#" className="hover:text-indigo-700">Início</a>
            <a href="#" className="hover:text-indigo-700">Sobre</a>
            <a href="#" className="hover:text-indigo-700">Preços</a>
          </nav>
          <div className="flex items-center space-x-4 relative z-10">
            <Button
              variant="outline"
              className="bg-indigo-600 text-slate-50 hover:bg-indigo-500 hover:text-slate-300"
              onClick={handleLoginClick}
            >
              Entrar
            </Button>
          </div>
        </header>
        <main className="flex-1 flex flex-col items-center justify-center relative z-10">
          <h2 className="text-4xl text-slate-950 md:text-5xl font-bold">Construa seu catálogo</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-indigo-600 mt-2">Com poucos cliques.</h3>
          <p className="text-black font-sans max-w-2xl mt-4">
            A Leptrum é a plataforma ideal para empreendedores e afiliados que desejam organizar seus produtos e links de forma eficiente.
            Com uma dashboard avançada e análises impulsionadas por IA, ajudamos você a otimizar sua estratégia e impulsionar seu negócio. 🚀
          </p>
          <div className="mt-6 flex space-x-4">
            <Button
              className="bg-indigo-700 text-slate-50 px-6 py-3 text-lg font-bold hover:bg-indigo-600 hover:text-slate-200">
              Comece Gratuitamente
            </Button>
            <Button
              variant="outline"
              className="border-indigo-700 bg-slate-200 text-indigo-700 hover:text-indigo-800 hover:bg-slate-50">
              Acessar Minha Conta
            </Button>
          </div>
        </main>
        <footer className="w-full py-6 text-slate-950 text-base text-center">
          © 2025 Leptrum. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
};

export default Page;
