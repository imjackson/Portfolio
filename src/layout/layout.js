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
import Header from "./Header"
import Footer from "./Footer"

// Styles
import "./layout.css"
import styles from "./layout.module.css"

const Layout = ({ children, location }) => {
    const path = location.pathname
    const index = path === "/"

    const getBackgroundColor = () => {
        if (index) {
            return {
                backgroundColor: "var(--green)",
            }
        } else {
            return {
                backgroundColor: "var(--white)",
            }
        }
    }

    return (
        <div style={getBackgroundColor()} className={styles.Layout}>
            <Header index={index} />
            <main className={styles.Main}>{children}</main>
            <Footer />
        </div>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Layout
