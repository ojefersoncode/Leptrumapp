'use client';

import { useState } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from '@/components/ui/sheet';

import { Button } from '../../components/ui/button';
import { Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: '/',
    label: 'Inicio'
  },
  {
    href: '/Home',
    label: 'Loja'
  },
  {
    href: '/#about',
    label: 'Sobre'
  }
];

export const Navbar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="stick bg-slate-100 top-0 z-40 w-full ">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container py-2 px-3 md:px-6 w-screen flex justify-between ">
          <NavigationMenuItem className="font-bold flex">
            <div className="flex gap-2 text-xl font-bold items-center">
              <div className="flex">
                <img
                  className="w-20 select-none cursor-context-menu"
                  src="Leptrum-logo.png"
                  alt="logo"
                />
              </div>
            </div>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden bg-slate-100 text-slate-900">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger
                className="px-2 bg-slate-100 text-slate-900"
                asChild
              >
                <Button variant="outline" size="icon" className="bg-slate-100">
                  <Menu className="h-4 w-4 text-slate-900" />
                </Button>
              </SheetTrigger>

              <SheetContent
                className="p-0 bg-slate-100 text-slate-900 h-screen"
                side={'right'}
              >
                <SheetHeader className="bg-slate-100 p-0">
                  <SheetTitle className="font-bold text-xl select-none p-0">
                    <img
                      className="w-24 select-none cursor-context-menu p-4"
                      src="logo.png"
                      alt="logo"
                    />
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col px-4 items-center text-base text-bold gap-4 pt-4 bg-slate-100 text-slate-950 h-screen">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-7">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[14px] font-semibold text-zinc-950 hover:text-zinc-600`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 p-2"></div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
