"use client"
import EditAirdrop from "@/components/EditAirdrop"
import { observer, useObservable } from "@legendapp/state/react"
import { motion } from "framer-motion"
import { useEffect } from "react"

interface Props {
  data: {
    airdrops: {
      id: number
      title: string // unique
      imageUrl?: string
      description?: string
      instructions?: string
    }[]
  }
}

export default observer(function HomePublic(props: Props) {
  const server$ = useObservable(props.data)
  const local$ = useObservable({
    selectedAirdropByIndex: null as number | null,
  })
  const handleDragStart = (e: React.DragEvent, index: number) => {
    e.dataTransfer.setData("index", index.toString())
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent, newIndex: number) => {
    const oldIndex = parseInt(e.dataTransfer.getData("index"))
    const draggedAirdrop = server$.airdrops.get()[oldIndex]
    const updatedAirdrops = [...server$.airdrops.get()]
    updatedAirdrops.splice(oldIndex, 1)
    updatedAirdrops.splice(newIndex, 0, draggedAirdrop)
    server$.airdrops.set(updatedAirdrops)
  }
  useEffect(() => {
    console.log(server$.airdrops[local$.selectedAirdropByIndex.get()].get())
  })
  return (
    <main
      className={
        local$.selectedAirdropByIndex.get()
          ? " sm:p-[100px] sm:pb-[56px] py-[30px] flex  text-white/70 h-screen "
          : " sm:p-[100px] sm:pb-[56px] py-[30px] flex  text-white/70 max-h-screen "
      }
      style={{
        paddingRight: "clamp(50px, 14vw, 200px)",
        paddingLeft: "clamp(50px, 14vw, 200px)",
      }}
    >
      <div className="relative w-full h-full">
        {local$.selectedAirdropByIndex.get() ? (
          <EditAirdrop
            // @ts-ignore
            selectedAirdrop={server$.airdrops
              .get()
              .find(
                (airdrop) => airdrop.id === local$.selectedAirdropByIndex.get()
              )}
            exitEditAirDropEdit={() => {
              local$.selectedAirdropByIndex.set(null)
            }}
            addAirdrop={(addedAirdrop) => {
              const airdrops = server$.airdrops.get()
              airdrops.push({
                id: airdrops.length + 1,
                title: addedAirdrop.title,
                description: addedAirdrop.description,
                instructions: addedAirdrop.instructions,
              })
              server$.airdrops.set(airdrops)
            }}
            updateAirdrop={(updatedAirdrop) => {
              const airdrops = server$.airdrops.get()
              const airdropIndex = airdrops.findIndex(
                (airdrop) => airdrop.id === updatedAirdrop.id
              )
              airdrops[airdropIndex] = updatedAirdrop
              server$.airdrops.set(airdrops)
            }}
          />
        ) : (
          <div className="w-full flex items-end flex-col">
            <div
              onClick={() => {
                local$.selectedAirdropByIndex.set(
                  server$.airdrops.get().length + 1
                )
              }}
              className="bg-blue-500 mb-[10px] h-[34px] rounded-md w-fit flex justify-center items-center  px-5 "
            >
              Create
            </div>
            <div className="flex flex-col gap-[4px] w-full overflow-auto [&::webkit-scrollbar]:hidden">
              {server$.airdrops.map((airdrop, index) => {
                return (
                  <motion.div
                    layoutId={`wrapper-${airdrop.get().id}`}
                    draggable="true"
                    onDragStart={(e) => handleDragStart(e, index)}
                    onDragOver={handleDragOver}
                    onDrop={(e) => handleDrop(e, index)}
                    key={index}
                    onClick={() => {
                      local$.selectedAirdropByIndex.set(airdrop.get().id)
                    }}
                    className="bg-neutral-900 flex gap-[10px] hover:bg-opacity-70 w-full p-3 rounded-md"
                  >
                    <div className="h-full w-[47px] rounded-md bg-white/20"></div>
                    <div className="flex flex-col gap-[2px]">
                      <motion.div layoutId={`airdrop-${airdrop.get().title}`}>
                        {airdrop.get().title}
                      </motion.div>
                      <motion.div
                        // layoutId={`airdrop-${airdrop.get().description}`}
                        className="text-[14px] font-light"
                      >
                        {airdrop.get()?.description}
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </main>
  )
})
