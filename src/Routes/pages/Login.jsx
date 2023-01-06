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
import { useState } from "react";
import { useFormik } from "formik";
import logo from "../../Components/badges/LOGOPARA.png";
import Login1 from "./Login1";
import { useNavigate } from "react-router-dom";
import { FiUser } from "react-icons/fi";
function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [showPassword, setShowPassword] = useState(false);
  const [loginmodal, setLoginModal] = useState(false);
  const [signupmodal, setSignupModal] = useState(true);
  const toast=useToast()
const Navigate=useNavigate()
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

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
      fetch("https://paradise-api.onrender.com/rest/signin", {
        method: "POST",
        body: JSON.stringify(values),
        headers: {
          "Content-Type": "application/json",
        },
      }).then((res)=>{
        if(res.status==201){
          res.json().then((res)=>{
            console.log(res);
            toast({
              title: `SignUp Successfull`,
              // description:`Welcome ${resp.user.name}`,
              status: "success",
              position: "top-right",
              variant: 'subtle',
              isClosable: true,
              duration: 2000,
            });
            localStorage.setItem("user", JSON.stringify(res.user));
            setLoginModal(true)
            setSignupModal(false)
          })
        }
        else{
          toast({
            title: `User Already Exists`,
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
    })
 

  return (
    <>
      <Button size={{ base: "md", md: "sm" }} bg='white' borderRadius={'full'} onClick={onOpen}>
       <FiUser size={25}/>
      </Button>
      {signupmodal && (
        <Modal isOpen={isOpen} onClose={onClose} size={"sm"}>
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody>
              <Flex mt={5} align={"top"} justify={"center"}>
                <Stack spacing={8} mx={"auto"} maxW={"lg"} py={0} px={0}>
                  <Stack align={"center"}>
                    <Heading fontSize={"2xl"} textAlign={"center"}>
                      <Image src={logo} w="200px" alt="Paradise" />
                    </Heading>
                    <Text fontSize={"sm"} color={"gray.600"}>
                      Get 15% Good Points back on every order
                    </Text>
                  </Stack>
                  <Box rounded={"lg"} p={1}>
                    <Stack spacing={4}>
                      <FormControl id="name" isRequired>
                        <FormLabel>Name</FormLabel>
                        <Input
                          name="name"
                          onChange={handleChange}
                          value={values.name}
                          type="name"
                        />
                      </FormControl>
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
                        <Button
                          borderRadius={0}
                          onClick={handleSubmit}
                          loadingText="Submitting"
                          size="md"
                          bg={"#f76f73"}
                          color={"white"}
                          _hover={{
                            bg: "pink.500",
                          }}
                          fontWeight="light"
                        >
                          Sign up
                        </Button>
                      </Stack>
                      <Stack pt={6}>
                        <Text align={"center"}>
                          Already a user?{" "}
                          <Link
                            onClick={() => {
                              setLoginModal(true);
                              setSignupModal(false);
                            }}
                            color={"#f76f73"}
                          >
                            Login
                          </Link>
                        </Text>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Flex>
            </ModalBody>
          </ModalContent>
        </Modal>
      )}

      {loginmodal && (
        <Login1
          isOpen={isOpen}
          onClose={onClose}
          setSignupModal={setSignupModal}
          setLoginModal={setLoginModal}
        />
      )}
    </>
  );
}

export default Login;
