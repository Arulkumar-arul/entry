import React from 'react'
import {House} from "lucide-react";
import {ShoppingBasket} from "lucide-react";
import {Store} from "lucide-react";
import {Contact} from "lucide-react"

function Nav() {
  return (
    <div>
        <div className='flex justify-between items-center p-4 bg-lime-600 text-white'>
    <div>
      <h2 className='cursor-pointer text-3xl'>Agriculture</h2>                        
      </div>
      <div>
        <ul className='flex gap-4'>
        <li><a className='flex  gap-2 items-center' href="#"> <House />Home</a></li>
        <li><a  className='flex  gap-2 items-center' href="#"><ShoppingBasket />Product</a></li>
        <li><a className='flex  gap-2 items-center' href="#"><Store />Abouts</a></li>
        <li><a className='flex  gap-2 items-center' href="#"><Contact />Cantacts</a></li>
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Nav