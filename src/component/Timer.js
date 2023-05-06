import React, { useState } from 'react';
const Timer = ({onReqTimerStart}) => {
   const [timeInSec, setTimeInSec] = useState('');
  return (
    <div>
        <label htmlFor='time-count'>Enter Time in seconds</label>
        <input type='number' id='time-count' placeholder='Enter Time in secs'
        value={timeInSec}
        onChange={(e) => setTimeInSec(e.target.value)}
        onKeyDown={(e)=>{
            // console.log(e)
            if (e.keyCode === 13 || e.which === 13) {
              onReqTimerStart && onReqTimerStart(Math.floor(timeInSec));
              setTimeInSec('');
            }

        }}
        />
    </div>
  )
}

export default Timer
