"use client"
import { Button, Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <>
            <div className=' grid grid-cols-12  '>
                <div className='col-start-1 md:col-start-2 col-span-10 flex justify-between items-center'>
                    <div className='flex items-center text-xl'>
                        <img style={{ width: '4rem', height: '4rem', cursor: 'pointer' }} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJGBByeiifrbkHoq8mhcr8L3w5YJe7rFrusQ&usqp=CAU' />
                        <div className='font-bold text-blue-600 cursor-pointer'>CarHub</div>
                    </div>
                    <button className=' text-white px-4 rounded-full cursor-pointer hidden md:block bg-blue-500'>Sign in</button>
                </div>
            </div>
           
           <div className='lg:flex mx-9'>
            <div className='flex-1 px-3 py-2 '>
               <Typography className=' md:text-5xl text-4xl mb-4'>Find, book, rent a car- quick and super easy!</Typography>
               <Typography className=' text-base text-gray-500'>Streaming your car rental experience with our affordable and the reliable software</Typography>
               <button className=' bg-blue-600 text-white px-2 text-xs md:text-lg  mt-7 rounded-full py-2'>Explore Cars</button>
            </div>
            <div className=' relative flex-1  py-2'>
                <img style={{width:'100%'}} src="https://www.cars.com/i/large/in/v2/stock_photos/3397354a-f310-4671-a061-07dd6bee7d82/0450dc2a-efc0-457f-899d-23f699dedd05.png" alt="loading..." />
                <div style={{clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'}}  className=' top-0  right-1 absolute bg-blue-800 w-[80%] h-[100%] -z-10'>asd</div>

            </div>
           </div>
        </>

    )
}
