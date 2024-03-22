import React from 'react';
import soldier_det from '../../assets/soldier__look.png'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] flex flex-col items-center h-full '>
      <div style={{borderBottom:'1px solid rgba(255, 255, 255, 0.15)'}} className=' w-[90%]  flex space-x-6 h-[10%] items-end font-medium text-slate-300'>
        <h1 className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>MULTIPLAYER</h1>
        <h1 className=' text-xl'>CAMPAIGN</h1>
        <h1 style={{borderBottom:'1px solid white', color:'white' }} className=' text-xl'>SOLDIER</h1>
        <h1 className=' text-xl'>STORE</h1>
        <h1 className=' text-xl'>MORE</h1>
      </div>

      <div className='h-[80%] w-[100%] flex items-center'>
        <img src={soldier_det} alt="soldier" width={350} />
      </div>
    </div>
  )
}