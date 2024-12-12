import { Match, Show, Switch } from "solid-js"

interface Props {
  name: "Close"
  width?: string
  height?: string
  color?: string
  tooltip?: {
    content: string
    position: string
  }
}

export default function Icon(props: Props) {
  return (
    <>
      <style>{`
        #BottomLeft {
          top: 110%;
          left: -260%;
        }
        #BottomRight {
          top: 100%;
          left: 40%;
        }
        #TopLeft {
          top: -110%;
          left: -260%;
        }
        #TopRight {
          top: -100%;
          left: 40%;
        }
      `}</style>
      <div class="has-tooltip">
        <Show when={props.tooltip !== undefined}>
          <div
            id={props.tooltip?.position}
            class=" px-5 p-[1px] bg-zinc-100  dark:bg-neutral-950 rounded-full border  border-slate-400 border-opacity-50 tooltip"
          >
            {props.tooltip!.content}
          </div>
        </Show>
        <Switch>
          <Match when={props.name === "Close"}>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M17.25 6.75L6.75 17.25"
              />
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M6.75 6.75L17.25 17.25"
              />
            </svg>
          </Match>
        </Switch>
      </div>
    </>
  )
}
