import React from 'react'; 
import {useColorModeValue,Box,Text,Flex,IconButton} from '@chakra-ui/react'; 
import {IconLink,IconOut} from '../../Icons/icons.js' 
import {Link,Navigate} from 'react-router-dom'; 
import { ColorModeSwitcher } from '../../../ColorModeSwitcher'; 
import authStore from '../../../store/authStore'

export default function MenuOptions() {
  // theme colors
  const iconColor = useColorModeValue('color.iconLight', 'color.iconDark');
  
  // store
  const logOut = authStore(state => state.logOut) 
  const status = authStore(state => state.status)  

  return ( 
    <Box pt='6px' px='15px' mb='20px'>
      <Text color='gray.200'>MAIN</Text> 
      <Flex flexDirection='column' mt='4px' gap='20px'>
        
        <Link to="/"><IconButton variant="ghost" colorScheme='none' fontSize='24px' mr='15px' bg='none' w='40px'><IconLink w="30px" h="30px" fill={iconColor} /></IconButton>Links</Link>

        <Text>
          <IconButton onClick={logOut} variant="ghost" colorScheme='none' fontSize='24px' mr='15px' bg='none' w='40px'><IconOut w="30px" h="30px" fill={iconColor}/></IconButton>
          Logout
        </Text>

        <Text>
          <ColorModeSwitcher mr='15px'/>
        </Text>
      </Flex>
    </Box>
  );
} 