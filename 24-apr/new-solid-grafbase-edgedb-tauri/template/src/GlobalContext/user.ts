import { createContext, useContext } from "solid-js"
import { createStore } from "solid-js/store"

type User = {
  showSettings: boolean
}

// global state of user
export function createUserState() {
  const [user, setUser] = createStore<User>({
    showSettings: false,
  })

  return {
    // state
    user,
    // actions
    setShowSettings: (state: boolean) => {
      return setUser({ showSettings: state })
    },
  } as const
}

const UserCtx = createContext<ReturnType<typeof createUserState>>()

export const UserProvider = UserCtx.Provider

export const useUser = () => {
  const ctx = useContext(UserCtx)
  if (!ctx) throw new Error("useUser must be used within UserProvider")
  return ctx
}
