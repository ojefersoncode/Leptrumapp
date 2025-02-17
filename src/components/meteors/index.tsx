import { Meteors } from "@/components/magicui/meteors";
import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedTittle } from "../animate-tittle";
import { AnimatedBadAge } from "../animated-badage";

export function MeteorHero() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleResgisterClick = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className="relative flex h-[500px] w-full flex-col items-center justify-center overflow-hidden">
        <Meteors number={40} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b bg-clip-text text-center leading-none text-transparent dark:from-white dark:to-slate-900/10">
          Meteors
        </span>
        <AnimatedBadAge />
        <AnimatedTittle />
        <p className="flex items-center justify-center text-xl text-center font-semibold max-w-3xl mt-4">
          Com a Leptrum, você cria seu catálogo online, gerencia tudo com
          facilidade e utiliza o poder da AI para levar seu negócio a um novo
          nível. 🚀
        </p>
        
        <div className="flex items-center justify-start mt-6 gap-4">
          <ShimmerButton onClick={handleResgisterClick} className="shadow-2xl">
            <span className="whitespace-pre-wrap text-sm leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10">
              COMEÇAR AGORA
            </span>
          </ShimmerButton>

          <ShinyButton onClick={handleLoginClick}>Acessar conta</ShinyButton>
        </div>
      </div>

      <div className="flex justify-center my-4 items-center">
        <HeroVideoDialogDemo />
      </div>
    </>
  );
}
