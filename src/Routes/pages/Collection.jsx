import { Box, HStack, Image, SimpleGrid, Text, Spacer,VStack,Divider, CircularProgress } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'

const Collection = () => {
  const { AllData,shortStringdesc,MeMoJi,MeMoJi1,MeMoJi2,shortString,productsData} = useContext(AppContext)
  const Navigate=useNavigate()
  let [loading, setLoading] = useState(true);
  

    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
            // generateRandomNumbers()
        }, 1000);
    },[])
  if(loading){
    return(
        <div style={{display:"grid",placeItems:"center",height:"500px"}}>
        <CircularProgress isIndeterminate color='pink.500' thickness='6px' size='3.5rem' />
        </div>
        )
}
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
        <>
    <VStack>
      <HStack padding="10px 20px" justify="center">
        <Text
          bgClip="text"
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          color="pink.500"
          alignSelf="center"
          fontSize="2xl"
          as="b"
        >
          COLLECTIONS
        </Text>
      </HStack>

      <SimpleGrid
        p={{ base: 0, sm: 4 }}
        w={{ base: "100%", lg: "90%" }}
        columns={{ base: 2, sm: 3, md: 4 }}
        spacing={{ base: 0, md: 3, lg: 5 }}
      >
         {productsData?.products[0]?.CollectionProducts?.map((el,i) => {
          return (
            <Box cursor={'pointer'} onClick={()=>Navigate(`/singleproductpage/CollectionProducts/${el.id}`)} key={i} border='1px solid #eeee'  >
                <Box px='2' borderRadius={2} >
                    <Image borderRadius={5} py={1} width='100%' src={el.image} /></Box>
                <Box px='2' >
                    <Text as='b' fontSize={{base:"15px",lg:'lg'}}>{shortString(el.title)}</Text>
                    <Text pt={2} fontSize={{base:"14px",lg:'md'}} color='gray.500'>{shortStringdesc(el.description)}</Text>
                   
                    <Text fontSize={{base:"14px",lg:'lg'}} pt={1} pb='2' color='gray.500'> <span style={{ color: "red" }}>★</span>  {MeMoJi[i]}.{MeMoJi1[i]} | {MeMoJi2[i]} reviews</Text>
                    <Text py={2} fontWeight='medium'>₹ {el.price}</Text>
                </Box>
                <Spacer/>
                {/* <Box zIndex={9999} py={3} px='2' display='flex' w={'full'}  >
                <FiHeart fontSize={'1.3rem'} style={{ marginRight: "5px" }} /><Spacer />
                <Button  bg={'black'} color='white' fontWeight='medium' size={{ base: "xs", sm: "sm" }} onClick={()=>handleCart(el)} ><HiOutlineShoppingBag fontSize={'1.3rem'} style={{ marginRight: "5px" }} /> Add To Cart</Button> 
                </Box> */}
            </Box>
          );
        })}
      </SimpleGrid>
    </VStack>
  </>
    </>
  )
}

export default Collection
