// dependencies
import React from "react"

// styles
import styles from "./ContactForm.module.css"

const ContactForm = () => {
    return (
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
    )
}

export default ContactForm
