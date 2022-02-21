import React, { useState } from 'react'
import { Flex,Container,Heading,Button, FormLabel, FormControl,Input } from "@chakra-ui/react";
import Layout from '../layouts/Layouts';
const Chat = () => {
  const [username,setUsername] = useState('');
  const [messages,setMessages] = useState([]);
  const [message,setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault
  }
  return (
    <>
    <Container centerContent>
    <Flex direction='column'>
    <Input value = {username} onChange={e => setUsername(e.target.value)}></Input>
    <div style={{minHeight:"300px"}}>
      {messages.map(message => {
        return(
          <div>
            <div>{message.username}</div>
            <div>{message.message}</div>
          </div>
        )
      })}
    </div>
    </Flex>
    <form onSubmit={handleSubmit}>
      <input placeholder='Write a message' value={message} onChange={e => setMessage(e.target.value)}></input>
    </form>
    </Container>
    </>
  )
}

export default Chat