import React from 'react'
import Footer from '../components/footer'
import LandingPage from '../components/landing-page'
import Seo from '../components/seo'
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
