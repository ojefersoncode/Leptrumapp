import {
  Facebook,
  Info,
  Instagram,
  Mail,
  MessageCircleQuestion,
  Phone,
} from "lucide-react";

export function Footer() {
  return (
    <footer className="w-full text-center rounded-t-2xl bg-gray-800 bg-opacity-60">
      <div className="flex w-full gap-2 text-2xl font-bold items-center justify-center py-4">
      <img className="size-10" src="/logo/Leptrum.png" alt="logo" />
            <div className="flex">
              <h1 className="text-red-500">Lep</h1> <h1 className="text-red-50">trum</h1>
            </div>
      </div>

      <hr className="w-full border-gray-700 mb-4" />

      <div className="grid grid-cols-4 max-md:grid-cols-2 mt-5 w-full gap-6 justify-around">
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold text-red-600">Ajuda e suporte</p>
          <span>Ajuda para criar conta</span>
          <span>Ajuda para criar loja</span>
          <span>Fui hackeado</span>
          <span>Perdi meu acesso</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold text-red-600">Sobre</p>
          <span>Quem somos?</span>
          <span>Nossod objetivos</span>
          <span>Lojas parceiras</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold text-red-600">Email </p>
          <span>Contato@leptrum.com</span>
          <span>Suporte@leptrum.com</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-4">
          <p className="text-xl font-semibold text-red-600"> Redes oficais</p>
          <div className="flex flex-wrap gap-3">
            <Instagram className="size-6" />
            <Facebook className="size-6" />
            <Phone className="size-6" />
          </div>
        </div>
      </div>

      <div className="w-full text-center pt-7 px-2">
        <span className="text-base">
          © 2025 Leptrum. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
