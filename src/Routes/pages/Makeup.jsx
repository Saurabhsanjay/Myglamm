import { Box, HStack, Image, SimpleGrid, Text, Button, Spacer, CircularProgress } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AppContext } from '../../context/Appcontext'
import { HiOutlineShoppingBag } from 'react-icons/hi';
import { FiHeart } from 'react-icons/fi';
import { useEffect } from 'react';
import { useState } from 'react';


const Makeup = () => {
    const { AllData,shortString,shortStringdesc,random,randomforrating1,randomforrating2,handleCart } = useContext(AppContext)
    let [loading, setLoading] = useState(true);
    useEffect(()=>{
        setTimeout(() => {
            setLoading(false)
        }, 2000);
    },[])
    if(loading){
        return(
            <div style={{display:"grid",placeItems:"center",height:"500px"}}>
            <CircularProgress isIndeterminate color='pink.500' thickness='6px' size='3.5rem' />
            </div>
            )
    }
    
   

    

    const generateRandomNumbers = (min, max, times) => {
        const randoms = []
    
        for (let i = 0; i < times; i++) {
            randoms.push(Math.floor(Math.random() * (max - min) + min))
        }
    
        return randoms
    }
    
    // Later call it like so
   
    
    
    


   return (<>
        <HStack padding='10px 20px' justify='center'>

            <Text bgClip='text'
                bgGradient='linear(to-l, #7928CA, #FF0080)' color='pink.500' alignSelf='center' fontSize='2xl' as='b'>MAKEUP</Text>
        </HStack>
        
        <SimpleGrid px={{base:2,sm:4}} columns={{ base: 2,sm:3,md:5 }}  gap={2}>
        {
                AllData.Makeup.map((el,i) => {
                    return (
            <Box key={i} borderRadius={10} boxShadow='rgba(0, 0, 0, 0.24) 0px 3px 8px' >
                <Box px='2' borderRadius={2} >
                    <Image borderRadius={5} py={1} width='100%' src={el.image} /></Box>
                <Box px='2' >
                    <Text as='b'>{shortString(el.selection2)}</Text>
                    <Text pt={2} color='gray.500'>{shortStringdesc(el.selection3)}</Text>
                   
                    <Text pt={1} pb='2' color='gray.500'> <span style={{ color: "red" }}>★</span>  {generateRandomNumbers(1, 4, 30)[i]}.{generateRandomNumbers(1, 9, 30)[i]} | {generateRandomNumbers(1000, 5000, 30)[i]} reviews</Text>
                    <Text py={2} fontWeight='medium'>₹ {el.selection4}</Text>
                </Box>
                <Spacer/>
                <Box zIndex={9999} py={3} px='2' display='flex' w={'full'}  >
                <FiHeart fontSize={'1.3rem'} style={{ marginRight: "5px" }} /><Spacer />
                <Button  bg={'black'} color='white' fontWeight='medium' size={{ base: "xs", sm: "sm" }} onClick={()=>handleCart(el)} ><HiOutlineShoppingBag fontSize={'1.3rem'} style={{ marginRight: "5px" }} /> Add To Cart</Button> 
                </Box>
            </Box>
            )
                })
            }

          
        </SimpleGrid>

      

    </>
    )
}

export default Makeup
