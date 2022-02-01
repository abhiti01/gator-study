import React from 'react';
import { Icon } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import { inputToRGB } from '@ctrl/tinycolor';
function ModalSetting({
	pomodoroRef,
	shortBreakRef,
	longBreakRef,
	openSetting,
	setOpenSetting,
	updateTimeDefaultValue,
}) {
    const inputs = [
		{
			value: "pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "long break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];
  return (
    <div>
        <div>
            <h1>Time setting</h1>
        </div>
        <div>
            {inputs.map((input,index) =>{
                return (<div key = {index}>
                    <h1>{input.value}</h1>
                    <input defaultValue= {input.defaultValue} type = "number" ref = {input.ref}/>
                    </div>
                )
            })}
        </div>
        <button>
            Save
        </button>
    </div>
  );
}
export default React.memo(ModalSetting);
