// ============================================================
// Header.js
//
// Main single-page site header component
// ============================================================

// Dependencies
import React from "react"

// Styles
import s from "./Header.module.css"

// Icons
import logo from "../../images/logos/logo.svg"

// Active scroll styling
const activeHeader = {
    backgroundColor: "#f9f9f9",
    boxShadow: "0px 5px 8px 2px rgba(0,0,0,0.08)",
    transition: ".4s ease",
    height: "5rem",
}

const nonActiveHeader = {
    backgroundColor: "rgb(188, 240, 223)",
    transition: ".4s ease",
    height: "6rem",
}

// Active link styling
const activeLink = {
    borderBottom: "2px solid #252525",
    transition: ".2s ease",
}

const nonActiveLink = {
    borderBottom: "2px solid transparent",
    transition: ".2s ease",
}

const Header = ({ top, scroll, header, current }) => (
    <header
        style={header ? activeHeader : nonActiveHeader}
        className={s.Container}
    >
        <div className={s.Content}>
            <div tabIndex="0" onClick={top} className={s.Info}>
                <img src={logo} alt="Logo." className={s.Logo} />
                {header ? (
                    <h2 className={s.HeaderTitle}>I'm Jackson.</h2>
                ) : null}
            </div>

            <div className={s.Nav}>
                <button
                    onClick={() => {
                        scroll("about")
                    }}
                    style={current === "about" ? activeLink : nonActiveLink}
                    className={s.NavButton}
                >
                    About
                </button>
                <button
                    onClick={() => {
                        scroll("work")
                    }}
                    style={current === "work" ? activeLink : nonActiveLink}
                    className={s.NavButton}
                >
                    Work
                </button>
                <button
                    onClick={() => {
                        scroll("contact")
                    }}
                    style={current === "contact" ? activeLink : nonActiveLink}
                    className={s.NavButton}
                >
                    Contact
                </button>
            </div>
        </div>
    </header>
)

export default Header
