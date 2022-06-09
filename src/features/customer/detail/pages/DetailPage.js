import React from 'react'
import HomeHeader from '../../home/components/HomeHeader'
import DetailProduct from '../components/DetailProduct'
import HomeFooter from '../../home/components/HomeFooter'

function DetailPage() {
  return (
    <>
    <div><HomeHeader/></div>
    <div><DetailProduct/></div>
    <div><HomeFooter/></div>
    </>
  )
}

export default DetailPage