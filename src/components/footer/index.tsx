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
          <h1 className="text-red-600">Lep</h1>{" "}
          <h1 className="text-red-50">trum</h1>
        </div>
      </div>

      <hr className="w-full border-gray-700 mb-4" />

      <div className="grid grid-cols-4 max-md:grid-cols-2 mt-5 w-full gap-6 justify-around">
        <div className="flex flex-col text-white justify-top items-center cursor-pointer gap-2">
          <p className="text-xl font-semibold text-red-500">Ajuda e suporte</p>
          <span>Ajuda para criar conta</span>
          <span>Ajuda para criar loja</span>
          <span>Fui hackeado</span>
          <span>Perdi meu acesso</span>
        </div>
        <div className="flex flex-col text-white justify-top items-center cursor-pointer gap-2">
          <p className="text-xl font-semibold text-red-500">Sobre</p>
          <span>Quem somos?</span>
          <span>Nossod objetivos</span>
          <span>Lojas parceiras</span>
          <span>Blog</span>
        </div>
        <div className="flex flex-col text-white justify-top items-center cursor-pointer gap-2">
          <p className="text-xl font-semibold text-red-500">Email </p>
          <span>Contato@leptrum.com</span>
          <span>Suporte@leptrum.com</span>
        </div>
        <div className="flex flex-col text-white justify-top items-center cursor-pointer gap-4">
          <p className="text-xl font-semibold text-red-500"> Redes Sociais</p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <Instagram className="size-5" />
              <span>Instagram</span>
            </div>
            <div className="flex items-center gap-2">
              <Facebook className="size-5" />
              <span>Facebook</span>
            </div>

            <div className="flex items-center gap-2">
              <Phone className="size-5" />
              <span>Whatsapp</span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mb-4 max-md:mb-16 text-white text-center pt-7 px-2">
        <span className="text-base">
          © 2025 Leptrum. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}
