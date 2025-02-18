import { SparklesText } from "@/components/magicui/sparkles-text";

export function AnimatedTittle() {
  return (
    <SparklesText
      className="text-5xl max-sm:text-3xl"
      text="Organize seus produtos online com poucos cliques."
    />
  );
}

export function AnimatedTittleSection1() {
  return (
    <SparklesText
      className="text-5xl max-sm:text-3xl text-red-600"
      text="Tenha mais resultados em poucos dias"
    />
  );
}

export function AnimatedTittleSection2() {
  return (
    <SparklesText
      className="text-5xl max-sm:text-3xl max-w-lg"
      text="Conecte todos seus apps em apenas um serviço"
    />
  );
}
