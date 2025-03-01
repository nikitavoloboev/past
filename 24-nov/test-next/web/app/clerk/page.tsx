import ClerkRoute from "@/components/routes/ClerkRoute"
import { currentUser } from "@clerk/nextjs/server"

export default async function Clerk() {
	const clerkUser = await currentUser()
	let email
	if (clerkUser) {
		email = clerkUser.primaryEmailAddress?.emailAddress
	}
	return (
		<>
			<ClerkRoute email={email} />
		</>
	)
}
