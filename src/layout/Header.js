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

const Header = ({ isIndexPage }) => {
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
                {headerIsActive && (
                    <h2 className={styles.HeaderTitle}>I'm Jackson.</h2>
                )}
            </Link>

            <div className={styles.Nav}>
                <NavButton page="About" to="/about" />
                <NavButton page="Work" to="/work" />
                <NavButton page="Contact" to="/contact" />
            </div>
        </header>
    )
}

const NavButton = ({ page, to }) => {
    // const ButtonStyle = {
    //     borderBottom:
    //         current === section
    //             ? "2px solid var(--black)"
    //             : "2px solid transparent",
    //     transition: ".2s ease",
    // }
    return (
        <Link to={to} className={styles.NavButton}>
            {page}
        </Link>
    )
}

export default Header
