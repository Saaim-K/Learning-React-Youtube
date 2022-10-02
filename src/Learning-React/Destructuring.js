import React, { Component } from 'react'
/* ---------------------------------------- Destructuring Functional Components ---------------------------------------- */

// const FuncDestructuring = ({ name, heroName }) => {
//     return (
//         <>
//             <h1>
//                 {name} is the real name of {heroName}
//             </h1>
//         </>
//     )
// }
const FuncDestructuring = props => {
    const { name, heroName } = props
    return (
        <>
            <h1>
                {name} is the real name of {heroName}
            </h1>
        </>
    )
}

export default FuncDestructuring;
/* ---------------------------------------- Destructuring Functional Components ---------------------------------------- */

/* ---------------------------------------- Destructuring Functional Components ---------------------------------------- */

export class ClassDestructuring extends Component {
    render() {
        const { name, heroName } = this.props
        return (
            <>
                <h1>
                    {name} is the real name of {heroName}
                </h1>
            </>
        )
    }
}
/* ---------------------------------------- Destructuring Functional Components ---------------------------------------- */