"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Hook de redirecionamento
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

const Login = () => {
  const router = useRouter(); // Instância do useRouter, hook
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError("");
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      // Defina o cookie com o token de acesso
      if (data.session) {
        const token = data.session.access_token;
        document.cookie = `sb:token=${token}; path=/; max-age=3600; Secure; SameSite=Strict`;
      }

      // Obtenha o ID do usuário
      const userId = data.user?.id;

      // Redirecione para a URL dinâmica /dashboard/[id]
      if (userId) {
        router.push(`/home`);
      } else {
        throw new Error("ID do usuário não encontrado.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado.");
      }
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center content-center">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
         bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />
      <div className="w-full bg-slate-50 max-md:h-screen rounded md:max-w-md p-4 relative z-10">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Login</h2>
          <p className="text-sm text-slate-700">
            Bem-vindo de volta! Faça login para continuar.
          </p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleLogin}>
            <div>
              <label
                htmlFor="email"
                className="block text-sm mb-2 font-medium text-gray-700"
              >
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="seuemail@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm mb-2 font-medium text-gray-700"
              >
                Senha
              </label>
              <Input
                id="password"
                type="password"
                placeholder="******"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-sm text-red-700">{error}</p>}
            <Button type="submit" className="w-full bg-indigo-600 mt-4">
              Entrar
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-slate-800">
            Não tem uma conta?{" "}
            <a href="/signin" className="text-indigo-600 hover:underline">
              Registre-se
            </a>
          </p>
        </CardFooter>
      </div>
    </div>
  );
};

export default Login;
