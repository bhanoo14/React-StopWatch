import React, { useState, useRef } from 'react';

export default function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);
  const timerRef = useRef(null);

  const formatTime = (time) => {
    const getMilliseconds = `0${time % 1000}`.slice(-3);
    const getSeconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const getMinutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    const getHours = `0${Math.floor(time / 3600000)}`.slice(-2);
    return `${getHours}:${getMinutes}:${getSeconds}:${getMilliseconds}`;
  };

  const startTimer = () => {
    if (!running) {
      setRunning(true);
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
    }
  };

  const stopTimer = () => {
    if (running) {
      setRunning(false);
      clearInterval(timerRef.current);
    }
  };

  const resetTimer = () => {
    setRunning(false);
    clearInterval(timerRef.current);
    setTime(0);
  };

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-900'>
      <h1 className='text-6xl font-mono text-white mb-8'>{formatTime(time)}</h1>
      <div className='flex space-x-4'>
        <button 
          onClick={startTimer} 
          className='bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600'>
          Start
        </button>
        <button 
          onClick={stopTimer} 
          className='bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600'>
          Stop
        </button>
        <button 
          onClick={resetTimer} 
          className='bg-yellow-500 text-white px-6 py-2 rounded hover:bg-yellow-600'>
          Reset
        </button>
      </div>
    </div>
  );
}
