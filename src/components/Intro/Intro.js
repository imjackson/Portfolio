// Dependencies
import React from "react"

// Images
import wave from "../../images/waves/wave2.svg"

// Styles
import styles from "./Intro.module.css"

const Intro = () => {
    return (
        <>
            <h1 className={styles.IntroTitle}>I'm Jackson.</h1>
            <p className={styles.IntroText}>
                I'm a front-end developer with a dedication to building fast,
                simple, accessible websites.
            </p>
            <img src={wave} alt="" className={styles.Wave} />
        </>
    )
}

export default Intro
