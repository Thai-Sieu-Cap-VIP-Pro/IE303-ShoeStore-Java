import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ContactPage from './pages/ContactPage'

export default function Contact() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<ContactPage />} />
            </Routes>
        </div>
    )
}
