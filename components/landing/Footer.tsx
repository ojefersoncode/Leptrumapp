'use client';

export const Footer = () => {
  return (
    <footer className="bg-slate-200 text-slate-800">
      <div className="container mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo e nome */}
        <div className="col-span-1 flex flex-col gap-2">
          <div className="flex items-center space-x-2">
            <img src="/logo.webp" alt="Leptrum" className="w-10 h-10" />
            <span className="text-xl font-semibold tracking-wide">Leptrum</span>
          </div>
          <p className="text-sm text-slate-700 mt-2">
            Elegância e minimalismo em cada peça.
          </p>
        </div>

        {/* Navegação */}
        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-1 text-slate-950">Sobre</h4>
          <a
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            Frete e entrega
          </a>
          <a
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            Pedidos
          </a>
          <a
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            Atendimento
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-1 text-slate-950">Redes Sociais</h4>
          <a
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            Instagram
          </a>
          <a
            href="#"
            className="text-sm text-slate-700 hover:text-slate-900 transition"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-2">
          <h4 className="font-medium mb-1 text-slate-950">Contato</h4>
          <p className="text-sm text-slate-700">contato@leptrum.com</p>
          <p className="text-sm text-slate-700">+55 (11) 91234-5678</p>
        </div>
      </div>

      <div className="border-t border-slate-200 mt-8">
        <div className="container mx-auto px-6 py-4 text-center text-sm text-slate-700">
          &copy; 2024 Leptrum. Todos os direitos reservados.{' '}
          <a
            href="https://github.com/Ojefersoncode"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-600 hover:underline"
          >
            by Ojefersoncode
          </a>
        </div>
      </div>
    </footer>
  );
};
