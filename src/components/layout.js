// ============================================================
// layout.js
//
// Main single-page site layout component, containing header and
// footer components
// ============================================================

// Dependencies
import React from "react"
import PropTypes from "prop-types"

// Components
import Header from "./Header/"
import Footer from './Footer/'

// Styles
import "./layout.css"
import s from '../modules/layout.module.css'

const Layout = (props) => (
  <div className={ s.Layout }>
    <Header top={props.top} scroll={props.scroller} current={props.activeSection} header={props.activeHeader} />
    {props.children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
