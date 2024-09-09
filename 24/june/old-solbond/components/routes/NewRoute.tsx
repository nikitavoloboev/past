"use client"

import { proxy } from "valtio"
import { useProxy } from "valtio/utils"
import { useEditor, EditorContent, Editor } from "@tiptap/react"
import StarterKit from "@tiptap/starter-kit"
import Placeholder from "@tiptap/extension-placeholder"
import { useState } from "react"

export const NewRouteState = proxy({
	productImage: null as File | null,
	productName: "",
	productDescription: "",
	productUrl: "",
	productSolbondUrl: "",
	productCustomDomain: "",
})
interface Props {}
export default function NewRoute(props: Props) {
	const local = useProxy(NewRouteState)
	const [fileInfo, setFileInfo] = useState<{
		name: string
		size: string
	} | null>(null)

	Placeholder.configure({
		considerAnyAsEmpty: true,
		placeholder: "Description",
	})
	const editor = useEditor({
		extensions: [StarterKit, Placeholder],
		content: "",
		onUpdate({ editor }) {
			local.productDescription = editor.getText()
		},
		editorProps: {
			attributes: {
				class:
					"prose prose-sm sm:prose bg-neutral-800 px-4 p-2 focus:border-fuchsia-400 transition-all border border-white/10 rounded-lg lg:prose-lg xl:prose-2xl mx-auto focus:outline-none min-h-[200px]",
			},
		},
	})
	return (
		<>
			<div className="py-[80px] px-2 flex-center flex-col gap-[50px] text-white w-screen">
				<div className=" px-[100px] p-[24px] text-[36px] font-bold text-white/40 border-b border-slate-400/10 w-full">
					New Product
				</div>
				<div className="w-[50%] flex flex-col gap-[40px]">
					<div className="flex flex-col gap-1">
						<div className="text-white/30 font-light">Name</div>
						<input
							placeholder=""
							type="text"
							className="bg-neutral-800 focus:border-fuchsia-400 transition-all ring-transparent border-white/10 rounded-lg px-4 p-2 w-full"
							onChange={(e) => {
								local.productName = e.target.value
							}}
						/>
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-white/30 font-light">Description</div>
						<EditorContent editor={editor} />
					</div>
					{/* <div className="flex flex-col gap-1">
						<div className="text-white/30 font-light">URL</div>
						<input
							placeholder=""
							type="text"
							className="bg-neutral-400/10 border-white/10 rounded-lg px-4 p-2 w-full"
						/>
					</div> */}
					<div>
						<input
							type="file"
							id="upload-photo"
							onChange={(event) => {
								const file = event.target.files[0]
								if (file) {
									setFileInfo({
										name: file.name,
										size: (file.size / 1024).toFixed(2),
									})
								}
							}}
							className="hidden"
						/>
						<label
							htmlFor="upload-photo"
							className="cursor-pointer inline-block border border-fuchsia-400 text-fuchsia-400 hover:bg-fuchsia-400/90 hover:text-white transition-all py-2 px-4 rounded"
						>
							Choose file
						</label>
						{fileInfo && (
							<div className="mt-4 p-4 border border-slate-400/40 text-white/60 rounded">
								<p className="text-sm font-medium">
									File Name: {fileInfo.name}
								</p>
								<p className="text-sm font-medium">
									File Size: {fileInfo.size} KB
								</p>
							</div>
						)}
					</div>
					<div className="flex flex-col gap-1">
						<div className="text-white/30 font-light">
							solbond.co/{local.productSolbondUrl}
						</div>
						<input
							type="text"
							placeholder=""
							className="bg-neutral-800 focus:border-fuchsia-400 transition-all border-white/10 rounded-lg px-4 p-2 w-full"
							onChange={(e) => {
								local.productSolbondUrl = e.target.value
							}}
						/>
					</div>
					<div className="border-b border-slate-400/10 text-[28px] px-4 p-2 text-white/40">
						Cover Image
					</div>
					<div className="w-[400px] min-h-[200px] max-h-[460px] border overflow-hidden border-neutral-800 rounded-lg flex-center">
						{!local.productImage && (
							<div>
								<input
									type="file"
									accept="image/*"
									className="hidden"
									id="image-upload"
									onChange={async (e: React.ChangeEvent<HTMLInputElement>) => {
										if (e.target.files && e.target.files[0]) {
											try {
												const uploadedFile = e.target.files[0]
												local.productImage = uploadedFile
											} catch (err) {
												console.log(err)
											}
										}
									}}
								/>
								<label
									htmlFor="image-upload"
									className="cursor-pointer border-white/50 border px-4 p-2 rounded-lg text-white/50 hover:border-white hover:text-white transition-all"
								>
									Upload Image
								</label>
							</div>
						)}
						{local.productImage && (
							<div className="mt-4">
								<img
									src={URL.createObjectURL(local.productImage)}
									alt="Selected"
									className="h-full w-full border-2 border-gray-300"
								/>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	)
}
