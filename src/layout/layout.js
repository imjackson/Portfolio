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
import Header from "../components/Header/"
import Footer from "../components/Footer/"

// Styles
import "./layout.css"
import styles from "./layout.module.css"

const Layout = props => (
    <div className={styles.Layout}>
        <Header
            top={props.top}
            scroll={props.scroller}
            current={props.activeSection}
        />
        {props.children}
        <Footer />
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
