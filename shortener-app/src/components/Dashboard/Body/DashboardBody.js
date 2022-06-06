import React ,{useRef,useEffect}from 'react'
import {useColorModeValue,Button,Box,Flex,IconButton,useMediaQuery,useDisclosure} from '@chakra-ui/react'; 
import {IconMore} from '../../Icons/icons.js'
import Chart from '../Chart/Chart.js'
import ItemLink from '../Item/ItemLink.js'
import ModalForm from '../../Modal/ModalForm.js'
import EditDrawer from '../Edit/EditDrawer.js'
import EditStatic from '../Edit/EditStatic.js'
import toogleStore from '../../../store/toogleStore' 
import linkStore from '../../../store/linkStore' 

export default function DashboardBody(){ 
    // media query
    const [desktopView] = useMediaQuery('(min-width: 800px)')
    // colors theme
    const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
    const bgContainerHeader = useColorModeValue('bg.containerHeaderLight', 'bg.containerHeaderDark');
    const iconColor = useColorModeValue('icon.iconLight', 'icon.iconDark');
    // cosas de chakra :)
    const { isOpen, onOpen, onClose } = useDisclosure()
    // hooks 
    const initialRef = useRef()
    const finalRef = useRef()
    // store
    const status = toogleStore(state => state.statusEdit) 
    const link = linkStore()
    const links = linkStore(state => state.links)
    useEffect(() => { 
        link.listLink()
      }, [])  

    return(
        <Box position='relative'  h='100%'  mr='16px'> 
            <Chart/>
            <Flex  w='100%' my='16px' minH='500px' position='relative' flexWrap='nowrap'  flexDirection={desktopView? 'row':'column'}  rowGap='16px' h='' columnGap={status? '16px':'0'} > 
                <Box bg={bgContainer} position='relative'   borderRadius='10px' overflow='hidden'  w='100%' minW='300px'>
                    <Flex alignItems='center' p='16px' bg={bgContainerHeader} h='50px'>
                        Links 
                        <IconButton onClick={onOpen} variant="ghost"  ml='auto'  w='40px'>
                            <IconMore fill='current'/>
                        </IconButton>
                    </Flex>
                    <Box overflowY='auto' px='16px' minH='500px' py='10px' position='relative' h='100%'>                
                    {
                        links.map((item)=>{  
                            return (<ItemLink key={item.id} item={item} />);
                        })
                    }
                        
                        
                    </Box>
                </Box>  
                <Box bg={bgContainer} borderRadius='10px' overflow='auto'  position='relative'  >{ desktopView ? <EditDrawer />: <EditStatic/>}</Box>
            </Flex>
            <ModalForm  isOpen={isOpen} onClose={onClose} initialRef={initialRef} finalRef={finalRef} />
            
        </Box>
    );

}