import React from 'react'
import SocialFooter from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Seo from '../components/Seo'
import '../styles/main.scss'

export default () => {
  return (
    <div id="global-wrapper">
      <Seo />
      <LandingPage />
      <SocialFooter />
    </div>
  )
}
