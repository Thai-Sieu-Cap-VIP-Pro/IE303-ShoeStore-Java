import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProductsPage from './pages/ProductsPage'

export default function Introduction() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<ProductsPage />} />
            </Routes>
        </div>
    )
}
