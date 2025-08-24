import React from 'react'
import {Eye} from "lucide-react";
import {ChevronsRight} from "lucide-react";

function Home() {
  return (
    <div>
        <div className='p-3 flex'>
        <div className='max-w-sm rounded-2xl m-3 p-3 bg-gray-300'>
            <img className='w-full h-80 object-cover rounded-2xl' src="https://i.pinimg.com/736x/d3/53/54/d35354de12ed99938c70a88ed22512de.jpg" alt="image..." />
            <h2 className='font-semibold text-3xl p-3'>Tomate Sheets</h2>
            <p className='text-zinc-900 mb-4'>Mykos mycorrhizae is a beneficial fungus that helps increase nutrient and moisture for exceptional organic plant growth</p>
            <div className='flex justify-between'>
                <button className='flex gap-2 items-center bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-400 cursor-pointer'><Eye />View More</button>
                <button className='flex gap-3 bg-fuchsia-600 text-white px-5 py-2 rounded-xl hover:bg-lime-400 cursor-pointer'> <ChevronsRight />Buy Now</button>
            </div>
        </div>
        <div className='max-w-sm rounded-2xl m-3 p-3 bg-gray-300'>
            <img className='w-full h-80 object-cover rounded-2xl' src="https://i.pinimg.com/736x/5a/ab/17/5aab178a65cdb47d851a5a7c44921a46.jpg" alt="image...." />
            <h2 className='font-semibold text-3xl p-3'>Groundnuts plant</h2>
            <p className='text-zinc-900 mb-4 text-sm'>Discover the complete process of growing peanuts and turning them into a profitable business. From soil preparation to harvesting and selling — everything you need to earn ₹1–2 lakhs per season!</p>
            <div className='flex justify-between'>
                <button className='flex gap-2 items-center bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-400 cursor-pointer'><Eye />View More</button>
                <button className='flex gap-3 bg-fuchsia-600 text-white px-5 py-2 rounded-xl hover:bg-lime-400 cursor-pointer'> <ChevronsRight/>Buy Now</button>
            </div>
        </div>
        <div className='max-w-sm rounded-2xl m-3 p-3 bg-gray-300'>
            <img className='w-full h-80 object-cover rounded-2xl' src="https://i.pinimg.com/736x/90/3c/3c/903c3cb7f8338430aebc316b4ef91321.jpg" alt="image...." />
            <h2 className='font-semibold text-3xl p-3'>Ginge</h2>
            <p className='text-zinc-900 mb-4'>Ginger is a delicious ingredient that can be used in a wide range of recipes. It can have a range of other uses too. You may be surprised to learn just how easy it can</p>
            <div className='flex justify-between'>
                <button className='flex gap-2 items-center bg-teal-600 text-white px-5 py-2 rounded-xl hover:bg-cyan-400 cursor-pointer'><Eye />View More</button>
                <button className='flex gap-3 bg-fuchsia-600 text-white px-5 py-2 rounded-xl hover:bg-lime-400 cursor-pointer'> <ChevronsRight />Buy Now</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Home