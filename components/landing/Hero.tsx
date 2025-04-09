'use client';

export const Hero = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
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
    </section>
  );
};
