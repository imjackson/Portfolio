// ============================================================
// InternalHeader.js
//
// Internal page header component
// ============================================================

// dependencies
import React from "react"
import { Link } from "gatsby"

// Icons
import logo from ".././../images/logos/logo.svg"

// styles
import styles from "./InternalHeader.module.css"

const InternalHeader = () => {
    return (
        <header className={styles.Container}>
            <Link to="/">
                <img src={logo} alt="Logo." className={styles.Logo} />
            </Link>
            <div className={styles.Nav}>
                <Link to="/#About" className={styles.NavButton}>
                    About
                </Link>
                <Link to="/#Work" className={styles.NavButton}>
                    Work
                </Link>
                <Link to="/#Contact" className={styles.NavButton}>
                    Contact
                </Link>
            </div>
        </header>
    )
}

export default InternalHeader
