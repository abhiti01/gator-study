import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layouts";
import Time from "./time";
import Chat from "./chat";
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
    <Layout auth = {auth}>
      <Time />
      {/* {auth && <Chat></Chat>} */}
      <Chat />
    </Layout>
     </div>;
} 