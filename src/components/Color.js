 
import React, {useState}  from 'react'
import '../App.css';

const Color = () => {

    const [color, setColor] =useState("red");
    const colorOptions = ['blue', 'red', 'green', 'pink'];
    const handleColorChange =(newColor)=>{
        setColor(newColor);
    }

  return (
    <div>
       <h1>My favourite color is 
        <span style={{color:color}}> {color}! </span>
       
        </h1>
      {/* <button type = "button" onClick={()=> setColor("blue")}>
        Blue
      </button>
      <button type = "button" onClick={()=> setColor("red")}>
        Red
      </button>
      <button type = "button" onClick={()=> setColor("green")}>
        Green
      </button>
      <button type = "button" onClick={()=> setColor("pink")}>
        Pink
      </button> */}

      {colorOptions.map((option, index)=>(
        <button key={index} type='button' onClick={()=> handleColorChange(option)} className={`color-${option}`}> 
            {option.charAt(0).toUpperCase()+ option.slice(1)}
        </button>
      ))}
    </div>
  )
}

export default Color

