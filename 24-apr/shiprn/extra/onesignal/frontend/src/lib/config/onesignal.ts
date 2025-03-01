import { useEffect, useCallback } from "react"
import { LogLevel, OneSignal } from "react-native-onesignal"

const ONESIGNAL_APP_ID = process.env.EXPO_PUBLIC_ONESIGNAL_APP_ID

export function init() {
  OneSignal.Debug.setLogLevel(LogLevel.Verbose)
  if (ONESIGNAL_APP_ID) {
    OneSignal.initialize(ONESIGNAL_APP_ID)
  } else {
    throw new Error("No ONESIGNAL_APP_ID found in .env")
  }
}

export default function useOneSignal() {
  useEffect(() => {
    async function setup() {
      if (!ONESIGNAL_APP_ID) {
        return
      }

      if (!OneSignal.Notifications.hasPermission()) {
        if (await OneSignal.Notifications.canRequestPermission()) {
          OneSignal.Notifications.requestPermission(false)
        } else {
          // TODO: Handle permission denied
          // Most people will show an alert redirecting the user to the settings menu. The code below does that, but can be annoying.
          // OneSignal.Notifications.requestPermission(true);
        }
      }
    }

    setup()
  }, [])

  const registerPushUser = useCallback(
    (userId: string, phoneNumber: string) => {
      if (!ONESIGNAL_APP_ID) {
        return
      }
      OneSignal.login(userId)
      OneSignal.User.addSms(phoneNumber)
    },
    [],
  )

  const unregisterPushUser = useCallback(() => {
    if (!ONESIGNAL_APP_ID) {
      return
    }
    OneSignal.logout()
  }, [])

  return {
    registerPushUser,
    unregisterPushUser,
  }
}
