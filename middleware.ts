import { NextResponse } from 'next/server'
import {auth} from "@/auth";
import {NextAuthRequest} from "next-auth/lib";

export const config = {
  matcher: ["/client-example/:path*","/mw2/:path*"],
}

 const authMiddleware = auth(async (req: NextAuthRequest) => {
  const response = NextResponse.next();


  if (!req.auth) {
      // redirect to page with information about protection
    const u=(new URL('/protect-info', req.url)).toString()+`/?OriginalUrl=${encodeURIComponent(req.url)}`;
    return NextResponse.redirect(u)

  }
});

 export default authMiddleware;

