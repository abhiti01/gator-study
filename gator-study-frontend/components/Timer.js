import React from 'react';
import { MdScreenLockLandscape } from 'react-icons/md';
import { FiBellOff } from 'react-icons/fa';
import { Button, ButtonGroup, Circle, Container, Heading } from '@chakra-ui/react'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { MdOutlineFreeBreakfast , MdFastfood } from "react-icons/md"
import { TimeIcon,EmailIcon, ArrowForwardIcon, WarningIcon } from '@chakra-ui/icons'
import { Box } from '@chakra-ui/react'
export const Timer = ({stage,switchState,getTime,seconds, ticking, startTimer, isTimeUp, muteAlarm,reset}) => {
    const options = ["pomodoro", "short break", "long break"]
  return <Container maxW='container.md' centerContent>
      
      <Stack direction='row' spacing={4}>
    <Button rightIcon={<TimeIcon />} colorScheme='teal' variant='solid' onClick={() => switchState(0)}>
        Pomodoro
    </Button>
    <Button rightIcon={<MdOutlineFreeBreakfast />} colorScheme='teal' variant='solid' onClick={() => switchState(1)}>
        Short Break
    </Button>
    <Button rightIcon={< MdFastfood />} colorScheme='teal' variant='solid' onClick={() => switchState(2)}>
        Long break
    </Button>
    </Stack>
      <Box margin={2}>
          <Circle bg='tomato' size = '120px'><Heading >{getTime()}:{seconds}</Heading></Circle>
          
      </Box>
      <div>
          <Stack direction='row' spacing={4}>
            <Button colorScheme='teal' variant='solid' onClick={startTimer}>
                {ticking? "Stop":"Start"}
                
            </Button>
            {/* {isTimeUp && (
                    <FiBellOff
                    onClick = {muteAlarm} />
                )} */}
            {ticking && (<Button colorScheme='teal' variant='solid' onClick={reset}>
                Reset
            </Button>)}
        </Stack>
      </div>
  </Container>;
};
