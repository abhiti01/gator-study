import React from 'react'
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
  useColorModeValue,
  Select,
  Stack,
  Text,
  Textarea
} from '@chakra-ui/react';
import { mutate } from 'swr';
import { Router } from 'next/router';
const Notes = (props) => {
    let [value, setValue] = React.useState(props.notes);
    console.log(value)
    let postNotes = async(e) =>{
     e.preventDefault();
    const email = props.email;
    const response = await fetch('http://localhost:8000/api/addNotes', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "email":email,
        "notes":value
      })
    })
    const res = await response.json()
    console.log(res);
    // mutate("http://localhost:8000/api/User");
    // setValue(value);
  }
  let handleInputChange = async(e) => {
    let inputValue = e.target.value
    setValue(inputValue)
  }
  let handleClear = () => {
      setValue("")
      console.log(value)
  }
  return (
    <>
      <Text mb='8px' data-cy = 'notesheader' fontWeight={'semibold'} fontSize='2xl' fontFamily={'serif'}>Notes</Text>
          <Textarea
        data-cy='notes-input'
        value={value}
        onChange={handleInputChange}
        defaultValue={value}
        placeholder='Start typing your notes here.....'
        size='sm'
          />
          <HStack marginTop={2}>
            <Button  data-cy='save-note-btn' colorScheme='teal' variant='solid' onClick={postNotes}>
                        Save for later
                </Button>
                <Button  data-cy='clear-note-btn'colorScheme='teal' variant='solid' onClick={handleClear}> Clear notes </Button>
          </HStack>
      
    </>
  );
}

export default Notes