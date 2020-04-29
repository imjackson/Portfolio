// Dependencies
import React, { forwardRef } from "react"

// Components
import SectionTitle from "../common/SectionTitle"
import Paragraph from "../common/Paragraph"

// Images
import wave from "../../images/waves/wave3.svg"

// Styles
import styles from "./About.module.css"

const About = forwardRef((props, ref) => {
    const languages = ["HTML(5)", "CSS(3)", "JavaScript(ES6)", "Java"]
    const weapons = ["React", "Gatsby", "Webpack", "Babel", "Netlify"]
    const skills = [
        "Git",
        "Firebase",
        "SQL",
        "SEO",
        "Google Analytics",
        "jQuery",
    ]

    return (
        <div id="About" ref={ref} className={styles.AboutContainer}>
            <img
                style={{ transform: "translateY(2px)" }}
                src={wave}
                alt=""
                className={styles.Wave}
            />
            <SectionTitle>About me.</SectionTitle>
            <div className={styles.AboutMain}>
                <div className={styles.AboutLeft}>
                    <Paragraph>
                        I'm a front-end developer currently working out of
                        Monmouth County, NJ. I seek to design and develop
                        enjoyable user experiences with the most efficient
                        toolsets possible.
                    </Paragraph>
                    <Paragraph>
                        My main role at the moment is working with with&nbsp;
                        <a
                            className={styles.Underlined}
                            rel="noopener noreferrer"
                            target="_blank"
                            href="http://finalsclub.io"
                        >
                            FinalsClub
                        </a>
                        &nbsp;as a UI/UX designer and developer to bring to life
                        their vision of a more connected Rutgers student-base.{" "}
                    </Paragraph>

                    <FullBreak />

                    <AboutSectionHeader alternate>Skills.</AboutSectionHeader>
                    <div className={styles.SkillsContainer}>
                        <div className={styles.SkillsTitleContainer}>
                            <AboutSectionHeader>Skills.</AboutSectionHeader>
                        </div>
                        <SkillColumn>
                            <h3 className={styles.SkillHeader}>Languages.</h3>
                            {languages.map(lang => (
                                <SkillListItem key={lang} text={lang} />
                            ))}
                        </SkillColumn>
                        <SkillColumn>
                            <h3 className={styles.SkillHeader}>
                                Weapons of Choice.
                            </h3>
                            {weapons.map(weapon => (
                                <SkillListItem key={weapon} text={weapon} />
                            ))}
                        </SkillColumn>
                        <SkillColumn>
                            <h3 className={styles.SkillHeader}>
                                Additional Skills.
                            </h3>
                            {skills.map(skill => (
                                <SkillListItem key={skill} text={skill} />
                            ))}
                        </SkillColumn>
                    </div>

                    <FullBreak />

                    <AboutSectionHeader>I care about:</AboutSectionHeader>
                    <div className={styles.FocusBox}>
                        <Focus
                            number="1"
                            title="Speed"
                            content="There is nothing more valuable than load time, sites nowadays must load quickly to keep user attention. Modern front-end JavaScript frameworks can greatly speed up a large site, but can slow down a small site. I use the right tools for the job."
                        />
                        <Focus
                            number="2"
                            title="Accessibility"
                            content="Everybody should have equal access to the web, period. When designing and building I always take into consideration the guidelines outlined by the WCAG 2.0 to ensure no one is left out of the experiences I build."
                        />
                        <Focus
                            number="3"
                            title="Simplicity"
                            content="Content is king, let it do the talking. Everything I create is built around the underlying message, never a design itself."
                        />
                    </div>
                </div>
            </div>
        </div>
    )
})

const AboutSectionHeader = ({ children, alternate }) => {
    const classes = alternate
        ? [styles.AboutSectionHeader, styles.SkillAlt].join(" ")
        : styles.AboutSectionHeader
    return <h2 className={classes}>{children}</h2>
}

const SkillColumn = ({ children }) => {
    return <div className={styles.SkillColumn}>{children}</div>
}

const SkillListItem = ({ text }) => {
    return (
        <>
            <p className={styles.SkillListItem}>{text}</p>
            <hr className={styles.SkillDivider} />
        </>
    )
}

const Focus = ({ number, title, content }) => {
    return (
        <div className={styles.Focus}>
            <p className={styles.FocusNumber}>{number}</p>
            <h3 className={styles.FocusTitle}>{title}</h3>
            <p className={styles.FocusContent}>{content}</p>
        </div>
    )
}

const FullBreak = props => {
    return <hr className={styles.FullBreak} />
}

export default About
