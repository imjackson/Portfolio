import React from "react"
import { Link } from 'gatsby'

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import Footer from '../components/footer'

// Icons 
import logo from '../images/logos/logo.svg'
// Styles
import s from '../modules/layout.module.css'

const NotFoundPage = () => (
  <div className={ s.NotFound }>
    <header className={ s.NotFoundHeader }>
      <Link to="/"><img src={logo} alt="Logo." className={ s.Logo } /></Link>
    </header>
    <div className={ s.NotFoundContent }>
      <h2 className={ s.NotFoundTitle }>Uh oh,</h2>
      <h1 className={ s.NotFoundNumber }> <span className={ s.NotFoundNumberSmall}>a</span> 404 <span className={ s.NotFoundNumberSmall}>error.</span></h1>
      <p className={ s.NotFoundText }>It seems you've been led to a route that doesn't exist on my site. That's especially weird considering my site is only one page. No worries, just click the link below to view my site.</p>
      <div className={ s.ButtonAdj }><Link to="/" className={ s.NotFoundReturn }>imjackson.dev &#8594;</Link></div>
    </div>
    
    <Footer />
  </div>
)

export default NotFoundPage
