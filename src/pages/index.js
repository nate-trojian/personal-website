import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import LandingPage from '../components/LandingPage'
import Seo from '../components/Seo'
import '../styles/main.scss'

export default () => {
  return (
    <div id="global-wrapper">
      <Seo />
      <Header />
      <LandingPage />
      <Footer />
    </div>
  )
}
