import React from 'react'
import {useColorModeValue,Box,useMediaQuery} from '@chakra-ui/react';  
import BarChart from  './BarChart.js'

export default function DashboardBody(){ 
    // color theme
    const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
    const bgContainerHeader = useColorModeValue('bg.containerHeaderLight', 'bg.containerHeaderDark');
    // media query
    const [desktopView] = useMediaQuery('(min-width: 800px)')
    return(
        <> 
            <Box position='relative' my='16px' h='400px' w='100%' bg={bgContainer} overflow='hidden'  borderRadius='10px'>
                <Box alignItems='center' p='16px' bg={bgContainerHeader} h='50px'>
                    This Month
                </Box>  
                <Box  my='10px' position='relative' h='300px' overflow='hidden' overflowY={desktopView?'auto':'hidden'}>
                    <BarChart/>
                </Box>
            </Box> 
        </>
    );

}

