'use client';

import React from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList
} from '@/components/ui/navigation-menu';

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  { href: '/', label: 'Inicio' },
  { href: '/Home', label: 'Loja' },
  { href: '/#about', label: 'Sobre' }
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <header className="stick bg-white top-0 z-40 w-full">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container py-2 px-3 md:px-6 w-screen flex justify-between">
          {/* Logo */}
          <NavigationMenuItem className="font-bold flex">
            <div className="flex gap-2 text-xl font-bold items-center">
              <img
                className="w-20 select-none cursor-context-menu"
                src="Leptrum-logo.png"
                alt="logo"
              />
            </div>
          </NavigationMenuItem>

          {/* Mobile Drawer Trigger */}
          <span className="flex md:hidden bg-slate-100 text-slate-900">
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline" size="icon" className="bg-slate-100">
                  <Menu className="h-4 w-4 text-slate-900" />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="bg-slate-100 text-slate-900 px-4">
                <DrawerHeader>
                  <DrawerTitle className="flex max-sm:justify-center font-bold text-xl select-none">
                    <img
                      className="w-24 select-none cursor-context-menu"
                      src="logo.png"
                      alt="logo"
                    />
                  </DrawerTitle>
                </DrawerHeader>
                <nav className="flex sm:flex-col sm:items-start items-center justify-center text-base font-bold sm:gap-4 gap-7 max-sm:mb-7 pt-2">
                  {routeList.map(({ href, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="hover:text-slate-600"
                      onClick={() => setIsOpen(false)}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </DrawerContent>
            </Drawer>
          </span>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-7">
            {routeList.map(({ href, label }) => (
              <a
                key={label}
                href={href}
                className="text-[14px] font-semibold text-zinc-950 hover:text-zinc-600"
              >
                {label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex gap-4 p-2"></div>
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};
