import React from 'react'
import { Route , Routes} from 'react-router-dom'
import HomePages from './pages/HomePages'

const HomeIndex = () => {
  return (
    <div>
        <Routes>
            <Route index element={<HomePages/>} />
        </Routes>
    </div>
  )
}

export default HomeIndex