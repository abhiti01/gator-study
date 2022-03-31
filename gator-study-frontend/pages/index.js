import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layouts";
import Time from "./time";
import Chat from "./chat";
import Groups from "./groups";
export default function Chats() {
  const[auth, setAuth] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [group, setGroup] = useState('');
  useEffect(() => {
    (
      async() => {
        try{
          const response = await fetch('http://localhost:8000/api/User',{
            credentials: 'include',
          });
          const content = await response.json();
          const g = content.GroupName
          if (content.Name !== undefined){
            setAuth(true);
            setId(content.Id);
            setName(content.Name);
            setGroup(g);
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
    <Layout auth = {auth} >
      <Time />
      {auth && <Chat id = {id} name = {name} group = {group}/>}
    </Layout>
     </div>;
} 