import React from "react";
import PropTypes from 'prop-types'

const Button = ({type, text, onclickHandler}) => {
    return (
        <button className={type} onClick={()=>{
            console.log("Click en el Botton")
            onclickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
    onclickHandler: PropTypes.func.isRequired
}

export default Button