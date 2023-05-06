import React from 'react'
import Timer from './Timer';
import { useState } from 'react';

const CountDown = () => {
    const [currentTime, setCurrentTime] = useState(0);
    const [intervalId,setIntervalId] = useState(null);

    const startNewTimer = ()=>{
        setIntervalId(setInterval(()=>{
            
                setCurrentTime(currentTime=>{
                    if(currentTime>0){
                     return currentTime-1
                    }
                    
                    destroyExistingTimer()
                    return currentTime
                })
            
            
        },1000))
    }

    const destroyExistingTimer = ()=>{
        if(intervalId){
        clearInterval(intervalId)
        setIntervalId(null)
        }
    }

    const startTimer = (timeInSec)=>{
        //setIntterval
        console.log(`start timer with ${timeInSec} seconds`)
        destroyExistingTimer()
        setCurrentTime(timeInSec)
        startNewTimer()
        
        // resetTimer(timeInSec);
    }
  return (
    <div id='count-down-app'>
        <h1>Count-Down-Timer-App</h1>
        <Timer onReqTimerStart={startTimer}/>
        <div id='current-time'>
           Countdown : {currentTime}
        </div>
    </div>
  )
}

export default CountDown