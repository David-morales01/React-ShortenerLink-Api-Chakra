import React from 'react';
import {Routes, Route} from 'react-router-dom'; 
import { ChakraProvider} from '@chakra-ui/react'; 
import Home from './components/Home/Home.js'; 
import Login from './components/Login/Login.js';
import Register from './components/Register/Register.js';    
import Theme from './Theme/Theme.js'

function App() {
  return ( 
  <ChakraProvider theme ={Theme}>
    <Routes>
      <Route element ={<Home/>} path="/" />
      <Route element ={<Login/>} path="login" />
      <Route element ={<Register/>} path="register" /> 
    </Routes>
  </ChakraProvider>  
  );
}

export default App;
