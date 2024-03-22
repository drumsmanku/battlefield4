import React from 'react'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] flex flex-col items-center h-full text-slate-300'>
      <div className=' w-[90%]  flex space-x-6 h-[10%] items-end font-medium '>
        <h1 className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>MULTIPLAYER</h1>
        <h1 className=' text-xl'>CAMPAIGN</h1>
        <h1 style={{borderBottom:'1px solid white', color:'white' }} className=' text-xl'>SOLDIER</h1>
        <h1 className=' text-xl'>STORE</h1>
        <h1 className=' text-xl'>MORE</h1>
      </div>
    </div>
  )
}