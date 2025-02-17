import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Globe } from "lucide-react";

export function AnimatedBadAge() {
  return (
    <div className="z-10 flex my-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white border-solid-0.5 bg-indigo-900 text-base text-white hover:cursor-pointer hover:bg-indigo-700 "
        )}
      >
        <AnimatedShinyText className="inline-flex text-white items-center justify-center px-5 py-2 transition ease-out
          hover:text-indigo-100 hover:duration-300">
          <span className="flex gap-2 font-sans items-center justify-center">
            <Globe className="ml-1 size-5" />
            O FUTURO DAS VENDAS
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
