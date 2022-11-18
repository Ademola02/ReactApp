import React from 'react'
import { useState } from 'react';
import Button from './Button';


const First = () => {
    let [message,setMessage]=useState('my message');
    const btn1=()=>alert("I am btn one")
    const btn2=()=>alert("I am btn two")
    
  
    const handleMessage=(e)=>{
      // setMessage(e.target.value)
      setMessage({...message,[e.target.name]:e.target.value})
    }
  return (
    <div>
    <div className="App">
     <Button label="click btn one" color="red" func={btn1}/>
     <Button label="click btn two" color="blue" func={btn2}/>
      <input type="text" onInput={handleMessage} name="email"/>
      <input type="text" onInput={handleMessage} name="username"/>
      <h1>{message.email}</h1> 
      <h1>{message.username}</h1> 

    </div>
    </div>
  )
}

export default First
