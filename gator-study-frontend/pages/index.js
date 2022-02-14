import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Home from "./time";
import Simple from "../components/newNavBar";
import Login from "./login";
export default function Chats() {
  const [userLogin, setUserLogin] = useState(false);
  useEffect(() => {
    (
      async() => {
        try{
          const response = await fetch('http://localhost:8000/api/user',{
            credentials: 'include',
          });
          const content = await response.json();
          console.log(content);
        } catch (e){
          console.log("bad login");
        }
       
      }
    )();
  });
  return <div className="background">
    <Simple setUserLogin = {setUserLogin}/>
    <Home />
     </div>;
} 