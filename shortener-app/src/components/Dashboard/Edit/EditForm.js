import React,{useEffect} from 'react';
import {Box,Checkbox,Flex,Text,Input,FormControl,FormHelperText,FormLabel,useColorModeValue,Button,InputGroup,InputLeftAddon} from '@chakra-ui/react';
import {FastField, Form, Formik} from 'formik';  
import linkStore from '../../../store/linkStore'  
import toogleStore from '../../../store/toogleStore'  

export default function EditForm() {
    // theme colors 
    const buttonColor = useColorModeValue('bg.buttonLight', 'bg.buttonDark');
    const buttonCancelColor = useColorModeValue('bg.buttonLight', 'bg.buttonDark');
    const errorText = useColorModeValue('color.errorLight', 'color.errorDark');
    // store
    const linkS = linkStore()   
    const disable = linkStore(state => state.disabled)    
    const loading = toogleStore(state => state.loading)   
    const link = toogleStore(state => state.editLink)  
    const toogle = toogleStore(state => state.toogleClose)   
    useEffect(() => {  
        
      }, [loading])  
 
        return ( 
            <Formik
                initialValues={{ 
                    id: link.id,
                    completeLink: link.completeLink,
                    shortLink: link.shortLink, 
                }}

                validate={(valores)=>{

                let errores ={}; 

                if(!valores.shortLink){ 
                    errores.shortLink='Link is required. ';
                } 

                return errores;
                }}

                onSubmit={handleSubmit}
                
                >
                {({errors,touched})=> (
                <Form>  
                    <Text  fontSize='14px' my='10px'>Edit your link</Text> 

                    <FormControl h='20' my='8'> 
                        <FastField  name="shortLink"> 
                            {({field,meta})=>(
                            <InputGroup>
                                {/* <InputLeftAddon>http://localhost:8000/p/</InputLeftAddon> */}
                                <Input variant='filled'  type='text' {...field} autoComplete='off' />
                            </InputGroup>)}
                        </FastField>  
                        {touched.shortLink && errors.shortLink ? <Text my='2' fontSize="14px" color={errorText}>{errors.shortLink} </Text> : ''}
                    </FormControl>
                    <Flex  justifyContent='space-between' mb='10px'>
                        <Button  
                                color='white' 
                                bg={buttonCancelColor}  
                                onClick={toogle} 
                                w='ml' type='button' mt='2px'>
                                Cancel
                            </Button>
                        {disable ? 
                            <Button  
                                color='white' 
                                bg={buttonColor} 
                                isLoading
                                disabled={true}
                                w='ml' type='button' mt='2px'>
                            </Button>: 
                            
                            <Button  
                                color='white' 
                                bg={buttonColor} 
                                w='ml' type='submit' mt='2px'>
                                Save
                            </Button>
                        }
                    </Flex>
                </Form>
                )}
            </Formik>
        ); 
    
        
    async function handleSubmit(values, formikBag) { 
        linkS.update(values)
    }
    
}
 
