import React from 'react'
import SingleColor from './SingleColor'

function ColorList({values}) {
  return (
    <section className='colors'>
        {values.map((color,index) => {
          return <SingleColor index={index} color={color} key={index}/>
        })}
    </section>
  )
}

export default ColorList