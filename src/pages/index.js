// ============================================================
// index.js
//
// Main site page
// ============================================================

// dependencies
import React from "react"
import { graphql } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Sections
import About from "../components/About/"
import Work from "../components/Work/"
import Contact from "../components/Contact/"

// Styles
import s from "../modules/index.module.css"

// Icons/Images
import wave from "../images/waves/wave2.svg"

// Other Icons
import down from "../images/down-arrow.svg"

export default class Index extends React.Component {
    constructor(props) {
        super(props)
        // refs
        this.Splash = React.createRef()
        this.About = React.createRef()
        this.Work = React.createRef()
        this.Contact = React.createRef()

        // initial state
        this.state = {
            activeHeader: false,
            sec: "splash",
            formName: "",
            formEmail: "",
            formMessage: "",
        }
    }

    // add scroll listener to window
    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    // remove scroll listener from window
    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    // scroll listener - determines which section user is currently viewing, allowing for dyanmic styling
    // of header link items
    handleScroll = () => {
        let y = window.pageYOffset,
            a,
            s
        let splash = this.Splash.current.offsetTop,
            about = this.About.current.offsetTop,
            work = this.Work.current.offsetTop,
            contact = this.Contact.current.offsetTop
        if (
            y >= about - this.Splash.current.offsetHeight / 4 &&
            y < work - about / 4
        ) {
            s = "about"
        } else if (y >= work - about / 4 && y < contact - work / 4) {
            s = "work"
        } else if (y >= contact - work / 4) {
            s = "contact"
        } else {
            s = "splash"
        }
        y > 40 ? (a = true) : (a = false) // Header styling logic
        this.setState({
            activeHeader: a,
            sec: s,
        })
    }

    // scrolls to specific section of page based of prop 't'
    scroller = t => {
        let splash = this.Splash.current.offsetTop,
            about = this.About.current.offsetTop,
            work = this.Work.current.offsetTop,
            contact = this.Contact.current.offsetTop
        let to
        t === "splash"
            ? (to = splash)
            : t === "about"
            ? (to = about)
            : t === "work"
            ? (to = work)
            : t === "contact"
            ? (to = contact)
            : (to = "error")
        window.scrollTo({ top: to - this.getRem(6), behavior: "smooth" })
        setTimeout(() => {
            this.setState({ sec: t })
        }, 1000)
    }

    // scroll to top of window
    toTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" })
    }

    // convert from rem value to pixel value based on document fontSize
    getRem = rem => {
        return (
            rem *
            parseFloat(getComputedStyle(document.documentElement).fontSize)
        )
    }

    render() {
        return (
            <Layout
                top={this.toTop}
                scroller={this.scroller}
                activeSection={this.state.sec}
                activeHeader={this.state.activeHeader}
            >
                <SEO
                    title="Front-End Developer"
                    description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites."
                />
                <div className={s.Main}>
                    <div ref={this.Splash} className={s.SplashContainer}>
                        <div className={s.SplashMain}>
                            <h1 className={s.Title}>I'm Jackson.</h1>
                            <p className={s.Intro}>
                                I'm a front-end developer with a dedication to
                                building fast, simple, accessible websites.
                            </p>
                        </div>

                        <img src={wave} alt="" className={s.Wave} />
                        <div className={s.ArrowContainer}>
                            <img
                                src={down}
                                alt="Down."
                                tabIndex="0"
                                onClick={() => {
                                    this.scroller("about")
                                }}
                                className={s.DownArrow}
                            />
                        </div>
                    </div>
                    <About ref={this.About} />
                    <Work
                        finalsClubImage={
                            this.props.data.finalsclub.childImageSharp.fluid
                        }
                        rocklandImage={
                            this.props.data.rockland.childImageSharp.fluid
                        }
                        ref={this.Work}
                    />
                    <Contact ref={this.Contact} />
                </div>
            </Layout>
        )
    }
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
