"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Importa o roteador do Next.js
import { supabase } from "@/lib/supabaseClient";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // Estado para mensagens de erro
  const router = useRouter(); // Inicializa o roteador do Next.js

  const handleSignup = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError(""); // Reseta a mensagem de erro

    // Valida campos vazios
    if (!email || !password) {
      setError("Preencha todos os campos.");
      return;
    }

    try {
      const { error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;

      // Redirecionar para a página de login
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Erro ao criar conta. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center min-h-screen justify-center content-center">
      <div className="absolute top-0 left-0 right-0 bottom-0 
        bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)]
         bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />
      <div className="w-full bg-slate-50 max-md:h-screen rounded md:max-w-md p-4 relative z-10">
        <CardHeader className="text-center">
          <h2 className="text-2xl font-bold">Cadastre-se</h2>
          <p className="text-sm text-gray-500">Cadastre-se para usar nossos serviços.</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label htmlFor="email" className="block text-sm mb-2 font-medium text-slate-600">
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
              <label htmlFor="password" className="block text-sm mb-2 font-medium text-slate-600">
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
            {error && (
              <div className="flex items-center text-sm text-red-600 mt-2">
                <AlertCircle className="w-5 h-5 mr-2" />
                {error}
              </div>
            )}
            <Button type="submit" className="w-full bg-indigo-700 mt-4">
              Criar conta
            </Button>
          </form>
        </CardContent>
        <CardFooter className="text-center">
          <p className="text-sm text-slate-800">
            Já tem uma conta?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Fazer login
            </a>
          </p>
        </CardFooter>
      </div>
    </div>
  );
};

export default Signin;
