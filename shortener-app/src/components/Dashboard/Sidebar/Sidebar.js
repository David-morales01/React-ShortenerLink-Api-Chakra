import React from 'react'; 
import {Box,useColorModeValue,useMediaQuery } from '@chakra-ui/react'; 
import SidebarDrawer from './SidebarDrawer'
import SidebarCollapse from './SidebarCollapse' 

export default function Sidebar() {
  // media query
  const [desktopView] = useMediaQuery('(min-width: 800px)')
  // theme colors
  const bgSidebar = useColorModeValue('bg.sidebarLight', 'bg.sidebarDark'); 
  const iconColor = useColorModeValue('color.iconLight', 'color.iconDark');

  return (
    <Box bg={bgSidebar} minH=  { desktopView ? '100vh':''} color='white'> 
      { desktopView ? <SidebarCollapse/>: <SidebarDrawer/>}
    </Box> 
  );
} 