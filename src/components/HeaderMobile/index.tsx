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
  User,
  CircleUser,
  Locate,
} from "lucide-react";
import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useState } from "react";

export function HeaderMobile() {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="flex flex-col w-full md:hidden bg-gray-800 max-md:p-2">
      <div className="flex w-full flex-col sm:gap-4 py-1">
        <header className="flex px-2 items-center w-full justify-between gap-4 sm:static sm:h-auto sm:border-0">
          <div className="flex w-full items-center bg-transparent gap-3">
            <div className="flex w-fulljustify-start items-center">
              <div className="flex w-full items-center justify-center gap-0.5 text-base font-bold">
                <img className="size-5" src="/logo/Leptrum.png" alt="logo" />
                <div className="flex select-none">
                  <h1 className="text-red-500">Lep</h1>
                  <h1 className="text-red-50">trum</h1>
                </div>
              </div>
            </div>
          </div>

          <button className="flex items-center gap-2 bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
            <span className="text-xs">UserName</span>
            <CircleUser className="size-5 text-white hover:text-red-600" />
          </button>
        </header>
      </div>
    </div>
  );
}
