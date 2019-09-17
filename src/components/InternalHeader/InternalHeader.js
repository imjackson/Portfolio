// ============================================================
// InternalHeader.js
//
// Internal page header component
// ============================================================

// dependencies
import React from 'react'
import { Link } from 'gatsby'

// Icons 
import logo from '.././../images/logos/logo.svg'

// styles
import s from './InternalHeader.module.css'

const InternalHeader = () => (
    <header className={ s.Container }>
      <Link to="/"><img src={logo} alt="Logo." className={ s.Logo } /></Link>
      <div className={ s.Nav }>
        <Link to="/#About" className={ s.NavButton }>About</Link>
        <Link to="/#Work" className={ s.NavButton }>Work</Link>
        <Link to="/#Contact" className={ s.NavButton }>Contact</Link>
      </div>
    </header>
)

export default InternalHeader