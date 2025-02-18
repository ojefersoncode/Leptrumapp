import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Globe } from "lucide-react";

export function AnimatedBadAge() {
  return (
    <div className="flex my-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-yellow-100 border-solid-0.5 bg-red-800 text-base text-white hover:cursor-pointer hover:bg-red-500"
        )}
      >
        <AnimatedShinyText className="inline-flex text-yellow-50 items-center justify-center px-5 py-2 transition ease-out
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
