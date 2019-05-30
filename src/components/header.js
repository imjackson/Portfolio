import React from "react"

// Components
import { Link } from 'gatsby'

// Styles
import s from '../modules/layout.module.css'

const Header = () => (
  <header className={ s.Header }>
    <Link to="/">
      <h3>Gatsby Starter Project</h3>
    </Link>
  </header>
)


export default Header
