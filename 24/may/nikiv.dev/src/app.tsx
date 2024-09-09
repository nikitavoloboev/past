// @refresh reload
import { Route, Router } from "@solidjs/router"
import { FileRoutes } from "@solidjs/start/router"
import { Suspense } from "solid-js"
import "./app.css"
import Redirect from "./components/Redirect"

export default function App() {
  return (
    <Router
      root={(props) => (
        <>
          <Suspense>{props.children}</Suspense>
        </>
      )}
    >
      <Route
        path="/slides/la-april-24"
        component={() => (
          <Redirect url="https://pitch.com/v/learn-anything-future-april-2024-cgy3g2" />
        )}
      />
      <FileRoutes />
    </Router>
  )
}
