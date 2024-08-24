import React, { useRef, useState } from 'react'

function StopWatch1() {
    const [isRunning, setIsRunning] = useState(false)
    const [time, setTime] = useState(0);
    const timerRef = useRef(null)

    function startTimer(){
        if(!isRunning){
            setIsRunning(true)
            timerRef.current = setInterval(()=>{
                setTime((prevTime)=> prevTime + 10)
            },10)
        }
    }

    function stopTimer(){
        if(isRunning){
            setIsRunning(false)
            clearInterval(timerRef.current)
        }
    }

    function resetTimer(){
        setIsRunning(false)
        setTime(0)
        clearInterval(timerRef.current)        
    }

  return (
    <div>
        <h1>`${minutes}:${second}:${milisecond}`</h1>
        <button onClick={startTimer} >Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
    </div>
  )
}

export default StopWatch1