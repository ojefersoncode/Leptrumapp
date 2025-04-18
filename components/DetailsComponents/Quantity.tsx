'use client';

import React from 'react';
import { Minus, Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer';

export default function QuantitySelector() {
  const [quantity, setQuantity] = React.useState(1);
  const [open, setOpen] = React.useState(false);

  function onClick(adjustment: number) {
    setQuantity((prev) => Math.max(1, Math.min(99, prev + adjustment)));
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild className="bg-white">
        <Button variant="outline" className="flex items-center gap-2">
          <Plus className="size-4" /> {quantity}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="flex w-full justify-center">
            <DrawerTitle>Adicionar items</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => onClick(-1)}
                disabled={quantity <= 1}
              >
                <Minus />
                <span className="sr-only">Diminuir</span>
              </Button>
              <div className="text-3xl font-semibold w-12 text-center">
                {quantity}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-10 w-10 rounded-full"
                onClick={() => onClick(1)}
                disabled={quantity >= 99}
              >
                <Plus />
                <span className="sr-only">Aumentar</span>
              </Button>
            </div>
          </div>
          <DrawerFooter>
            <DrawerClose className="mt-3" asChild>
              <Button className="bg-black hover:bg-black/90 text-base p-5">
                Adicionar {quantity} item{quantity > 1 ? 's' : ''}
              </Button>
            </DrawerClose>
            <DrawerClose className="mb-3" asChild>
              <Button
                variant="outline"
                className="text-base font-semibold p-5 border-red-600 text-red-600"
              >
                Cancelar
              </Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
