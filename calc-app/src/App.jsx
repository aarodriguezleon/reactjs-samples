import React from 'react'
import Button from './components/Button'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {

    const clickHandlerFunction = text => {
        console.log("Button.clickHandler1", text)
    }

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={"10"} />
        <div className="numbers">
            <Button text="1" clickHandler={clickHandlerFunction} /> 
            <Button text="2" clickHandler={clickHandlerFunction} />
            <Button text="3" clickHandler={clickHandlerFunction} />
            <Button text="4" clickHandler={clickHandlerFunction} />
            <Button text="5" clickHandler={clickHandlerFunction} />
            <Button text="6" clickHandler={clickHandlerFunction} />
            <Button text="7" clickHandler={clickHandlerFunction} />
            <Button text="8" clickHandler={clickHandlerFunction} />
            <Button text="9" clickHandler={clickHandlerFunction} />
            <Button text="0" clickHandler={clickHandlerFunction} />
        </div>
        <Functions 
            onContentClear={() => console.log("Clear")} 
            onDelete={() => console.log("Delete")}
        />
        
        <MathOperations 
            onClickOperation={operation => 
                console.log("Operation:", operation)
            } 
            onClickEqual={equal => 
                console.log("Equal:", equal)
            }
        />
    </main>)
}

export default App