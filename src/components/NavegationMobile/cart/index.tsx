"use client";
import { Dialog } from "@radix-ui/react-dialog";
import { ShoppingCart, Trash2 } from "lucide-react";
import {
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogHeader,
} from "@/components/ui/dialog";
import { useState } from "react";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export function Cart() {
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
    <div>
      <style>
        {`
          ::-webkit-scrollbar {
            width: 8px;
          }
          ::-webkit-scrollbar-track {
            background: #1f2937;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb {
            background: #dc2626;
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: #ef4444;
          }
          * {
            scrollbar-width: thin;
            scrollbar-color: #dc2626 #1f2937;
          }
        `}
      </style>
      <Dialog>
        <DialogTrigger asChild>
          <button className="bg-transparent hover:bg-transparent text-white hover:text-red-600 px-1">
            <ShoppingCart className="text-slate-100 md:size-4 hover:text-slate-400" />
          </button>
        </DialogTrigger>
        <DialogContent className="flex flex-col max-md:max-w-full h-screen max-md:h-full border-none bg-gray-900 text-red-600 overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl text-red-600 font-bold">
              Carrinho
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 mt-4 overflow-y-auto max-h-[80vh] px-2">
            {cart.length === 0 ? (
              <p className="text-white text-center">Seu carrinho está vazio.</p>
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
                  <div className="flex-1 ml-4 text-white">
                    <h2 className="font-bold">{item.name}</h2>
                    <p className="text-sm">
                      R$ {item.price.toFixed(2)} x {item.quantity} = {" "}
                      <span className="font-bold">
                        R$ {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </p>
                  </div>
                  <div className="flex items-center">
                    <button
                      onClick={() => removeItem(item.id)}
                      className="bg-red-600 text-white px-2 py-1 rounded-l"
                    >
                      -
                    </button>
                    <span className="px-3 text-white">{item.quantity}</span>
                    <button
                      onClick={() => addItem(item.id)}
                      className="bg-green-600 text-white px-2 py-1 rounded-r"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="ml-4 text-red-500 hover:text-red-700"
                  >
                    <Trash2 />
                  </button>
                </div>
              ))
            )}
          </div>
          <div className="mt-2 p-4 bg-gray-800 rounded-lg">
            <input
              type="text"
              placeholder="Cupom de desconto"
              value={coupon}
              onChange={(e) => setCoupon(e.target.value)}
              className="w-full p-2 rounded text-black"
            />
            <button
              onClick={applyCoupon}
              className="mt-2 bg-red-600 text-white w-full py-2 rounded"
            >
              Aplicar Cupom
            </button>
          </div>
          <div className="text-white text-lg font-bold">
            Total: R$ {totalWithDiscount.toFixed(2)}
          </div>
          <button className="mt-0.5 bg-green-600 font-semibold text-white w-full py-2 rounded">
            Ir para Checkout
          </button>
        </DialogContent>
      </Dialog>
    </div>
  );
}
