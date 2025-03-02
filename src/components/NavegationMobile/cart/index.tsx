"use client";
import { Dialog } from "@radix-ui/react-dialog";
import { ShoppingCart } from "lucide-react";
import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";

export function Cart() {
  return (
    <div className="">
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
            <ShoppingCart className="text-slate-100 hover:text-slate-400" />
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
  );
}
