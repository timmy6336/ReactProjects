import React from 'react'

function BtnContainer({jobInfo,currentItem,setCurrentItem}) {
  return (
    <section className='btn-container'>
        {jobInfo.map((job,index) => {
            const activeBtn = currentItem === index
            return (
                <button className={activeBtn?'job-btn active-btn': 'job-btn'} 
                onClick={()=>{setCurrentItem(index)}}>
                    {job.company}
                </button>)
        })}
    </section>
  )
}

export default BtnContainer