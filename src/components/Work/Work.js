// Dependencies
import React, { forwardRef } from "react"
import Img from "gatsby-image"

// Components
import SectionTitle from "../common/SectionTitle"

// Styles
import styles from "./Work.module.css"

const Work = forwardRef((props, ref) => {
    return (
        <div id="Work" ref={ref} className={styles.WorkContainer}>
            <SectionTitle>My Roles.</SectionTitle>
            <div className={styles.RoleContainer}>
                <h3 className={styles.RoleTitle}>FinalsClub</h3>
                <p className={styles.RoleHighInfo}>
                    <strong>UI/UX Designer &amp; Developer</strong> | May 2019 —
                    Present
                </p>
                <hr className={styles.RoleBreak} />
                <p className={styles.RoleDescription}>
                    I design and develop front-end React components for ed-tech
                    startup FinalsClub, where we've set out to improve online
                    communication about courses and college-life at Rutgers.
                </p>
            </div>
            <SectionTitle>My Sites.</SectionTitle>
            <div className={styles.WorkMain}>
                <div className={styles.WorkBackground}></div>
                <WorkItem
                    odd
                    title="FinalsClub Landing"
                    roles="Design, Development"
                    tools={["HTML/CSS", "React", "Gatsby"]}
                    fluid={props.finalsClubImage}
                    url="https://finalsclub-landing-design.netlify.com/"
                />
                <WorkItem
                    roles="Development"
                    title="Rockland Pediatrics"
                    tools={["HTML/CSS", "React", "Gatsby"]}
                    fluid={props.rocklandImage}
                    url="https://rocklandpediatrics.com"
                />
            </div>
        </div>
    )
})

const WorkItem = ({ odd, roles, title, tools, fluid, url }) => {
    const ContainerClasses = odd
        ? styles.WorkRow
        : [styles.EvenWorkRow, styles.WorkRow].join(" ")

    const HorizontalRuleStyle = {
        backgroundColor: odd ? "#14213D" : "#BCF0DF",
    }

    const ContentClasses = odd
        ? styles.WorkRowContent
        : [styles.WorkRowContent, styles.DarkContent].join(" ")

    const ContentStyle = {
        color: odd ? "#252525" : "#f9f9f9",
    }

    return (
        <div className={ContainerClasses}>
            <div style={ContentStyle} className={ContentClasses}>
                <h2 className={styles.ProjectTitle}>{title}</h2>
                <hr
                    style={HorizontalRuleStyle}
                    className={styles.ProjectBreak}
                />
                <div className={styles.ProjectInfoRow}>
                    <p className={styles.ProjectRoles}>{roles}</p>
                    <ul className={styles.ProjectTools}>
                        {tools.map((tool, index) => (
                            <li key={index}>{tool}</li>
                        ))}
                    </ul>
                </div>
                <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={url}
                    className={
                        odd ? styles.ProjectLinkLight : styles.ProjectLinkDark
                    }
                >
                    View &#8594;
                </a>
            </div>
            <div className={styles.WorkRowImage}>
                <Img fluid={fluid} />
            </div>
        </div>
    )
}

export default Work
