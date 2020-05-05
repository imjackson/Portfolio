// Dependencies
import React from "react"

// Components
import Subheader from "../../components/Subheader"
import Paragraph from "../../components/Paragraph"

// Styles
import styles from "./Contact.module.css"

const Contact = () => {
    return (
        <>
            <Subheader>Let's work together.</Subheader>
            <Paragraph>
                I'm always looking for new projects to work on. If you want a
                website built, or just want to say hello, send me a message
                using the form below and I'll get back to you as soon as
                possible.
            </Paragraph>

            <form
                name="Contact"
                method="POST"
                data-netlify="true"
                aria-label="Contact form."
                className={styles.Form}
            >
                <input type="hidden" name="form-name" value="Contact" />
                <input
                    required
                    className={styles.Input}
                    placeholder="Name"
                    name="Name"
                    aria-label="Name input."
                />
                <input
                    required
                    className={styles.Input}
                    placeholder="Email"
                    name="Email"
                    aria-label="Email input."
                />
                <textarea
                    required
                    className={styles.Input}
                    placeholder="Message"
                    rows="6"
                    name="Message"
                    aria-label="Message input."
                ></textarea>
                <input
                    type="Submit"
                    value="Submit"
                    readOnly
                    className={styles.Submit}
                />
            </form>
        </>
    )
}

export default Contact
