import { useEffect, useState } from "react"

export default function AirdropCounter(props: {
  activeUntil: Date
  renderExpired?: () => React.ReactNode
  renderActive?: () => React.ReactNode
}) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const activeUntilDate = new Date(props.activeUntil)
    const now = new Date().getTime()
    return activeUntilDate.getTime() - now
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTimeLeft) => {
        const newTimeLeft = prevTimeLeft - 1000
        if (newTimeLeft <= 0) {
          clearInterval(timer)
          return 0
        }
        return newTimeLeft
      })
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const formatTime = () => {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    const hours = Math.floor(
      (timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    )
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000)

    const formatWithLeadingZero = (number: number) =>
      number.toString().padStart(2, "0")

    const formattedDays = days > 0 ? `${days}d ` : ""
    const formattedTime = `${formatWithLeadingZero(
      hours,
    )}:${formatWithLeadingZero(minutes)}:${formatWithLeadingZero(seconds)}`

    return `${formattedDays}${formattedTime}`
  }

  return (
    <>
      {timeLeft <= 0 ? (
        props.renderExpired ? (
          props.renderExpired()
        ) : (
          <span
            className="text-red-500 tracking-wider"
            style={{
              fontFamily: "Dela Gothic One",
            }}
          >
            Expired
          </span>
        )
      ) : props.renderActive ? (
        props.renderActive()
      ) : (
        <div className="flex flex-col tracking-tight font-semibold text-center">
          <span
            style={{
              fontFamily: "Dela Gothic One",
            }}
          >
            Remaining time
          </span>
          <span>{formatTime()}</span>
        </div>
      )}
    </>
  )
}
