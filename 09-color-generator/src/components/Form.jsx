import React, { useState } from 'react'
import Values from 'values.js';

function Form({setValues}) {
  const [color,setColor] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setValues(new Values(color).all(10))
  }

  return (
    <section className='container'>
        <h4>Color Generator:</h4>
        <form className='color-form' onSubmit={handleSubmit}>
            <input type='color' value={color} onChange={(e) => setColor(e.target.value)}/>
            <input type='text' value={color} onChange={(e) => setColor(e.target.value)} placeholder='#f15025'/>
            <button className='btn' type='submit' style={{background: color}}>Submit</button>
        </form>
    </section>
  )
}

export default Form