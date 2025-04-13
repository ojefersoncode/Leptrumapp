'use client';

import { Heart, Search, ShoppingBag } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full justify-between max-md:px-3 md:px-7 bg-white">
        <div className="flex text-xl font-semibold items-center">
          <div className="flex">
            <img
              className="w-20 select-none cursor-context-menu"
              src="Leptrum-logo.png"
              alt="logo"
            />{' '}
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <Link href="/Buscar">
            <Search className="text-slate-900 size-5" />
          </Link>
          <Link href="/Detalhes">
            <ShoppingBag className="text-slate-900 size-5" />
          </Link>
        </div>
      </nav>
    </>
  );
}
