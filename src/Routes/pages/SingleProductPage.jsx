import { Badge, Button, HStack, Image, Text, useToast, VStack,useDisclosure,  Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    SimpleGrid,
    Box,
    Flex,
    Divider,
    Center,
    IconButton,
    ButtonGroup,
    CircularProgress, } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { BsBag } from 'react-icons/bs'
import { NavLink, useParams } from 'react-router-dom';
import AppContext from '../../context/Appcontext';
import { AiOutlineStar } from 'react-icons/ai';
import { AddIcon, ArrowRightIcon, MinusIcon, StarIcon } from '@chakra-ui/icons';
import Scrollbars from 'react-custom-scrollbars-2';


                
const SingleProductPage = () => {
 const{   handleRemove,
          handleChnage,
          quantity,
          setCartData,
          cartData,
          handleCart,
          TotalPrice,MeMoJi }=useContext(AppContext)
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
   
    const { type,id } = useParams();
    const [singledata, setData] = React.useState({});
    
    const btnRef = React.useRef()
const {productsData}=useContext(AppContext)
     const getSinglePageData=async()=>{
     
         let typedata= Object.values(productsData.products[0]).flat(Infinity).find((el)=>el.id==id);
    //    setData(result);
    setData(typedata);
    setLoading(false);
    console.log(typedata);
     }

    useEffect(()=>{
         getSinglePageData()
        
    },[id])
  
    // const Saved = () =>
    // toast({
    //   title: 'Added To Cart',

    //   status: 'success',
    //   duration: 3000,
    //   isClosable: true,
    // })

   
    let [loading, setLoading] = useState(true);
  

 
  if(loading){
    return(
        <div style={{display:"grid",placeItems:"center",height:"500px"}}>
        <CircularProgress isIndeterminate color='pink.500' thickness='6px' size='3.5rem' />
        </div>
        )
}
  return (
    <>
    <SimpleGrid columns={{base:1,sm:1,lg:2}}    >
    {/* for image start */}
        <Box margin={{base:"auto"}} objectFit={'cover'}>
   <Image  src={singledata.image} alt='eror'/>
        </Box>
        {/* for image end */}
       
       {/* for product info start */}
        <Box  py={5} px={{base:2,sm:3,md:5}}>
        <Text  as='b' fontSize={{base:'20px',md:"xl"}}>{singledata.title}</Text>
        <Text >{singledata.description}</Text>
        
        {/* for button & ratings  */}
        <Box  w={{base:'100%',md:"100%",lg:"50%"}} p={2} mt={{base:"6",md:7}} border='2px solid #f3f3f3'>
         <Box py={3}  display={'flex'} justifyContent={'space-between'} borderBottom='2px solid #f3f3f3'>
            <Text>Price</Text>
            <Text as='b'>Rs {singledata.price}</Text>
         </Box>
         <Box  py={3} display={'flex'} justifyContent={'space-between'} borderBottom='2px solid #f3f3f3'> 
         <Text>Status</Text>
            <Text as='b'>In Stock</Text>
            </Box>
         <Box  py={3} display={'flex'} justifyContent={'space-between'} borderBottom='2px solid #f3f3f3'>
         <Text>Reviews</Text>
            <Text as='b'>{MeMoJi.slice(0,4)} Reviews</Text>
         </Box>
         <Box py={3}  display={'flex'} justifyContent={'space-between'} borderBottom='2px solid #f3f3f3'>
            <Text>Quantity</Text>
            <Text>
            <ButtonGroup size='sm' isAttached variant='outline'>
  <IconButton aria-label='Add to friends' icon={<MinusIcon />} />
  <Button>{singledata.qty}</Button>
            <IconButton aria-label='Add to friends' icon={<AddIcon />} />
</ButtonGroup>

            </Text>
         </Box>
         <Box><Button w={'full'} bgColor={'black'} borderRadius={0} _hover={{color:"black",bgColor:"pink"}} color='white'>Add To Cart</Button></Box>
        </Box>
        {/* for button & ratings */}
        </Box>
        {/* for product info end */}
    </SimpleGrid>
  
   <>
     
      {/* <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader> <Flex pt={2} gap='10px'><BsBag/> My Bag  ({quantity})  </Flex></DrawerHeader>
           <Scrollbars>
          <DrawerBody>
           <SimpleGrid>
              {
                cartData.map((el)=>{
                    return(
                        <Box marginBottom={2} borderRadius='lg' p={1} border='1px solid #a0b2cd' >
                        <Flex gap='5px'>

                            <Image w='80px' src={el.image}/>
                            <Text  fontSize='sm' fontWeight='500'>{el.selection2}</Text>
                        </Flex>
                          <Flex justify='space-evenly'>
                          <Text p={2}  fontSize='sm' fontWeight='500'>₹ {el.selection4}</Text>
                          <Text p={1}  fontSize='md' fontWeight='500'>Qty</Text>
                          <Button onClick={() => handleChnage(el, -1)} size="sm" borderRadius="full"><MinusIcon/></Button>
                          <Badge p={2}  colorScheme='red' textAlign='center'>{el.qty}</Badge>
                          <Button onClick={() => handleChnage(el, 1)}  size="sm" borderRadius="full"><AddIcon/></Button>
                          
                          </Flex>
                          <Button  onClick={() => handleRemove(el.id)} colorScheme='red' size='xs'>Remove Product</Button>
                         
                        </Box>
                    )
                })
              }
           </SimpleGrid>
           

          </DrawerBody>
          </Scrollbars>
          <DrawerFooter  bgColor='white'  >
        <HStack >
            <VStack marginRight={3} ><Text fontSize='xs' > Congrats! You're eligible for free gift
Please select. </Text> </VStack>
            <VStack  ><Text fontWeight='500' fontSize='sm' > TotalAmount ₹   {TotalPrice} </Text> </VStack>
            
        </HStack>
         </DrawerFooter>
          <DrawerFooter  bgColor='#1a202c'  >
           
          <NavLink to='/payementform'>  <Flex gap='80px' >
                <Text  color='white' fontWeight='500'>
                Proceed To Checkout
                </Text>
                <ArrowRightIcon mt={1} color='white'/>
               
            </Flex>
            </NavLink>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
      {/* <HStack boxShadow='md'   rounded='lg' p={{base:35,md:70,}}  margin='auto' alignContent='center' alignItems='center' justifyItems='center' >
   <Flex p={5} spacing='10'  w='100%' justifyContent={'center'}   rounded='md'>
    <VStack  borderBottom='4px solid pink'  >
        <Image w='450px' h='400px' src={userDetails[0].image} alt='err'/>
    </VStack>
    <Center height='100%'>
  <Divider orientation='vertical' />
</Center>
    <VStack   borderRight='4px solid pink' minH='100%' spacing={5} padding='30px' textAlign='left' alignContent='flex-start' alignItems='flex-start' justifyItems='flex-start' justifyContent='flex-start' >
        <Text fontWeight='600'>{userDetails[0].selection2}</Text>
        <HStack>
        <Text fontWeight='500'>   
            
              <StarIcon w={4} h={4} mr={2} mb={2} color="teal.500"/>
             4.8 | 461 reviews</Text> </HStack>
        <Text fontWeight='500'>₹ {userDetails[0].selection4}</Text>
        <Text>(MRP incl. of all taxes)</Text>
        <Button
        
          onClick={() => {
           onOpen()
            handleCart(userDetails[0])
          }}
        
        //    onClick={()=>handleCart(userDetails[0])}
            colorScheme='blue'> <BsBag  /> ADD TO BAG</Button>
        <Badge  borderRadius='full' p={2} px='2' colorScheme='teal'>You will receive cashback worth ₹76 as myglammPOINTS on this purchase</Badge>
    </VStack>
   </Flex>
   </HStack> */}
    </>
    </>
  )
}

export default SingleProductPage
