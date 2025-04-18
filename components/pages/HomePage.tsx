'use client';
import { Footer } from '../landing/Footer';
import Products from '../HomeComponents/Products';
import Navbar from '../HomeComponents/Navbar';
import { Fab } from '../ui/Fab';
import Banner from '../HomeComponents/Banner';

export default function HomePage() {
  return (
    <div className="relative flex w-full bg-slate-100">
      <Fab />

      <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col">
        <Banner />
        <Navbar />

        <div>
          <Products />
        </div>
        <Footer />
      </main>
    </div>
  );
}
