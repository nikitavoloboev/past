import { motion } from "framer-motion"

export default function SpinningCubeLoader() {
  const cubeVariants = {
    spin: {
      rotateX: 360,
      rotateY: 360,
      transition: {
        duration: 2,
        ease: "easeInOut",
        repeat: Infinity,
      },
    },
  }

  return (
    <div className="flex justify-center items-center">
      <motion.div
        className="h-16 w-16 rounded-2xl bg-inherit items-center"
        variants={cubeVariants}
        animate="spin"
        style={{ perspective: 200 }}
      >
        <div className="text-center w-full h-full text-2xl font-bold justify-center">
          <svg width="100%" height="100%" viewBox="0 0 265 265" fill="none">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M256.397 86.2083C260.643 57.2469 240.608 30.3267 211.646 26.0803L86.2083 7.68865C57.2469 3.44233 30.3267 23.4779 26.0803 52.4394L7.68865 177.877C3.44232 206.839 23.4779 233.759 52.4394 238.005L177.877 256.397C206.839 260.643 233.759 240.608 238.005 211.646L256.397 86.2083ZM208.543 101.543C208.543 72.2716 184.814 48.5427 155.543 48.5427L108.543 48.5427C79.2716 48.5427 55.5427 72.2716 55.5427 101.543L55.5427 158.543C55.5427 187.814 79.2716 211.543 108.543 211.543L155.543 211.543C184.814 211.543 208.543 187.814 208.543 158.543L208.543 101.543Z"
              fill="#0098EA"
              fillOpacity="0.4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M76.5427 23.5427C47.2716 23.5427 23.5427 47.2716 23.5427 76.5427V187.543C23.5427 216.814 47.2716 240.543 76.5427 240.543H187.543C216.814 240.543 240.543 216.814 240.543 187.543V76.5427C240.543 47.2716 216.814 23.5427 187.543 23.5427H76.5427ZM195.109 69.9827C194.154 69.0227 193.019 68.5427 191.705 68.5427H154.797C153.483 68.5427 152.348 69.0227 151.393 69.9827C150.437 70.9427 149.959 72.0827 149.959 73.4027V110.303H114.126V73.4027C114.126 72.0827 113.648 70.9427 112.693 69.9827C111.737 69.0227 110.602 68.5427 109.289 68.5427H72.3802C71.0663 68.5427 69.9316 69.0227 68.9761 69.9827C68.0205 70.9427 67.5427 72.0827 67.5427 73.4027V189.683C67.5427 191.123 68.0205 192.323 68.9761 193.283C69.9316 194.123 71.0663 194.543 72.3802 194.543H109.289C110.602 194.543 111.737 194.063 112.693 193.103C113.648 192.143 114.126 191.003 114.126 189.683V151.343H149.959V189.683C149.959 191.003 150.437 192.143 151.393 193.103C152.348 194.063 153.483 194.543 154.797 194.543H191.705C193.019 194.543 194.154 194.063 195.109 193.103C196.065 192.143 196.543 191.003 196.543 189.683V73.4027C196.543 72.0827 196.065 70.9427 195.109 69.9827Z"
              fill="#0098EA"
            />
          </svg>
        </div>
      </motion.div>
    </div>
  )
}
