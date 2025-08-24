import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div>
        <div className='flex justify-between items-center p-4 bg-lime-600 text-white'>
    <div>
      <h2 className='cursor-pointer text-3xl'>Agriculture</h2>                        
      </div>
      <div>
        <ul className='flex gap-4'>
        <li className='flex  gap-2 items-center'><Link to="/">Home</Link></li>
        <li className='flex  gap-2 items-center'><Link to="/Product">Product</Link></li>
        <li className='flex  gap-2 items-center'><Link to="/Profile">Profile</Link></li>
        </ul>
      </div>
    </div>
    </div>
    
  )
}

export default Nav