import { cn } from "@/lib/utils";
import { AnimatedShinyText } from "@/components/magicui/animated-shiny-text";
import { Globe } from "lucide-react";

export function AnimatedBadAge() {
  return (
    <div className="flex my-4 items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-white border-solid-0.5 bg-gray-700 text-base hover:cursor-pointer hover:bg-gray-600"
        )}
      >
        <AnimatedShinyText className="inline-flex text-white items-center justify-center px-4 py-2 transition ease-out
          hover:text-red-100 hover:duration-300">
          <span className="flex gap-2 font-sans text-xs items-center justify-center">
            <Globe className="ml-1 size-4" />
            O FUTURO DAS VENDAS
          </span>
        </AnimatedShinyText>
      </div>
    </div>
  );
}