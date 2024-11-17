import { useRef, useEffect } from "react"
import { useSpring, animated } from "react-spring"
import { useDrag } from "react-use-gesture"
import { X } from "lucide-react"

interface BottomSheetProps {
  children: React.ReactNode
  isOpen: boolean
  onClose: () => void
}

const Sheet: React.FC<BottomSheetProps> = ({ children, isOpen, onClose }) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const outsideClick = (event: MouseEvent) => {
      if (
        isOpen &&
        overlayRef.current &&
        !contentRef.current?.contains(event.target as Node)
      ) {
        onClose()
      }
    }
    document.addEventListener("mousedown", outsideClick)
    return () => {
      document.removeEventListener("mousedown", outsideClick)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      ref={overlayRef}
      className="fixed w-screen flex-col  backdrop-blur-lg bg-black/60 inset-0 z-[100] flex items-center justify-end"
    >
      <div className="flex justify-center my-2" onClick={onClose}>
        <button className="bg-neutral-600/50 flex flex-row items-center gap-1 rounded-lg p-1 px-2">
          <X className="size-3" />
          Close
        </button>
      </div>
      <div className="overflow-y-auto scrollbar-hide h-full max-h-[85vh] bg-neutral-900 rounded-t-3xl">
        {children}
      </div>
    </div>
  )
}

export default Sheet
