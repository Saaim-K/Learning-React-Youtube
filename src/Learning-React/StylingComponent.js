import React from 'react'
//inline stying will be passed as props. It will be the style object literal
//CSS in an object will become string as now the style will become object's property and value
const StylingComponent = () => {
    const color = {
        color: 'white',
        fontSize: '3em',
        backgroundColor: 'black'
    }

    return (
        <>
            <p style={{ color: 'aqua', fontSize: '3em' }}>This is an example text of inline styling</p>
            <p style={color}>Assigning a style variable css and then passing it as props </p>
        </>
    )
}

export default StylingComponent