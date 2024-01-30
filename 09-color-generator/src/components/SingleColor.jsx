import React from 'react'
import { toast } from 'react-toastify'

function SingleColor({color,index}) {
  const {hex,weight} = color
  const saveToClipboard = async () => {
    if(navigator.clipboard){
        try{
            await navigator.clipboard.writeText(`#${hex}`)
            toast.success('Color copied to clipboard')
        }catch(e){
            toast.error('Color could not be copied')
        }
    }
    else{
        toast.error('Clipboard Access not available')
    }
  }
  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{background:`#${hex}`}} onClick={saveToClipboard}>
        <p className='percent-value'>{weight}%</p>
        <p className='color-value'>{hex}</p>
    </article>
  )
}

export default SingleColor