import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Globe } from "lucide-react";

export function AnimatedBadAge() {
  return (
    <div className="z-10 flex my-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white border-solid-0.5  bg-indigo-900 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-indigo-200 "
        )}
      >
        <AnimatedShinyText className="inline-flex text-white items-center justify-center px-4 py-1 transition ease-out  hover:text-neutral-600 hover:duration-300">
          <span className="flex gap-3 items-center justify-center">
            <Globe className="ml-1 size-4 transition-transform duration-300 ease-in-out" />
            O FUTURO DAS VENDAS
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}
