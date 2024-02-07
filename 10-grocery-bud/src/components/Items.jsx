import React from 'react'
import SingleItem from './SingleItem'

function Items({items, removeItem,toggleCompletedState}) {
  return (
    <div className='items'>
        {items.map((item)=>{
            return <SingleItem key={item.id} item={item} removeItem={removeItem} toggleCompletedState={toggleCompletedState}/>
        })}
    </div>
  )
}

export default Items