'use client';
import { User } from '@supabase/supabase-js';
import { Footer } from '../landing/Footer';
import Products from '../HomeComponents/Products';
import Navbar from '../HomeComponents/Navbar';
import { ScrollToTop } from '../landing/ScrollToTop';
import { Truck } from 'lucide-react';
import { Fab } from '../ui/Fab';

export default function HomePage() {
  return (
    <div className="relative flex w-full bg-slate-100">
      <Fab />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="flex justify-center items-center w-full bg-red-500 hover:bg-red-600/80 transition-all duration-200 p-2">
          <div className="flex items-center text-sm max-sm:text-xs font-semibold text-white">
            <Truck className="size-6 max-sm:size-5 mr-2" /> Frete grátis para
            minas gerais
          </div>
        </div>
        <Navbar />

        <div>
          <Products />
        </div>
        <Footer />
        <ScrollToTop />
      </main>
    </div>
  );
}
