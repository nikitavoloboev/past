import {
	createRootRoute,
	createRoute,
	createRouter,
	ErrorComponent,
	type ErrorComponentProps,
	Link,
	Outlet,
	RouterProvider
} from "@tanstack/react-router"
import { TanStackRouterDevtools } from "@tanstack/router-devtools"
import ReactDOM from "react-dom/client"
import "./index.css"
import { fetchPost, fetchPosts, NotFoundError } from "./posts"
import { FormRoute } from "./routes/form"
import { HomeRoute } from "./routes/home"
import { AirdropsFormRoute } from "./routes/airdrops-form"

// TODO: add file based routing https://discord.com/channels/719702312431386674/1007702008448426065/1286711456452055126
// like in solid start

const rootRoute = createRootRoute({
	component: RootComponent,
	notFoundComponent: () => {
		return (
			<div>
				<p>This is the notFoundComponent configured on root route</p>
				<Link to="/">Start Over</Link>
			</div>
		)
	}
})

function RootComponent() {
	return (
		<>
			<div className="flex gap-2 border-b p-2 text-lg">
				<Link
					to="/"
					activeProps={{
						className: "font-bold"
					}}
					activeOptions={{ exact: true }}
				>
					Home
				</Link>{" "}
				<Link
					to="/form"
					activeProps={{
						className: "font-bold"
					}}
					activeOptions={{ exact: true }}
				>
					Form
				</Link>{" "}
				<Link
					to="/airdrops-form"
					activeProps={{
						className: "font-bold"
					}}
					activeOptions={{ exact: true }}
				>
					Airdrops Form
				</Link>{" "}
			</div>
			<Outlet />
			<TanStackRouterDevtools position="bottom-right" />
		</>
	)
}
const homeRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/",
	component: HomeRoute
})

const formRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/form",
	component: FormRoute
})

const airdropsFormRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "/airdrops-form",
	component: AirdropsFormRoute
})

export const postsRoute = createRoute({
	getParentRoute: () => rootRoute,
	path: "posts",
	loader: () => fetchPosts()
}).lazy(() => import("./posts.lazy").then(d => d.Route))

const postsIndexRoute = createRoute({
	getParentRoute: () => postsRoute,
	path: "/",
	component: PostsIndexComponent
})

function PostsIndexComponent() {
	return <div>Select a post.</div>
}

const postRoute = createRoute({
	getParentRoute: () => postsRoute,
	path: "$postId",
	errorComponent: PostErrorComponent,
	loader: ({ params }) => fetchPost(params.postId),
	component: PostComponent
})

function PostErrorComponent({ error }: ErrorComponentProps) {
	if (error instanceof NotFoundError) {
		return <div>{error.message}</div>
	}

	return <ErrorComponent error={error} />
}

function PostComponent() {
	const post = postRoute.useLoaderData()

	return (
		<div className="space-y-2">
			<h4 className="text-xl font-bold">{post.title}</h4>
			<hr className="opacity-20" />
			<div className="text-sm">{post.body}</div>
		</div>
	)
}

const layoutRoute = createRoute({
	getParentRoute: () => rootRoute,
	id: "_layout",
	component: LayoutComponent
})

function LayoutComponent() {
	return (
		<div className="p-2">
			<div className="border-b">I'm a layout</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

const layout2Route = createRoute({
	getParentRoute: () => layoutRoute,
	id: "_layout-2",
	component: Layout2Component
})

function Layout2Component() {
	return (
		<div>
			<div>I'm a nested layout</div>
			<div className="flex gap-2 border-b">
				<Link
					to="/layout-a"
					activeProps={{
						className: "font-bold"
					}}
				>
					Layout A
				</Link>
				<Link
					to="/layout-b"
					activeProps={{
						className: "font-bold"
					}}
				>
					Layout B
				</Link>
			</div>
			<div>
				<Outlet />
			</div>
		</div>
	)
}

const layoutARoute = createRoute({
	getParentRoute: () => layout2Route,
	path: "/layout-a",
	component: LayoutAComponent
})

function LayoutAComponent() {
	return <div>I'm layout A!</div>
}

const layoutBRoute = createRoute({
	getParentRoute: () => layout2Route,
	path: "/layout-b",
	component: LayoutBComponent
})

function LayoutBComponent() {
	return <div>I'm layout B!</div>
}

const routeTree = rootRoute.addChildren([
	postsRoute.addChildren([postRoute, postsIndexRoute]),
	layoutRoute.addChildren([layout2Route.addChildren([layoutARoute, layoutBRoute])]),
	homeRoute,
	formRoute,
	airdropsFormRoute
])

// Set up a Router instance
const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultStaleTime: 5000,
	Wrap: ({ children }) => <>{children}</>
})

// Register things for typesafety
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}

const rootElement = document.getElementById("app")!

if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement)

	root.render(<RouterProvider router={router} />)
}
