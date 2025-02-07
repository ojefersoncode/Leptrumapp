"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { supabase } from "../../lib/supabaseClient";
import { useRouter } from "next/router";
import { Dialog } from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Home,
  Search,
  Store,
  ShoppingBag,
  Menu,
  Settings,
  MapPin,
  ChartLine,
  ListFilter,
  Heater,
  Heart,
  LogOut,
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
    <div className="flex w-full flex-col bg-black">
      <div className="flex w-full flex-col sm:gap-4 sm:py-4">
        <header
          className="sticky top-0 z-30 flex h-16 px-4 items-center 
                 gap-4 sm:static sm:h-auto sm:border-0 bg-transparent"
        >
          <div className="flex w-full items-center bg-transparent gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="bg-black text-slate-50">
                  <Menu />
                  <span className="sr-only">Menu</span>
                </button>
              </SheetTrigger>

              <SheetContent
                side="left"
                className="sm:max-w-x text-slate-50 border-none bg-black flex flex-col justify-between h-full"
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
                      <div className="flex items-center text-indigo-100 px-2.5 mb-2">
                        <h1 className="font-bold text-lg">Leptrum store</h1>
                      </div>

                      <div className="flex mb-1 items-center px-2.5 text-indigo-50 gap-1 whitespace-nowrap flex-shrink-0">
                        <MapPin className="h-4 w-4" />
                        <span className="font-poppins text-sm">Ponte Nova</span>
                      </div>
                      <hr className="bg-slate-600 opacity-50 mt-3" />
                    </div>

                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-indigo-600"
                    >
                      <Home className="h-5 w-5 transition-all" />
                      Home
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-indigo-600"
                    >
                      <Store className="h-5 w-5 transition-all" />
                      Lojas
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-indigo-600"
                    >
                      <Heart className="h-5 w-5 transition-all" />
                      Salvos
                    </Link>
                    <Link
                      href="/dashboard/${userId}"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-indigo-600"
                    >
                      <ChartLine className="h-5 w-5 transition-all" />
                      Dashboard
                    </Link>
                    <Link
                      href="#"
                      className="flex items-center gap-4 px-2.5 text-slate-50 hover:text-indigo-600"
                    >
                      <Settings className="h-5 w-5 transition-all" />
                      Configurações
                    </Link>
                  </nav>
                </div>

                <Link
                  href="#"
                  className="flex items-center font-bold text-xl gap-4 px-2.5 text-slate-50 hover:text-indigo-600 mt-auto"
                >
                  <LogOut className="h-5 w-5 transition-all" />
                  Sair
                </Link>
              </SheetContent>
            </Sheet>
          </div>

          <div className="flex items-center justify-center">
            <h1 className="text-2xl font-bold flex items-center">
              <span className="text-indigo-600">Lep</span>{" "}
              <span className="text-indigo-100">trum</span>
            </h1>
          </div>

          <div className="flex w-full items-center justify-end gap-2">
            {/* Dialog search*/}
            <Dialog>
              <DialogTrigger asChild>
                <Button className="p-4 bg-transparent hover:bg-transparent px-2">
                  <Search className="w-7 h-7 text-white" />
                </Button>
              </DialogTrigger>
              <DialogContent className="flex flex-col max-md:max-w-full max-md:h-full bg-indigo-100 text-black">
                <DialogHeader>
                  <DialogTitle className="text-lg text-black font-bold">
                    Buscar Produtos
                  </DialogTitle>
                </DialogHeader>
                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex gap-4">
                    <Input
                      type="search"
                      placeholder="buscar..."
                      className="w-full px-4 py-2 rounded bg-indigo-50 border border-nonefocus:outline-none"
                    />
                    <Button>
                      <Search className="w-7 h-7" />
                    </Button>
                  </div>

                  <div className="text-black rounded">
                    <div className="flex justify-between mx-auto">
                      <h1 className="font-bold text-lg">Filtro de busca</h1>
                      <ListFilter className="w-7 h-7" />
                    </div>
                    <div className="flex flex-wrap gap-4 my-4">
                      <a className="flex flex-nowrap text-sm  rounded text-indigo-50 bg-indigo-700 px-3 py-2">
                        Usado
                      </a>
                      <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-indigo-700 px-3 py-2">
                        Novo
                      </a>
                      <a className="flex flex-nowrap text-sm rounded text-indigo-50 bg-indigo-700 px-3 py-2">
                        Promoção
                      </a>
                    </div>
                  </div>
                  <div></div>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </header>
      </div>
    </div>
  );
}
