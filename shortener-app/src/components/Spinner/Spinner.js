import React from 'react';
import {Flex,Spinner,useColorModeValue} from '@chakra-ui/react'; 


export default function Loading() {
  //theme colors
  const bgBody = useColorModeValue('bg.light', 'bg.dark'); 
  
  return (  
    <Flex position='fixed' minW='100vw' minH='100vh' bg={bgBody} justifyContent='center' alignItems='center'>  
      <Spinner 
        thickness='4px'
        speed='0.65s'
        emptyColor={bgBody}
        color='blue.500'
        size='xl'
      />
    </Flex>
  ) 
}