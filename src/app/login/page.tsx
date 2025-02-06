"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
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
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("sb:token");
    if (token) {
      router.push("/home");
    }
  }, [router]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        throw error;
      }

      if (data.session) {
        const token = data.session.access_token;
        localStorage.setItem("sb:token", token);
        setTimeout(() => {
          router.push("/home");
        }, 100);
      } else {
        throw new Error("Sessão não encontrada.");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro inesperado.");
        console.error("Erro durante o login:", err);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="h-dvh bg-indigo-100 flex flex-col">
        <div className="mx-4 my-1 bg-indigo-100">
          <h1 className="text-2xl font-bold flex items-center">
            <span className="text-indigo-600">Lep</span>
            <span className="text-slate-900">trum</span>
          </h1>
        </div>

        <div className="flex flex-grow justify-center items-center bg-indigo-100">
          <div className="w-full md:max-w-md p-4">
            <CardHeader>
              <h1 className="text-2xl font-semibold text-slate-700">
                Bem-vindo de volta!
              </h1>
            </CardHeader>
            <CardContent>
              <form className="w-full space-y-4" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Input
                    id="email"
                    className="p-4 bg-indigo-50"
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
                    className="p-4 bg-indigo-50"
                    type="password"
                    placeholder="Digite sua senha aqui..."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                {error && <p className="text-sm text-red-700">{error}</p>}
                <Button
                  type="submit"
                  className="w-full bg-indigo-600 mt-4 p-4"
                  disabled={loading}
                >
                  {loading ? "Carregando..." : <h1 className="text-base">Entrar</h1>}
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

        <footer className="w-full bg-indigo-100 py-2 text-slate-950 text-base text-center mt-auto">
          © 2025 Leptrum. Todos os direitos reservados.
        </footer>
      </div>
    </>
  );
};

export default Login;
