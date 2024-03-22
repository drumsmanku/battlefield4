import React from 'react';
import soldier_det from '../../assets/soldier__look.png';
import level from '../../assets/soldier__level.png'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] h-full flex flex-col items-center h-full '>
      <div style={{borderBottom:'1px solid rgba(255, 255, 255, 0.15)'}} className=' w-[90%]  flex space-x-6 h-[10%] items-end font-medium text-slate-300'>
        <h1 className=' text-xl'>HOME</h1>
        <h1 className=' text-xl'>MULTIPLAYER</h1>
        <h1 className=' text-xl'>CAMPAIGN</h1>
        <h1 style={{borderBottom:'1px solid white', color:'white' }} className=' text-xl'>SOLDIER</h1>
        <h1 className=' text-xl'>STORE</h1>
        <h1 className=' text-xl'>MORE</h1>
      </div>

      <div className='h-[90%] w-full flex items-center mt-4'>
        <img src={soldier_det} alt="soldier" width={350} />
        <div className='h-[80%] flex flex-col justify-start w-full'>
          <div className='flex w-[60%] justify-center'>
            <img src={level} alt="level" width={70} />
            <div className='flex flex-col justify-center w-full'>
              <h1 className='text-2xl font-bold text-white'>cookie</h1>
              <div className='flex justify-between w-full'>
                <button style={{border:'1px solid rgba(255, 255, 255, 0.15) '}} className=' bg-none px-3 cursor-default text-white py-0 h-6'>63</button>
                <p className='text-white'>69,840 / 110,000</p>
                {/* <p className='text-white'>- Estimated rank up in 1h</p> */}
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}