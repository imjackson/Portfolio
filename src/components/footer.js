import React from 'react'

// Styles
import s from '../modules/layout.module.css'

// Icons
import logo from '../images/logos/logo.svg'
import insta from '../images/social-media/instagram.svg'
import linkedin from '../images/social-media/linkedin.svg'
import github from '../images/social-media/github-sign.svg'

const Footer = (props) => (
    <footer className={ s.Footer }>
        <div className={ s.FooterLeft }>
            <h2 className={ s.FooterTitle }>I'm Jackson.</h2>
            <a href="mailto:jacksongpack@gmail.com" className={ s.FooterEmail }>jacksongpack@gmail.com</a>
        </div>

        <div className={ s.FooterCenter }>
            <img className={ s.FooterLogo } alt="" src={logo} />
        </div>

        <div className={ s.FooterRight }>
            <a className={ s.FooterLink } href="https://www.instagram.com/jackson.pack/" target="_blank" ><img alt="Instagram." className={ s.SocialIcon } src={insta} /></a>
            <a className={ s.FooterLink } href="https://www.linkedin.com/in/jackson-pack-08614b188/" target="_blank" ><img alt="Linkedin." className={ s.SocialIcon } src={linkedin} /></a>
            <a className={ s.FooterLink } href="https://github.com/nbm-jackson" target="_blank" ><img alt="Github." className={ s.SocialIcon } src={github} /></a>
        </div>
    </footer>
)

export default Footer