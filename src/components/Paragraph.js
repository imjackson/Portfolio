// Dependencies
import React from "react"

// Styles
import common from "../modules/common.module.css"

const Paragraph = ({ children, styles }) => {
    return (
        <p style={styles && styles} className={common.Paragraph}>
            {children}
        </p>
    )
}

export default Paragraph
