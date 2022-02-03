// import Head from 'next/head'
// import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import { Box, Container } from "@chakra-ui/react"
import React, { useEffect, useState,useRef } from "react"
import Alarm from "../components/Alarm";
import ModalSettings from "../components/ModalSettings";
import {Timer} from "../components/Timer"; 
import Navigation from "../components/Navigations"


export default function Home() {
  const [pomodoro, setPomodoro] = useState(1);
  const [shortBreak, setShortBreak] = useState(5);
  const [longBreak, setLongBreak] = useState(10);
  const [seconds, setSecond] = useState(0);
  const [stage, setStage] = useState(0);
  const [ticking, setTicking] = useState(false);
  const [consumedSecond, setConsumedSecond] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const [openSetting, setOpenSetting] = useState(false);
  const alarmRef = useRef();
  const pomodoroRef = useRef();
  const shortBreakRef = useRef();
  const longBreakRef = useRef();
  const updateTimeDefaultValue = () =>{
    setPomodoro(pomodoroRef.current.value);
    setShortBreak(shortBreakRef.current.value);
    setLongBreak(longBreakRef.current.value);
    setOpenSetting(false);
    setSecond(0);
  }

  const switchState = (index) => {
    const isYes = consumedSecond && stage !== index
    ? confirm("Are you sure you want to switch?")
    :false;
  if (isYes){
    reset();
    setStage(index);
  } else if(!consumedSecond){
    setStage(index);
  }
    setStage(index);
  };
  const reset = () =>{
    setTicking(false);
    setPomodoro(5);
    setShortBreak(1);
    setLongBreak(10);
    setSecond(0);
    setConsumedSecond(false)
  };
  const timeUp = () =>{
    reset();
    setIsTimeUp(true);
    alarmRef.current.play();
  };

  const startTimer = () => {
    setIsTimeUp(false);
    muteAlarm();
    setTicking((ticking) => !ticking);
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
      alert("Interval over!");
      timeUp();
    }
    else if(seconds === 0){
      setMinutes((minute) => minute-1);
      setSecond(59);
    } else{
      setSecond((second) => second-1);
    }
  };
  const muteAlarm = () => {
    alarmRef.current.pause();
    alarmRef.current.currentTime = 0;
  };
  useEffect(() => {
    const timer = setInterval(() => {
      if(ticking){
        setConsumedSecond((value) => value+1);
        clockTicking();
      }
      
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  },[stage,seconds, pomodoro, shortBreak, longBreak, ticking]);


  return (
    <div >
      <Navigation setOpenSetting = {setOpenSetting}/>
      <Container borderRadius="lg" bg='teal.100' padding="4">
      <Timer stage = {stage} switchState = {switchState} getTime = {getTime} seconds = {seconds} ticking = {ticking} startTimer = {startTimer} muteAlarm = {muteAlarm} reset = {reset}/>
      <Alarm ref={alarmRef}/>
      <ModalSettings openSetting={openSetting} setOpenSetting = {setOpenSetting} pomodoroRef = {pomodoroRef} longBreakRef = {longBreakRef} shortBreakRef = {shortBreakRef} updateTimeDefaultValue = {updateTimeDefaultValue}/>
      </Container>
    </div>
  )
}