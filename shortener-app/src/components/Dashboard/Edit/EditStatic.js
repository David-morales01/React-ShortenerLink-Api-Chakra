import {Box,useColorModeValue } from '@chakra-ui/react' 
import EditForm from './EditForm.js' 
import toogleStore from '../../../store/toogleStore' 

export default function Edit() { 
    
  // theme colors
  const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
  const bgContainerHeader = useColorModeValue('bg.containerHeaderLight', 'bg.containerHeaderDark');
  // store
  const loading = toogleStore(state => state.loading)  
    
if(loading){
  return (
      
     <>
         <Box p='16px' position='relative' bg={bgContainerHeader} h='50px'>Edit Link</Box> 
            <Box pb='16px' position ='relative' px='16px'>
            {loading ? <EditForm  />: ''}
         </Box>  
     </>
  )
  }
}