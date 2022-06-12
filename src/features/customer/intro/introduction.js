import React from 'react'
import { Routes, Route } from 'react-router-dom'
import IntroductionPage from './pages/IntroductionPage'

export default function Introduction() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<IntroductionPage />} />
            </Routes>
        </div>
    )
}
