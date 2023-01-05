import {
  Box,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Button,
  Spacer,
  VStack,
  CircularProgress,
} from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../../context/Appcontext";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FiHeart } from "react-icons/fi";
const Shampoo = () => {
  const { AllData, shortStringdesc, MeMoJi, MeMoJi1, MeMoJi2, shortString,productsData} =
    useContext(AppContext);
  const Navigate = useNavigate();
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
            SHAMPOO &amp; CONDITIONERS
          </Text>
        </HStack>

        <SimpleGrid
          p={{ base: 0, sm: 4 }}
          w={{ base: "100%", lg: "90%" }}
          columns={{ base: 2, sm: 3, md: 4 }}
          spacing={{ base: 0, md: 3, lg: 5 }}
        >
           {productsData.products[0]?.Shampoo?.map((el,i) => {
            return (
              <Box cursor={'pointer'} onClick={()=>Navigate(`/singleproductpage/Shampoo/${el.id}`)} key={i} border='1px solid #eeee'  >
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
  );
};

export default Shampoo;
