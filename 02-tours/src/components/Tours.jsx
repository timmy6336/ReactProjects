import React from 'react'
import Tour from './Tour'

function Tours({tours,removeTour}) {
  return (<section>
    <div className='title'>
        <h2>our Tours</h2>
        <div className='title-underline'/>
    </div>
    <div className='tours'>
        {tours.map((tour) => {
            return <Tour {...tour} removeTour={removeTour} key={tour.id}/>
        })}
    </div>
  </section>)
}

export default Tours