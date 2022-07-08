import React from "react";
import './App.css'
import Button from './components/Button'
import Result from "./components/Result";
const App = () =>{
    console.log('ejecuto la app')

    const onclickHandlerFunction = (text) => {
        console.log('Button.onclickHandler',text)
    }
    
    return <div className='react-calculator'>
        <Result value={"10"}/>
        <div className="numbers">
            <Button type='numero' text='1' onclickHandler={onclickHandlerFunction}/>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>0</button>
        </div>
        <div className="functions">
            <button>clear</button>
            <button>R</button>
        </div>
        <div className="mathoperation">
            <button>+</button>
            <button>-</button>
            <button>*</button>
            <button>/</button>
        </div>
    </div>
}

export default App