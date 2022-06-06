import React from 'react'
import {Grid,Flex,useColorModeValue,Button,Box} from '@chakra-ui/react'; 
import Header from './Header/DashboardHeader.js'
import Body from './Body/DashboardBody.js'

export default function Index()
{ 
  return( 
      
    // <Flex w='100%'   position='relative' gap='0'  minH='100vh' flexDirection='row' >
    //   <Header /> 
    //   <
    // </Flex> 
    <Flex pl='16px' w='100%'  flexDirection='column'>
      <Header /> 
      <Body/>
    </Flex>
  );

}