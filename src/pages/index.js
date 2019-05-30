import React from "react"
import { Link } from "gatsby"

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import s from '../modules/index.module.css'

// Icons/Images
import wave from '../images/waves/wave2.svg'
import waveTwo from '../images/waves/wave3.svg'
import html from '../images/language-icons/html5.svg'
import css from '../images/language-icons/css-3.svg'
import js from '../images/language-icons/js.svg'
import reactLogo from '../images/language-icons/react-logo.svg'
import sass from '../images/language-icons/sass-logo.svg'
import gatsbyLogo from '../images/language-icons/gatsby-logo.svg'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.Splash = React.createRef()
    this.About = React.createRef()
    this.Work = React.createRef()
    this.state = {
      activeHeader: false,
      sec: "splash",
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    let y = window.pageYOffset, a, s
    let splash = this.Splash.current.offsetTop, about = this.About.current.offsetTop, work = this.Work.current.offsetTop
    if (y > about - (this.Splash.current.offsetHeight/4) && y < work - (about/4)) {
      s = "about"
      console.log("c")
    } else if (y > work - (about/4)) {
      s = "work"
    } else{
      s = "splash"
    }
    y > 20 ? a = true : a = false // Header styling logic
    this.setState({
      activeHeader: a,
      sec: s
    })
  }

  scroller = (t) => {
    let splash = this.Splash.current.offsetTop, about = this.About.current.offsetTop, work = this.Work.current.offsetTop
    let to
    t === "splash" ? to = splash : t === "about" ? to = about : t === "work" ? to = work : to = splash
    window.scrollTo({top: to - this.toRem(6), behavior: 'smooth'})
    setTimeout(() => {
      this.setState({ sec: t })
    }, 1000)
  }

  toRem = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }
  

  render() {
    return (
      <Layout scroller={this.scroller} activeSection={this.state.sec} activeHeader={this.state.activeHeader}>
          <SEO title="Home Page" />
          <div className={ s.Main }>
            <div ref={this.Splash} className={ s.SplashContainer }>
              <h1 className={ s.Title }>I'm Jackson.</h1>
              <p className={ s.Intro }>I'm a front-end developer with a dedication to writing fast, simple, accessible websites.</p>
              <img src={wave} alt="" className={ s.Wave } />
            </div>
            <div ref={this.About} className={ s.AboutContainer }>
              <img style={{transform: "translateY(2px)"}}src={waveTwo} alt="" className={ s.Wave } />
              <h2 className={ s.SectionTitle }>About me.</h2>
              <div className={ s.AboutMain }>
                <div className={ s.AboutLeft }>

                </div>
                <div className={ s.AboutRight }>
                  <h2 className={ s.LanguageTitle }>Languages.</h2>
                  <hr className={ s.LanguageBreak } />
                  <div className={ s.IconArray }>
                    <img src={html} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    <img src={css} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    <img src={js} alt="HTML 5 logo." className={ s.LanguageIcon } />
                  </div>
                  <h2 className={ s.LanguageTitle }>Weapons of choice.</h2>
                  <hr className={ s.LanguageBreak } />
                  <div className={ s.IconArray }>
                    <img src={reactLogo} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    <img src={sass} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    <img src={gatsbyLogo} alt="HTML 5 logo." className={ s.LanguageIcon } />
                  </div>
                </div>
              </div>
            </div>
            <div ref={this.Work} className={ s.WorkContainer}>
              <h2 className={ s.SectionTitle }>My work.</h2>
            </div>
            <div className={ s.ContactContainer }>

            </div>
          </div>
      </Layout>
    )
  }
}
