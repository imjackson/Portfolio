// ============================================================
// index.js
//
// Main site page
// ============================================================

// dependencies
import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import Intro from "../components/Intro/"
import About from "../components/About/"
import Work from "../components/Work/"
import Contact from "../components/Contact/"

// Styles
import styles from "../modules/index.module.css"

const Index = props => {
    // refs
    const IntroSection = useRef(null)
    const AboutSetion = useRef(null)
    const WorkSection = useRef(null)
    const ContactSection = useRef(null)

    const [headerIsActive, setHeaderIsActive] = useState(false)
    const [currentSection, setCurrentSection] = useState("intro")

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    // scroll listener - determines which section user is currently viewing, allowing for dyanmic styling
    // of header link items
    const handleScroll = () => {
        let y = window.pageYOffset
        let currentSection
        let intro = IntroSection.current.offsetTop,
            about = AboutSetion.current.offsetTop,
            work = WorkSection.current.offsetTop,
            contact = ContactSection.current.offsetTop
        if (
            y >= about - IntroSection.current.offsetHeight / 4 &&
            y < work - about / 4
        ) {
            currentSection = "about"
        } else if (y >= work - about / 4 && y < contact - work / 4) {
            currentSection = "work"
        } else if (y >= contact - work / 4) {
            currentSection = "contact"
        } else {
            currentSection = "intro"
        }
        let headerIsActive = y > 40 // Header styling logic
        setHeaderIsActive(headerIsActive)
        setCurrentSection(currentSection)
    }

    // scrolls to specific section of page based of prop 't'
    const scroller = destination => {
        let intro = IntroSection.current.offsetTop,
            about = AboutSetion.current.offsetTop,
            work = WorkSection.current.offsetTop,
            contact = ContactSection.current.offsetTop
        let destinationRefOffset
        switch (destination) {
            case "splash":
                destinationRefOffset = intro
                break
            case "about":
                destinationRefOffset = about
                break
            case "work":
                destinationRefOffset = work
                break
            case "contact":
                destinationRefOffset = contact
                break
            default:
                destinationRefOffset = intro
                break
        }
        window.scrollTo({
            top: destinationRefOffset - getRem(6),
            behavior: "smooth",
        })
        setTimeout(() => {
            setCurrentSection(destination)
        }, 1000)
    }

    // scroll to top of window
    const scollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // convert from rem value to pixel value based on document fontSize
    const getRem = rem => {
        return (
            rem *
            parseFloat(getComputedStyle(document.documentElement).fontSize)
        )
    }

    return (
        <Layout
            top={scollToTop}
            scroller={scroller}
            activeSection={currentSection}
            activeHeader={headerIsActive}
        >
            <SEO
                title="Front-End Developer"
                description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites."
            />

            <div className={styles.Main}>
                <Intro ref={IntroSection} scroller={scroller} />
                <About ref={AboutSetion} />
                <Work
                    finalsClubImage={
                        props.data.finalsclub.childImageSharp.fluid
                    }
                    rocklandImage={props.data.rockland.childImageSharp.fluid}
                    ref={WorkSection}
                />
                <Contact ref={ContactSection} />
            </div>
        </Layout>
    )
}

// graphql query fragment for getting fluid images
export const fluidImage = graphql`
    fragment fluidImage on File {
        childImageSharp {
            fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
            }
        }
    }
`

// graphql pageQuery to get individual images
export const pageQuery = graphql`
    query {
        finalsclub: file(relativePath: { eq: "finalsclub-display.png" }) {
            ...fluidImage
        }
        rockland: file(relativePath: { eq: "rockland-display.png" }) {
            ...fluidImage
        }
    }
`
export default Index
