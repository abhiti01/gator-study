import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Home from "./time";
import Simple from "../components/newNavBar";
import Login from "./login";
import Register from "./resgister";
export default function Chats() {
  const [userLogin, setUserLogin] = useState(false);
  const [userRegister, setUserRegister] = useState(false);
  return <div className="background">
    <Simple setUserLogin = {setUserLogin}/>
    <Simple setUserRegister = {setUserRegister}/>
    <Home />
     </div>;
} 