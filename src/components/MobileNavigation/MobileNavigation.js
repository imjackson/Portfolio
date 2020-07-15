// dependencies
import React from "react"
import { Link } from "gatsby"

// styles
import styles from "./MobileNavigation.module.css"

const MobileNavigation = ({ navIsOpen }) => {
    const PositionStyle = {
        transform: navIsOpen ? "translate(0%)" : "translate(100%)",
    }

    return (
        <div style={PositionStyle} className={styles.Container}>
            {navIsOpen && <div className={styles.Background} />}
            <nav className={styles.Menu}>
                <Link to="/about" className={styles.Link}>
                    About
                </Link>
                <Link to="/work" className={styles.Link}>
                    Work
                </Link>
                <Link to="/contact" className={styles.Link}>
                    Contact
                </Link>
            </nav>
        </div>
    )
}

export default MobileNavigation
