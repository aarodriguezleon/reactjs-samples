import React from "react";

const Button = ({type, text, onclickHandler}) => {
    return (
        <button className={type} onClick={()=>{
            onclickHandler(text)
        }}>
            <span>{text}</span>
        </button>
    )
}

export default Button