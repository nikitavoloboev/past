"use client"

import { useAuth } from "@clerk/nextjs"

export default function ClerkRoute(props: { email?: string }) {
	const { isSignedIn } = useAuth()

	return <div>{isSignedIn ? "Signed in" : "Signed out"}</div>
}
