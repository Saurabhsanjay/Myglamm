import { Box, Grid, GridItem, HStack, Image, SimpleGrid, Stack, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const Home = () => {
  return (
    <VStack>

  <Stack >
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>

    <Stack p={{base:25,md:50,}} border="1px solid"  direction={{base:"column",md:"column", lg:"row"}} maxW="1400px"
     margin='auto'  gap={6}>

    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
 

 
    </Stack>

    <SimpleGrid p={{base:25,md:50,}} border="1px solid"  columns={{base:2, md:2, lg:4}} maxW="1400px"
     margin='auto'  gap={6}>

    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
    <Box>
    <Image w='100%' src='https://files.myglamm.com/site-images/original/In-the-spotlight-700x488_6.jpg'/>
  <Text textAlign='center'>IN THE SPOTLIGHT</Text>
    </Box>
 

 
    </SimpleGrid>
  </Stack>
    </VStack>
  )
}

export default Home
