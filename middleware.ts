import { NextResponse } from "next/server"
import { auth } from "./auth"

export default auth((req) => {
  const { pathname } = req.nextUrl
  if (
    pathname.startsWith("api") ||
    pathname.startsWith("_next/static") ||
    pathname.startsWith("_next/image") ||
    pathname.startsWith("favicon.ico")
  ) {
    return NextResponse.next()
  }
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|favicon.ico|public).*)"],
// }
