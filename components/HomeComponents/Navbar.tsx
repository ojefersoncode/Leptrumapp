import { Heart, Search, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  return (
    <>
      <nav className="flex w-full justify-between max-md:px-3 md:px-7 bg-slate-100">
        <div className="flex text-xl font-semibold items-center">
          <div className="flex">
            <h1 className="text-slate-900 text-xl">Leptrum</h1>
          </div>
        </div>
        <div className="flex items-center gap-5 py-4">
          <Search className="text-slate-900 size-5" />
          <Heart className="text-slate-900 size-5" />
          <ShoppingBag className="text-slate-900 size-5" />
        </div>
      </nav>
    </>
  );
}
