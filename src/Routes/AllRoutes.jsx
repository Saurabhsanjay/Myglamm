import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/makeup' element={<h1>home</h1>}/>
        <Route path='/haircare' element={<h1>home</h1>}/>
        <Route path='/skincare' element={<h1>home</h1>}/>
        <Route path='/sanitizingcare' element={<h1>home</h1>}/>
        <Route path='/collection' element={<h1>home</h1>}/>
        <Route path='/rewards' element={<h1>home</h1>}/>
        <Route path='/myglamstudio' element={<h1>home</h1>}/>
        <Route path='/offers' element={<h1>home</h1>}/>
    </Routes>
      
    </div>
  )
}

export default AllRoutes
