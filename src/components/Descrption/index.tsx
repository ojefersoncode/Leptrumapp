import { MapPinHouse, Package, Truck } from "lucide-react";

export default function Description() {
  return (
    <>
      <div className="flex bg-white pb-4 px-10">
        <div className="w-full">
          <div className="my-2">
            <h1 className="text-3xl font-bold">Detalhes do produto</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-5">
            {/* Primeira coluna - Informações principais */}
            <div className="flex md:items-center md:justify-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <MapPinHouse />
                  <h1 className="text-xl font-semibold">Cidade</h1>
                </div>
                <span>Ponte Nova</span>
              </div>
            </div>

            {/* Segunda coluna - Informações principais */}
            <div className="flex md:items-center md:justify-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Package />
                  <h1 className="text-xl font-semibold">Estoque</h1>
                </div>
                <span>10 items</span>
              </div>
            </div>

            {/* Terceira coluna - Informações principais */}
            <div className="flex md:items-center md:justify-center">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Truck />
                  <h1 className="text-xl font-semibold">Frete</h1>
                </div>
                <span>Grátis</span>
              </div>
            </div>

            {/* Detalhes adicionais */}
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-2xl my-4 font-semibold">Características</h1>
              <ul className="list-disc pl-5">
                <li>Produto de alta qualidade</li>
                <li>Disponível em várias cores</li>
                <li>Garantia de 6 meses</li>
              </ul>
            </div>

            {/* Imagem do produto */}
            <div className="col-span-1 md:col-span-2">
              <h1 className="text-2xl font-semibold">Sugestões</h1>
              <div className="flex gap-4">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-32 h-32 object-cover"
                />
                <img
                  src="https://via.placeholder.com/150"
                  alt="Produto"
                  className="w-32 h-32 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}