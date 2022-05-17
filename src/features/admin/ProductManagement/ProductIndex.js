import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ProductPage from './Pages/ProductPage'

function ProductIndex() {
  return (
    <div>
        <Routes>
            <Route index element={<ProductPage/>}></Route>
        </Routes>
    </div>
  )
}

export default ProductIndex