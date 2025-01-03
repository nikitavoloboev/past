import { PanInfo, motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"
import { AdItem } from "./AdItem"

const DRAG_BUFFER = 50
const VELOCITY_THRESHOLD = 500
const GAP = 16

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
}

export default function AdsSlider(props: {
  ads: {
    imageSrc: string
    url?: string
  }[]
}) {
  const x = useMotionValue(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [containerWidthWithGap, setContainerWidthWithGap] = useState(0)
  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth)
      setContainerWidthWithGap(containerRef.current.offsetWidth + GAP)
    }
  }, [])
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex === 0) {
        setCurrentIndex(props.ads.length - 1)
      } else {
        setCurrentIndex(currentIndex - 1)
      }
    }, 5000)
    return () => clearInterval(intervalId)
  }, [currentIndex, props.ads.length])
  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    if (offset < -DRAG_BUFFER || velocity < -VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.min(prev + 1, props.ads.length - 1))
    } else if (offset > DRAG_BUFFER || velocity > VELOCITY_THRESHOLD) {
      setCurrentIndex((prev) => Math.max(prev - 1, 0))
    }
  }
  const leftConstraint = -((containerWidth + GAP) * (props.ads.length - 1))
  const handleTouchStart = (e: React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }
  const handleTouchMove = (e: React.TouchEvent) => {
    e.stopPropagation()
    e.preventDefault()
  }
  return (
    <>
      <div
        className="relative overflow-hidden w-full rounded-lg"
        ref={containerRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
      >
        <div className="absolute top-0 left-0 w-full h-full flex z-[100]">
          <div
            className="w-[50%] h-full"
            onClick={() => {
              if (currentIndex === 0) {
                setCurrentIndex(props.ads.length - 1)
                return
              }
              setCurrentIndex(currentIndex - 1)
            }}
          ></div>
          <div
            className="w-[50%] h-full"
            onClick={() => {
              if (props.ads.length === currentIndex + 1) {
                setCurrentIndex(0)
                return
              }
              setCurrentIndex(currentIndex + 1)
            }}
          ></div>
        </div>
        <motion.div
          className="flex rounded-lg"
          drag="x"
          dragConstraints={{
            left: leftConstraint,
            right: 0,
          }}
          style={{
            width: containerWidth,
            gap: `${GAP}px`,
            perspective: 1000,
            perspectiveOrigin:
              currentIndex * containerWidth + containerWidth / 2,
            x,
          }}
          onDragEnd={handleDragEnd}
          animate={{ x: -(currentIndex * (containerWidth + GAP)) }}
          transition={SPRING_OPTIONS}
        >
          {props.ads.map((ad, index) => (
            <AdItem
              key={index}
              ad={ad}
              index={index}
              x={x}
              containerWidth={containerWidth}
              containerWidthWithGap={containerWidth + GAP}
              adsLength={props.ads.length}
            />
          ))}
        </motion.div>
      </div>
    </>
  )
}
