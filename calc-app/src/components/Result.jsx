import React from 'react'
import PropTypes from 'prop-types'

const Result = ({value}) =>{
    debugger
    console.log('ejecución result', value)
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

Result.propTypes = {
    value: PropTypes.string.isRequired
}

Result.defaualtProps = {
    value: "0"
}

export default Result