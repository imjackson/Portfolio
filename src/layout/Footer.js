// ============================================================
// footer.js
//
// Main site footer component
// ============================================================

// Dependencies
import React from "react"

// Styles
import styles from "./layout.module.css"

// Icons
import logo from "../images/logos/logo-light.svg"
import linkedin from "../images/social-media/linkedin.svg"
import github from "../images/social-media/github-sign.svg"

const Footer = ({ isIndexPage }) => {
    const getFooterBorder = () => {
        return {
            borderColor: isIndexPage ? "transparent" : "var(--green)",
        }
    }

    return (
        <footer style={getFooterBorder()} className={styles.Footer}>
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
                <SocialLink
                    src={linkedin}
                    href="https://www.linkedin.com/in/jackson-pack-08614b188/"
                    alt="LinkedIn."
                />
                <SocialLink
                    src={github}
                    href="https://github.com/imjackson"
                    alt="Github."
                />
            </div>
        </footer>
    )
}

const SocialLink = ({ href, src, alt }) => (
    <a
        className={styles.SocialLink}
        rel="noopener noreferrer"
        href={href}
        target="_blank"
    >
        <img alt={alt} className={styles.SocialIcon} src={src} />
    </a>
)

export default Footer
