import React from 'react';
import { MdScreenLockLandscape } from 'react-icons/md';
import { FiBellOff } from 'react-icons/fa';

export const Timer = ({stage,switchState,getTime,seconds, ticking, startTimer, isTimeUp, muteAlarm,reset}) => {
    const options = ["pomodoro", "short break", "long break"]
  return <div>
      <div>
          {options.map((option,index) =>{
              return <h1 key = {index} onClick = {() => switchState(index)}> {option} </h1>
          })}
      </div>
      <div>
          <h2>{getTime()}:{seconds}</h2>
      </div>
      <div>
            <button onClick={startTimer}>
                {ticking? "Stop":"Start"}
                
            </button>
            {/* {isTimeUp && (
                    <FiBellOff
                    onClick = {muteAlarm} />
                )} */}
            {ticking && (<button onClick={reset}>
                Reset
            </button>)}
      </div>
  </div>;
};
