import * as React from 'react'

const TelephoneInput = ({
    fields,
    name,
    required,
    placeHolder,
    update
}) => {
    return (
        <label>
            <div>{name[0].toUpperCase() + name.slice(1).toLowerCase()}:</div>
            <input
                type="tel"
                value={fields[name] || ''}
                onChange={(e) => update(name, e.target.value)}
                placeholder={placeHolder}
                required={required === true}
            />
        </label>
    )
}

export default TelephoneInput