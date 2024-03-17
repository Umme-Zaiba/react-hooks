import React, {useState}  from 'react'

const Color = () => {

    const [color, setColor] =useState("red");
  return (
    <div>
       <h1>My favourite color is {color}!</h1>
      <button type = "button" onClick={()=> setColor("blue")}>
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
      </button>
    </div>
  )
}

export default Color
