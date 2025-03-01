import { NextRequest, NextResponse } from "next/server"
import { clerkClient } from "@clerk/nextjs/server"
import { create, get, set } from "ronin"
import { isProduction } from "@/lib/utils"

export async function POST(request: NextRequest) {
	try {
		const data = await request.json()

		// is clerk user exists
		const _User = await clerkClient().users.getUser(data.userId)

		if (!_User) {
			// "Clerk User not found"
			return NextResponse.json({ message: "Clerk User not found" }, { status: 404 })
		}

		// if clerk user exists, check if user exists in Ronin
		let roninUser
		if (isProduction) {
			roninUser = await get.user.with({ clerkId: _User.id })
		} else {
			roninUser = await get.user.with({ localClerkId: _User.id })
		}

		// if user exists in Ronin, return user
		if (roninUser) {
			// "User already exists in Ronin"
			return NextResponse.json({ user: roninUser }, { status: 200 })
		}

		// get user's email address
		let emailAddress = _User.primaryEmailAddress?.emailAddress

		if (!emailAddress) {
			// look up the user's email address
			if (_User.emailAddresses.length > 0) {
				emailAddress = _User.emailAddresses[0].emailAddress
			}
		}

		if (isProduction) {
			await create.user.with({
				email: emailAddress,
				clerkId: _User.id
			})
		} else {
			// TODO: this assumes user created account in prod first before running in dev, annoying but ok for now..
			await set.user({
				with: {
					email: emailAddress
				},
				to: {
					localClerkId: _User.id
				}
			})
		}

		return NextResponse.json({ user: roninUser }, { status: 200 })
	} catch (error) {
		return NextResponse.json({ message: "Invalid request" }, { status: 400 })
	}
}
