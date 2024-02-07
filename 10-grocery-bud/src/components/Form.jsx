import React, { useState } from 'react'
import { toast } from 'react-toastify'

function Form({addItem}) {
  const [item,setItem] = useState('')

  const handleSubmit = (e) =>{
    e.preventDefault();
    if(!item) {
      toast.error("Please Provide A Value")
      return
    }
    addItem(item)
    setItem('')
  }
  return (
    <form onSubmit={handleSubmit}>
        <h4>grocery buddy</h4>
        <div className='form-control'>
            <input type='text' className='form-input' value = {item} onChange={(e) => {setItem(e.target.value)}} />
            <button className='btn' type='submit'>add item</button>
        </div>
    </form>
  )
}

export default Form