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
  Heater,
  Heart,
  LogOut,
  ShoppingCart,
} from "lucide-react";

import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";

export function Sidebar() {
  return (
    <div className="flex flex-col w-full bg-gray-800 bg-opacity-90 max-md:p-2">
      <div className="flex w-full flex-col sm:gap-4 sm:py-4">
        <header
          className="sticky top-0 z-30 flex  px-2 items-center 
                 gap-4 sm:static sm:h-auto sm:border-0"
        >
          <div className="flex w-full items-center bg-transparent gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className=" text-red-700">
                  <Menu />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="sm:max-w-x text-slate-50 outline-none border-none bg-gray-800 flex flex-col justify-between h-full"
              >
                <div>
                  <DialogTitle>
                    <VisuallyHidden>Leptrum</VisuallyHidden>
                  </DialogTitle>

                  <nav className="grid gap-5 text-lg font-medium">
                    <div className="flex items-center mx-2">
                      <Link
                        href="#"
                        className="flex text-lg items-center justify-center text-indigo-100 md:text-base"
                        prefetch={false}
                      >
                        <span className="sr-only">Logo</span>
                      </Link>
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
          </div>

          <div className="flex items-center justify-center">
            <div className="flex w-full items-center justify-between gap-2 text-xl font-bold">
              <img className="size-8" src="/logo/Leptrum.png" alt="logo" />
              <div className="flex">
                <h1 className="text-red-500">Lep</h1>{" "}
                <h1 className="text-red-50">trum</h1>
              </div>
            </div>
          </div>

          <div className="flex w-full items-center justify-end gap-2">
            {/* Dialog search*/}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
                  <Search className="size-7" />
                </Button>
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
                      className="w-full px-4 py-2 rounded text-black font-semibold bg-gray-100 border border-nonefocus:outline-none"
                    />
                    <Button className="bg-gray-800 hover:bg-gray-700">
                      <Search className="size-7 p-" />
                    </Button>
                  </div>

                  <div className="text-black rounded">
                    <div className="flex justify-between mx-auto">
                      <h1 className="font-bold text-lg text-white">
                        Filtro de busca
                      </h1>
                      <Button className="transition-all fade-in-15 hover:bg-gray-800">
                        <ListFilter className="size-7 text-white" />
                      </Button>
                    </div>
                    <div className="flex flex-wrap gap-4">
                      <a className="flex flex-nowrap text-sm  rounded text-indigo-50 bg-red-600 px-3 py-2">
                        Usado
                      </a>
                      <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-red-600 px-3 py-2">
                        Novo
                      </a>
                      <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-red-600 px-3 py-2">
                        Promoção
                      </a>
                    </div>
                  </div>
                  <hr className="w-full mt-2 text-gray-900" />

                  <div className="text-white">
                    <div className="mb-1">
                      <span>Sugestões de busca...</span>
                    </div>
                    <div className="mb-1">
                      <span>Sugestões de busca...</span>
                    </div>
                    <div className="mb-1">
                      <span>Sugestões de busca...</span>
                    </div>
                    <div className="mb-1">
                      <span>Sugestões de busca...</span>
                    </div>
                    
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </div>

          <div>
            <ShoppingCart className="size-5 text-white hover:text-red-600" />
          </div>
        </header>
      </div>
    </div>
  );
}
