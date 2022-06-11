import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NewsPage from './pages/NewsPage'

export default function News() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<NewsPage />} />
            </Routes>
        </div>
    )
}
