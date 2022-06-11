import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProfilePage from './pages/ProfilePage'

export default function Profile() {
    return (
        <div>
            <Routes>
                <Route path="/*" element={<ProfilePage />} />
            </Routes>
        </div>
    )
}
