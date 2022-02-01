// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Box } from "@chakra-ui/react"
import React, { useEffect, useState } from "react"
import { Navigation } from "../components/Navigations"
import { Timer } from "../components/Timer"
export default function Home() {
  const [pomodoro, setPomodoro] = useState(1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);
  const switchState = (index) => {
    setStage(index);
  };
  const getTime = () => {
    const timeStage = {
      0: pomodoro,
      1: shortBreak,
      2: longBreak
    };
    return timeStage[stage];
  }
  const updateMinute = () => {
    const updateStage = {
      0: setPomodoro,
      1: setShortBreak,
      2: setLongBreak,
    };
    return updateStage[stage];
  };
  const clockTicking = () => {
    const minutes = getTime();
    const setMinutes = updateMinute();
    if(minutes === 0 && seconds === 0){
      // if(stage === 0){
      //   setStage(1)
      //   setMinutes((minute) => getTime())
      //   setSecond((second) => 0)
      // }
      // else{
      //   setStage(0)
      //   setMinutes((minute) => getTime())
      //   setSecond((second) => 0)
      // }
      if(stage == 0)
      {
        switchState(1)
        setMinutes(() => getTime())
        setSecond(() => 0)
      }
      
    }
      else if(seconds === 0){
      setMinutes((minute) => minute-1);
      setSecond(59);
    } else{
      setSecond((second) => second-1);
    }
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if(ticking){
        clockTicking();
      }
      
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  },[stage,seconds, pomodoro, shortBreak, longBreak, ticking]);


  return (
    <div >
      <Navigation />
      <Timer stage = {stage} switchState = {switchState} getTime = {getTime} seconds = {seconds} ticking = {ticking} setTicking = {setTicking}/>
    </div>
  )
}
