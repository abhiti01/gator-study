import React from 'react';
import { Icon } from '@chakra-ui/react'
import {MdNightlightRound} from 'react-icons/md'
import {FaUserAlt} from 'react-icons/fa'
export const Navigation = () => {
  return (
    <nav>
        <div>
            <Icon as = {MdNightlightRound} />
            <h1> Gator-study </h1>
        </div>
        <Icon as = {FaUserAlt} />
    </nav>
  );
};
