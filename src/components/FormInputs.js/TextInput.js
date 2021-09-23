import * as React from 'react'

const TextInput = ({
    fields,
    name,
    required,
    placeHolder,
    update
}) => {
    console.log(name)
    return (
        <label>
            <div>{name[0].toUpperCase() + name.slice(1).toLowerCase()}:</div>
            <input
                type="text"
                value={fields[name] || ''}
                onChange={(e) => update(name, e.target.value)}
                placeholder={placeHolder}
                required={required === true}
            />
        </label>
    )
}

export default TextInput