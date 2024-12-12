import HomeRoute from "@/components/routes/HomeRoute"
import { currentUser } from "@clerk/nextjs/server"

export default async function Home() {
	// const clerkUser = await currentUser()
	// let email
	// if (clerkUser) {
	// 	email = clerkUser.primaryEmailAddress?.emailAddress
	// }
	return (
		<>
			<HomeRoute />
		</>
	)
}
