import React from 'react';
import { Icon } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import { inputToRGB } from '@ctrl/tinycolor';
import { Heading,Stack,Container,Button,Input,Flex,Text,Box,Spacer } from '@chakra-ui/react';
function ModalSetting({
	pomodoroRef,
	shortBreakRef,
	longBreakRef,
	updateTimeDefaultValue,
}) {
    const inputs = [
		{
			value: "pomodoro",
			ref: pomodoroRef,
			defaultValue: 25,
		},
		{
			value: "break",
			ref: shortBreakRef,
			defaultValue: 5,
		},
		{
			value: "long break",
			ref: longBreakRef,
			defaultValue: 10,
		},
	];
  return (
      <Container centerContent>
    {/* <div className={` ${
        openSetting ? "" : "hidden"
    }`} */}
    {/* onClick={() => setOpenSetting(false)}> */}
            <Heading marginBottom={2}>Time setting</Heading>
        <Stack direction='row' spacing={4}>
            {inputs.map((input,index) =>{
                return (<Flex key = {index}>
                    <Box w={20}>
                    <Text fontSize='l'>{input.value}</Text>
                    </Box>
                    <Spacer />
                    <Box w={20}>
                    <Input size = 'sm' style={{background:'white'}} placeholder='minutes' defaultValue= {input.defaultValue} type = "number" ref = {input.ref}/>
                    </Box>
                    </Flex>
                )
            })}
        </Stack>
        <Button marginTop={2} colorScheme='teal' variant='solid' onClick={updateTimeDefaultValue}>
            Save
        </Button>
    {/* </div> */}
    </Container>
  );
}
export default React.memo(ModalSetting);
