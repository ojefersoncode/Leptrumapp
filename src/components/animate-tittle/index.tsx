import { SparklesText } from "@/components/magicui/sparkles-text";

export function AnimatedTittle() {
  return (
    <h1 className="text-5xl max-sm:text-3xl max-w-5xl font-extrabold justify-center items-center">
      Ficou facil organizar seus produtos online,{" "}
      <span className="text-red-600">com apenas alguns cliques </span>
    </h1>
  );
}

export function AnimatedTittleSection2() {
  return (
    <SparklesText
      className="text-4xl max-sm:text-2xl max-w-xl justify-center items-center"
      text="Conecte todos seus apps em apenas um serviço"
    />
  );
}
