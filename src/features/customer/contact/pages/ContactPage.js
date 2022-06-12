import React from 'react'
import HomeHeader from '../../home/components/HomeHeader'
import HomeFooter from '../../home/components/HomeFooter'
import ContactBody from '../components/ContactBody'

function ContactPage() {
  return (
    <>
    <div><HomeHeader/></div>
    <div><ContactBody/></div>
    <div><HomeFooter/></div>
    </>
  )
}

export default ContactPage