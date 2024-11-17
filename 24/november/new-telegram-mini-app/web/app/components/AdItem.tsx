import { motion, MotionValue, useTransform } from "framer-motion"

const SPRING_OPTIONS = {
  type: "spring",
  stiffness: 300,
  damping: 30,
}

interface AdItemProps {
  ad: { imageSrc: string }
  index: number
  x: MotionValue<number>
  containerWidth: number
  containerWidthWithGap: number
  adsLength: number
}

export function AdItem({
  ad,
  index,
  x,
  containerWidth,
  containerWidthWithGap,
  adsLength,
}: AdItemProps) {
  const range = [
    (-100 * (index + 1) * containerWidthWithGap) / 100,
    (-100 * index * containerWidthWithGap) / 100,
    (-100 * (index - 1) * containerWidthWithGap) / 100,
  ]
  const nextIndex = Math.min(index + 1, adsLength - 1)
  const prevIndex = Math.max(index - 1, 0)
  const outputRange = [nextIndex ? 90 : 90, 0, prevIndex ? -90 : -90]
  const rotateY = useTransform(x, range, outputRange, {
    clamp: false,
  })

  return (
    <motion.div
      className="relative flex shrink-0 flex-col items-start justify-between rounded-lg"
      style={{
        width: containerWidth,
        height: `${containerWidth * 0.45}px`,
        rotateY,
      }}
      transition={SPRING_OPTIONS}
    >
      <img
        draggable="false"
        className="w-fit h-full bg-cover bg-center"
        src={ad.imageSrc}
      />
    </motion.div>
  )
}
