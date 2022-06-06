import { useDisclosure,Text,useColorModeValue,Flex ,Divider } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react'
import MenuOptions from './MenuOptions'
import toogleStore from '../../../store/toogleStore'
import {LogoIcons} from '../../Icons/icons.js' 

export default function SidebarCollapse() {
  //theme colors 
  const iconColor = useColorModeValue('color.iconLight', 'color.iconDark');
  // cosas de chakra
  const {getDisclosureProps } = useDisclosure()
  // store
  const status = toogleStore(state => state.status)
  // state
  const [hidden, setHidden] = useState(status)

  return (
    <> 
      <motion.div
        {...getDisclosureProps()}
        hidden={hidden}
        initial={false}
        onAnimationStart={() => setHidden(false)}
        animate={{ width: status ? 260 : 60 }}
        style=
        {{ 
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative', 
          height: '100%', 
          }}>

          <Flex w='100%'  pt='16px' h='50px' px='15px' gap='15px' alignItems='center'>
            <LogoIcons w="30px" h="30px" fill={iconColor} />      
            <Text>Dashboard UI Kit 2.0 </Text>
          </Flex>

          <Divider  my='10px'/>

          <MenuOptions/>
          
      </motion.div>
    </>
  )
}