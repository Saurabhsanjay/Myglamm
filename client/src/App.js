import React from 'react'
import Navbar from './Components/Navbar'
import AllRoutes from './Routes/AllRoutes'
import './App.css'
 import "slick-carousel/slick/slick.css"; 
 import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import { Divider, Stack } from '@chakra-ui/react';
import NavMobile from './Components/NavMobile';
const App = () => {
  return (
    <Stack>
      <Navbar/>
      <NavMobile/>
    <AllRoutes/>
    <Divider/>
    <Footer/>
    </Stack>
  )
}

export default App
