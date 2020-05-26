// Dependencies
import React from "react"

// Components
import { Subheader, Paragraph } from "../components/common"
import ContactForm from "../components/ContactForm"
import SEO from "../components/seo"

const Contact = () => {
    return (
        <>
            <SEO title="Contact Me" />
            <Subheader>Let's work together.</Subheader>
            <Paragraph>
                I'm always looking for new projects to work on. If you want a
                website built, or just want to say hello, send me a message
                using the form below and I'll get back to you as soon as
                possible.
            </Paragraph>
            <ContactForm />
        </>
    )
}

export default Contact
