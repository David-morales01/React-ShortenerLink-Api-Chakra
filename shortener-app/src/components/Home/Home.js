import React,{useEffect}  from 'react'; 
import {Flex,useColorModeValue,useMediaQuery} from '@chakra-ui/react'; 
import Sidebar from '../Dashboard/Sidebar/Sidebar.js'
import authStore from '../../store/authStore' 
import {useNavigate,Navigate} from 'react-router-dom';  
import Dashboard from '../Dashboard/index.js'
import Spinner from '../Spinner/Spinner'

export default function Home() {
  // theme colors
  const bgBody = useColorModeValue('bg.light', 'bg.dark');
  //store 
  const auth = authStore()
  const status = authStore(state => state.status)  
  const loading = authStore(state => state.loading)  
  //media query
  const [desktopView] = useMediaQuery('(min-width: 800px)') 
  // navigate 
  const navigate= useNavigate() 
  // session validation
  useEffect(() => {  
    auth.validateUser()
    const accessToken = localStorage.getItem('access_token_route_shortener') 
    // SE EJECUTABA TAN RAPIDO QUE A CHACKRA NO LE DA CHANCE DE CARGAR LOS COLORES NI EL SPINNER
    // :u ASI QUE POR ESO EL SETTIMEOUT
    if(!accessToken){  
      setTimeout(()=>{
      navigate('/login') 
      },1000)
    }
  }, [])  

  if(loading){
    return (
      <Flex position='absolute'  flexDirection={desktopView? 'row':'column'} minW='400px' minH='100vh' h='auto' w='100%'> 
        <Sidebar/>
        <Dashboard />  
      </Flex> 
    );
  }

  if(status==false){   
    return (
        <> 
        <Spinner /> 
          <Navigate to="login"/> 
        </>
    );
  }
  
  return (   
    <Spinner /> 
  )
}
 
