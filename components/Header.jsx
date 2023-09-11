import React from 'react'

export default function Header() {
  return (
    <div className=' grid grid-cols-12  '>
    <div className='col-start-1 md:col-start-2 col-span-10 flex justify-between items-center'>
        <div className='flex items-center text-xl'>
            <img style={{ width: '4rem', height: '4rem', cursor: 'pointer' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGBByeiifrbkHoq8mhcr8L3w5YJe7rFrusQ&usqp=CAU' />
            <div className='font-bold text-blue-600 cursor-pointer'>CarHub</div>
        </div>
        <button className=' text-white px-4 rounded-full cursor-pointer hidden md:block bg-blue-500'>Sign in</button>
    </div>
</div>
  )
}
