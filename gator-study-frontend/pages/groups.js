import React from 'react'
import Layout from '../layouts/Layouts'
import {Context} from "../context";
import { useState, useEffect,useContext } from "react";
import {Router, useRouter} from 'next/router';
// import { loadPosts } from '../components/fetch-group'
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon} from '@chakra-ui/icons'

 const Groups = () => {
  
//     const {email, secret, setEmail,setSecret} = useContext(Context);
//     const GroupData = props;
//     // const GroupData = [{ "Name": 'Math', 'Description': 'Numbers' }, { 'Name': 'Chem', 'Description': 'Benzene rings' }];
//     const [group, setGroup] = useState('');
//     //if user clicks on join group, set group to group GroupData.name
//     const router = useRouter();
//     const groupChoice = async(index) =>{
//       setGroup(GroupData[index]['Name']);
//       const response = await fetch('http://localhost:8000/joingroup', {
//       method: 'POST',
//       headers: {'Content-Type': 'application/json'},
//       credentials: 'include',
//       body: JSON.stringify({
//         email,
//         group
//       })
//     })
//     router.push('/');
//     };
//     function Feature( props ) {
//     return (
//     <Box p={5} shadow='md' borderWidth='1px' >
//       <Heading fontSize='xl'>{props.Name}</Heading>
//         <Text mt={4}>{props.Description}</Text>
//           <Button onClick ={()=>groupChoice(props.index)} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
//             Enter {props.Name }
//         </Button>
//     </Box>
//     )
//     }
//     return (
//     <Layout>
//       <div>{email}</div>
//       <Stack spacing={8}>
//           {GroupData.map((x, index) => <Feature index ={index} key={index} Name={x.Name} Description= {x.Description}></Feature>)}
//     </Stack>
//     </Layout>
    
//   )
const router = useRouter();
  const handleSubmit = async (e) => {
    console.log(e);
      const response = await fetch('http://localhost:8000/api/User',{
        credentials: 'include',
      });
      const content = await response.json();
      if (content.Id === undefined){
        console.log("Please log in before proceeding");
      }
      console.log(content.Id)
      const gname = e;
      const email = content.Email;
    const crrr =await fetch('http://localhost:8000/api/AddUserToGroup',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      credentials: 'include',
      body: JSON.stringify({
        "email":email,
        "groupName":gname
      })
    });
    const luuu = await crrr.json();
    console.log(luuu);
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
    {data && data.map(gr => (
      <div key={gr.Name}>
          <div>{gr.Name}</div>
          <Button onClick={() =>handleSubmit(gr.Name)}>Join</Button>
      </div>
    ))}
    </>

)

}
export default Groups