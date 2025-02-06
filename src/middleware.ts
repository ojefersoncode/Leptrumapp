import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("sb:token")?.value;

  console.log("Middleware executado para:", url.pathname);
  console.log("Token do cookie:", token);

  // Verifica se o token existe e não está vazio
  if (!token || token.trim() === "") {
    console.log("Token não encontrado ou vazio, redirecionando para /login");
    return NextResponse.redirect(
      new URL("/login?unauthenticated=true", url.origin)
    );
  }

  try {
    // Verifique o token com o Supabase
    const { data, error } = await supabase.auth.getUser(token);

    console.log("Dados do usuário (middleware):", data);
    console.log("Erro ao buscar usuário:", error);

    // Se houver erro ou o usuário não existir, redirecione para /login
    if (error) {
      console.error("Erro ao autenticar usuário:", error); // Log do erro específico
      return NextResponse.redirect(
        new URL("/login?unauthenticated=true", url.origin)
      );
    }

    if (!data?.user) {
      console.log("Usuário não encontrado, redirecionando para /login");
      return NextResponse.redirect(
        new URL("/login?unauthenticated=true", url.origin)
      );
    }

    // Se tudo estiver OK, permita o acesso
    return NextResponse.next();
  } catch (error) {
    console.error("Erro no middleware:", error);
    return NextResponse.redirect(new URL("/login?error=true", url.origin)); // Redireciona com erro genérico
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/home/:path*"], // Protege todas as rotas dentro de /dashboard
};