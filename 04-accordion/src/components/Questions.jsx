import React, { useState } from 'react'
import SingleQuestion from './SingleQuestion'

function Questions({questions}) {
  const [showIndex,setShowIndex] = useState(-1)
  return (
    <section className='container'>
    <h1>Questions</h1>
    {questions.map((question,index) => {
        return <SingleQuestion key={question.id} {...question} index={index} showIndex={showIndex} setShowIndex={setShowIndex}/>
      })}
    </section>
  )
}

export default Questions