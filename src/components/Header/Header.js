// ============================================================
// Header.js
//
// Main single-page site header component
// ============================================================

// Dependencies
import React, { useState, useEffect } from "react"

// Styles
import styles from "./Header.module.css"

// Icons
import logo from "../../images/logos/logo.svg"

const Header = ({ top, scroll, current }) => {
    const [headerIsActive, setHeaderIsActive] = useState(false)

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
        backgroundColor: headerIsActive ? "var(--white)" : "var(--green)",
        boxShadow: headerIsActive ? "0px 5px 8px 2px rgba(0,0,0,0.08)" : "none",
        height: headerIsActive ? "4.5rem" : "5.5rem",
        transition: ".4s ease",
    }

    return (
        <header style={HeaderStyle} className={styles.Container}>
            <div className={styles.Content}>
                <button onClick={top} className={styles.LogoButton}>
                    <img src={logo} alt="Logo." className={styles.Logo} />
                    {headerIsActive && (
                        <h2 className={styles.HeaderTitle}>I'm Jackson.</h2>
                    )}
                </button>

                <div className={styles.Nav}>
                    <NavButton
                        section="about"
                        current={current}
                        scrollFunction={scroll}
                    />
                    <NavButton
                        section="work"
                        current={current}
                        scrollFunction={scroll}
                    />
                    <NavButton
                        section="contact"
                        current={current}
                        scrollFunction={scroll}
                    />
                </div>
            </div>
        </header>
    )
}

const NavButton = ({ current, section, scrollFunction }) => {
    const ButtonStyle = {
        borderBottom:
            current === section
                ? "2px solid var(--black)"
                : "2px solid transparent",
        transition: ".2s ease",
    }
    return (
        <button
            style={ButtonStyle}
            onClick={() => scrollFunction(section)}
            className={styles.NavButton}
        >
            {section}
        </button>
    )
}

export default Header
