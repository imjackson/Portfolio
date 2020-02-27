// Dependencies
import React, { useState, forwardRef } from "react"

// Components
import SectionTitle from "../common/SectionTitle"

// Styles
import styles from "./Contact.module.css"

const Contact = forwardRef((props, ref) => {
    const [formName, setFormName] = useState("")
    const [formEmail, setFormEmail] = useState("")
    const [formMessage, setFormMessage] = useState("")

    return (
        <div id="Contact" ref={ref} className={styles.ContactContainer}>
            <SectionTitle>Let's work together.</SectionTitle>
            <div className={styles.ContactMain}>
                <p className={styles.ContactParagraph}>
                    I'm always looking for new projects to work on. If you want
                    a website built, or just want to say hello, send me a
                    message using the form below and I'll get back to you as
                    soon as possible.
                </p>

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
                        onChange={event => setFormName(event.target.value)}
                        value={formName}
                        placeholder="Name"
                        name="formName"
                        aria-label="Name input."
                    />
                    <input
                        required
                        className={styles.Input}
                        onChange={event => setFormEmail(event.target.value)}
                        value={formEmail}
                        placeholder="Email"
                        name="formEmail"
                        aria-label="Email input."
                    />
                    <textarea
                        required
                        className={styles.Input}
                        onChange={event => setFormMessage(event.target.value)}
                        value={formMessage}
                        placeholder="Message"
                        rows="6"
                        name="formMessage"
                        aria-label="Message input."
                    ></textarea>
                    <input
                        type="Submit"
                        value="Submit"
                        readOnly
                        className={styles.Submit}
                    />
                </form>
            </div>
        </div>
    )
})

export default Contact
