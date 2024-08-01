"use client"

import { useObservable } from "@legendapp/state/react"
import { motion } from "framer-motion"
import { useEditor, EditorContent } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import { Placeholder } from "@tiptap/extension-placeholder"
import { useEffect } from "react"

interface Props {
  selectedAirdrop: {
    id: number
    title: string
    imageUrl?: string
    description?: string
    instructions?: string
  }
  exitEditAirDropEdit: () => void
  updateAirdrop: (airdrop: {
    id: number
    title: string
    imageUrl?: string
    description?: string
    instructions?: string
  }) => void
  addAirdrop: (airdrop: {
    id: number
    title: string
    imageUrl?: string
    description?: string
    instructions?: string
  }) => void
}

export default function EditAirdrop(props: Props) {
  const local$ = useObservable(props.selectedAirdrop)

  const DescriptionEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Description...",
      }),
    ],

    editorProps: {
      attributes: {
        class:
          "focus:outline-none bg-neutral-800 rounded-md text-[14px] px-3 p-2 max-h-[240px] overflow-hidden",
      },
    },
  })
  const InstructionsEditor = useEditor({
    extensions: [
      StarterKit,
      Placeholder.configure({
        emptyEditorClass: "is-editor-empty",
        placeholder: "Instructions...",
      }),
    ],

    editorProps: {
      attributes: {
        class:
          "focus:outline-none bg-neutral-800 rounded-md text-[14px] px-3 p-2 max-h-[240px] overflow-hidden",
      },
    },
  })

  return (
    <motion.div
      layoutId={`airdrop-${local$.id.get()}`}
      className="absolute inset-0 p-[50px] pb-[20px]  w-full bg-neutral-900 rounded-md h-full flex flex-col justify-between"
    >
      <div className="flex flex-col gap-[20px]">
        <div className="flex gap-[14px]">
          <div className="w-[60px] h-full bg-white rounded-md"></div>
          <div className="flex flex-col gap-[10px]">
            <input
              type="text"
              className="bg-transparent outline-none placeholder-white/50 font-light"
              onChange={(e) => {
                local$.title.set(e.target.value)
              }}
              //@ts-ignore
              placeholder="Airdrop Title..."
              defaultValue={
                props.selectedAirdrop ? props.selectedAirdrop.title : ""
              }
            />
            <div className="bg-green-500 w-[100px] rounded-full flex items-center justify-center text-white text-[14px] h-[26px]">
              Active
            </div>
          </div>
        </div>
        <EditorContent editor={DescriptionEditor} />
        <EditorContent editor={InstructionsEditor} />
      </div>
      <div
        onClick={() => {
          props.exitEditAirDropEdit()
        }}
        className="border-white/40 border absolute hover:scale-[0.98] bottom-5 left-5 w-[140px] rounded-md h-[40px] text-[14px] text-white hover:bg-white/60 hover:text-black transition-all font-bold flex items-center justify-center"
      >
        Back
      </div>
      <div
        onClick={() => {
          if (!props.selectedAirdrop) {
            props.addAirdrop({
              id: local$.id.get(),
              title: local$.title.get(),
              description: local$.description.get(),
              instructions: local$.instructions.get(),
            })
            props.exitEditAirDropEdit()
            return
          }
          props.updateAirdrop({
            id: local$.id.get(),
            title: local$.title.get(),
            description: local$.description.get(),
            instructions: local$.instructions.get(),
          })

          props.exitEditAirDropEdit()
        }}
        className="bg-white absolute hover:scale-[0.98] hover:bg-opacity-90 transition-all bottom-5 right-5 w-[140px] rounded-md h-[40px] text-[14px] text-black font-bold flex items-center justify-center"
      >
        Update
      </div>
    </motion.div>
  )
}
