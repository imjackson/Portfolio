// Dependencies
import React from "react"

// Styles
import common from "./common.module.css"

const Subheader = ({ children, tag: TAG = "h2" }) => {
    return <TAG className={common.Subheader}>{children}</TAG>
}

export default Subheader
