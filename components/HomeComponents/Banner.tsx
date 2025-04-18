'use client';

import { Truck } from 'lucide-react';

export default function Banner() {
  return (
    <>
      <div className="flex justify-center items-center w-full bg-red-500 hover:bg-red-600/80 transition-all duration-200 p-2">
        <div className="flex items-center text-sm max-sm:text-xs font-semibold text-white">
          <Truck className="size-6 max-sm:size-5 mr-2" /> Frete grátis para
          minas gerais
        </div>
      </div>
    </>
  );
}
