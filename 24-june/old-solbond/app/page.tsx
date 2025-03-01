import HomeRoute from "@/components/routes/HomeRoute"
import { currentUser } from "@clerk/nextjs/server"
import { create, get } from "ronin"

export default async function Home() {
	const user = await currentUser()

	if (user) {
		const existingUser = await get.user.with({
			clerkId: user.id,
		})
		if (!existingUser) {
			await create.user.with({
				clerkId: user.id,
			})
		}
	}

	return (
		<>
			<HomeRoute authenticated={user ? true : false} />
		</>
	)
}
