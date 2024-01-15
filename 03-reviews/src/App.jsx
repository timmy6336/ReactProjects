import { useState } from "react";
import reviews from "./data";
import {FaChevronLeft,FaChevronRight,FaQuoteRight} from 'react-icons/fa'

const App = () => {
  const [index,setIndex] = useState(0)
  const prevPerson = () => {
    let tempIndex = index-1
    if(tempIndex == -1){tempIndex = reviews.length-1}
    setIndex(tempIndex)
  }
  let {id,name,job,image,text} = reviews[index]
  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img"/>
          <span className="quote-icon">
            <FaQuoteRight/>
          </span>
        </div>
          <h4 className="author">{name}</h4>
          <p className="job">{job}</p>
          <p className="info">{text}</p>
          <div className="btn-container">
            <button className="prev-btn" onClick={()=>{prevPerson()}} ><FaChevronLeft/></button> 
            <button className="next-btn" onClick={()=>{setIndex((index+1)%reviews.length)}}><FaChevronRight/></button> 
          </div>
          <button className="btn" onClick={()=>{setIndex(Math.floor(Math.random() * 4))}}>Surprise Me</button>
      </article>
    </main>
  )
};
export default App;
