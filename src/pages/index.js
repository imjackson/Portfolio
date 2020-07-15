// ============================================================
// index.js
//
// Main site page
// ============================================================

// dependencies
import React from "react"

// Components
import SEO from "../components/seo"

// Sections
import Intro from "../components/Intro/"

const Index = () => {
    return (
        <>
            <SEO
                title="Front-End Developer"
                description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites."
            />
            <Intro />
        </>
    )
}

export default Index
