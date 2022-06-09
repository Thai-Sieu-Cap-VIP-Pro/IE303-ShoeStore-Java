import React from 'react'
import { Route, Routes } from 'react-router-dom'
import OrderPage from './Pages/OrderPage'

function OrderIndex() {
  return (
    <div>
        <Routes>
            <Route index element={<OrderPage/>}></Route>
        </Routes>
    </div>
  )
}

export default OrderIndex