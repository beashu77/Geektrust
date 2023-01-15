import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../Components/Cart'
import Product from '../Components/Product'

const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Product/>}/>
            <Route path="/cart" element={<Cart/>}/>
        </Routes>
    </div>
  )
}

export default AllRoutes