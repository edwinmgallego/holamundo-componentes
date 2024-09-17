import { useState } from "react";
import "./App.css"

const App =()=>{
// useState es un hook en React que te permite agregar estado a un componente funcional. Antes de que React introdujera los hooks, solo los componentes de clase podían tener y gestionar estado. Con useState, ahora puedes crear y gestionar variables de estado en componentes funcionales.
/**
 * state: Es el valor actual del estado.
   setState: Es una función que te permite actualizar el estado.
   initialState: Es el valor inicial del estado.

const [count,setCount] = useState(100);
setTimeout(()=>{
  setCount(count +1);
  setCount(count +1);
  setCount(count +1);/*

},1000)*/
const [count,setCount] = useState(100);
/**
 * En React, el término handle se refiere comúnmente a la función que se utiliza para manejar un evento. Estos eventos pueden incluir clics, cambios en campos de formulario, envíos de formularios, etc.

Por convención, los nombres de las funciones que manejan eventos suelen comenzar con "handle", como en handleClick, handleChange, o handleSubmit. Estas funciones se asignan como controladores de eventos a elementos JSX.
 */
const handleAdd=()=>{
  setCount(count+1);
}
const handlesbstract=()=>{
  setCount(count -1);
}
const handleReset = () =>{
  setCount(0);
}
  return(
  /*<div  className="container">
    <h1> contador: {count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleReset}>reset</button>
    <button onClick={handlesbstract}>-</button>
  </div >*/
<>
<div  className="container">
    <h1> contador: {count}</h1>
    <button onClick={handleAdd}>+</button>
    <button onClick={handleReset}>reset</button>
    <button onClick={handlesbstract}>-</button>
    </div >

</>
  );

}; 
export default App;