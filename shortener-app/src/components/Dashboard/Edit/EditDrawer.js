import { useDisclosure,Box,useColorModeValue,Flex} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState } from 'react' 
import EditForm from './EditForm.js' 
import toogleStore from '../../../store/toogleStore' 

export default function Edit() {
  // theme colors
  const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
  const bgContainerHeader = useColorModeValue('bg.containerHeaderLight', 'bg.containerHeaderDark');
  // cosas de chakra
  const {getDisclosureProps } = useDisclosure()
  // store
  const status = toogleStore(state => state.statusEdit)   
  const loading = toogleStore(state => state.loading)  
  // state
  const [hidden, setHidden] = useState(status) 
    
  return (
  <Flex>
    <motion.div
      {...getDisclosureProps()}
      hidden={hidden}
      initial={false}
      onAnimationStart={() => setHidden(false)}
      animate={{ width: status ? 360 : 0 }}
      style=
      {{ 
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          position: 'relative', 
          height: '100%', 
        }}> 
       
          <Box p='16px' position='relative' bg={bgContainerHeader} h='50px'>Edit Link</Box> 
            <Box position ='relative' px='16px'>
            {loading ? <EditForm  />: ''}
          </Box>  
    </motion.div>
  </Flex>
  )
}