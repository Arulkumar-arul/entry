import React, { useEffect, useState } from 'react'

function Products() {
    const [Products,setProducts] = useState ([]);
    const filterproduct = Products.filter(data=>{
        return data.category==="electronics";
    });
    console.log(filterproduct);

    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res => res.json())
        .then(data => setProducts(data));
    },[]);
  return (
    <div>
        <div className='p-4 md:p-8 bg-pink-100'>
        <h3 className='text-2xl md:text-3xl font-semibold text-center mb-6'>Our products</h3>

        <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            {
                Products.map(data => (
                    <div key={data.id} className='bg-white shadow rounded-md p-4 flex flex-col items-center'>
                        <img className='h-40 w-auto mb-4 object-contain' src={data.image} alt="image" />
                        <h4 className='text-md md:text-lg font-semibold mb-2 text-center'>{data.title}</h4>
                        <h5 className='text-red-600 font-semibold text-lg'>${data.price}</h5>
                        <button className='bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600'>Add to cart</button>
                    </div>
                    
                ))
             
            }
            
            
    
            
        </div>
    </div>

    </div>
  )
}

export default Products