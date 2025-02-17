import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";
import { BarChart2, Cpu, Target, Star, Layout, MessageCircle } from "lucide-react"; // Ícones do Lucide React

const reviews = [
  {
    name: "Dashboard avançada",
    body: "Controle seus produtos e estoques.",
    icon: BarChart2,
  },
  {
    name: "Análise de AI",
    body: "Aumente suas vendas com nossa AI de marketing digital.",
    icon: Cpu,
  },
  {
    name: "Criar campanhas",
    body: "Crie anúncios para Facebook Ads de forma fácil.",
    icon: Target,
  },
  {
    name: "Campanha para MVP",
    body: "Ajudamos você a divulgar seus produtos mais vendidos.",
    icon: Star,
  },
  {
    name: "Melhor organização",
    body: "Organize tudo com poucos cliques e de forma amigável.",
    icon: Layout,
  },
  {
    name: "Conecte seus apps",
    body: "Conecte seu Facebook, Instagram e WhatsApp e controle seu fluxo de forma simples.",
    icon: MessageCircle,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  icon: Icon, // Renomeado para receber o componente diretamente
  name,
  body,
}: {
  icon: React.ComponentType<{ className?: string }>; // Ícone é um componente React
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64  cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        {/* Renderizando o ícone */}
        <Icon className="w-8 h-8text-gray-50" />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">
            {name}
          </figcaption>
        </div>
      </div>
      <blockquote className="mt-3 text-start text-sm">{body}</blockquote>
    </figure>
  );
};

export function AnimatedCard() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.name} {...review} />
        ))}
      </Marquee>

    </div>
  );
}
