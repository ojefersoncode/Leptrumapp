// components/Description.tsx
import { useState } from 'react';
import { ChevronUp, ChevronDown } from 'lucide-react';

export function Description() {
  const [open, setOpen] = useState(true);

  return (
    <div className="border rounded-xl bg-white w-full max-w-xl shadow-md">
      <div
        className="flex items-center justify-between p-4 cursor-pointer bg-slate-100 border-b border-red-300 rounded-t-xl"
        onClick={() => setOpen(!open)}
      >
        <h2 className="text-lg font-bold text-red-600">DESCRIÇÃO DO PRODUTO</h2>
        {open ? (
          <ChevronUp className="text-red-600" />
        ) : (
          <ChevronDown className="text-red-600" />
        )}
      </div>

      {open && (
        <div className="p-6 space-y-4 text-gray-700 bg-slate-100">
          <h3 className="text-xl font-semibold text-black">
            Sapato Feminino Melissa Ml-1108
          </h3>
          <p>
            O Sapato Feminino Melissa combina estilo, conforto e personalidade
            em um único produto. Com um design moderno e acabamento impecável,
            ele é perfeito para mulheres que valorizam elegância no dia a dia
            sem abrir mão da praticidade. O material característico da Melissa
            garante durabilidade, além de um aroma suave e exclusivo que é marca
            registrada da linha.
          </p>
          <p>
            Além de bonito, o sapato oferece um encaixe anatômico que
            proporciona conforto até mesmo após horas de uso. Ideal para
            diversas ocasiões — seja no trabalho, em um passeio ou em eventos
            casuais — o Melissa se destaca por sua versatilidade e charme. Um
            verdadeiro clássico reinventado para quem quer andar com estilo.
          </p>
        </div>
      )}
    </div>
  );
}
