import React, { useEffect, useState, useRef } from "react"
import CustomInput from "./CustomInput"
import CustomBtn from "./CustomBtn"

const Timer = () => {
  const [hours, setHours] = useState(0)
  const [mins, setMins] = useState(0)
  const [timeInMin, setTimeInMin] = useState(0)
  let [resumeTime, setResumeTime] = useState(0)
  const [isPause, setIsPause] = useState(false)
  const [isNewTime, setIsNewTime] = useState(false)

  const timerCount = useRef()

  let totalTime = Number(hours) * 60 + Number(mins)

  const handleHour = (e) => {
    setHours(e.target.value)
  }

  const handleMin = (e) => {
    setMins(e.target.value)
  }

  const handleReset = () => {
    clearInterval(timerCount.current)
    setIsNewTime(false)
    setTimeInMin(totalTime)
  }

  const handlePause = () => {
    setIsPause(!isPause)
    if (isPause) {
      setResumeTime(timerCount.current)
      clearInterval(timerCount.current)
      setTimeInMin(resumeTime)
    } else {
    }
  }

  const formattedTime = (timeInMin) => {
    let min = parseInt(timeInMin / 60)
    let sec = parseInt(timeInMin % 60)
    let newMin = `${min}`
    let newSec = `${sec}`
    return `${newMin.length === 1 ? "0" + min : min}: ${
      newSec.length === 1 ? "0" + sec : sec
    }`
  }

  useEffect(() => {
    if (timeInMin <= 0) {
      formattedTime()
      clearInterval(timerCount.current)
    }
  }, [timeInMin])

  const handleStart = () => {
    if (isNewTime) {
      totalTime = Number(hours) + Number(mins) + totalTime
    }
    setIsNewTime(true)
    clearInterval(timerCount.current)
    timerCount.current = setInterval(() => {
      totalTime = totalTime - 1
      setTimeInMin(totalTime)
    }, 1000)
  }

  return (
    <div>
      <CustomInput type={"number"} onChange={handleHour} placeholder={"mins"} />
      <CustomInput
        type={"number"}
        onChange={handleMin}
        placeholder={"seconds"}
      />
      <CustomBtn
        extraStyles={{ color: "white" }}
        type={"secondary"}
        text={"start"}
        action={handleStart}
      />
      <CustomBtn
        extraStyles={{ color: "white" }}
        type={"secondary"}
        text={"pause/resume"}
        action={handlePause}
      />
      <CustomBtn
        extraStyles={{ color: "white" }}
        type={"secondary"}
        text={"reset"}
        action={handleReset}
      />
      <h1>{formattedTime(timeInMin)}</h1>
    </div>
  )
}

export default Timer
