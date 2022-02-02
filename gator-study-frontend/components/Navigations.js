import React from 'react';
import { Container, Icon, Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import Link from 'next/link';
function Navigation ({setOpenSetting}){
  return (
    <Container centerContent>
      <Stack direction='row' spacing={4}>
          <Icon as = {MdNightlightRound} />
           <Heading> Gator-study </Heading>
        <button onClick = {()=>setOpenSetting(value => !value)}/>
        <Link href = "/login"><a>Login</a></Link> 
        </Stack>
    </Container>
  );
}
export default React.memo(Navigation);
