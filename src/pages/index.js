import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

// Components
import Layout from "../components/layout"
import SEO from "../components/seo"

// Styles
import s from '../modules/index.module.css'

// Icons/Images
import wave from '../images/waves/wave2.svg'
import waveTwo from '../images/waves/wave3.svg'
import waveThree from '../images/waves/wave4.svg'

// Language Icons
import html from '../images/language-icons/html5.svg'
import css from '../images/language-icons/css-3.svg'
import js from '../images/language-icons/js.svg'
import reactLogo from '../images/language-icons/react-logo.svg'
import sass from '../images/language-icons/sass-logo.svg'
import gatsbyLogo from '../images/language-icons/gatsby-logo.svg'

// Site Images
import rockland from '../images/site-images/rockland-display.png'
import finalsclub from '../images/site-images/finalsclub-display.png'

// Other Icons
import down from '../images/down-arrow.svg'

export default class Index extends React.Component {
  constructor(props) {
    super(props)
    this.Splash = React.createRef()
    this.About = React.createRef()
    this.Work = React.createRef()
    this.Contact = React.createRef()
    this.state = {
      activeHeader: false,
      sec: "splash",
      formName: '',
      formEmail: '',
      formMessage: '',
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
    let splash = this.Splash.current.offsetTop, about = this.About.current.offsetTop, work = this.Work.current.offsetTop, contact = this.Contact.current.offsetTop
    if (y >= about - (this.Splash.current.offsetHeight/4) && y < work - (about/4)) {
      s = "about"
    } else if (y >= work - (about/4) && y < contact - (work/4)) {
      s = "work"
    } else if (y >= contact- (work/4)) {
      s = "contact"
    } else {
      s = "splash"
    }
    y > 40 ? a = true : a = false // Header styling logic
    this.setState({
      activeHeader: a,
      sec: s
    })
  }

  scroller = (t) => {
    let splash = this.Splash.current.offsetTop, about = this.About.current.offsetTop, work = this.Work.current.offsetTop, contact = this.Contact.current.offsetTop
    let to
    t === "splash" ? to = splash : t === "about" ? to = about : t === "work" ? to = work : t === "contact" ? to = contact : to="error"
    window.scrollTo({top: to - this.toRem(6), behavior: 'smooth'})
    setTimeout(() => {
      this.setState({ sec: t })
    }, 1000)
  }

  toRem = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  formHandler = (e) => {
    let n = e.target.name, v = e.target.value
    this.setState({ [n]: v })
  }
  

  render() {
    return (
      <Layout scroller={this.scroller} activeSection={this.state.sec} activeHeader={this.state.activeHeader}>
          <SEO title="Front-End Developer" description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites." />
          <div className={ s.Main }>
            <div ref={this.Splash} className={ s.SplashContainer }>
              <h1 className={ s.Title }>I'm Jackson.</h1>
              <p className={ s.Intro }>I'm a front-end developer with a dedication to writing fast, simple, accessible websites.</p>
              <img src={wave} alt="" className={ s.Wave } />
              <div className={ s.ArrowContainer }><img src={down} alt="Down." onClick={() => {this.scroller("about")}} className={ s.DownArrow } /></div>
            </div>
            <div ref={this.About} className={ s.AboutContainer }>
              <img style={{transform: "translateY(2px)"}} src={waveTwo} alt="" className={ s.Wave } />
              <h2 className={ s.SectionTitle }>About me.</h2>
              <div className={ s.AboutMain }>
                <div className={ s.AboutLeft }>
                  <p className={ s.Paragraph}>Morbi vitae cursus odio. Suspendisse quam mauris, tincidunt id ultrices quis, ultricies sit amet nisi. Sed sit amet erat tincidunt, laoreet lectus in, placerat lorem. Cras quis leo ac metus ultrices bibendum. Donec vehicula mi at sapien porttitor congue. Fusce varius volutpat lectus id pharetra. Sed imperdiet sit amet neque at convallis.</p>
                  <h3 className={ s.AboutSectionHeader }>As a developer</h3>
                  <p className={ s.Paragraph }>Morbi non nisi eu nibh mollis viverra. Sed et placerat erat, et varius ipsum. Morbi condimentum mattis metus eget consectetur. Pellentesque cursus turpis non finibus volutpat. Ut porttitor aliquet felis id lobortis. Donec auctor euismod nisi, malesuada ultricies mi bibendum quis. Pellentesque vel arcu id felis vestibulum tempor. Phasellus ut ligula ornare, ultricies leo ut, scelerisque arcu. Sed cursus massa sit amet est pulvinar placerat. Aenean eleifend, lorem sed faucibus pretium, metus tellus interdum mi, eu tristique mauris metus sit amet diam. Integer dui nulla, eleifend ac est id, viverra congue libero.</p>
                
                  
                </div>
                <div className={ s.AboutRight }>
                  
                  <div className={ s.SkillBlock }>
                    <h2 className={ s.LanguageTitle }>Languages.</h2>
                    <hr className={ s.LanguageBreak } />
                    <div className={ s.IconArray }>
                      <img src={html} alt="HTML 5 logo." className={ s.LanguageIcon } />
                      <img src={css} alt="HTML 5 logo." className={ s.LanguageIcon } />
                      <img src={js} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    </div>
                  </div>
                  <div className={ s.SkillBlock }>
                    <h2 className={ s.LanguageTitle }>Weapons of choice.</h2>
                    <hr className={ s.LanguageBreak } />
                    <div className={ s.IconArray }>
                      <img src={reactLogo} alt="HTML 5 logo." className={ s.LanguageIcon } />
                      <img src={sass} alt="HTML 5 logo." className={ s.LanguageIcon } />
                      <img src={gatsbyLogo} alt="HTML 5 logo." className={ s.LanguageIcon } />
                    </div>
                  </div>
                  
                  <div className={ s.SkillBlock }>
                    <h2 className={ s.LanguageTitle }>Additional skills.</h2>
                    <hr className={ s.LanguageBreak } />
                    <div className={ s.AdditionalList }>
                      <p>Git, jQuery, Google Analytics</p>
                    </div>
                  </div>
                  
                </div>
              </div>
              <div className={ s.FocusBox }>
                    <Focus number="1" title="Speed" content="There is nothing more valuable than load time, sites nowadays must load quickly to keep user attention. Modern front-end JavaScript frameworks can greatly speed up a large site, but can slow down a small site. I use the right tools for the job." />
                    <Focus number="2" title="Accessibility" content="Everybody should have equal access to the web, period. When designing and building I always take into consideration the guidelines outlined by the WCAG 2.0 and Section 508 to ensure no one is left out of the experiences I build." />
                    <Focus number="3" title="Simplicity" content="Content is king, let it do the talking." />
                  </div>
            </div>
            <div ref={this.Work} className={ s.WorkContainer}>
              <h2 className={ s.SectionTitle }>My work.</h2>
              <div className={ s.WorkMain }>
                <div className={ s.WorkBackground}></div>
                <WorkItem
                  img={finalsclub}
                  odd={true}
                  title="FinalsClub Landing"
                  roles="Design, Development"
                  tools={['Gatsby', 'CSS Modules']}
                  fluid={this.props.data.finalsclub.childImageSharp.fluid}
                />
                <WorkItem
                  odd={false}
                  img={rockland}
                  roles="Development"
                  title="Rockland Pediatrics"
                  tools={['Gatsby', 'CSS Modules']}
                  fluid={this.props.data.rockland.childImageSharp.fluid}
                />
              </div>
            </div>
            <div ref={this.Contact} className={ s.ContactContainer }>
              {/* <img  src={waveThree} alt="" className={ s.WaveAlt } /> */}
              <h2 className={ s.SectionTitle }>Get in touch.</h2>
              <div className={ s.ContactMain }>
                <p className={ [s.Paragraph, s.ContactParagraph ].join(" ")}>Pellentesque vel arcu id felis vestibulum tempor. Phasellus ut ligula ornare, ultricies leo ut, scelerisque arcu. Sed cursus massa sit amet est pulvinar placerat. Aenean eleifend, lorem sed faucibus pretium, metus tellus interdum mi, eu tristique mauris metus sit amet diam. Integer dui nulla, eleifend ac est id, viverra congue libero.</p>
                <form className={ s.Form }>
                  <input className={ s.Input } onChange={this.formHandler} value={this.state.formName} placeholder="Name" name="formName" aria-label="Name." />
                  <input className={ s.Input } onChange={this.formHandler} value={this.state.formEmail} placeholder="Email" name="formEmail" aria-label="Email." />
                  <textarea className={ s.Input } onChange={this.formHandler} value={this.state.formMessage} placeholder="Message" rows="6" name="formMessage" aria-label="Message."></textarea>
                  <input type="Submit" value="Submit" className={ s.Submit } />
                </form>
              </div>
            </div>
          </div>
      </Layout>
    )
  }
}

const Focus = (props) => (
  <div className={ s.Focus }>
    <p className={ s.FocusNumber }>{props.number}</p>
    <h3 className={ s.FocusTitle }>{props.title}</h3>
    <p className={ s.FocusContent}>{props.content}</p>
  </div>
)

const WorkItem = (props) => (
  <div className={ s.WorkRow }>
    {props.odd ? null : <div className={ s.WorkRowImage }><Img fluid={props.fluid} /></div>}
    <div style={props.odd ? {color: '#252525'} : {color: '#f9f9f9'} }className={ s.WorkRowContent}>
      <h2 className={ s.ProjectTitle }>{props.title}</h2>
      <hr style={ props.odd ? {backgroundColor: '#14213D'} : {backgroundColor: '#BCF0DF'} }className={ s.ProjectBreak }/>
      <div className={ s.ProjectInfoRow }>
        <p className={ s.ProjectRoles }>{props.roles}</p>
        <ul className={ s.ProjectTools}>
          {props.tools.map((tool, index) => <li key={index}>{tool}</li>)}
        </ul>
      </div>
    </div>
    {props.odd ? <div className={ s.WorkRowImage }><Img fluid={props.fluid} /></div> : null }
  </div>
)

export const fluidImage = graphql`
fragment fluidImage on File {
  childImageSharp {
    fluid(maxWidth: 1000) {
      ...GatsbyImageSharpFluid
    }
  }
}
`;

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