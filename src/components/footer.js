import React from 'react'

// Styles
import s from '../modules/layout.module.css'

// Icons
import logo from '../images/logos/Jackson1000.svg'
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
            <img alt="Instagram." className={ s.SocialIcon } src={insta} />
            <img alt="Linkedin." className={ s.SocialIcon } src={linkedin} />
            <img alt="Github." className={ s.SocialIcon } src={github} />
        </div>
    </footer>
)

export default Footer