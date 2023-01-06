import { ViewOffIcon ,ViewIcon} from '@chakra-ui/icons';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Link,Stack,Text,Input,FormControl,FormLabel,Box,InputGroup,
  ModalBody,InputRightElement,Flex,HStack,Heading,
  ModalCloseButton,
  useDisclosure,
  Image,
  VStack,
} from '@chakra-ui/react'
import { useState } from 'react';
import logo from '../../Components/badges/LOGOPARA.png'
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [showPassword, setShowPassword] = useState(false);
  const [loginmodal,setLoginModal]=useState(false);
  const [signupmodal,setSignupModal]=useState(true)
  return (
    <>
      <Button size={{base:'md',md:"sm"}} borderRadius={0} onClick={onOpen}>Login</Button>
  {signupmodal &&
      <Modal isOpen={isOpen}  onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody >
             <Flex
      mt={5}
      align={'top'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={0} px={0}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            <Image src={logo} w='200px' alt="Paradise"/>
          </Heading>
          <Text fontSize={'sm'} color={'gray.600'}>
          Get 15% Good Points back on every order
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
         
   
          p={1}>
          <Stack spacing={4}>
          <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
              <Input type="name" />
            </FormControl>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button borderRadius={0}
                loadingText="Submitting"
                size="md"
                bg={'#f76f73'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                  
                }}
                fontWeight="light"
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link onClick={()=>{setLoginModal(true);
                setSignupModal(false)}} color={'#f76f73'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>

         
        </ModalContent>
      </Modal>}

     {loginmodal &&
      <Modal isOpen={isOpen}  onClose={onClose} size={'sm'}>
        <ModalOverlay />
        <ModalContent>
          
          <ModalCloseButton />
          <ModalBody   >
             <Flex 
      mt={5}
      align={'top'}
      justify={'center'}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={0} px={0}>
        <Stack align={'center'}>
          <Heading fontSize={'2xl'} textAlign={'center'}>
            <Image src={logo} w='200px' alt="Paradise"/>
          </Heading>
          <Text fontSize={'sm'} color={'gray.600'}>
          Get 15% Good Points back on every order
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
         
   
          p={1}>
          <Stack spacing={4}>
         
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" />
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button borderRadius={0}
                loadingText="Submitting"
                size="md"
                bg={'#f76f73'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                  
                }}
                fontWeight="light"
                >
               Log In
              </Button>
            </Stack>
            <VStack  pt={2}>
              <Text align={'center'} textTransform="capitalize">
                You Must be SignUp Before Login..
              </Text>
              <br/>
              <Text p={0}>

                Go To <Link color={'#f76f73'} onClick={()=>{
                  setLoginModal(false);
                  setSignupModal(true);
                }}>Signup</Link>
              </Text>
            </VStack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
          </ModalBody>

         
        </ModalContent>
      </Modal>
     }</>
  )
} 

export default Login;