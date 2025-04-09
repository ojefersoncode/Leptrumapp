'use client';
import { User } from '@supabase/supabase-js';
import { Footer } from '../landing/Footer';
import Products from '../HomeComponents/Products';
import Navbar from '../HomeComponents/Navbar';
import { ScrollToTop } from '../landing/ScrollToTop';
import { Truck } from 'lucide-react';

export default function HomePage({ user }: { user: User }) {
  return (
    <div className="relative flex min-h-screen w-full bg-slate-100">
      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <div className="flex justify-center items-center w-full bg-red-700 hover:bg-red-600 transition-all duration-200 p-3">
          <div className="flex items-center text-sm max-sm:text-xs font-semibold ">
            <Truck className="size-5 max-sm:size-4 mr-2" /> Frete grátis para
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
