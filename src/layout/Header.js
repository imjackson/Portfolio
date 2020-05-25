// ============================================================
// Header.js
//
// Main single-page site header component
// ============================================================

// Dependencies
import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

// Styles
import styles from "./layout.module.css"

// Icons
import logo from "../images/logos/logo.svg"

const Header = ({ path }) => {
    const isIndexPage = path === "/"
    const [headerIsActive, setHeaderIsActive] = useState(false)
    const headerBackgroundColorActive = "var(--white)"
    const headerBackgroundColorInactive = isIndexPage
        ? "var(--green)"
        : "var(--white)"

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler)
        return () => {
            window.removeEventListener("scroll", scrollHandler)
        }
    }, [])

    const scrollHandler = () => {
        let offset = window.pageYOffset
        const isActive = offset >= 40
        setHeaderIsActive(isActive)
    }

    const HeaderStyle = {
        backgroundColor: headerIsActive
            ? headerBackgroundColorActive
            : headerBackgroundColorInactive,
        borderColor: headerIsActive ? "var(--green)" : "transparent",
    }

    return (
        <header style={HeaderStyle} className={styles.Header}>
            <Link to="/" className={styles.LogoButton}>
                <img src={logo} alt="Logo." className={styles.Logo} />
                <h2 className={styles.HeaderTitle}>I'm Jackson.</h2>
            </Link>
            <nav className={styles.Navigation}>
                <NavigationLink currentPath={path} page="about" />
                <NavigationLink currentPath={path} page="work" />
                <NavigationLink currentPath={path} page="contact" />
            </nav>
        </header>
    )
}

const NavigationLink = ({ currentPath, page }) => {
    const thisPath = "/" + page
    const LinkStyle = {
        borderBottomColor:
            currentPath === thisPath ? "var(--black)" : "transparent",
    }
    return (
        <Link style={LinkStyle} to={thisPath} className={styles.NavigationLink}>
            {page}
        </Link>
    )
}

export default Header
