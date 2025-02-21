import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs";

export async function middleware(req: NextRequest) {
  console.log("🔹 Middleware iniciado");

  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });

  try {
    // Obtém a sessão do usuário
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
      console.error("⚠️ Erro ao obter usuário:", error);
      return NextResponse.redirect(new URL("/login?error=auth", req.url));
    }

    if (!user) {
      console.log("⚠️ Usuário não autenticado!");
      return NextResponse.redirect(new URL("/login?unauthenticated=true", req.url));
    }

    console.log("✅ Usuário autenticado!", user);
    return res;
  } catch (e) {
    console.error("⚠️ Erro inesperado no middleware:", e);
    return NextResponse.redirect(new URL("/login?error=unexpected", req.url));
  }
}

export const config = {
  matcher: ["/dashboard/:path*", "/home/:path*"],
};