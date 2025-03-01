import { onMount } from "solid-js"
import { isServer } from "solid-js/web"
import { setRedirectHeaders } from "~/utils/common.server"

interface Props {
  url: string
}

export default function Redirect(props: Props) {
  if (isServer) {
    setRedirectHeaders(props.url)
  }

  onMount(() => {
    window.location.href = props.url
  })

  return <></>
}
