import React, {useState} from 'react'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    const arrayValueFunction = useState("")
    const valueElement = arrayValueFunction[0]
    const changeValue = arrayValueFunction[1]

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={valueElement} />
        <Numbers onClickNumber={number => {
            changeValue(number)
            console.log("Onclick Number: ", number)
        
        }}/>
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