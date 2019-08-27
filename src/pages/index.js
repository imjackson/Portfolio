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

  toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
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
      <Layout top={this.toTop} scroller={this.scroller} activeSection={this.state.sec} activeHeader={this.state.activeHeader}>
          <SEO title="Front-End Developer" description="I'm a front-end developer with a dedication to writing fast, simple, accessible websites." />
          <div className={ s.Main }>
            <div ref={this.Splash} className={ s.SplashContainer }>
              <div className={ s.SplashMain }>
                <h1 className={ s.Title }>I'm Jackson.</h1>
                <p className={ s.Intro }>I'm a front-end developer with a dedication to writing fast, simple, accessible websites.</p>
              </div>
              
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
                  <hr className={ s.FullBreak } />
                  <h2 className={ [s.AboutSectionHeader, s.SkillAlt ].join(' ')}>Skills.</h2>
                  <div className={ s.SkillsContainer }>
                    <div className={ s.SkillsTitleContainer }>
                      <h2 className={ s.AboutSectionHeader }>Skills.</h2>
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Languages.</h3> 
                      <p className={ s.SkillListItem }>HTML(5)</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>CSS(3)</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>JavaScript(ES6)</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>Java</p> 
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Weapons of Choice.</h3>
                      <p className={ s.SkillListItem }>React</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>Gatsby</p> <hr className={ s.SkillDivider } />
                      
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Additional Skills.</h3>
                      <p className={ s.SkillListItem }>Git</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>Firebase</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>SQL</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>SEO</p> <hr className={ s.SkillDivider } />
                      <p className={ s.SkillListItem }>Google Analytics</p>
                      <p className={ s.SkillListItem }>jQuery</p> 
                    </div>
                  </div>
                  <hr className={ s.FullBreak } />


                  <h2 className={ s.AboutSectionHeader }>I care about:</h2>
                  <div className={ s.FocusBox }>
                    <Focus number="1" title="Speed" content="There is nothing more valuable than load time, sites nowadays must load quickly to keep user attention. Modern front-end JavaScript frameworks can greatly speed up a large site, but can slow down a small site. I use the right tools for the job." />
                    <Focus number="2" title="Accessibility" content="Everybody should have equal access to the web, period. When designing and building I always take into consideration the guidelines outlined by the WCAG 2.0 and Section 508 to ensure no one is left out of the experiences I build." />
                    <Focus number="3" title="Simplicity" content="Content is king, let it do the talking. Everything I create is built around the underlying message, not the design itself." />
                  </div>
                  
                </div>
                
                
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
                  tools={['HTML/CSS', 'React', 'Gatsby']}
                  fluid={this.props.data.finalsclub.childImageSharp.fluid}
                  url="http://finalsclub.io"
                />
                <WorkItem
                  odd={false}
                  img={rockland}
                  roles="Development"
                  title="Rockland Pediatrics"
                  tools={['HTML/CSS', 'React', 'Gatsby']}
                  fluid={this.props.data.rockland.childImageSharp.fluid}
                  url="https://rocklandpediatrics.com"
                />
              </div>
            </div>
            <div ref={this.Contact} className={ s.ContactContainer }>
              <h2 className={ s.SectionTitle }>Let's work together.</h2>
              <div className={ s.ContactMain }>
                <p className={ [s.Paragraph, s.ContactParagraph ].join(" ")}>I'm always looking for new projects to work on. If you want a website built, or just want to say hello, send me a message using the form below and I'll get back to you as soon as possible.</p>
                <form name="Contact" method="POST" data-netlify="true" aria-label="Contact form." className={ s.Form }>
                  <input type="hidden" name="form-name" value="Contact" />
                  <input required className={ s.Input } onChange={this.formHandler} value={this.state.formName} placeholder="Name" name="formName" aria-label="Name input." />
                  <input required className={ s.Input } onChange={this.formHandler} value={this.state.formEmail} placeholder="Email" name="formEmail" aria-label="Email input." />
                  <textarea required className={ s.Input } onChange={this.formHandler} value={this.state.formMessage} placeholder="Message" rows="6" name="formMessage" aria-label="Message input."></textarea>
                  <input type="Submit" value="Submit" readOnly className={ s.Submit } />
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
  <div className={props.odd ? s.WorkRow : [ s.OddWorkRow, s.WorkRow].join(' ') }>
    <div style={props.odd ? {color: '#252525'} : {color: '#f9f9f9'} } className={ props.odd ? s.WorkRowContent : [ s.WorkRowContent, s.DarkContent ].join(' ')}>
      <h2 className={ s.ProjectTitle }>{props.title}</h2>
      <hr style={ props.odd ? {backgroundColor: '#14213D'} : {backgroundColor: '#BCF0DF'} }className={ s.ProjectBreak }/>
      <div className={ s.ProjectInfoRow }>
        <p className={ s.ProjectRoles }>{props.roles}</p>
        <ul className={ s.ProjectTools}>
          {props.tools.map((tool, index) => <li key={index}>{tool}</li>)}
        </ul>
      </div>
      <a target="_blank" href={props.url} className={ s.ProjectLink }>View &#8594;</a>
    </div>
    <div className={ s.WorkRowImage }><Img fluid={props.fluid} /></div>
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