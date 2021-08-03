import React from 'react'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Seo from '../components/Seo'
import '../styles/main.scss'

export default () => {
  return (
    <div id="global-wrapper">
      <Seo />
      <LandingPage />
      <Footer />
    </div>
  )
}
