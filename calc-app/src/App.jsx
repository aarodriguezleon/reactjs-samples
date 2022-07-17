import React, {useState} from 'react'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    const [stack, setStack] = useState("")

    // Lo que ejecuta la función
    console.log("Renderización de App")
    return (
    <main className='react-calculator'>
        <Result value={stack} />
        <Numbers onClickNumber={number => {
            setStack(stack + number)
            console.log("Onclick Number: ", number)
        
        }}/>
        <Functions 
            onContentClear={() =>{
                setStack("")
                console.log("Clear")
            }} 
            onDelete={() => {
                console.log("Delete")
            }}
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