import { Box, HStack, Image, SimpleGrid, Text, Button, Spacer,VStack,Divider } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
const Collection = () => {
  const { AllData,shortStringdesc,random,randomforrating1,randomforrating2,handleCart } = useContext(AppContext)
  return (
    <>
        <HStack  p={{base:25,md:50,}} gap='50px' margin='auto'>
            <Image src='https://files.myglamm.com/site-images/400x400/TVC-Collectionpage.jpg' alt='err'/>
            <VStack boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' padding='20px' rounded='md' justify='flex-start' alignItems='flex-start' textAlign='left'>
                <Text   color='pink.500' alignSelf='center' fontWeight='700' fontSize='3xl'  as='u'>MyGlamm</Text>
    <Text  fontWeight='500'>Our Makeup, Face Care and Body Care collection, created for the beauty needs of <br /> over 20 Lakh women </Text>
            </VStack>
        </HStack>
        <Divider/>
        <HStack padding='10px 20px' justify='center'>

<Text bgClip='text'
  bgGradient='linear(to-l, #7928CA, #FF0080)'  alignSelf='center' fontSize='2xl'  as='b'>PRODUCTS</Text>
</HStack>
 <SimpleGrid px={{base:2,sm:4}} columns={{ base: 2,sm:3,md:4}}  gap={2}>
        {
                AllData.CollectionProducts.map((el) => {
                    return (
            <Box borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
                <Box px='2' borderRadius={2} >
                    <Image borderRadius={5} py={1} width='100%' src={el.image} /></Box>
                <Box px='2' >
                    <Text as='b'>{shortStringdesc(el.selection2)}</Text>
                    <Text pt={2} color='gray.500'>{shortStringdesc(el.selection3)}</Text>
                   
                    <Text pt={1} pb='2' color='gray.500'> <span style={{ color: "red" }}>★</span>  {randomforrating1}.{randomforrating2} | {random} reviews</Text>
                    <Text py={2} fontWeight='medium'>₹ {el.selection4}</Text>
                </Box>
                <Spacer/>
                <Box py={3} px='2' display='flex' w={'full'}  >
                <FiHeart fontSize={'1.3rem'} style={{ marginRight: "5px" }} /><Spacer />
                <Button bg={'black'} color='white' fontWeight='medium' size={{ base: "xs", sm: "sm" }} onClick={()=>handleCart(el)} ><HiOutlineShoppingBag fontSize={'1.3rem'} style={{ marginRight: "5px" }} /> Add To Cart</Button> 
                </Box>
            </Box>
            )
                })
            }

          
        </SimpleGrid>
    </>
  )
}

export default Collection
