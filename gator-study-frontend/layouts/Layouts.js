import { ReactNode } from 'react';
import { useState, useEffect,useContext } from "react";

import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Text,
  useColorModeValue,
  Select,
  Stack,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { useRouter,  } from 'next/router';
import { useSWRConfig } from 'swr';

const Links = ['Gator-Study','Browse groups'];

const NavLink = ({ children }) => (
  <Link
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: useColorModeValue('gray.200', 'gray.700'),
    }}
    href={'/groups'}>
    {children}
  </Link>
);

export default function Layout(props) {

  const { mutate } = useSWRConfig();
  let menu;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();
  const logout = async()=>{
    await fetch('http://localhost:8000/api/logout',{
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      credentials: 'include'
    })
    mutate('http://localhost:8000/api/User')
    await router.push('/');
    router.replace('/');
  }
  if (props.state == "auth"){
    
    menu = (
      <MenuList>
        <MenuItem><Button data-cy="logoutbtn"onClick={logout}> Logout </Button></MenuItem>
      </MenuList>
    )
  } else {
    menu = (
      <MenuList>
        <MenuItem><Link href='/login'>Login</Link></MenuItem>
      <MenuItem><Link href='/register'>Sign Up</Link></MenuItem>
      </MenuList>
      
    )
  }

  return (
    <>
      <link rel="icon" href="/favicon.ico" />
      <Box bg = 'teal.500' px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <IconButton
            size={'md'}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={'Open Menu'}
            display={{ md: 'none' }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={'center'}>
            <Text fontSize={30}>🐊</Text >
            <HStack
              as={'nav'}
              spacing={4}
              display={{ base: 'none', md: 'flex' }}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={'/'}
              fontSize = {20}
              >
                Study 🙇🏻‍♂️
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                  
                }
                }
                href={'/groups'}
              fontSize = {20}>
                Groups 👩🏻‍🏫👩‍🎓
              </Link>
            </HStack>
            
          </HStack>
          <Flex alignItems={'center'}>
            <Menu>
              <MenuButton
                as={Button}
                rounded={'full'}
                variant={'link'}
                cursor={'pointer'}
                minW={0}>
                <Avatar
                  size={'md'}
                  src={
                    "https://avatars.dicebear.com/api/big-smile/defaul.svg"
                  }
                />
              </MenuButton>
              {menu}
            </Menu>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: 'none' }}>
            <Stack as={'nav'} spacing={4}>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={'/'}>
                Gator-study
              </Link>
              <Link
                px={2}
                py={1}
                rounded={'md'}
                _hover={{
                  textDecoration: 'none',
                  bg: useColorModeValue('gray.200', 'gray.700'),
                }}
                href={'/groups'}>
                Browse Groups
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}>
            {props.children}
        </Box>
    </>
  );
}