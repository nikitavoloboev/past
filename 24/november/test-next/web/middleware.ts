import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server"
const isProtectedRoute = createRouteMatcher(["dashboard/(.*)"])
import { NextResponse } from "next/server"

export default clerkMiddleware((auth, req) => {
	if (isProtectedRoute(req)) auth().protect()
	return NextResponse.next()
})

export const config = {
	matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"]
}
