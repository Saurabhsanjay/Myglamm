import { ArrowRightIcon, MinusIcon,AddIcon } from "@chakra-ui/icons";
import { Drawer,  DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,Text,HStack,VStack,Flex,Button,Image,Badge,Box,
    SimpleGrid,
    useDisclosure,
    IconButton,
    ButtonGroup,
    CircularProgress, } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

import Scrollbars from "react-custom-scrollbars-2";
import { BsBag } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { NavLink } from "react-router-dom";

const CartDrawer = ({cartData,getCartData,loading}) => {
   let user=JSON.parse(localStorage.getItem("user"))
  console.log(cartData.length,"from navbar")
//   console.log(id,"id")
  // console.log(user,"userkiid");
//   console.log((cartData.map((el)=>el.user)),"user")
    
    const {isOpen,onClose,onOpen}=useDisclosure()

    useEffect(()=>{
       getCartData();
    },[])
  return (
    <div>
      <>
      {/* <BsBag fontSize="20px"  /> */}
     <HStack>

      <HiOutlineShoppingBag cursor={'pointer'} onClick={()=>{onOpen();getCartData()}}  size={'1.5rem'} />     <span
         style={{ height: "20px", width: "20px", backgroundColor:
          "black", borderRadius: "50%", color: "white", textAlign: 
          "center", marginLeft: "-3px", marginBottom: "0.7rem" }} class="dot">{cartData.length}</span></HStack>
        <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>
              {" "}
              <Flex pt={2} gap="10px">
                <BsBag />
                  {/* My Bag ({cartData.updatedqty}){" "}  */}
              </Flex>
            </DrawerHeader>
            <Scrollbars>
              <DrawerBody>
                <SimpleGrid>
                 {
                    loading ? (
                        <div style={{display:"grid",placeItems:"center",height:"500px"}}>
            <CircularProgress isIndeterminate color='pink.500' thickness='6px' size='3.5rem' />
            </div>
                    ):(
                    cartData?.map((el) => {
                    if(el.user===user)
                   
                    return (
                      <Box key={el._id}
                        marginBottom={2}
                        borderRadius="lg"
                        p={1}
                        border="1px solid #a0b2cd"
                      >
                        <Flex gap="5px">
                          <Image w="80px" src={el.image} />
                          <Text fontSize="sm" fontWeight="500">
                            {el.title}
                          </Text>
                        </Flex>
                        <Flex justify="space-evenly">
                          <Text p={2} fontSize="sm" fontWeight="500">
                            ₹ {el.price}
                          </Text>
                          <Text p={1} fontSize="md" fontWeight="500">
                            Qty
                          </Text>
                          <ButtonGroup size='sm' isAttached variant='outline'>
  <IconButton  aria-label='Add to friends' icon={<MinusIcon />} />
  <Button>{el.updatedqty}</Button>
            <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>
                        </Flex>
                        <Button
                        //   onClick={() => handleRemove(el.id)}
                          colorScheme="red"
                          size="xs"
                        >
                          Remove Product
                        </Button>
                      </Box>
                    );
                  }))
                  } 
                </SimpleGrid>
              </DrawerBody>
            </Scrollbars>
            <DrawerFooter bgColor="white">
              <HStack>
                <VStack marginRight={3}>
                  <Text fontSize="xs">
                    {" "}
                    Congrats! You're eligible for free gift Please select.{" "}
                  </Text>{" "}
                </VStack>
                <VStack>
                  <Text fontWeight="500" fontSize="sm">
                    {" "}
                    {/* TotalAmount ₹ {TotalPrice}{" "} */}
                  </Text>{" "}
                </VStack>
              </HStack>
            </DrawerFooter>
            <DrawerFooter bgColor="#1a202c">
              <NavLink to="/payementform">
                {" "}
                <Flex gap="80px">
                  <Text color="white" fontWeight="500">
                    Proceed To Checkout
                  </Text>
                  <ArrowRightIcon mt={1} color="white" />
                </Flex>
              </NavLink>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </>
    </div>
  );
};

export default CartDrawer;
