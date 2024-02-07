import React, { useEffect, useState } from 'react'

function SingleItem({item,removeItem,toggleCompletedState}) {
  const {id,name,completed} = item
  console.log(completed)

  return (
    <div className='single-item'>
        <input type="checkbox" id={name} checked={completed} onChange={() => toggleCompletedState(id)}/>
        <p className='single-item' style={{textDecoration:completed && 'line-through'}}>{name}</p>
        <button className='btn remove-btn' onClick={() => removeItem(id)}>remove</button>
    </div>
  )
}

export default SingleItem