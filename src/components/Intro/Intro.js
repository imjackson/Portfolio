// Dependencies
import React, { forwardRef } from "react"

// Icons
import down from "../../images/down-arrow.svg"

// Images
import wave from "../../images/waves/wave2.svg"

// Styles
import styles from "./Intro.module.css"

const Intro = forwardRef(({ scroller }, ref) => {
    return (
        <div ref={ref} className={styles.IntroContainer}>
            <div className={styles.IntroMain}>
                <h1 className={styles.IntroTitle}>I'm Jackson.</h1>
                <p className={styles.IntroText}>
                    I'm a front-end developer with a dedication to building
                    fast, simple, accessible websites.
                </p>
            </div>

            <img src={wave} alt="" className={styles.Wave} />
            <div className={styles.ArrowContainer}>
                <button
                    className={styles.DownArrowButton}
                    onClick={() => scroller("about")}
                >
                    <img src={down} alt="Down." className={styles.DownArrow} />
                </button>
            </div>
        </div>
    )
})

export default Intro
