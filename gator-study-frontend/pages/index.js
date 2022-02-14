import React, { useEffect, useState } from "react";
import Navigations from "../components/Navigations";
import Home from "./time";
import Simple from "../components/newNavBar";
import Login from "./login";
export default function Chats() {
  const[auth, setAuth] = useState(false);
  useEffect(() => {
    (
      async() => {
        try{
          const response = await fetch('http://localhost:8000/api/User',{
            credentials: 'include',
          });
          const content = await response.json();
          if (content.Name !== undefined){
            console.log(content);
            setAuth(true);
          }
          else{
            setAuth(false);
          }
        } catch (e){
          console.log("bad login");
        }
       
      }
    )();
  });
  return <div className="background">
    <Simple auth = {auth}/>
    <Home />
     </div>;
} 