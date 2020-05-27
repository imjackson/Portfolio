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
import menu from "../images/menu.svg"

const Header = ({ path, isMobile }) => {
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
        backgroundColor: isIndexPage ? "var(--green)" : "var(--white)",
    }

    return (
        <header style={HeaderStyle} className={styles.Header}>
            <Link to="/" className={styles.LogoButton}>
                <img src={logo} alt="Logo." className={styles.Logo} />
                <h2 className={styles.HeaderTitle}>I'm Jackson.</h2>
            </Link>
            {isMobile ? (
                <button className={styles.MenuButton} type="button">
                    <img src={menu} className={styles.MenuButtonIcon} />
                </button>
            ) : (
                <nav className={styles.Navigation}>
                    <NavigationLink currentPath={path} page="about" />
                    <NavigationLink currentPath={path} page="work" />
                    <NavigationLink currentPath={path} page="contact" />
                </nav>
            )}
        </header>
    )
}

const NavigationLink = ({ currentPath, page }) => {
    const path = "/" + page
    const LinkStyle = {
        borderBottomColor:
            currentPath === path ? "var(--black)" : "transparent",
    }
    return (
        <Link style={LinkStyle} to={path} className={styles.NavigationLink}>
            {page}
        </Link>
    )
}

export default Header
