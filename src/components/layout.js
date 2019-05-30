

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

// Components
import Header from "./header"
import Footer from './footer'

// Styles
import "./layout.css"
import s from '../modules/layout.module.css'

const Layout = ({ children }) => (
  <div className={ s.Layout }>
    <Header />
    {children}
    <Footer />
  </div>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
