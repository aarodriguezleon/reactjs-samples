import React from "react";

const Button = ({type, text}) => {
    return (
        <button className={type}>
            <span>{text}</span>
        </button>
    )
}

export default Button