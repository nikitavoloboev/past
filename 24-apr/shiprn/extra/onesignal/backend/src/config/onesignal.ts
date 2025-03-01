import * as OneSignal from "@onesignal/node-onesignal"

const configuration = OneSignal.createConfiguration({
  appKey: process.env.ONESIGNAL_APP_ID,
  userKey: process.env.ONESIGNAL_USER_KEY,
})

export const defaultClient = new OneSignal.DefaultApi(configuration)
