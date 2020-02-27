// ============================================================
// index.js
//
// Main site page
// ============================================================

// dependencies
import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"
import SectionTitle from "../components/common/SectionTitle"
import Paragraph from "../components/common/Paragraph"

// Sections
import About from "../components/About/"
import Contact from "../components/Contact/"

// Styles
import s from "../modules/index.module.css"

// Icons/Images
import wave from "../images/waves/wave2.svg"
import waveTwo from "../images/waves/wave3.svg"

// Site Images
import rockland from "../images/site-images/rockland-display.png"
import finalsclub from "../images/site-images/finalsclub-display.png"

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

    // handler for changing form inputs
    formHandler = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        // skill list item arrays
        const languages = ["HTML(5)", "CSS(3)", "JavaScript(ES6)", "Java"]
        const weapons = ["React", "Gatsby", "Webpack", "Babel", "Netlify"]
        const skills = [
            "Git",
            "Firebase",
            "SQL",
            "SEO",
            "Google Analytics",
            "jQuery",
        ]

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
                    <div id="Work" ref={this.Work} className={s.WorkContainer}>
                        <SectionTitle>My Roles.</SectionTitle>
                        <div className={s.RoleContainer}>
                            <h3 className={s.RoleTitle}>FinalsClub</h3>
                            <p className={s.RoleHighInfo}>
                                <strong>UI/UX Designer &amp; Developer</strong>{" "}
                                | May 2019 — Present
                            </p>
                            <hr className={s.RoleBreak} />
                            <p className={s.RoleDescription}>
                                I design and develop front-end React components
                                for ed-tech startup FinalsClub, where we've set
                                out to improve online communication about
                                courses and college-life at Rutgers.
                            </p>
                            <p></p>
                        </div>
                        <SectionTitle>My Sites.</SectionTitle>
                        <div className={s.WorkMain}>
                            <div className={s.WorkBackground}></div>
                            <WorkItem
                                img={finalsclub}
                                odd={true}
                                title="FinalsClub Landing"
                                roles="Design, Development"
                                tools={["HTML/CSS", "React", "Gatsby"]}
                                fluid={
                                    this.props.data.finalsclub.childImageSharp
                                        .fluid
                                }
                                url="https://finalsclub-landing-design.netlify.com/"
                            />
                            <WorkItem
                                odd={false}
                                img={rockland}
                                roles="Development"
                                title="Rockland Pediatrics"
                                tools={["HTML/CSS", "React", "Gatsby"]}
                                fluid={
                                    this.props.data.rockland.childImageSharp
                                        .fluid
                                }
                                url="https://rocklandpediatrics.com"
                            />
                        </div>
                    </div>
                    <Contact ref={this.Contact} />
                </div>
            </Layout>
        )
    }
}

const WorkItem = props => (
    <div
        className={props.odd ? s.WorkRow : [s.OddWorkRow, s.WorkRow].join(" ")}
    >
        <div
            style={props.odd ? { color: "#252525" } : { color: "#f9f9f9" }}
            className={
                props.odd
                    ? s.WorkRowContent
                    : [s.WorkRowContent, s.DarkContent].join(" ")
            }
        >
            <h2 className={s.ProjectTitle}>{props.title}</h2>
            <hr
                style={
                    props.odd
                        ? { backgroundColor: "#14213D" }
                        : { backgroundColor: "#BCF0DF" }
                }
                className={s.ProjectBreak}
            />
            <div className={s.ProjectInfoRow}>
                <p className={s.ProjectRoles}>{props.roles}</p>
                <ul className={s.ProjectTools}>
                    {props.tools.map((tool, index) => (
                        <li key={index}>{tool}</li>
                    ))}
                </ul>
            </div>
            <a
                rel="noopener noreferrer"
                target="_blank"
                href={props.url}
                className={props.odd ? s.ProjectLinkLight : s.ProjectLinkDark}
            >
                View &#8594;
            </a>
        </div>
        <div className={s.WorkRowImage}>
            <Img fluid={props.fluid} />
        </div>
    </div>
)

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
