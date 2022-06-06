import React from 'react'; 
import {Box,Text,Flex,Drawer,useColorModeValue,DrawerBody,useDisclosure,DrawerOverlay,DrawerContent,IconButton } from '@chakra-ui/react'; 
import MenuOptions from './MenuOptions' 
import {LogoIcons,IconMenu} from '../../Icons/icons.js' 

export default function Sidebar() {
  // theme colors
  const iconColor = useColorModeValue('color.iconLight', 'color.iconDark');
  // cosas de chakra
  const { isOpen, onOpen, onClose } = useDisclosure() 

  return (
    <Flex alignItems='center' h='60px' w='100%'  px='20px' gap='4px' >
      <LogoIcons w="30px" h="30px" fill={iconColor} /> 
      <Text >Dashboard UI Kit 2.0 </Text>  
      <Drawer placement='left' onClose={onClose}    isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent> 
          <DrawerBody>
            <MenuOptions/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      <IconButton ml='auto'  onClick={onOpen} bg='none'><IconMenu fill={iconColor}/></IconButton>
    </Flex>
  );
} 