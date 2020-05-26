// Dependencies
import React from "react"

// Components
import { Subheader, Paragraph, FullBreak } from "../../components/common/"

// Images
import wave from "../../images/waves/wave3.svg"

// Styles
import styles from "./About.module.css"

const About = () => {
    const languages = ["HTML(5)", "CSS(3)", "JavaScript(ES6)", "Java"]
    const weapons = ["React", "Gatsby", "Webpack", "Babel", "Netlify"]
    const skills = [
        "Git",
        "Firebase",
        "SQL",
        "SEO",
        "Google Analytics",
        "jQuery",
        "Linux",
    ]

    return (
        <>
            <Subheader tag="h1">About me.</Subheader>

            <div className={styles.AboutLeft}>
                <Paragraph>
                    I'm a freelance front-end developer currently working out of
                    Monmouth County, New Jersey. I seek to design and develop
                    user experiences that all can enjoy, with the most efficient
                    toolsets possible.
                </Paragraph>
                <Paragraph>
                    I'm an avid supporter of the Jamstack model to develop fast
                    and secure websites, taking advantage of CDNs to serve
                    static content, Git backends, and atomic deploys.
                </Paragraph>
                <Paragraph>
                    My primary role at the moment is working with&nbsp;
                    <a
                        className={styles.Underlined}
                        rel="noopener noreferrer"
                        target="_blank"
                        href="http://finalsclub.io"
                    >
                        FinalsClub
                    </a>
                    &nbsp;as a user interface and user experience
                    designer/developer. I design and create front-end components
                    while providing recommendations for maintaining proper
                    usability and accessibility throughout their multi-platform
                    messaging app.
                </Paragraph>

                <FullBreak />

                <AboutSectionHeader alternate>Skills.</AboutSectionHeader>
                <div className={styles.SkillsContainer}>
                    <div className={styles.SkillsTitleContainer}>
                        <AboutSectionHeader>Skills.</AboutSectionHeader>
                    </div>
                    <SkillColumn header="Languages." list={languages} />
                    <SkillColumn header="Weapons of Choice." list={weapons} />
                    <SkillColumn header="Additional Skills." list={skills} />
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
        </>
    )
}

const AboutSectionHeader = ({ children, alternate }) => {
    const classes = alternate
        ? [styles.AboutSectionHeader, styles.SkillAlt].join(" ")
        : styles.AboutSectionHeader
    return <h2 className={classes}>{children}</h2>
}

const SkillColumn = ({ header, list }) => {
    return (
        <div className={styles.SkillColumn}>
            <h3 className={styles.SkillHeader}>{header}</h3>
            {list.map(lang => (
                <SkillListItem key={lang} text={lang} />
            ))}
        </div>
    )
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

export default About
