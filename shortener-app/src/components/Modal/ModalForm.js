import React from 'react'
import {Text,FormControl,Input,Button,FormHelperText,FormLabel,useColorModeValue,Modal,ModalOverlay,ModalContent,ModalHeader,ModalFooter,ModalBody,ModalCloseButton} from '@chakra-ui/react'; 
import {FastField, Form, Formik} from 'formik';
import linkStore from '../../store/linkStore' 

export default function ModalForm({onClose,initialRef,finalRef,isOpen}){  
  // theme colors
  const errorText = useColorModeValue('color.errorLight', 'color.errorDark');
  // store
  const store = linkStore()

  return(
    <> 
      <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create new link</ModalHeader>
        <ModalCloseButton /> 
        <Formik
            initialValues={{  
              completeLink:'', 
            }}

            validate={(valores)=>{

            let errores ={}; 
            
            if(!valores.completeLink){ 
              errores.completeLink='Link is required. ';
            }

            return errores;
            }}

            onSubmit={handleSubmit}
            
            >
            {({errors,touched})=> (
            <Form>
              <ModalBody pb={6}>
              
                <Text  fontSize='16px' my='8px'>Link</Text>  
                
                <FormControl h='20'> 
                  <FastField  name="completeLink"> 
                    {({field,meta})=>(<Input variant='filled' type='url' {...field} autoComplete='off' />)}
                  </FastField>  
                  {touched.completeLink && errors.completeLink ? <Text my='2' fontSize="14px" color={errorText}>{errors.completeLink} </Text> : ''}
                </FormControl>
                  
              </ModalBody>

              <ModalFooter>
                  <Button type='submit' colorScheme='blue' mr={3} >
                    Save
                  </Button>
                  <Button type='button' onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </Form>
            )}
          </Formik>
      </ModalContent>
      </Modal> 
    </>
  );

  function handleSubmit(values){
    store.register(values)
    onClose()
  }

}