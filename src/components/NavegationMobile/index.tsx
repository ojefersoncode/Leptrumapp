"use client";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import {
  Home,
  Store,
  Settings,
  MapPin,
  ChartLine,
  Heart,
  LogOut,
  HomeIcon,
  LayoutGrid,
  ShoppingCart,
} from "lucide-react";
import { DialogTitle } from "@/components/ui/dialog";
import { SearchProducts } from "./SeachProducts";
import { Favorites } from "./Favorites";

export function NavegationMobile() {
  return (
    <div className="flex flex-col w-full md:hidden max-md:fixed z-10 max-md:bottom-0 bg-red-600 max-md:p-2">
      <div className="flex w-full flex-col py-1">
        <header className="flex px-2 items-center w-full justify-center gap-4">
          <div className="flex w-full items-center justify-between bg-transparent gap-3">
            <Sheet>
              <SheetTrigger asChild>
                <button className="text-slate-100 hover:text-slate-400">
                  <LayoutGrid />
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
                      <Settings className="size-5 transition-all" />
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

            <Favorites />

            <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
              <HomeIcon className="text-slate-100 hover:text-slate-400" />
            </button>

            <SearchProducts />

            <Link href="/carrinho">
              <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
                <ShoppingCart className="text-slate-100 md:size-4 hover:text-slate-400" />
              </button>
            </Link>
          </div>
        </header>
      </div>
    </div>
  );
}
