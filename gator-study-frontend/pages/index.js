import React, { useEffect, useState } from "react";
import Layout from "../layouts/Layouts";
import Router from "next/router";
import Time from "./time";
import useUser from "../data/use-user";
import Playlist from "./playlist";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Container,
} from '@chakra-ui/react'
import Chat from "./chat";

import { Switch } from '@chakra-ui/react'
import Groups from "./groups";
export default function Chats() {
  const[auth, setAuth] = useState(false);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [music, setMusic] = useState(false);
  const { user, loggedOut,mutate } = useUser();
  const group = ""
  useEffect(() => {
    console.log(loggedOut)
    if (user && !loggedOut && loggedOut!==undefined) {
      Router.replace("/dashboard");
    }
  }, [user, loggedOut]);
  // setGroup(user.GroupName)
  // setGroup(group1)
  const handleMusic = () => {
    if (!music) {
      setMusic(true);
    }
    else {
      setMusic(false);
    }
    console.log(music);
  };
  return <div className="background">
    <Layout>
      <Time />
      {/* {music && <Container paddingTop={10} centerContent>
        <Playlist group = {group}/>
        <div alignItems='center' top={700} left={100}>
          <iframe width="354" height="200" src="https://www.youtube.com/embed/videoseries?list=OLAK5uy_lbFGwkYJTTzBYIQIRjNuM_lJwT7SrNyz4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </Container>}
      
      
      {auth && <Chat id={id} name={name} group={group} />}
      <FormControl position={'absolute'} top={100} left={1200}  alignItems='center' onChange={handleMusic}>
      <FormLabel htmlFor='music-control' mb='0'>
        Enable music?
      </FormLabel>
      <Switch id='music-control' />
      </FormControl> */}
     
    </Layout>
     </div>;
} 