import React from 'react';
import { Icon } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
function Navigation ({setOpenSetting}){
  return (
    <nav>
        <div>
            <Icon as = {MdNightlightRound} />
            <h1> Gator-study </h1>
        </div>
        <button onClick = {()=>setOpenSetting(value => !value)}/>
    </nav>
  );
}
export default React.memo(Navigation);
