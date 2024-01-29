import React, { useEffect, useState } from 'react'
import {list} from '../data.js'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft ,FiChevronRight} from 'react-icons/fi'

function Carousel() {
  const [people,setPeople] = useState(list)
  const [viewIndex,setViewIndex] = useState(0)

  const nextSlide = () => {
    const newIndex = (viewIndex + 1) % people.length 
    setViewIndex(newIndex)
  }

  const prevSlide = () => {
    let newIndex = (viewIndex - 1)
    if(newIndex < 0){newIndex = people.length-1}
    setViewIndex(newIndex)
  }

  useEffect(()=>{
    let sliderID = setInterval(()=>{nextSlide()},2000)
    return () => {clearInterval(sliderID)}
  },[viewIndex])

  return (
    <section className='slider-container'>
            {people.map((item,index) => {
                const {id,image,name,title,quote} = item
                return (
                    <article className='slide' key={id} style={{transform:`translateX(${100*(index - viewIndex)}%)`}}>
                        <img src={image} alt={name} className='person-img'/>
                        <h5 className='name'>{name}</h5>
                        <p className='title'>{title}</p>
                        <p className='text'>{quote}</p>
                        <FaQuoteRight className='icon'/>
                    </article>)
            })}
        <button type='button' className='prev' onClick={() => {prevSlide()}}><FiChevronLeft/></button>
        <button type='button' className='next' onClick={() => {nextSlide()}}><FiChevronRight/></button>
    </section>
    )
}

export default Carousel