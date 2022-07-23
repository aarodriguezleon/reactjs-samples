/* eslint no-eval: 0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import MathOperations from './components/MathOperations'
import Result from './components/Result'
import Functions from './components/Functions'
import Numbers from './components/Numbers'
import './App.css'

// Función Flecha o Arrow Function
const App = () => {
    const [stack, setStack] = useState("")
    const items = words(stack, /[^+^-^*^/]+/g)

    const itemValue = items.length > 0 ? items[items.length -1] : "0";
    // Lo que ejecuta la función
    console.log("Renderización de App", items)
    return (
    <main className='react-calculator'>
        <Result value={itemValue} />
        <Numbers onClickNumber={number => {
            setStack(`${stack}${number}`)
            console.log("Onclick Number: ", number)
        
        }}/>
        <Functions 
            onContentClear={() =>{
                setStack("")
                console.log("Clear")
            }} 
            onDelete={() => {
                console.log("Delete")
                if(stack.length > 0){
                    const newStack = stack.substring(0, stack.length -1)
                    setStack(newStack)
                }
            }}
        />
        
        <MathOperations 
            onClickOperation={operation => {
                console.log("Operation:", operation)
                setStack(`${stack}${operation}`)
            }} 
            onClickEqual={equal => {
                console.log("Equal:", equal)
                setStack(eval(stack))
            }}
        />
    </main>)
}

export default App