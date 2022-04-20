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
const Notes = () => {
    let [value, setValue] = React.useState('')

  let handleInputChange = (e) => {
    let inputValue = e.target.value
    setValue(inputValue)

  }
  let handleClear = () => {

      setValue("")
      console.log(value)
  }
  return (
    <>

      <Text mb='8px'>Notes</Text>
      <Textarea
        value={value}
        onChange={handleInputChange}
        placeholder='Start typing your notes here.....'
        size='sm'
      />    
      <Button type="submit" >
            Save for later
    </Button>
    <Button onClick={handleClear}> Clear notes </Button>
    </>
  )
}

export default Notes