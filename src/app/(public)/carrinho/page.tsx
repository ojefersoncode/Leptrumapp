"use client"; // Garante que o código será executado no cliente

import { useState, useEffect } from "react";
import { Check, Gem, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
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
      image: "https://via.placeholder.com/80",
      quantity: 1,
    },
    {
      id: 2,
      name: "Câmera 4K",
      price: 499.99,
      image: "https://via.placeholder.com/80",
      quantity: 1,
    },
    {
      id: 3,
      name: "Sd Card 256gb",
      price: 99.99,
      image: "https://via.placeholder.com/80",
      quantity: 1,
    },
    {
      id: 4,
      name: "Cable HDMI 4k",
      price: 139.99,
      image: "https://via.placeholder.com/80",
      quantity: 1,
    },
    {
      id: 5,
      name: "HD 1 terabyte",
      price: 289.99,
      image: "https://via.placeholder.com/80",
      quantity: 1,
    },
  ]);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Estado para garantir que estamos no cliente
  const [isMobile, setIsMobile] = useState(false); // Verificação se é mobile

  useEffect(() => {
    setIsMounted(true); // Marca que o componente foi montado no cliente

    // Função para verificar a largura da tela e definir se é mobile
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsMobile(true); // Tela pequena (mobile)
      } else {
        setIsMobile(false); // Tela maior (desktop)
      }
    };

    // Inicializa a verificação de tamanho da tela
    handleResize();

    // Adiciona event listener para detectar mudanças no tamanho da tela
    window.addEventListener("resize", handleResize);

    // Limpa o event listener quando o componente for desmontado
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!isMounted) {
    return null; // Ou um loading, se preferir
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
      <div className="p-4 h-screen max-md:mb-40 mb-24 bg-gray-900 text-white min-h-screen">
        <div className="flex items-center gap-2 pb-4 py-3">
          <ShoppingCart className="text-red-600 size-7" />
          <h1 className="text-2xl font-semibold">Items do seu carrinho</h1>
        </div>

        {isMobile ? (
          <section className="flex flex-col gap-4">
            {cart.length === 0 ? (
              <p className="text-center text-lg">Seu carrinho está vazio.</p>
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
                    <p className="text-sm">
                      R$ {item.price.toFixed(2)} x {item.quantity} ={" "}
                      <span className="font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-white p-1 rounded-l"
                    >
                      <Minus className="size-4" />
                    </button>
                    <span className="px-3">{item.quantity}</span>
                    <button
                      onClick={() => addItem(item.id)}
                      className="text-white p-1 rounded-r"
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
              <p className="text-center text-lg">Seu carrinho está vazio.</p>
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
                    <p className="text-sm">
                      R$ {item.price.toFixed(2)} x {item.quantity} ={" "}
                      <span className="font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
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

        <div className="flex max-md:flex-wrap w-full justify-center items-center gap-4 mt-4 py-4 bg-gray-800 p-4 rounded-lg">
          <div className="flex items-center gap-2 md:gap-4 text-nowrap bg-red-600 font-bold py-2 px-4 rounded-md">
            <span className="max-md:text-xs">Aplicar cupom de desconto</span>
            <Gem className="max-md:size-4" />
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
        <div className="flex fixed bottom-0 left-0 right-0 z-20 px-4 py-4 items-center justify-between w-full text-lg font-bold border-t border-red-600 bg-gray-900">
          Total: R$ {totalWithDiscount.toFixed(2)}
          <Link href="/checkout" className="flex justify-center items-center">
            <button className="flex justify-center items-centermt-4 bg-green-600 text-white w-full px-4 py-2 rounded">
              <span className="text-sm font-semibold"> Continuar</span>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
