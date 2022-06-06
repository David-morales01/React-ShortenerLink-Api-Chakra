
import { useToast ,Button} from '@chakra-ui/react'
export default function ErrorMessage() {
  const toast = useToast() 

  toast({
    title: '$error toast',
    status: 'error',
    isClosable: true,
  })

  return (
    <>
      error
          
    </>
  )
}