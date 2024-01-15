import React, { useState } from 'react'
import {AiOutlineMinus, AiOutlinePlus} from 'react-icons/ai'

function SingleQuestion({title,info,index,showIndex,setShowIndex}) {
  const show = index === showIndex
  return (
    <article className='question'>
        <header>
            <h5>{title}</h5>
            <button className='question-btn' onClick={() => {show?setShowIndex(-1):setShowIndex(index)}}>{show?<AiOutlineMinus/>:<AiOutlinePlus/>}</button>
        </header>
        {show && <p>{info}</p>}
    </article>
  )
}

export default SingleQuestion