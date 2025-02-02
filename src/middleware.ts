import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("sb:token")?.value;

  console.log("Middleware executado para:", url.pathname);
  console.log("Token do cookie:", token);

  // Se não houver token, redirecione para /login
  if (!token) {
    console.log("Token não encontrado, redirecionando para /login");
    return NextResponse.redirect(new URL("/login", url.origin));
  }

  // Verifique o token com o Supabase
  const { data, error } = await supabase.auth.getUser(token);
  console.log("Dados do usuário (middleware):", data);
  console.log("Erro ao buscar usuário:", error);

  // Se houver erro ou o usuário não existir, redirecione para /login
  if (error || !data?.user) {
    console.log("Usuário não autenticado, redirecionando para /login");
    return NextResponse.redirect(new URL("/login", url.origin));
  }

  // Se tudo estiver OK, permita o acesso
  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*"], // Protege todas as rotas dentro de /dashboard
};