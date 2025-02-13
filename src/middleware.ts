import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const userRole = req.cookies.get("role")?.value || "guest";

  if (pathname.startsWith("/admin")) {
    if (userRole === "user" && (pathname.includes("/admin"))) {
      return NextResponse.redirect(new URL("/", req.url));
    }

    // If user is not loggedin then navigate to login page
    // if (userRole === "guest" || userRole === "" && (pathname.includes("/my-profile") )) {
    //   return NextResponse.redirect(new URL("/auth/get-started", req.url));
    // }
  }

  // Add condition to redirect for cart and place-order routes for guests
//   if (pathname.startsWith("/cart") || pathname.startsWith("/cart/place-order")) {
//     if (userRole === "guest" || userRole === "") {
//       return NextResponse.redirect(new URL("/login", req.url));
//     }
//   }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
//    "/cart", "/cart/place-order"