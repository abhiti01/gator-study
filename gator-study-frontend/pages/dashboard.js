import { useEffect } from "react";
import Router from "next/router";
import Layout from "../layouts/Layouts";
import Time from "./time";
import useUser from "../data/use-user";
import Playlist from "./playlist";
import { Grid, GridItem, SimpleGrid, Box } from '@chakra-ui/react'
import {
  Container,
  Link,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react'
import Chat from "./chat";
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { ReactNode } from 'react';
import { Switch } from '@chakra-ui/react'
import Groups from "./groups";
import Notes from "../components/Notes";

export default function Dashboard() {
  const { user, loggedOut } = useUser();
    
  // if logged out, redirect to the homepage
  useEffect(() => {
    if (loggedOut) {
      Router.replace("/");
    }
  }, [loggedOut]);
  if (loggedOut) return "redirecting...";
  if (!user) Router.replace('/login');
  return (
    
<>
    <Layout state="auth" />
<SimpleGrid columns={2} spacing={10}>
  <Box bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6} height='100%' width='100%'> <Time /></Box>
  <Box bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6} height='100%' width='100%'><>
        {console.log(user.UserNotes)}
            <Notes email = {user.Email} notes = {user.UserNotes}/>
          </></Box>
  <Box bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6} height='100%' width='100%'><Chat id={user.Id} name={user.Name} group={user.GroupName} /></Box>
  <Box bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}height='100%' width='100%'><Playlist /></Box>
</SimpleGrid>
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}>
        logo
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'}>Home</Link>
          <Link href={'#'}>About</Link>
          <Link href={'#'}>Blog</Link>
          <Link href={'#'}>Contact</Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}>
          <Text>© 2022 Chakra Templates. All rights reserved</Text>
          <Stack direction={'row'} spacing={6}>
              <FaTwitter />
              <FaYoutube />
              <FaInstagram />
          </Stack>
        </Container>
      </Box>
    </Box>
    
      
          
    </>
  );
}
