import React from 'react';
import { Icon } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
import Link from 'next/link';
function Navigation ({setOpenSetting}){
  return (
    <nav>
        <div>
            <Icon as = {MdNightlightRound} />
            <h1> Gator-study </h1>
        </div>
        <button onClick = {()=>setOpenSetting(value => !value)}/>
        <Link href = "/login"><a>Login</a></Link> 
    </nav>
  );
}
export default React.memo(Navigation);
