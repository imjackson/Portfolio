// dependencies
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

// styles
import { ProjectImage } from "./Work.module.css"

const FinalsClubImage = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "finalsclub-display.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return (
        <Img
            className={ProjectImage}
            fluid={data.image.childImageSharp.fluid}
        />
    )
}

export default FinalsClubImage
