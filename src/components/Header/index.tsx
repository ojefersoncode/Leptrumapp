"use client";
import { CircleUser } from "lucide-react";
import { useState } from "react";

export function Header() {

  return (
    <div className="flex flex-col w-full p-2 bg-gray-800 max-md:p-2">
      <div className="flex w-full flex-col sm:gap-4 py-1">
        <header className="flex px-1 items-center w-full justify-between gap-4 sm:static sm:h-auto sm:border-0">
          <div className="flex w-full items-center bg-transparent gap-3">
            <div className="flex w-fulljustify-start items-center">
              <div className="flex w-full items-center justify-center gap-0.5 text-lg font-bold">
                <img className="size-6" src="/logo/Leptrum.png" alt="logo" />
                <div className="flex select-none">
                  <h1 className="text-red-500">Lep</h1>
                  <h1 className="text-red-50">trum</h1>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
            <span className="text-sm">UserName</span>
            <CircleUser className="size-5" />
          </button>
        </header>
      </div>
    </div>
  );
}
