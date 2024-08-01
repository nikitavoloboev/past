import HomePublic from "@/components/routes/HomePublic"

export default async function Home() {
  const airdrops = [
    { id: 1, title: "Pepe Coin", description: "Great coin" },
    { id: 2, title: "DOGE" },
  ]

  return <HomePublic data={{ airdrops }} />
}
