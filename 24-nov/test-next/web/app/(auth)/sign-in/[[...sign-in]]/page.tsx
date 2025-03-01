import { redirect } from "@/lib/i18n"
import { SignIn } from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server"

export default async function SingIn() {
	const { userId } = auth()

	if (userId) {
		// Relay on clerk redirect is bad UX
		redirect("/")
	}

	return (
		<div className="flex h-screen max-w-[1400px] w-screen flex-center flex-1">
			<div className="relative flex flex-1 flex-col justify-center">
				<div className="mx-auto w-full lg:min-w-[400px] [&>div]:mx-auto">
					<SignIn />
				</div>
			</div>
		</div>
	)
}
