import clsx from "clsx"
import { Match, Switch, createSignal } from "solid-js"

export default function Features() {
  const [show, setShow] = createSignal("Features")
  return (
    <>
      <style>{`
        #Animation {
          animation: 1s linear 0s 1 slideInFromLeft;
        }
        @keyframes slideInFromLeft {
          0% {
              transform: translateX(-20px);
              opacity: 0;
          }
          100% {
              transform: translateX(0);
              opacity: 1;
          }
      }
      #Nav {
        padding: 10px 25px 10px 25px;
        border-radius: 25px;
        cursor: pointer;
      }
      #Nav:hover {
        background-color: rgba(38, 40, 60, 0.29);
        border: solid 1px rgba(111, 118, 156, 0.15)
        opacity: 0.6;
        transition: 0.3s;
      }
      #NavContainer {
        border-bottom: solid 1px rgba(38, 40, 60, 0.29);

      }
      @media (min-width: 1024px){
        #NavContainer {
        }
      }
      `}</style>
      <div
        style={{
          "border-color": "rgba(7, 25, 61, 0.2)",
          "background-color": "rgba(1, 1, 4, 0.4)",
        }}
        class="min-h-screen h-full lg:border-l-4 text-white"
        id="features"
      >
        <div id="NavContainer" class="flex justify-between px-10 p-5">
          <div
            onClick={() => setShow("Features")}
            class={clsx(
              show() === "Features" && "font-bold text-blue-400 opacity-90",
            )}
            id="Nav"
          >
            Features
          </div>
          <div
            onClick={() => setShow("Future")}
            class={clsx(show() === "Future" && "font-bold")}
            id="Nav"
          >
            Future
          </div>
        </div>
        <div
          class="flex flex-col px-16 pt-20 gap-6"
          style={{ "padding-bottom": "300px" }}
        >
          <Switch>
            <Match when={show() === "Pricing"}>
              <div></div>
            </Match>
            <Match when={show() === "Features"}>
              <div>
                <h1 id="Animation" class="text-3xl font-bold text-sky-300 mb-3">
                  AI
                </h1>
                <div>Can do great things with AI.</div>
              </div>
            </Match>
            <Match when={show() === "Future"}>
              <div>
                <h1 id="Animation" class="text-3xl font-bold text-sky-300 mb-3">
                  Even more awesome feature
                </h1>
                <div>More AI. Faster.</div>
              </div>
            </Match>
          </Switch>
        </div>
      </div>
    </>
  )
}
