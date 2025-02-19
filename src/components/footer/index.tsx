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
    <footer className="w-full text-center p-6 bg-gray-800">
      <div className="grid grid-cols-4 max-md:grid-cols-2 w-full gap-6 justify-around">
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold">Ajuda e suporte</p>
          <span>Ajuda para criar conta</span>
          <span>Ajuda para criar loja</span>
          <span>Fui hackeado</span>
          <span>Perdi meu acesso</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold">Sobre</p>
          <span>Quem somos?</span>
          <span>Nossod objetivos</span>
          <span>Lojas parceiras</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold">Email </p>
          <span>Contato@leptrum.com</span>
          <span>Suporte@leptrum.com</span>
        </div>
        <div className="flex flex-col justify-top items-center cursor-pointer gap-3">
          <p className="text-xl font-semibold"> Redes oficais</p>
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
