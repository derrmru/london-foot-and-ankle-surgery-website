import React, { useState } from 'react'
import EmailInput from './FormInputs.js/EmailInput'
import TextInput from './FormInputs.js/TextInput'
import TelephoneInput from './FormInputs.js/TelephoneInput'
import TextArea from './FormInputs.js/TextArea'
import * as style from './ContactForm.module.css'

const ContactForm = ({
    action,
    submitMessage
}) => {
    const [fields, setFields] = useState({});

    const update = (name, value) => {
        let temp = { ...fields }
        temp[name] = value
        setFields(temp)
    }

    return (
        <div className={style.container}>
            <div className={style.action}>{action}</div>
            <form className={style.form}>
                <div className={style.inputs}>
                    <TextInput
                        fields={fields}
                        name="Full Name"
                        update={(name, value) => update(name, value)}
                        placeHolder="Name (required)"
                        required={true}
                    />
                    <EmailInput
                        fields={fields}
                        name="email"
                        update={(name, value) => update(name, value)}
                        placeHolder="Email (required)"
                        required={true}
                    />
                    <TelephoneInput
                        fields={fields}
                        name="telephone"
                        update={(name, value) => update(name, value)}
                        placeHolder="Contact Tel (required)"
                        required={true}
                    />
                    <TextArea
                        fields={fields}
                        name="message"
                        update={(name, value) => update(name, value)}
                        placeHolder="Your Message"
                    />
                </div>
                <input type="submit" value={submitMessage} />
            </form>
        </div>
    )
}

export default ContactForm