import React, { useState,useContext, useEffect } from 'react'
import { Flex,Container,Heading,Button, FormLabel, FormControl,Input, Stack } from "@chakra-ui/react";
import Layout from '../layouts/Layouts';
import { MdSend } from "react-icons/md"
import Pusher from "pusher-js"
import {Context} from "../context";
const Chat = (props) => {
  const [sendToId,setSendToId] = useState('');
  const id = props.id; 
  const name = props.name;
  const group = props.group;
  const [messages,setMessages] = useState([]);
  const [message,setMessage] = useState('');
  let allMessages = [];
  useEffect(()=>{
    Pusher.logToConsole = true;

    const pusher = new Pusher('8505d5a21a4e9849578d', {
      cluster: 'us2'
    });
    const channel = pusher.subscribe(props.group);
    channel.bind('message', function(data) {
      allMessages.push(data);
      setMessages(allMessages);
    });
  });
  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('http://localhost:8000/api/messages',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({
        name,
        message
      })
    });
    setMessage('');
  }
  return (
    <>
    <Container centerContent >
      <div centerContent>Hi, {props.name}, you are chatting in {props.group}</div>
    <Flex direction='column' borderRadius="lg" bg='teal.100' padding="4" marginTop={10}>
      {/* <div ><Input style={{background:'white'}} placeholder='Whom do you want to send a message to?' value={sendToId} onChange={e => setSendToId(e.target.value)}></Input></div> */}
    <div style={{minHeight:"300px",background:'white'}}>
      {messages.map(message => {
        return(
          <div>
            <div>{message.name}</div>
            <div>{message.message}</div>
          </div>
        )
      })}
    </div>
     
      <form onSubmit={handleSubmit} style={{paddingTop:'16px'}}>
      <Stack direction='row' spacing={4}>
      <Input style={{background:'white'}} placeholder='Write a message' value={message} onChange={e => setMessage(e.target.value)}></Input>
      <Button rightIcon={<MdSend />}type="submit" colorScheme='teal' variant='solid' >
        Send
      </Button>
      </Stack>
    </form>
    </Flex>
  
    </Container>
    </>
  )
}

export default Chat