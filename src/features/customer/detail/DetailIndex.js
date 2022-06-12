import React from 'react'
import { Route, Routes } from 'react-router-dom'
import DetailPage from './pages/DetailPage'

export default function DetailIndex() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<DetailPage />} />
            </Routes>
        </div>
    )
}
