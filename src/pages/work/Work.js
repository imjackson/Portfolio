// Dependencies
import React from "react"

// Components
import SectionTitle from "../../components/SectionTitle"

// Images
import FinalsClubImage from "./FinalsClubImage.js"
import RocklandImage from "./RocklandImage.js"

// Styles
import styles from "./Work.module.css"

const Work = () => {
    return (
        <>
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
                    image={<FinalsClubImage />}
                    url="https://finalsclub-landing-design.netlify.com/"
                />
                <WorkItem
                    roles="Development"
                    title="Rockland Pediatrics"
                    tools={["HTML/CSS", "React", "Gatsby"]}
                    image={<RocklandImage />}
                    url="https://rocklandpediatrics.com"
                />
            </div>
        </>
    )
}

const WorkItem = ({ odd, roles, title, tools, image, url }) => {
    const ContainerClasses = odd
        ? styles.WorkRow
        : [styles.EvenWorkRow, styles.WorkRow].join(" ")

    const HorizontalRuleStyle = {
        backgroundColor: odd ? "var(--navy)" : "var(--green)",
    }

    const ContentClasses = odd
        ? styles.WorkRowContent
        : [styles.WorkRowContent, styles.DarkContent].join(" ")

    const ContentStyle = {
        color: odd ? "var(--black)" : "var(--white)",
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
            <div className={styles.WorkRowImage}>{image}</div>
        </div>
    )
}

export default Work
