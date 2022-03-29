import React from 'react'
import Layout from '../layouts/Layouts'
import {
  Box,
  Heading,
  Text,
  Button,
  Stack,
} from '@chakra-ui/react';
import { ArrowForwardIcon} from '@chakra-ui/icons'
const groups = () => {
    const GroupData = [{ 'Name': 'Math', 'Description': 'Numbers' }, { 'Name': 'Chem', 'Description': 'Benzene rings' }];
    function Feature({ Name, Description, ...rest }) {
    return (
    <Box p={5} shadow='md' borderWidth='1px' {...rest}>
      <Heading fontSize='xl'>{Name}</Heading>
        <Text mt={4}>{Description}</Text>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='solid'>
            Enter {Name}
        </Button>
    </Box>
    )
    }
    return (
    <Layout>
      <Stack spacing={8}>
    {GroupData.map((x) => <Feature Name={x.Name} Description= {x.Description}></Feature>)}
    </Stack>
    </Layout>
    
  )
}

export default groups