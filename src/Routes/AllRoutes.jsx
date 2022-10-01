import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import Makeup from './pages/Makeup'
import Rewards from './pages/Rewards'
import SanitizingCare from './pages/SanitizingCare'
import Shampoo from './pages/Shampoo'
import SingleProductPage from './pages/SingleProductPage'
import SkinCare from './pages/SkinCare'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/makeup' element={<Makeup/>}/>
        <Route path='/haircare' element={<Shampoo/>}/>
        <Route path='/skincare' element={<SkinCare/>}/>
        <Route path='/sanitizingcare' element={<SanitizingCare/>}/>
        <Route path='/collection' element={<Collection/>}/>
        <Route path='/rewards' element={<Rewards/>}/>
        <Route path='/myglamstudio' element={<h1>home</h1>}/>
        <Route path='/offers' element={<h1>home</h1>}/>
        <Route path='/singleproductpage/:id' element={<SingleProductPage/>}/>
    </Routes>
      
    </div>
  )
}

export default AllRoutes
