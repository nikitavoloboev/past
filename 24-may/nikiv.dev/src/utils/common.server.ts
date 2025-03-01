import { getRequestEvent } from "solid-js/web"

export const setRedirectHeaders = (url: string, statusCode: number = 302) => {
  const request = getRequestEvent()!
  request.response.status = statusCode
  request.response.headers.set("Location", url)
}
