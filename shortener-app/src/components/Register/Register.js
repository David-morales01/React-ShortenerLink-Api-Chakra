import React from 'react';
import {Box,Flex,Text,Input,Button,FormControl,FormHelperText,FormLabel,useColorModeValue} from '@chakra-ui/react';
import {ColorModeSwitcher } from '../../ColorModeSwitcher'; 
import {FastField, Form, Formik} from 'formik';
import {useEffect} from 'react';
import {useNavigate, Link,Navigate} from 'react-router-dom'; 
import {LogoIcons} from '../Icons/icons.js'
import authStore from '../../store/authStore'
import Spinner from '../Spinner/Spinner.js'

export default function Register() {
    // theme colors
    const bgContainer = useColorModeValue('bg.containerLight', 'bg.containerDark');
    const bgBody = useColorModeValue('bg.light', 'bg.dark');
    const errorText = useColorModeValue('color.errorLight', 'color.errorDark');
    const colorLink = useColorModeValue('color.linkLight', 'color.linkDark');
    const iconColor = useColorModeValue('color.logoLight', 'color.logoDark');
    const buttonColor = useColorModeValue('bg.buttonLight', 'bg.buttonDark');

    // navigate :)
    const navigate = useNavigate() 
    // store  
    const auth = authStore() 
    const status = authStore(state => state.status)  
    const disable = authStore(state => state.disabled)   
    const error = authStore(state => state.errorRegister)   
    // session validation
    useEffect(() => {
        const accessToken = localStorage.getItem('access_token_route_shortener') 
        if(accessToken){   
            navigate('/')
        } 
    }, [])  

    if (!status) {
        return ( 
            <Flex textAlign="center" minH='630px' position = 'relative' justifyContent='center' alignItems='center' minW='390' w='100vw'  h ='100vh' bg={bgBody} fontSize="xl">
                
                <ColorModeSwitcher position='absolute' insetInlineEnd='10px' insetBlockStart='10px'   />
            
                <Box px='4' w='90%' maxW='400px'>
                    <Box mb='20px'> <LogoIcons w="40px" h="40px" fill={iconColor}/></Box>
                    <Box bg={bgContainer} align='left' px='30px' pt='10px' pb='20px' w='100%'  borderRadius='20px'>
                        <Formik
                            initialValues={{ 
                            email:'',
                            password:'',
                            name:'',
                            }}

                            validate={(valores)=>{

                            let errores ={}; 
                            
                            if(!valores.name){ 
                                errores.name='Name is required. ';
                            }

                            if(!valores.email){ 
                            errores.email='Email is required. ';
                            }

                            if(!valores.password){ 
                            errores.password='Password is required. ';
                            }else if(valores.password.length <=9){
                                errores.password='The password must contain at least 10 characters. ';
                            }

                            return errores;
                            }}

                            onSubmit={handleSubmit}
                            
                            >
                            {({errors,touched})=> (
                            <Form>
                                <Text  fontSize='16px' mt='2'>Welcome back.</Text> 
                                <Text  fontSize='24px' mb='2' mt='2'>Enter yours details below.</Text> 
                                
                                <FormControl h='20'>
                                <FormLabel>Name</FormLabel>
                                <FastField  name="name"> 
                                {({field,meta})=>(<Input variant='filled' type='text' {...field} autoComplete='off' />)}
                                </FastField>  
                                {touched.name && errors.name ? <Text my='2' fontSize="14px" color={errorText}>{errors.name} </Text> : ''}
                                </FormControl>

                                <FormControl h='20' my='8'>
                                <FormLabel>Email address</FormLabel>
                                <FastField  name="email"> 
                                {({field,meta})=>(<Input variant='filled' type='email' {...field} autoComplete='off' />)}
                                </FastField>  
                                {touched.email && errors.email ? <Text my='2' fontSize="14px" color={errorText}>{errors.email} </Text> : <FormHelperText > We'll never share your email</FormHelperText>}
                                </FormControl>

                                <FormControl h='20' my='8'>
                                <FormLabel>Password</FormLabel>
                                <FastField   name="password"> 
                                {({field,meta})=>(<Input variant='filled' type='password'  {...field} autoComplete='off'/>)}
                                </FastField>   
                                {touched.password && errors.password ? 
                                    <Text my='2' fontSize="14px" color={errorText}>{errors.password} </Text> :''
                                } 
                                
                                </FormControl>  
                                    {disable ? 
                                        <Button  
                                            color='white' 
                                            bg={buttonColor} 
                                            isLoading
                                            disabled={true}
                                            w='100%' type='button' mt='2px'>
                                        </Button>: 
                                        
                                        <Button  
                                            color='white' 
                                            bg={buttonColor} 
                                            w='100%' type='submit' mt='2px'>
                                            Create Account
                                        </Button>
                                    }
                                    {error?  <Text my='2' fontSize="14px" color={errorText}>Error, please try again</Text> :''}
                            </Form>
                            )}
                        </Formik>
                    </Box> 
                    <Flex fontSize='16px' mt='4px' justifyContent='center'gap='4px'> 
                        <Text>By creating an account, you agree to our</Text>
                        <Text color ={colorLink} > Terms.</Text>
                    </Flex>
                    <Flex fontSize='16px' mt='4px' justifyContent='center'gap='4px'> 
                        <Text>Already have an account?</Text>
                        <Text color ={colorLink} > <Link to="/login" > Log In</Link></Text>
                    </Flex>
                </Box>
            </Flex> 
        );
  
        async function handleSubmit(values, formikBag) {
            auth.register(values);       
        }
    }
    else{
        return (
            <>
                <Spinner />
                <Navigate to="/"/> 
            </>
        );
    }
}
 
