import React from 'react'
import PropTypes from 'prop-types'
//const Result = ({value}) =>{
const Result = (props) =>{
    console.log('ejeción result', props)
    const {value} = props
    return (
        <div className="result">
            <span>{value}</span>
        </div>
    )
}

export default Result