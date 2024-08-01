import { observer, useObservable } from "@legendapp/state/react"
import { TonConnectButton } from "@tonconnect/ui-react"
import { Link } from "react-router-dom"
import Slider from "react-slick"
import "slick-carousel/slick/slick-theme.css"
import "slick-carousel/slick/slick.css"
import "./IndexPage.css"

// TODO: showing white screen for some reason
export default observer(function Home() {
  const local$ = useObservable({
    selectedTab: "Apps",
  })

  return (
    <div className="px-4 bg-gray-900 bg-opacity-40">
      <div className="flex flex-row justify-between pt-3">
        <div className="flex flex-row gap-2">
          <button
            className={`text-white mr-2 ${
              local$.selectedTab.get() === "Apps"
                ? "bg-slate-800 px-3 py-1 rounded-full"
                : ""
            }`}
            onClick={() => {
              local$.selectedTab.set("Apps")
            }}
          >
            Airdrops
          </button>
        </div>
        <div className="ton-connect-page__button-container">
          <TonConnectButton />
        </div>
      </div>
      <div className="py-4">
        <Slider
          autoplay={true}
          autoplaySpeed={3000}
          infinite={true}
          speed={400}
          slidesToShow={1}
          slidesToScroll={1}
          swipeToSlide={true}
          touchMove={true}
          arrows={false}
        >
          <div>
            <img
              src="https://images.nikiv.dev/temp-pepe-todo-list.jpg"
              className="rounded-xl"
              style={{ width: "100%", height: 190 }}
            />
          </div>
          <div>
            <img
              src="https://images.nikiv.dev/temp-pepe-durov.png"
              className="rounded-xl"
              style={{ width: "100%", height: 190 }}
            />
          </div>
          <div>
            <img
              src="https://images.nikiv.dev/temp-pepe-scroll-3.png"
              className="rounded-xl"
              style={{ width: "100%", height: 190 }}
            />
          </div>
        </Slider>
      </div>
      <div className="flex flex-row items-center justify-between py-2">
        <h1 className="font-bold text-left text-xl">Airdrops</h1>
        <button className="text-sky-700">show more</button>
      </div>
      <div
        className="grid grid-rows-3"
        style={{ borderRadius: "0.75rem", overflow: "hidden" }}
      >
        <div className="bg-slate-700 bg-opacity-30 shadow-lg py-3 border-t-white">
          <Link to="/app/1">
            <div className="flex flex-row items-center">
              <img
                className="rounded-lg w-10 h-10 mx-2"
                src="https://images.nikiv.dev/temp-pepe-good.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-white text-lg"> Pepe Coin Airdrop</h2>
                <p className="text-white text-sm">Top airdrop</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-slate-700 bg-opacity-30 shadow-lg py-3 border-t-white">
          <Link to="/app/2">
            <div className="flex flex-row items-center">
              <img
                className="rounded-lg w-10 h-10 mx-2"
                src="https://images.nikiv.dev/temp-pepe-maybe.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-white text-lg">Not Pepe Coin Airdrop</h2>
                <p className="text-white text-sm">Might win</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-slate-700 bg-opacity-30 shadow-lg py-3 border-t-white">
          <Link to="/app/3">
            <div className="flex flex-row items-center">
              <img
                className="rounded-lg w-10 h-10 mx-2"
                src="https://images.nikiv.dev/temp-pepe-scam.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-white text-lg">Not Scam Airdrop</h2>
                <p className="text-white text-sm">Might lose</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-slate-700 bg-opacity-30 shadow-lg py-3 border-t-white">
          <Link to="/app/2">
            <div className="flex flex-row items-center">
              <img
                className="rounded-lg w-10 h-10 mx-2"
                src="https://images.nikiv.dev/temp-pepe-maybe.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-white text-lg">Not Pepe Coin Airdrop</h2>
                <p className="text-white text-sm">Might win</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="bg-slate-700 bg-opacity-30 shadow-lg py-3 border-t-white">
          <Link to="/app/2">
            <div className="flex flex-row items-center">
              <img
                className="rounded-lg w-10 h-10 mx-2"
                src="https://images.nikiv.dev/temp-pepe-maybe.png"
              ></img>
              <div className="flex flex-col">
                <h2 className="text-white text-lg">Not Pepe Coin Airdrop</h2>
                <p className="text-white text-sm">Might win</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
})
