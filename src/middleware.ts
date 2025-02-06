import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const token = req.cookies.get("sb:token")?.value;

  console.log("🔹 Middleware iniciado");
  console.log("🔹 Token encontrado:", token ? "Sim" : "Não");

  if (!token) {
    console.log("⚠️ Token não encontrado! Redirecionando para login...");
    return NextResponse.redirect(new URL("/login?unauthenticated=true", url.origin));
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY! // 🔹 Usando a role_key diretamente
  );

  try {
    const { data, error } = await supabase.auth.getUser(token);

    console.log("🔹 Dados do usuário:", data);
    console.log("🔹 Erro:", error);

    if (error || !data?.user) {
      console.log("⚠️ Erro na autenticação! Redirecionando para login...");
      return NextResponse.redirect(new URL("/login?unauthenticated=true", url.origin));
    }

    console.log("✅ Usuário autenticado!");
    return NextResponse.next();
  } catch (error) {
    console.error("❌ Erro no middleware:", error);
    return NextResponse.redirect(new URL("/login?error=true", url.origin));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/home/:path*"],
};
