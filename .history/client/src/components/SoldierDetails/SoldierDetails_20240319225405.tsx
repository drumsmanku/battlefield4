import React from 'react'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] flex flex-col items-center h-full text-white-500'>
      <div className=' w-[90%]  flex space-x-6 h-[10%] items-end font-medium '>
        <h1 className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>HOME</h1>
        <h1 style={{borderBottom:'1px solid white', }} className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>HOME</h1>
      </div>
    </div>
  )
}