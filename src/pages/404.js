// ============================================================
// 404.js
//
// Site 404 page to be displayed when a user hits a non-existant
// route
// ============================================================

// Dependencies
import React from "react"
import { Link } from "gatsby"

// Components
import SEO from "../components/seo"

// Styles
import styles from "../modules/notfound.module.css"

const NotFoundPage = () => {
    return (
        <div style={{ alignSelf: "center" }}>
            <SEO
                title="404: Not Found | Front-End Developer"
                description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites."
            />
            <div className={styles.NotFoundContent}>
                <h2 className={styles.NotFoundTitle}>Uh oh,</h2>
                <h1 className={styles.NotFoundNumber}>
                    {" "}
                    <span className={styles.NotFoundNumberSmall}>
                        a
                    </span> 404{" "}
                    <span className={styles.NotFoundNumberSmall}>error.</span>
                </h1>
                <p className={styles.NotFoundText}>
                    It seems you've been led to a route that doesn't exist on my
                    site. That's especially weird considering my site is only
                    one page. No worries, just click the link below to view my
                    site.
                </p>
                <div className={styles.ButtonContainer}>
                    <Link to="/" className={styles.Button}>
                        imjackson.dev &#8594;
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage
