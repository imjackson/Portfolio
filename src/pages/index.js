// ============================================================
// index.js
//
// Main site page
// ============================================================

// dependencies
import React, { useRef } from "react"

// Components
import SEO from "../components/seo"

// Sections
import Intro from "../components/Intro/"
import Contact from "../components/Contact/"

const Index = () => {
    // refs
    const ContactSection = useRef(null)

    return (
        <>
            <SEO
                title="Front-End Developer"
                description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites."
            />

            <Intro />
            <Contact ref={ContactSection} />
        </>
    )
}

export default Index
