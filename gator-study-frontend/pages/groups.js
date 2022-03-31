import React from 'react'
import Layout from '../layouts/Layouts'
import {Context} from "../context";
import { useState, useEffect,useContext } from "react";
import {useRouter} from 'next/router';
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon} from '@chakra-ui/icons'
const groups = () => {
    const {email, secret, setEmail,setSecret} = useContext(Context);
    const GroupData = [{ "Name": 'Math', 'Description': 'Numbers' }, { 'Name': 'Chem', 'Description': 'Benzene rings' }];
    const [group, setGroup] = useState('');
    //if user clicks on join group, set group to group GroupData.name
    const router = useRouter();
    const groupChoice = async(index) =>{
      index.prev
      setGroup(GroupData[index]['Name']);
      const response = await fetch('http://localhost:8000/joingroup', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        email,
        group
      })
    })
    router.push('/');
    };
    function Feature( props ) {
    return (
    <Box p={5} shadow='md' borderWidth='1px' >
      <Heading fontSize='xl'>{props.Name}</Heading>
        <Text mt={4}>{props.Description}</Text>
          <Button onClick ={()=>groupChoice(props.index)} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
            Enter {email}
        </Button>
    </Box>
    )
    }
    return (
    <Layout>
      <div>{email}</div>
      <Stack spacing={8}>
          {GroupData.map((x, index) => <Feature index ={index} key={index} Name={x.Name} Description= {x.Description}></Feature>)}
    </Stack>
    </Layout>
    
  )
}

export default groups