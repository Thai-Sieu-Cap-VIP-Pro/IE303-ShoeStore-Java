import React from 'react'
import HomeHeader from '../../home/components/HomeHeader'
import HomeFooter from '../../home/components/HomeFooter'
import IntroductionBody from '../components/IntroductionBody'

function IntroductionPage() {
  return (
    <>
    <div><HomeHeader/></div>
    <div><IntroductionBody/></div>
    <div><HomeFooter/></div>
    </>
  )
}

export default IntroductionPage