import NewRoute from "@/components/routes/NewRoute"
import { currentUser } from "@clerk/nextjs/server"

export default async function New() {
	const user = await currentUser()

	return (
		<>
			<NewRoute />
		</>
	)
}
