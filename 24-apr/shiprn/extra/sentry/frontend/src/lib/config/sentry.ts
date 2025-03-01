import * as Sentry from "@sentry/react-native"

const SENTRY_DSN = process.env.EXPO_PUBLIC_SENTRY_DSN

export function init() {
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
      debug: __DEV__,
      tracesSampleRate: 1.0, // Set tracesSampleRate to 1.0 to capture 100% of transactions for performance monitoring. We recommend adjusting this value in production.
    })
  } else {
    throw new Error(
      "Sentry DSN not provided. Please add it to .env or disable Sentry",
    )
  }
}

export function wrap(App: React.ComponentType<React.JSX.IntrinsicAttributes>) {
  if (SENTRY_DSN) {
    return Sentry.wrap(App)
  } else {
    return App
  }
}
