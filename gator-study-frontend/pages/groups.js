import React from 'react'
import Layout from '../layouts/Layouts'
import {Context} from "../context";
import { useState, useEffect,useContext } from "react";
import { Router, useRouter } from 'next/router';
import { useSWRConfig } from 'swr';
import useUser from "../data/use-user";
// import { loadPosts } from '../components/fetch-group'
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Groups = () => {
const { user, loggedOut,avatar, mutate } = useUser();
const router = useRouter();
   const handleSubmit = async (e) => {
      const resp =await fetch('http://localhost:8000/api/AddUserToGroup',{
        method: "POST",
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
        body: JSON.stringify({
          "email":user.Email,
          "groupName":e
        })
      });
      const respJson = await resp.json();
     console.log(respJson);
     mutate('http://localhost:8000/api/User')
      router.push('/');
      }

const [data, setData] = useState([])
const [isLoading, setLoading] = useState(false)
    useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/api/getAllGroups')
      .then((res) => res.json())
      .then((data) => {
        
        setData(data)
        console.log(data)
        setLoading(false)
      })
  }, [])

  return(
    <>
    <Layout>
      <Stack spacing ={8}>
    {data && data.map(gr=> (
      <Box p={5} key={gr.Id} eshadow='md' borderWidth='1px' >
        <Heading fontSize='xl'>{gr.Name}</Heading>
        <Text data-cy="modinfo" as='u' float='right' mt={4}>Moderator: {gr.Moderator}</Text>
           <Text  mt={4}>{gr.Description}</Text>
           <Text data-cy="groupid" as='u' float='right' mt={4}>Group ID: {gr.Id}</Text>
          <Button marginTop = {5} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'onClick={() =>handleSubmit(gr.Name)}>Enter {gr.Name}</Button>
      </Box>
      
    ))}
    </Stack>
    </Layout>
    </>

)

}
export default Groups