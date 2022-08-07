import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const numbers = [7,8,9,4,5,6,1,2,3,0]

const renderNumbers = onClickNumber => {
    const renderButton = number =>(
        <Button key={number} text={number.toString()} clickHandler={onClickNumber}/>
    )
    console.log("renderNumbers funct")
    return numbers.map(renderButton)
}

const Numbers = ({onClickNumber}) => (
    <div className="numbers">
        {renderNumbers(onClickNumber)}
    </div>
)

Numbers.propTypes = {
    onClickNumber: PropTypes.func.isRequired
}

export default Numbers