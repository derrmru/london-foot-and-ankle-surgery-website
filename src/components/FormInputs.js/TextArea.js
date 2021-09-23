import * as React from 'react'

const TextArea = ({
    fields,
    name,
    required,
    placeHolder,
    update
}) => {
    return (
        <label>
            <div>{name[0].toUpperCase() + name.slice(1).toLowerCase()}:</div>
            <textarea
                value={fields[name] || ''}
                onChange={(e) => update(name, e.target.value)}
                placeholder={placeHolder}
                required={required === true}
            />
        </label>
    )
}

export default TextArea