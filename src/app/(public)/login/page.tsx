"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { setCookie, parseCookies } from "nookies"; // Importa parseCookies

const Login = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🚀 Verifica sessão ao carregar a página
  useEffect(() => {
    const checkSession = async () => {
      // Verifica o cookie diretamente
      const cookies = parseCookies();
      const token = cookies.token;

      if (token) {
        // Se o token estiver presente, redireciona para /home
        router.push("/home");
      } else {
        // Se não houver token, prossegue normalmente para a página de login
        const { data } = await supabase.auth.getSession();
        if (data.session) {
          router.push("/home");
        }
      }
    };

    checkSession();
  }, [router, supabase]);

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      if (data.session) {
        const token = data.session.access_token;

        // ✅ Salva token nos cookies para compatibilidade com Middleware
        await fetch("/api/auth/set-cookie", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ token }),
        });

        router.push("/home");
      } else {
        throw new Error("Sessão não encontrada.");
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Ocorreu um erro inesperado."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh bg-gray-900 flex flex-col">
      <div className="mx-4 my-1">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-red-700">Leptrum</span>
        </h1>
      </div>

      <div className="flex flex-grow justify-center items-center bg-gray-900">
        <div className="w-full md:max-w-md p-4">
          <Card>
            <CardHeader>
              <h1 className="text-2xl font-semibold text-slate-800">
                Bem-vindo de volta!
              </h1>
            </CardHeader>
            <CardContent>
              <form className="w-full space-y-4" onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 font-medium text-gray-800"
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
                  className="w-full bg-red-700 mt-4 p-4"
                  disabled={loading}
                >
                  {loading ? (
                    "Carregando..."
                  ) : (
                    <h1 className="text-base">Entrar</h1>
                  )}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-slate-800">
                Não tem uma conta?{" "}
                <a href="/signin" className="text-red-700 hover:underline">
                  Registre-se
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <footer className="w-full py-2 text-yellow-50 text-base text-center mt-auto">
        © 2025 Leptrum. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Login;
