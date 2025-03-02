"use client";
import { useState } from "react";
import { Input } from "../../ui/input";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import { Search, ListFilter } from "lucide-react";
import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";

export function SearchProducts() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
            <Search className="text-slate-100 hover:text-slate-400" />
          </button>
        </DialogTrigger>
        <DialogContent className="flex flex-col max-md:max-w-full max-md:h-full border-none bg-gray-900 text-red-600">
          <DialogHeader>
            <DialogTitle className="text-xl text-red-600 font-bold">
              Buscar Produtos
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4">
            <div className="flex gap-4">
              <Input
                type="search"
                placeholder="buscar..."
                className="w-full px-4 py-2 rounded text-black font-semibold bg-gray-100 border border-none focus:outline-none"
              />
              <Button className="bg-gray-800 hover:bg-gray-700">
                <Search className="size-7" />
              </Button>
            </div>

            <div className="text-black rounded">
              <div className="flex items-center justify-between mx-auto">
                <h1 className="font-bold text-lg text-white">
                  Filtro de busca
                </h1>
                <Button
                  className="transition-all fade-in-15 hover:bg-gray-800"
                  onClick={() => setShowFilters(!showFilters)}
                >
                  <ListFilter className="size-7 text-white" />
                </Button>
              </div>
              {showFilters && (
                <div className="flex flex-wrap gap-4">
                  <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-red-600 hover:bg-red-700 px-2 py-1">
                    Usado
                  </a>
                  <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-red-600 hover:bg-red-700 px-2 py-1">
                    Novo
                  </a>
                  <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-red-600 hover:bg-red-700 px-2 py-1">
                    Promoção
                  </a>
                </div>
              )}
            </div>
            <hr className="w-full mb-1 text-gray-900" />
            <div className="text-white">
              <div className="mb-1">
                <span>Sugestões de busca...</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
