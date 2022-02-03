import React, { useState } from "react";
import Navigations from "../components/Navigations";
import Home from "./time";
import Simple from "../components/newNavBar";
import Login from "./login";
export default function Chats() {
  const [userLogin, setUserLogin] = useState(false);
  return <div className="background">
    <Simple setUserLogin = {setUserLogin}/>
    <Home />
     </div>;
} 