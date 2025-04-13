'use client';

import { Mouse } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="flex flex-col relative w-full items-center justify-center h-screen overflow-hidden">
      {/* Imagem de fundo responsiva */}
      <div
        className="
          absolute inset-0 z-0 bg-fixed bg-center bg-cover
          bg-[url('/landing/Leptrum.webp')]
          sm:bg-[url('/landing/Background.webp')]
        "
      />
      {/* Sombra escura por cima */}
      <div className="absolute inset-0 bg-black/40 z-10" />
      <div className="flex flex-col justify-center px-7 py-5 md:bottom-28 bottom-32 items-center absolute z-10 bg-black/30 gap-5 rounded-xl text-slate-50">
        <h1 className="text-xl font-sans">Deslise para cima</h1>
        <div>
          <Mouse />
        </div>
      </div>
    </section>
  );
};
