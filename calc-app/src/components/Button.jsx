import React from "react";

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

export default Button