import React from 'react'
import Person from './Person'

function List({people}) {
  return (
    <section>
        {people.map((person) => {
            return <Person {...person}/>
        })}
    </section>
  )
}

export default List