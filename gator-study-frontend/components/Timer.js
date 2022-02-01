import React from 'react';
import { MdScreenLockLandscape } from 'react-icons/md';

export const Timer = ({stage,switchState,getTime,seconds, ticking, setTicking}) => {
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
      <button onClick={()=>setTicking((ticking) => !ticking)}>
          {ticking? "Stop":"Start"}
      </button>

  </div>;
};
