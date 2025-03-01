import { currentUser } from "@clerk/nextjs/server"
import { get } from "ronin"
import { createServerActionProcedure, ZSAError } from "zsa"

export const authedProcedure = createServerActionProcedure()
	.handler(async () => {
		try {
			const clerkUser = await currentUser()
			const roninUser = await get.user.with({ email: clerkUser?.primaryEmailAddress?.emailAddress })
			return { clerkUser, roninUser }
		} catch {
			throw new ZSAError("NOT_AUTHORIZED", "User not authenticated")
		}
	})
	.createServerAction()

// Get current user from clerk and ronin
export const getCurrentRoninUser = async () => {
	const clerkUser = await currentUser()
	if (!clerkUser) return
	const roninUser = await get.user.with({ email: clerkUser?.primaryEmailAddress?.emailAddress })
	return roninUser
}
