
// dependencies
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

// Site Images
import rockland from '../images/site-images/rockland-display.png'
import finalsclub from '../images/site-images/finalsclub-display.png'

// Other Icons
import down from '../images/down-arrow.svg'

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
      formName: '',
      formEmail: '',
      formMessage: '',
    }
  }

  // add scroll listener to window
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  // remove scroll listener from window
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // scroll listener - determines which section user is currently viewing, allowing for dyanmic styling
  // of header link items
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

  // scrolls to specific section of page based of prop 't' 
  scroller = (t) => {
    let splash = this.Splash.current.offsetTop, about = this.About.current.offsetTop, work = this.Work.current.offsetTop, contact = this.Contact.current.offsetTop
    let to
    t === "splash" ? to = splash : t === "about" ? to = about : t === "work" ? to = work : t === "contact" ? to = contact : to="error"
    window.scrollTo({top: to - this.getRem(6), behavior: 'smooth'})
    setTimeout(() => {
      this.setState({ sec: t })
    }, 1000)
  }

  // scroll to top of window
  toTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  // convert from rem value to pixel value based on document fontSize
  getRem = (rem) => {
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
  }

  // handler for changing form inputs
  formHandler = (e) => {
    const {name, value} = e.target
    this.setState({ [name]: value })
  }
  

  render() {
    // skill list item arrays
    const languages = ['HTML(5)', 'CSS(3)', 'JavaScript(ES6)', 'Java']
    const weapons = ['React', 'Gatsby', 'Webpack', 'Babel', 'Netlify']
    const skills = ['Git', 'Firebase', 'SQL', 'SEO', 'Google Analytics', 'jQuery']

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
                  <p className={ s.Paragraph}>
                    I'm a front-end developer currently working with <a className={ s.Underlined } target="_blank" href="http://finalsclub.io">FinalsClub</a> as a UI/UX designer and developer.
                    <div className={ s.LineBreak } ></div>
                    I work out of Monmouth County, NJ during my gap year before attending the University of Delaware in 2020.
                    <div className={ s.LineBreak } ></div>
                    Additionally, I love learning about math and physics, and have an total obsession with space and all that lies beyond earth.
                  </p>
                  <hr className={ s.FullBreak } />
                  <h2 className={ [s.AboutSectionHeader, s.SkillAlt ].join(' ')}>Skills.</h2>
                  <div className={ s.SkillsContainer }>
                    <div className={ s.SkillsTitleContainer }>
                      <h2 className={ s.AboutSectionHeader }>Skills.</h2>
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Languages.</h3> 
                      {languages.map(lang => <><p className={ s.SkillListItem }>{lang}</p> <hr className={ s.SkillDivider } /></> )}
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Weapons of Choice.</h3>
                      {weapons.map(weapon => <><p className={ s.SkillListItem }>{weapon}</p> <hr className={ s.SkillDivider } /></> )}
                    </div>
                    <div className={ s.SkillColumn }>
                      <h3 className={ s.SkillHeader }>Additional Skills.</h3>
                      {skills.map(skill => <><p className={ s.SkillListItem }>{skill}</p> <hr className={ s.SkillDivider } /></> )}
                    </div>
                  </div>
                  <hr className={ s.FullBreak } />


                  <h2 className={ s.AboutSectionHeader }>I care about:</h2>
                  <div className={ s.FocusBox }>
                    <Focus number="1" title="Speed" content="There is nothing more valuable than load time, sites nowadays must load quickly to keep user attention. Modern front-end JavaScript frameworks can greatly speed up a large site, but can slow down a small site. I use the right tools for the job." />
                    <Focus number="2" title="Accessibility" content="Everybody should have equal access to the web, period. When designing and building I always take into consideration the guidelines outlined by the WCAG 2.0 and Section 508 to ensure no one is left out of the experiences I build." />
                    <Focus number="3" title="Simplicity" content="Content is king, let it do the talking. Everything I create is built around the underlying message, never a design itself." />
                  </div>
                  
                </div>
                
                
              </div>
              
            </div>
            <div ref={this.Work} className={ s.WorkContainer}>
              <h2 className={ s.SectionTitle }>My Roles.</h2>
              <div className={ s.RoleContainer }>
                <h3 className={ s.RoleTitle }>FinalsClub</h3>
                <p className={ s.RoleHighInfo }><strong>UI/UX Designer &amp; Developer</strong> | May 2018 — Present</p>
                <hr className={ s.RoleBreak } />
                <p className={ s.RoleDescription }>I design and develop front-end React components for ed-tech startup FinalsClub, where we set out to improve online communication about courses and college-life at Rutgers.</p>
                <p></p>
              </div>
              <h2 className={ s.SectionTitle }>My Sites.</h2>
              <div className={ s.WorkMain }>
                <div className={ s.WorkBackground}></div>
                <WorkItem
                  img={finalsclub}
                  odd={true}
                  title="FinalsClub Landing"
                  roles="Design, Development"
                  tools={['HTML/CSS', 'React', 'Gatsby']}
                  fluid={this.props.data.finalsclub.childImageSharp.fluid}
                  url="https://finalsclub-landing-design.netlify.com/"
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