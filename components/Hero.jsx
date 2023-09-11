"use client"
import {Typography } from '@mui/material'
import React from 'react'

export default function Hero() {
    return (
        <>
           
           
           <div className='lg:flex px-4'>
            <div className='flex-1 px-3 py-2 '>
               <Typography className=' md:text-5xl text-4xl mb-4'>Find, book, rent a car- quick and super easy!</Typography>
               <Typography className=' text-base text-gray-500'>Streaming your car rental experience with our affordable and the reliable software</Typography>
               <button className=' bg-blue-600 text-white px-2 text-xs md:text-lg  mt-7 rounded-full py-2'>Explore Cars</button>
            </div>
            <div className=' relative flex-1  py-2'>
                <img className=' w-[80%] lg:w-full' src="https://www.cars.com/i/large/in/v2/stock_photos/3397354a-f310-4671-a061-07dd6bee7d82/0450dc2a-efc0-457f-899d-23f699dedd05.png" alt="loading..." />
                <div style={{clipPath: 'polygon(62% 0, 100% 0, 100% 100%, 29% 100%, 18% 26%)',borderRadius:'5%'}}  className=' -top-3 lg:top-0  right-2 absolute bg-blue-800 w-[80%] h-[100%] -z-10'>asd</div>

            </div>
           </div>
        </>

    )
}
// top-0  right-1 