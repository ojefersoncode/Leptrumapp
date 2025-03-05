"use client";

import { useState, useEffect } from "react";
import {
  ArrowBigLeftDashIcon,
  ArrowLeft,
  Check,
  Gem,
  Minus,
  Plus,
  ShoppingCart,
  TicketX,
  Trash2,
} from "lucide-react";
import Link from "next/link";
import { Header } from "@/components/Header";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export default function Carrinho() {
  const [cart, setCart] = useState<Product[]>([
    {
      id: 1,
      name: "Drone 1",
      price: 199.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn5IYu8FsGOWxtCdLZ_UK9WNKnV2ou9XWyUJJrJ2QrpDS5pG9ea5K3CQpT&s=10",
      quantity: 1,
    },
    {
      id: 2,
      name: "Câmera 4K",
      price: 499.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxDvSLRy4o7hGIlz5GELD6nrWGBZ0Z1irk0m8ET3ExCZrFewe0srvGD44V&s=10",
      quantity: 1,
    },
    {
      id: 3,
      name: "Sd Card 256gb",
      price: 99.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbl0VQNhj7Spj1itg6oL2YO8vb5ZJiwULqFB2L6LKvMrp1Y6gDuhlTEb2I&s=10",
      quantity: 1,
    },
    {
      id: 4,
      name: "Cable HDMI 4k",
      price: 139.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTonUsgELNAndHIs0NuUVrS1gAwS1T-LO3n4F59y28ZT_NyDp9dVTU9qY&s=10",
      quantity: 1,
    },
    {
      id: 5,
      name: "HD 1 terabyte",
      price: 289.99,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDv01LPE34MipTN3C-D20-2ENKBaqd4G6oupmHwFvd-XY4A1lBouMv1JRj&s=10",
      quantity: 1,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    return null;
  }

  const addItem = (id: number) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const deleteItem = (id: number) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const applyCoupon = () => {
    if (coupon === "DESCONTO10") {
      setDiscount(0.1);
    } else {
      setDiscount(0);
    }
  };

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalWithDiscount = total - total * discount;

  return (
    <>
      <Header />
      <div className="p-4 bg-gray-900 text-white min-h-screen pb-40 md:pb-44">
        <div className="flex w-full items-center justify-between gap-2 px-1 pt-1  pb-4">
          <Link href="/home">
          <ArrowLeft className="size-5" />
          </Link>
          <h1 className="text-xl max-md:text-base items-center font-semibold">
            Items do seu carrinho
          </h1>
        </div>

        {isMobile ? (
          <section className="flex flex-col gap-4">
            {cart.length === 0 ? (
              <div className="flex flex-col h-full pt-32 flex-grow justify-center items-center gap-4">
                <p className="text-center text-lg">Seu carrinho está vazio.</p>
                <ShoppingCart className="size-20" />
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm font-bold">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white px-2 py-1 rounded-l"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => addItem(item.id)}
                      className="text-white px-2 py-1 rounded-r"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))
            )}
          </section>
        ) : (
          <aside className="flex flex-col gap-4">
            {cart.length === 0 ? (
              <div className="flex h-full pt-32 flex-grow justify-center items-center gap-4">
                  <ShoppingCart className="size-20" />
                <p className="text-center text-xl font-semibold">Seu carrinho está vazio.</p>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center justify-between bg-gray-800 p-3 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded"
                  />
                  <div className="flex-1 ml-4">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm font-bold">
                      R$ {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white px-2 py-1 rounded-l"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => addItem(item.id)}
                      className="text-white px-2 py-1 rounded-r"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              ))
            )}
          </aside>
        )}

        <div className="fixed bottom-0 left-0 right-0 z-20 p-2 items-center justify-between w-full text-lg font-bold  bg-gray-800 border-t border-red-600">
          <div className="flex w-full justify-center items-center gap-4 mt-2 py-2 bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center gap-2 md:gap-2 text-nowrap bg-red-600 font-bold md:p-3 px-2 py-1 rounded-md">
              <span className="max-md:hidden">Aplicar cupom de desconto</span>
              <TicketX className="max-md:size-7" />
            </div>

            <div className="flex w-full gap-4">
              <input
                type="text"
                placeholder="Cupom de desconto"
                value={coupon}
                onChange={(e) => setCoupon(e.target.value)}
                className="w-full items-center p-2 rounded text-black"
              />
              <button
                onClick={applyCoupon}
                className="flex justify-center items-center p-4 bg-red-600 text-white py-2 rounded"
              >
                <Check />
              </button>
            </div>
          </div>
          <div className="flex z-20 p-3 items-center justify-between w-full text-lg font-bold">
            Total: R$ {totalWithDiscount.toFixed(2)}
            <Link href="/checkout" className="flex justify-center items-center">
              <button className="flex justify-center items-centermt-4 bg-green-600 text-white w-full px-4 py-2 rounded">
                <span className="text-base font-semibold"> Continuar</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
