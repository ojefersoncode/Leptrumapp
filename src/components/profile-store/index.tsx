import { ShoppingCart } from "lucide-react";

export default function () {
  return (
    <>
      <div className="flex flex-col gap-4 w-full bg-gray-800 bg-opacity-80 p-4">
        <main>
          <div>
            <h1 className="text-start text-xl px-5 font-bold">
              Suas configurações
            </h1>
          </div>

          <div className="flex gap-4 p-4">
            <span className="text-base font-semibold">Seu Nome</span>
            <input
              className="px-2 py-1"
              type="text"
              placeholder="seu@email.com"
            />
          </div>

          <div className="flex gap-4 p-4">
            <span className="text-base font-semibold">Seu email</span>
            <input
              className="px-2 py-1"
              type="text"
              placeholder="seu@email.com"
            />
          </div>

          <div className="flex gap-4 p-4">
            <span className="text-base font-semibold">Seu Telefone</span>
            <input
              className="px-2 py-1"
              type="text"
              placeholder="seu@email.com"
            />
          </div>
        </main>
      </div>
    </>
  );
}
