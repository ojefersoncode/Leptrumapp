import { Meteors } from "@/components/magicui/meteors";
import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedTittle } from "../animate-tittle";
import { AnimatedBadAge } from "../animated-badage";

export function Hero() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleResgisterClick = () => {
    router.push("/signin");
  };

  return (
    <>
      <div className="relative flex h-[600px] w-full flex-col items-center justify-center overflow-hidden">
        <AnimatedBadAge />
        <AnimatedTittle />
        <p className="flex items-center justify-center text-yellow-50 text-lg text-center font-semibold max-w-3xl mt-6">
          Com a Leptrum, você cria seu catálogo online, gerencia tudo com
          facilidade e utiliza o poder da AI para levar seu negócio a um novo
          nível.
        </p>
        
        <div className="flex items-center justify-start mt-6 gap-4">
          <ShimmerButton onClick={handleResgisterClick} className="shadow-2xl py-4 px-6">
            <span className="whitespace-pre-wrap text-xs leading-none tracking-tight text-white">
              COMEÇAR AGORA
            </span>
          </ShimmerButton>

          <ShinyButton onClick={handleLoginClick}>Acessar conta</ShinyButton>
        </div>
      </div>

      <div className="flex justify-center mb-6 items-center">
        <HeroVideoDialogDemo />
      </div>
    </>
  );
}
