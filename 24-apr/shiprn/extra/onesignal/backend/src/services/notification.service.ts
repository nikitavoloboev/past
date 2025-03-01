import * as OneSignal from "@onesignal/node-onesignal"
import { defaultClient } from "../config/onesignal"

class NotificationService {
  private readonly client: OneSignal.DefaultApi = defaultClient
  private readonly appId: string = process.env.ONESIGNAL_APP_ID!

  constructor(client?: OneSignal.DefaultApi) {
    if (client) this.client = client
  }

  createNotification = ({
    title,
    message,
    subtitle,
    url,
  }: {
    title?: string
    message: string
    subtitle?: string
    url?: string
  }) => {
    const notif = new OneSignal.Notification()
    notif.app_id = this.appId
    notif.headings = {
      en: title,
    }
    notif.contents = {
      en: message,
    }
    notif.subtitle = {
      en: subtitle,
    }
    notif.url = url
    return notif
  }

  sendNotification = async (notification: OneSignal.Notification) => {
    return this.client.createNotification(notification)
  }
}

const notifService = new NotificationService()
export default notifService
