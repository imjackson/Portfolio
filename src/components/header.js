import React from "react"

// Components
import { Link } from 'gatsby'

// Styles
import s from '../modules/layout.module.css'

// Icons
import logo from '../images/logos/Jackson1000.svg'

// Active scroll styling
const activeHeader = {
  backgroundColor: "#f9f9f9",
  boxShadow: "0px 5px 8px 2px rgba(0,0,0,0.08)",
  transition: ".4s ease",
  height: "5rem"
}

const nonActiveHeader = {
  backgroundColor: "rgb(188, 240, 223)",
  transition: ".4s ease",
  height: "6rem"
}

// Active link styling 
const activeLink = {
  borderBottom: "2px solid #252525",
  transition: ".2s ease"
}

const nonActiveLink = {
  borderBottom: "2px solid transparent",
  transition: ".2s ease"
}

const Header = (props) => (
  <header style={ props.header ? activeHeader : nonActiveHeader }className={ s.Header }>
      <div tabIndex="0" onClick={props.top} className={ s.Info }>
        <img src={logo} alt="Logo." className={ s.Logo } />
        {props.header ? <h2 className={ s.HeaderTitle }>I'm Jackson.</h2> : null}
      </div>
      
      <div className={ s.Nav }>
        <button onClick={() => {props.scroll("about")}} style={ props.current==="about" ? activeLink : nonActiveLink } className={ s.NavButton }>About</button>
        <button onClick={() => {props.scroll("work")}} style={ props.current==="work" ? activeLink : nonActiveLink } className={ s.NavButton }>Work</button>
        <button onClick={() => {props.scroll("contact")}} style={ props.current==="contact" ? activeLink : nonActiveLink } className={ s.NavButton }>Contact</button>
      </div>
  </header>
)


export default Header
