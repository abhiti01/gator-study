import React, { useState,useContext } from 'react'
import { Flex,Container,Heading,Button, FormLabel, FormControl,Input, Stack } from "@chakra-ui/react";
import Layout from '../layouts/Layouts';
import { MdSend } from "react-icons/md"
import {Context} from "../context";
const Chat = (props) => {
  const [username,setUsername] = useState('');
  const [messages,setMessages] = useState([]);
  const [message,setMessage] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  return (
    <>
    
    <Container centerContent >
      <div centerContent>Hi, {props.name}</div>
    <Flex direction='column' borderRadius="lg" bg='teal.100' padding="4" marginTop={10}>
      <div >User</div>
    <div style={{minHeight:"300px",background:'white'}}>
      {messages.map(message => {
        return(
          <div>
            <div>{message.username}</div>
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