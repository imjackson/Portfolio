// ============================================================
// 404.js
//
// Site 404 page to be displayed when a user hits a non-existant
// route
// ============================================================

// Dependencies
import React from "react"
import { Link } from 'gatsby'

// Components
import SEO from "../components/seo"
import Footer from '../components/Footer/'
import InternalHeader from '../components/InternalHeader/'

// Styles
import s from '../modules/notfound.module.css'

const NotFoundPage = () => (
  <div className={ s.PageContainer }>
    <SEO title="404: Not Found | Front-End Developer" description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites." />
    <InternalHeader />
    <div className={ s.NotFoundContent }>
      <h2 className={ s.NotFoundTitle }>Uh oh,</h2>
      <h1 className={ s.NotFoundNumber }> <span className={ s.NotFoundNumberSmall}>a</span> 404 <span className={ s.NotFoundNumberSmall}>error.</span></h1>
      <p className={ s.NotFoundText }>It seems you've been led to a route that doesn't exist on my site. That's especially weird considering my site is only one page. No worries, just click the link below to view my site.</p>
      <div className={ s.ButtonContainer }><Link to="/" className={ s.Button }>imjackson.dev &#8594;</Link></div>
    </div>
    
    <Footer />
  </div>
)

export default NotFoundPage
