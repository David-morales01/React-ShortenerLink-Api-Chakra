import React from 'react'
import {useColorModeValue,Box,Flex,IconButton,Text,Link} from '@chakra-ui/react'; 
import {IconDelete} from '../../Icons/icons.js' 
import toogleStore from '../../../store/toogleStore'
import {useNavigate,Navigate} from 'react-router-dom'; 

export default function ItemLink({item}){ 
    // theme colors
    const iconColor = useColorModeValue('icon.iconLight', 'icon.iconDark');
    // store
    const toogle = toogleStore(state => state.toogleEdit)  
    const toogleStor = toogleStore() 
    return(
        <Flex w='100%'alignItems='center' justifyContent='space-between'> 

            <Link onClick={()=>{toogleStor.toogleEdit(item)}} cursor='pointer'>
                {`${process.env.REACT_APP_URL_PAGE}/${item.shortLink} `}
            </Link>
            {/* <Button onClick={toogle}>
                s
            </Button>   */}
            <Box> 
                <IconButton bg='none'><IconDelete fill={iconColor}/></IconButton>
            </Box>
        </Flex>
    );

}