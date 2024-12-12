import { createJazzReactContext, DemoAuth } from "jazz-react"
import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"

// const router = createBrowserRouter([
// 	{
// 		path: "/",
// 		// TODO: render HomePublic if not auth'd
// 		element: < />,
// 	},
// ])

const Jazz = createJazzReactContext({
	auth: DemoAuth({ appName: "ReactTest" }),
	peer: "wss://mesh.jazz.tools/?key=nikita@nikiv.dev",
})
export const { useAccount, useCoState } = Jazz

ReactDOM.createRoot(document.getElementById("root")!).render(
	<Jazz.Provider>
		<React.StrictMode>
			{" "}
			<RouterProvider router={router} />
		</React.StrictMode>{" "}
	</Jazz.Provider>
)
