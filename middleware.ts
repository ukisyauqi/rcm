import { auth } from "./auth";

export default auth((req) => {
  if (!req.auth && req.nextUrl.pathname !== "/login") {
    const newUrl = new URL("/login", req.nextUrl.origin)
    return Response.redirect(newUrl)
  }
})

export const config = {
  // Regex ini berfungsi untuk mencocokkan URL yang tidak termasuk:
  // - URL yang memulai dengan "/api"
  // - URL yang memulai dengan "/_next/static"
  // - URL yang memulai dengan "/_next/image"
  // - URL yang berisi "favicon.ico"
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}