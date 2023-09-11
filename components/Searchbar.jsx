'use client'

import React, { useState } from 'react'
import SearchManufacturer from './SearchManufacturer'


export default function Searchbar() {
  const[manufacture,setmanufacture]=useState('');
  console.log(manufacture)
    const handleSearch=()=>{

    }
  return (
    <form onSubmit={handleSearch}>
      <div className=''>
        <SearchManufacturer manufacture={manufacture} setmanufacture={setmanufacture}/>
      </div>
    </form>
  )
}
