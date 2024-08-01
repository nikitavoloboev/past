import { GraphQLClient } from "graphql-request"
import { useNavigate } from "solid-start"
import { UserProvider, createUserState } from "~/GlobalContext/user"

export type GrafbaseRequest = GraphQLClient["request"]

export default function App(props: { hankoCookie: string }) {
  const navigate = useNavigate()

  const grafbase = new GraphQLClient(import.meta.env.VITE_GRAFBASE_API_URL, {
    headers: { authorization: `Bearer ${props.hankoCookie}` },
  })

  const request: GrafbaseRequest = async (...args) => {
    try {
      return await grafbase.request(...(args as [any]))
    } catch (error) {
      // @ts-ignore
      if (error.response.error.includes("Unauthorized")) {
        navigate("/auth")
      }
    }
  }

  const userState = createUserState()

  return (
    <>
      <style>
        {`
        #blur {
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          z-index: 9;
        }
    `}
      </style>
      <div class=" bg-white dark:bg-black">
        <UserProvider value={userState}>
          <div class="w-screen flex justify-center items-center h-screen">
            <div class="px-4 p-1 border-slate-400 border border-opacity-50 rounded-md hover:border-green-400 cursor-pointer hover:border-opacity-70 transition-all active:border-opacity-100">
              Build a great app
            </div>
          </div>
        </UserProvider>
      </div>
    </>
  )
}
