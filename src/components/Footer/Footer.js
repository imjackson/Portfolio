// ============================================================
// footer.js
//
// Main site footer component
// ============================================================

// Dependencies
import React from "react"

// Styles
import styles from "./Footer.module.css"

// Icons
import logo from "../../images/logos/logo.svg"
import insta from "../../images/social-media/instagram.svg"
import linkedin from "../../images/social-media/linkedin.svg"
import github from "../../images/social-media/github-sign.svg"

const Footer = () => {
    return (
        <footer className={styles.Container}>
            <div className={styles.FooterLeft}>
                <h2 className={styles.FooterTitle}>I'm Jackson.</h2>
                <a
                    href="mailto:jacksongpack@gmail.com"
                    className={styles.FooterEmail}
                >
                    jacksongpack@gmail.com
                </a>
            </div>

            <div className={styles.FooterCenter}>
                <img className={styles.FooterLogo} alt="" src={logo} />
            </div>

            <div className={styles.FooterRight}>
                <a
                    className={styles.FooterLink}
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/jackson-pack-08614b188/"
                    target="_blank"
                >
                    <img
                        alt="Linkedin."
                        className={styles.SocialIcon}
                        src={linkedin}
                    />
                </a>
                <a
                    className={styles.FooterLink}
                    rel="noopener noreferrer"
                    href="https://github.com/imjackson"
                    target="_blank"
                >
                    <img
                        alt="Github."
                        className={styles.SocialIcon}
                        src={github}
                    />
                </a>
            </div>
        </footer>
    )
}

export default Footer
