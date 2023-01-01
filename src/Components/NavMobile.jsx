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

import React from 'react'
import logo from './badges/LOGOPARA.png'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import AppContext from '../context/Appcontext';
import { useContext } from 'react';

export default function NavMobile() {
  const { handleRemove,
    handleChnage,

    setCartData,
    cartData,
    handleCart, isAuth,
    userName,
    LogOutUser, quantity,
    TotalPrice } = useContext(AppContext)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  const toast = useToast()

  return (
    <HStack position={'sticky'} zIndex={1}  top={0} shadow={'md'} display={{ base: "grid", lg: "none" }}>
      <HStack  h={16} px={3} bgColor={'white'} justifyContent={'space-between'} >

       <Box><HamburgerIcon cursor={'pointer'} colorScheme='gray' size={'sm'} onClick={onOpen} fontSize={'1.5rem'} /></Box> 
        <Drawer  size={'xs'}
          isOpen={isOpen}
          placement='left'
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader><Image w={'50%'} src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg' /></DrawerHeader>

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

            <DrawerFooter>
              <Button variant='outline' mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme='blue'>Save</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
        <Image w={110} src={logo} alt={'err'} />
        <HStack><HiOutlineShoppingBag size={'1.5rem'} /><span
         style={{ height: "20px", width: "20px", backgroundColor:
          "black", borderRadius: "50%", color: "white", textAlign: 
          "center", marginLeft: "-3px", marginBottom: "0.7rem" }} class="dot">{quantity}</span></HStack>
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