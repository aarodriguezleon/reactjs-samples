import React from 'react'

const Result = ({value}) =>{
    debugger
    console.log('ejecución result', value)
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

export default Result