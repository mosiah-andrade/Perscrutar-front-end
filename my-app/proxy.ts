import { NextResponse, type NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  const isAuthenticated = request.cookies.get('auth_token')?.value === 'true';
  const isLoginPage = request.nextUrl.pathname === '/';
  const isDashboardPage = request.nextUrl.pathname.startsWith('/dashboard');

  // Caso 1: Não logado tentando entrar no Dashboard -> Vai para o Login
  if (!isAuthenticated && isDashboardPage) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // Caso 2: Já logado tentando entrar no Login -> Vai para o Dashboard
  if (isAuthenticated && isLoginPage) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Caso 3: Permite o acesso normal para qualquer outra situação
  return NextResponse.next();
}

export const config = {
  matcher: ['/', '/dashboard/:path*'],
}