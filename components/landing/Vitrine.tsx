'use client';

import { motion } from 'framer-motion';

type Produto = {
  id: number;
  nome: string;
  imagem: string;
};

const produtos: Produto[] = [
  {
    id: 1,
    nome: 'Camisa Oversized',
    imagem: '/vitrine/camisa.jpeg'
  },
  {
    id: 2,
    nome: 'Blazer Minimal',
    imagem: '/vitrine/sapato.webp'
  },
  {
    id: 3,
    nome: 'Calça Reta',
    imagem: '/vitrine/saia.webp'
  },
  {
    id: 4,
    nome: 'Vestido Linho',
    imagem: '/vitrine/calça.jpg'
  },
  {
    id: 5,
    nome: 'Camiseta Basic',
    imagem: '/vitrine/camiseta.jpeg'
  },
  {
    id: 6,
    nome: 'Jaqueta Clean',
    imagem: '/vitrine/vestido.jpeg'
  }
];

export const Vitrine = () => {
  return (
    <section className="py-12 bg-slate-100">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl md:text-5xl font-light text-center mb-10 pt-4 tracking-tight text-neutral-800">
          Destaques da Coleção
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {produtos.map((produto, index) => (
            <motion.div
              key={produto.id}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
                ease: 'easeOut'
              }}
            >
              <div className="overflow-hidden rounded-2xl shadow-md w-full aspect-[3/4] bg-gray-100">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
                />
              </div>
              <p className="mt-4 text-sm md:text-base text-neutral-700 text-center">
                {produto.nome}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
