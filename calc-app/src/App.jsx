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
    return (
    <main className='react-calculator'>
        <Result value={itemValue} />
        <Numbers onClickNumber={number => {
            setStack(`${stack}${number}`)
        }}/>
        <Functions 
            onContentClear={() =>{
                setStack("")
            }} 
            onDelete={() => {
                if(stack.length > 0){
                    const newStack = stack.substring(0, stack.length -1)
                    setStack(newStack)
                }
            }}
        />
        
        <MathOperations 
            onClickOperation={operation => {
                setStack(`${stack}${operation}`)
            }} 
            onClickEqual={equal => {
                setStack(eval(stack))
            }}
        />
    </main>)
}

export default App