import React from 'react'
import {useColorModeValue,Box,IconButton,useMediaQuery,Input,Flex,Button} from '@chakra-ui/react'; 
import toggleStore from '../../../store/toogleStore'
import {IconMenu,IconSearch,IconShape,IconBell} from '../../Icons/icons.js'

export default function DashboardHeader(){ 
  // media query
  const [desktopView] = useMediaQuery('(min-width: 800px)')
  // colors theme
  const iconColor = useColorModeValue('icon.iconLight', 'icon.iconDark');
  const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
  // store
  const toogle = toggleStore(state => state.toogle) 

  return(
    <Flex my='16px'  alignItems='center' mr='16px' w='100%' h='60px'>    
          
      <Flex  bg={bgContainer}  w='200px' h='32px'  >
        <Button bg='none' h='32px'><IconSearch fill={iconColor} /></Button>
        <Input color={iconColor} variant='unstyled' placeholder='Search...' />
      </Flex>

      <Box ml='auto'>
        { desktopView ? <IconButton bg='none'onClick={toogle}><IconMenu fill={iconColor}/></IconButton>: ''}

        <IconButton bg='none'><IconShape fill={iconColor}/></IconButton>
        <IconButton bg='none'><IconBell fill={iconColor}/></IconButton>
        </Box>
        
    </Flex>
  );
}