import React from 'react'
import MenuItem from './MenuItem'

function Menu({menuItems}) {
  console.log(menuItems)
  return (
    <div className='section-center'>
        {menuItems.map((item) => {
            return <MenuItem key={item.id} {...item}/>
        })}
    </div>
  )
}

export default Menu