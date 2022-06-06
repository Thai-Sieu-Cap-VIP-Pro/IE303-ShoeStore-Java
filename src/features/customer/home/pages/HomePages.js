import React from 'react'
import HomeHeader from '../components/HomeHeader'
import HomeBody from '../components/HomeBody'
import HomeFooter from '../components/HomeFooter'
import './HomePage.css'

const HomePages = () => {
  return (
    <>
    <div><HomeHeader/></div>
    <div><HomeBody/></div>
    <div><HomeFooter/></div>
    </>
  )
}

export default HomePages