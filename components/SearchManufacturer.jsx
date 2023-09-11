'use client'
import React, {useState } from 'react'
import { manufacturers } from '@/Constants'
import { Box } from '@mui/material'
export default function SearchManufacturer({ manufacture, setmanufacture }) {
  const [quary, setquary] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const handleSearch = (c) => {
    setquary(c.target.innerHTML)
    setmanufacture(c.target.innerHTML)
    setShowSuggestions(false)
  }
  return (
    <div className=''>
      <Box >
        <div className=' relative w-full flex'>
          <Box><img className='w-[15px] h-[15px] absolute top-1 left-1 rounded-full' src="https://imgs.search.brave.com/5vlj4N9USIhKwRqMSGcv56nNaxsawtIhPgBVX7VvuhM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2FmLzZj/L2E3L2FmNmNhNzdm/NDk4OTU5MTI1ZTVi/NTMxZTNlOWFhNWNh/LmpwZw" alt="loading..."  /></Box>
        </div>
          <input value={quary} className='bg-gray-100 rounded-xl px-6 outline-none' placeholder='Renault'
            onChange={(e) => { setquary(e.target.value); setShowSuggestions(true); }}
          />
      </Box>
      {showSuggestions && quary.length > 0 && <Box className="bg-gray-100 max-h-40 overflow-y-auto  mt-1 ">
        {manufacturers.filter(e => e.toLowerCase().includes(quary.toLowerCase())).map(c => (<Box key={c} onClick={(c) => handleSearch(c)} className=' border-b border-blue-200 cursor-pointer hover:bg-blue-500 px-5'>
          {quary.trim() == '' ? null : c}
        </Box>)
        )}
      </Box>}
    </div>
  )
}
