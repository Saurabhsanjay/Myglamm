import { HamburgerIcon } from '@chakra-ui/icons'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, HStack, Image, useDisclosure, Button, Box, Text, Spacer, Stack, useToast
} from '@chakra-ui/react'

import React, { useEffect, useState } from 'react'
import logo from './badges/LOGOPARA.png'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import AppContext from '../context/Appcontext';
import { useContext } from 'react';
import Login from '../Routes/pages/Login';
import CartDrawer from '../Routes/pages/CartDrawer';

export default function NavMobile() {
  const { handleRemove,
    handleChnage,

  
    handleCart, isAuth,
    userName,
    LogOutUser, quantity,
    TotalPrice } = useContext(AppContext)
  const { isOpen, onOpen,onClose:close } = useDisclosure()
  const[cartData,setCartData]=useState([]);
const [loading,setLoading]=useState(true)
  const getCartData = () => {
    setLoading(true);
    fetch("https://paradise-api.onrender.com/rest/getallcart")
      .then((res) => res.json())
      .then((res) =>{setCartData(res.products)
    console.log(res,"Resres")
    
    }).finally(() => setLoading(false));
  };
  
    useEffect(()=>{
    
      //  getCartData();
    },[])
  const btnRef = React.useRef()
  const toast = useToast()

  return (
    <HStack position={'sticky'} zIndex={1}  top={0} shadow={'md'} display={{ base: "grid", lg: "none" }}>
      <HStack  h={16} px={3} bgColor={'white'} justifyContent={'space-between'} >

       <Box><HamburgerIcon cursor={'pointer'} colorScheme='gray' size={'sm'} onClick={onOpen} fontSize={'1.5rem'} /></Box> 
        <Drawer  size={'xs'}
          isOpen={isOpen}
          placement='left'
          onClose={close}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader margin={'auto'} justifyContent='center'><Image w={'50%'}
             src={logo} /></DrawerHeader>

            <DrawerBody >
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Skin Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <HStack><Text p={2}>Makeup</Text></HStack>
                    <HStack><Text p={2}>Skin Care Products</Text></HStack>


                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Spacer />
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Hair Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <HStack><Text p={2}>Shampoo & Conditioners</Text></HStack>



                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Sanitizing Care
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <HStack><Text p={2}>Wipes</Text></HStack>



                  </AccordionPanel>
                </AccordionItem>

                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box as="span" flex='1' textAlign='left' fontWeight='bold'>
                        Paradise Store
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <HStack><Text p={2}>Latest Launch</Text></HStack>
                    <HStack><Text p={2}>Masks</Text></HStack>



                  </AccordionPanel>
                </AccordionItem>

              </Accordion>
            </DrawerBody>

            <DrawerFooter  justifyContent={'center'} alignItems='center'>
            <HStack  >
           

            </HStack>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Image w={110} src={logo} alt={'err'} />
        <HStack> <Login/> <CartDrawer getCartData={getCartData} loading={loading} cartData={cartData}/></HStack>
      </HStack>
    </HStack>
  )
}
  // .dot {
  //   height: 25px;
  //   width: 25px;
  //   background-color: #bbb;
  //   border-radius: 50%;
  //   display: inline-block;
  // }