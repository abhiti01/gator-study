import React, { useState,useContext, useEffect } from 'react'
import { Box,Flex,Container,Heading,Button, FormLabel, FormControl,Input, Stack } from "@chakra-ui/react";
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
        message,
        "groupName":group
      })
    });
    setMessage('');
  }
  if (group === ""){
    return (
      <Container centerContent >
      <div>Hi, {props.name}, please join a group to begin chatting!</div>
      </Container>
    )
  }
  else{
    return (
    <>
    <Container centerContent >
      <div centerContent>Hi, {props.name}, you are chatting in {props.group}</div>
    <Flex direction='column' borderRadius="lg" bg='teal.100' padding="4" marginTop={10}>
    <div style={{minHeight:"300px",background:'teal.100'}}>
      {messages.map(message => {
        return(
          <Box  mt={5} mb={5} ml={1} mr={1}borderRadius='md' bg='white'>
            <div style={{textAlign:"left",textDecoration:"underline"}}>{message.name}</div>
            <div>{message.message}</div>
          </Box>
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
}

export default Chat