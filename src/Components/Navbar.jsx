import { Divider, HStack, Image, Input, InputGroup, InputLeftElement, Spacer, Text, Wrap, WrapItem } from '@chakra-ui/react';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { SearchIcon, StarIcon } from '@chakra-ui/icons'
import { CgProfile } from 'react-icons/cg';
import {BsBag  } from 'react-icons/bs';
import {SiHomeassistantcommunitystore  } from 'react-icons/si';
const Navbar = () => {
    const links = [
        { path: "/", title: "HOME" },
        { path: "/makeup", title: "MAKEUP" },
        { path: "/haircare", title: "HAIRCARE" },
        { path: "/skincare", title: "SKINCARE" },
        { path: "/sanitizingcare", title: "SANITIZING CARE" },
        { path: "/collection", title: "COLLECTION" },
        { path: "/rewards", title: "REWARDS" },
        { path: "/myglamstudio", title: "MYGLAM STUDIO" },
        { path: "/offers", title: "OFFERS" },
      ];
      
  return (
    <>
    <HStack padding='10px 30px' bgColor='#fee8e8'>
        <Text marginRight='20px'  fontSize='xs' fontWeight="500">Pick any product ar Rs 199</Text>
        <Text as='b' color='#D53F8C' fontSize='xs' fontWeight="500">SHOP NOW</Text>
        <Spacer/>
        <Text><SiHomeassistantcommunitystore/></Text>
        <Text fontSize='xs' fontWeight="500">  My Glamm Store</Text>
    </HStack>

   <HStack padding='8px 30px' margin='auto'>
   <Image marginRight='20px' w='150px'   src='https://files.myglamm.com/site-images/original/MyGlamm-Logo_1.jpg'/>
   <InputGroup display={{base:"none", md:"none", lg:"block"}} >
    <InputLeftElement
      pointerEvents='none'
      children={<SearchIcon color='gray.300' />}
    />
    
    <Input  variant='filled' placeholder='Find Lipstick,EyeLiner,Makeup,Tutorial,etc' width='50%'/>
  </InputGroup>
    <Spacer/>
    <Text><BsBag/></Text>
    <Text><CgProfile/></Text>
  </HStack>
    <Wrap    spacing={5} alignSelf='center' justify='center' margin='auto'
  >
  
    {links.map((link) => (
      <WrapItem >
      <NavLink 
     
        // style={({ isActive }) => {
        //   return isActive ? activeStyle : defaultStyle;
        // }}
        // className={({ isActive }) => {
        //   return isActive ? styles.active : styles.default;
        // }}
        key={link.path}
        to={link.path}
        end
      > 
       <Text  fontSize={{base:"10px", md:"20px", lg:"15px"}}
      style={{fontWeight:500,padding:"10px 0px"}}> {link.title}</Text>
      </NavLink></WrapItem>
    ))}
  </Wrap>
  <Divider/>
    </>
  )
}

export default Navbar
