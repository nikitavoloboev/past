import { createFileRoute, Outlet, redirect } from "@tanstack/react-router"
import { TonConnectButton } from "@tonconnect/ui-react"
import { proxy } from "valtio"
import { Airdrop } from "@ronin/drophunt"
import Nav from "~/components/Nav"

function LayoutComponent() {
  return (
    <>
      <div className="flex items-center fixed justify-between max-w-screen overflow-hidden min-h-screen h-full flex-col">
        <div className="overflow-y-auto overflow-x-hidden w-full flex justify-center">
          <div className="max-w-[430px] w-full">
            <Nav />
            <div className="absolute top-4 right-4 z-[100]">
              <TonConnectButton />
            </div>
            <div className="w-[93%] m-[auto] rounded-[20px] flex items-center justify-center bg-[#2e2e2e]">
              {/* {data.ads.length > 0 && local.activePage !== "Earn" && (
								<AdsSlider
									ads={data.ads
										.sort((a, b) => a.orderNumber - b.orderNumber)
										.map((ad) => ({
											imageSrc: ad.image.src,
										}))}
								/>
							)} */}
            </div>
            <div className="w-[93%] m-[auto] rounded-[20px] flex items-center justify-center bg-[#2e2e2e]"></div>
            <div className="w-screen">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export const Route = createFileRoute("/app")({
  component: LayoutComponent,
})

interface PendingTransaction {
  airdropId: string
  amountSent: string
}

// TODO: find better way to have this ephemeral global state
// TODO: should most likely not exist or just be stored in jazz / server (ronin)..
export const globalState = proxy({
  activePage: "Airdrops" as "Airdrops" | "Claim" | "Earn" | "OpenedAirdrop",
  activeFilters: [] as string[],
  openedAirdrop: null as Airdrop | null,
  walletConnected: false,
  openFilterMenu: false,
  savedAddressInDb: false,
  userPoints: undefined as undefined | number,
  userFrogPointsFromServer: undefined as undefined | number,
  userRank: undefined as undefined | number,
  availableFilterOptions: ["The Open Network", "Solana", "Polygon", "Ethereum"],
  pepeTokens: undefined as undefined | number,
  pepeTokensFetched: false,
  blockchainLogos: {
    Solana:
      "https://storage.ronin.co/spa_ytxzy7a722jx52um/7cc8408f-0eb4-4d78-9747-ffc2408a0230",
    "The Open Network":
      "https://storage.ronin.co/spa_ytxzy7a722jx52um/2afb1096-84f9-4e69-8376-d70f21dc5870",
    Polygon:
      "https://storage.ronin.co/spa_ytxzy7a722jx52um/e640d8e8-52ab-4a74-8f59-387e5c00724c",
    Ethereum:
      "https://storage.ronin.co/spa_ytxzy7a722jx52um/05911aa3-9777-49a2-8c76-0189d8ef91fc",
  },
  walletConnectedMutationRan: false,
  triggerGetAdminInfo: true,
  referralActivatedMutationRan: false,
  featureFlags: {
    burningToken: true,
    testingTransactions: false,
    testingTransactionsRaw: false,
    claimingAirdrops: false,
  },
  tgDevs: ["nikivi", "imartemy"],
  tgAdminUsernames: [
    "nikivi",
    "imartemy",
    "mgolburaev",
    "pepe_jedi",
    "KisuyoTT",
    "olyamrshn",
  ],
  tgTestGroup: ["nikivi", "imartemy"],
  tgUsername: undefined as undefined | string,
  isAdmin: false,
  leaders: [
    {
      address: "UQDhX4zm4GUM3SVg6OSwSfPrvH3ogUoRSQJkyglBKrv1aeJn",
      points: 800,
    },
    {
      address: "UQDhX4zm4GUM3SVg6OSwSfPrvH3ogUoRSQJkyglBKrv1a",
      points: 1000,
    },
    {
      address: "UQDhX4zm4GUM3SVg6OSwSfPrvH3ogUoRSQJkyglBKrv1aeJ",
      points: 20,
    },
    {
      address: "UQDhX4zm4GUM3SVg6OSwSfPrvH3ogUoRSQJkyglBKrv1ae",
      points: 0,
    },
  ] as { address: string; points: number }[],
  userTelegramShareLink: "",
  waitingForBurningTxConfirm: false,
  burningTxWasSuccess: false,
  burnedTokensHaveBeenApplied: false,
  pendingTransaction: null as PendingTransaction | null,
  pendingTransactionStarted: false,
})
