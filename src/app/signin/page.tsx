"use client";

import React, { useState, useEffect, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { setCookie } from "nookies";
import { AlertCircle } from "lucide-react";

const Signin = () => {
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // 🚀 Verifica sessão ao carregar a página
  useEffect(() => {
    const checkSession = async () => {
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.push("/home");
      }
    };
    checkSession();
  }, [router, supabase]);

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const { data, error } = await supabase.auth.signUp({ email, password });

      if (error) throw error;

      if (data.session) {
        const token = data.session.access_token;

        // Salva token nos cookies para verificação com Middleware
        setCookie(null, "sb:token", token, {
          maxAge: 60 * 60 * 24, // Os cookies expira em 24h
          path: "/",
          secure: process.env.NODE_ENV === "production",
          sameSite: "Lax",
        });

        router.push("/home");
      } else {
        throw new Error("Erro ao registrar. Verifique seu email.");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro inesperado.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-dvh bg-indigo-100 flex flex-col">
      <div className="mx-4 my-1 bg-indigo-100">
        <h1 className="text-2xl font-bold flex items-center">
          <span className="text-indigo-600">Lep</span>
          <span className="text-slate-900">trum</span>
        </h1>
      </div>

      <div className="flex flex-grow justify-center items-center bg-indigo-100">
        <div className="w-full md:max-w-md p-4">
          <Card>
            <CardHeader className="text-center">
              <h2 className="text-2xl font-semibold text-slate-700">
                Criar Conta
              </h2>
              <p className="text-sm text-gray-500">
                Cadastre-se para acessar nossa plataforma.
              </p>
            </CardHeader>
            <CardContent>
              <form className="w-full space-y-4" onSubmit={handleSignup}>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 font-medium text-gray-700">
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
                  <label htmlFor="password" className="block text-sm mb-2 font-medium text-gray-700">
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
                {error && (
                  <div className="flex items-center text-sm text-red-600 mt-2">
                    <AlertCircle className="w-5 h-5 mr-2" />
                    {error}
                  </div>
                )}
                <Button type="submit" className="w-full bg-indigo-600 mt-4 p-4" disabled={loading}>
                  {loading ? "Criando conta..." : "Criar conta"}
                </Button>
              </form>
            </CardContent>
            <CardFooter className="text-center">
              <p className="text-sm text-slate-800">
                Já tem uma conta?{" "}
                <a href="/login" className="text-indigo-600 hover:underline">
                  Entrar
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>

      <footer className="w-full bg-indigo-100 py-2 text-slate-950 text-base text-center mt-auto">
        © 2025 Leptrum. Todos os direitos reservados.
      </footer>
    </div>
  );
};

export default Signin;
