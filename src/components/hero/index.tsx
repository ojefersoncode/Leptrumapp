import { useRouter } from "next/navigation";
import { HeroVideoDialogDemo } from "@/components/HeroVideo";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AnimatedTittle } from "../animate-tittle";
import { AnimatedBadAge } from "../animated-badage";
import { Ripple } from "../magicui/ripple";

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
      <div className="flex relative z-10 px-6 w-full h-[500px] flex-col items-center justify-center">
        
        <AnimatedBadAge />
        <AnimatedTittle />
        <p className="flex items-center justify-center font-semibold text-red-50 text-xl max-md:text-lg text-center max-w-3xl mt-5">
          Com a Leptrum, você cria seu catálogo online, gerencia tudo com
          facilidade e utiliza o poder da AI para levar seu negócio a um novo
          nível.
        </p>

        <div className="flex items-center justify-start mt-5 gap-4">
          <ShimmerButton
            onClick={handleResgisterClick}
            className="shadow-2xl py-4 px-7"
          >
            <span className="whitespace-pre-wrap text-xs leading-none tracking-tight text-white">
              COMEÇAR AGORA
            </span>
          </ShimmerButton>

          <ShinyButton onClick={handleLoginClick}>Acessar conta</ShinyButton>
        </div>
      </div>
      <div className="flex w-full justify-center items-center px-6">
        <HeroVideoDialogDemo />
      </div>
    </>
  );
}
