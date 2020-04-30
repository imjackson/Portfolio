// Dependencies
import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const RocklandImage = () => {
    const data = useStaticQuery(graphql`
        query {
            image: file(relativePath: { eq: "rockland-display.png" }) {
                childImageSharp {
                    fluid(maxWidth: 1000) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    return <Img fluid={data.image.childImageSharp.fluid} />
}

export default RocklandImage
