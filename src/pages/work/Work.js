// Dependencies
import React from "react"

// Components
import Subheader from "../../components/Subheader"
import FullBreak from "../../components/FullBreak"

// Images
import FinalsClubImage from "./FinalsClubImage.js"
import RocklandImage from "./RocklandImage.js"

// Styles
import styles from "./Work.module.css"

const Work = () => {
    return (
        <>
            <Subheader tag="h1">My Roles.</Subheader>
            <div className={styles.RoleContainer}>
                <h3 className={styles.RoleTitle}>FinalsClub</h3>
                <p className={styles.RoleHighInfo}>
                    <strong>UI/UX Designer &amp; Developer</strong>
                    &nbsp;&nbsp;|&nbsp;&nbsp;May 2019 — Present
                </p>
                <hr className={styles.RoleBreak} />
                <p className={styles.RoleDescription}>
                    I design and develop front-end React components for ed-tech
                    startup FinalsClub, where we've set out to improve online
                    communication about courses and college-life at Rutgers.
                </p>
            </div>
            <Spacer />
            <FullBreak />
            <Spacer />
            <Subheader>My Sites.</Subheader>
            <div className={styles.WorkMain}>
                {/* <div className={styles.WorkBackground}></div> */}
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

const Spacer = () => {
    return <div className={styles.Spacer} />
}

const WorkItem = ({ odd, roles, title, tools, image, url }) => {
    const ContainerStyle = {
        flexFlow: odd ? "row nowrap" : "row-reverse nowrap",
    }

    const ImageContainerClasses = odd
        ? [styles.ProjectImageContainer, styles.ProjectImageContainerOdd].join(
              " "
          )
        : [styles.ProjectImageContainer, styles.ProjectImageContainerEven].join(
              " "
          )

    return (
        <div style={ContainerStyle} className={styles.WorkRow}>
            <div className={styles.WorkRowContent}>
                <h2 className={styles.ProjectTitle}>{title}</h2>
                <hr className={styles.ProjectBreak} />
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
            <div className={ImageContainerClasses}>{image}</div>
        </div>
    )
}

export default Work
