import React, { useState } from "react";
import { ViewOffIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  Button,
  Link,
  Stack,
  Text,
  Input,
  FormControl,
  FormLabel,
  Box,
  InputGroup,
  ModalBody,
  InputRightElement,
  Flex,
  HStack,
  Heading,
  ModalCloseButton,
  useDisclosure,
  Image,
  VStack,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { Navigate, useNavigate } from "react-router-dom";
const Login1 = ({ isOpen, onClose, setLoginModal, setSignupModal }) => {
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const [showPassword, setShowPassword] = useState(false);
const Navigate=useNavigate()
  const initialValues = {
   
    email: "",
    password: "",
  };
const toast=useToast()
  const {
    values,
    errors,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    setErrors,
    setValues,
    setTouched,
  } = useFormik({
    // validationSchema: binTypeSchema,
    initialValues,
    onSubmit: (values, action) => {
        fetch("https://paradise-api.onrender.com/rest/login", {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-Type": "application/json",
          },
        }).then((res)=>{
          if(res.status==200){
            res.json().then((res)=>{
              console.log(res);
              toast({
                title: `Login Successfull`,
                // description:`Welcome ${resp.user.name}`,
                status: "success",
                position: "top-right",
                variant: 'subtle',
                isClosable: true,
                duration: 2000,
              });
               localStorage.setItem("user", JSON.stringify(res.id));
               localStorage.setItem("username", JSON.stringify(res.name));
              Navigate("/")
              setLoginModal(false)
            })
          }
         else if(res.status!=200){
            res.json().then((res)=>{
                console.log(res);
                toast({
                  title: `${JSON.stringify(res.error)}`,
                  // description:`Welcome ${resp.user.name}`,
                  status: "error",
                  position: "top-right",
                  variant: 'subtle',
                  isClosable: true,
                  duration: 2000,
                });
                
              })
          }
          else{
            toast({
              title: `${res.error}`,
              variant: 'subtle',
              position: "top-right",
              status: "error",
              isClosable: true,
              duration: 2000,
            })
          }
        })
        .catch((err) => {
          console.log(err, "Failed")
          toast({
            title: err,
            variant: 'subtle',
            position: "top-right",
            status: "error",
            isClosable: true,
            duration: 2000,
          })
    
        })
         
          
      }
  });

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Flex mt={5} align={"top"} justify={"center"}>
              <Stack spacing={8} mx={"auto"} maxW={"lg"} py={0} px={0}>
                <Stack align={"center"}>
                  <Heading fontSize={"2xl"} textAlign={"center"}>
                    {/* <Image src={logo} w='200px' alt="Paradise"/> */}
                  </Heading>
                  <Text fontSize={"sm"} color={"gray.600"}>
                    Get 15% Good Points back on every order
                  </Text>
                </Stack>
                <Box rounded={"lg"} p={1}>
                  <Stack spacing={4}>
                    <FormControl id="email" isRequired>
                      <FormLabel>Email address</FormLabel>
                      <Input
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        type="email"
                      />
                    </FormControl>
                    <FormControl id="password" isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input
                          name="password"
                          onChange={handleChange}
                          value={values.password}
                          type={showPassword ? "text" : "password"}
                        />

                        <InputRightElement h={"full"}>
                          <Button
                            variant={"ghost"}
                            onClick={() =>
                              setShowPassword((showPassword) => !showPassword)
                            }
                          >
                            {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Stack spacing={10} pt={2}>
                      <Button onClick={()=>{handleSubmit()}}
                        borderRadius={0}
                        loadingText="Submitting"
                        size="md"
                        bg={"#f76f73"}
                        color={"white"}
                        _hover={{
                          bg: "pink.500",
                        }}
                        fontWeight="light"
                      >
                        Log In
                      </Button>
                    </Stack>
                    <VStack pt={2}>
                      <Text align={"center"} textTransform="capitalize">
                        You Must be SignUp Before Login..
                      </Text>
                      <br />
                      <Text p={0}>
                        Go To{" "}
                        <Link
                          color={"#f76f73"}
                          onClick={() => {
                            setLoginModal(false);
                            setSignupModal(true);
                          }}
                        >
                          Signup
                        </Link>
                      </Text>
                    </VStack>
                  </Stack>
                </Box>
              </Stack>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Login1;
