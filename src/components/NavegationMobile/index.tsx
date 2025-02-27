"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Search,
  Store,
  Menu,
  Settings,
  MapPin,
  ChartLine,
  ListFilter,
  Heart,
  LogOut,
  ShoppingCart,
  HomeIcon,
} from "lucide-react";
import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useState } from "react";

export function NavegationMobile() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col w-full md:hidden max-md:fixed z-10 max-md:bottom-0 bg-gray-900 max-md:p-2">
      <div className="flex w-full flex-col py-2">
        <header className="flex px-2 items-center w-full justify-center gap-4">
          <div className="flex w-full items-center justify-between bg-transparent gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-red-400 hover:text-red-600">
                  <Menu />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="sm:max-w-x text-slate-50 outline-none border-none bg-gray-900 flex flex-col justify-between h-full"
              >
                <div>
                  <DialogTitle>
                    <VisuallyHidden>Leptrum</VisuallyHidden>
                  </DialogTitle>
                  <nav className="grid gap-5 text-lg font-medium">
                    <div className="flex items-center mx-2">
                      <h1 className="text-indigo-50">Menu</h1>
                    </div>
                    <div>
                      <div className="flex items-center text-red-600 px-2.5 mb-2">
                        <h1 className="font-bold text-lg">Leptrum store</h1>
                      </div>
                      <div className="flex items-center px-2.5 text-indigo-50 gap-1 whitespace-nowrap flex-shrink-0">
                        <MapPin className="size-4" />
                        <span className="font-poppins text-sm">Ponte Nova</span>
                      </div>
                    </div>
                    <hr className="bg-slate-600 opacity-50" />
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-red-600"
                    >
                      <Home className="h-5 w-5 transition-all" />
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-red-600"
                    >
                      <Store className="h-5 w-5 transition-all" />
                      Lojas
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-red-600"
                    >
                      <Heart className="h-5 w-5 transition-all" />
                      Salvos
                    </Link>
                    <Link
                      href="/dashboard/${userId}"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-red-600"
                    >
                      <ChartLine className="h-5 w-5 transition-all" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-red-600"
                    >
                      <Settings className="h-5 w-5 transition-all" />
                      Configurações
                    </Link>
                  </nav>
                </div>
                <Link
                  href="#"
                  className="flex items-center font-bold text-xl gap-4 px-2.5 text-slate-50 hover:text-red-600 mt-auto"
                >
                  <LogOut className="h-5 w-5 transition-all" />
                  Sair
                </Link>
              </SheetContent>
            </Sheet>

            <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
              <Heart className="text-red-400 hover:text-red-600" />
            </button>

            <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
              <HomeIcon className="text-red-400 hover:text-red-600" />
            </button>

            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
                  <Search className="text-red-400 hover:text-red-600" />
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

            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
                  <ShoppingCart className="text-red-400 hover:text-red-600" />
                </button>
              </DialogTrigger>
              <DialogContent className="flex flex-col max-md:max-w-full max-md:h-full border-none bg-gray-900 text-red-600">
                <DialogHeader>
                  <DialogTitle className="text-xl text-red-600 font-bold">
                    Carrinho
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="text-black rounded">
                    <div className="flex items-center justify-between mx-auto">
                      <h1 className="font-bold text-lg text-white">
                        Produtos na lista
                      </h1>
                    </div>
                  </div>
                  <hr className="w-full mb-1 text-gray-900" />
                  <div className="text-white">
                    <div className="mb-1">
                      <span>Drone 1</span>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>
      </div>
    </div>
  );
}
