import React from 'react';
import soldier_det from '../../assets/soldier__look.png';
import level from '../../assets/soldier__level.png';
import Progress from '../helpers/Progress';



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] h-full flex flex-col items-center '>
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
          <div className='flex w-[80%] justify-center'>
            <img src={level} alt="level" width={70} />
            <div className='flex flex-col justify-center w-full ml-6'>
              <h1 className='text-2xl font-bold text-white'>cookie</h1>
              <div className='flex  w-full space-x-3'>
                <button style={{border:'1px solid rgba(255, 255, 255, 0.15) '}} className=' bg-none px-3 cursor-default text-white py-0 h-6'>63</button>
                <p className='text-white'>69,840 / 110,000</p>
                <p style={{color:'rgba(255, 255, 255, 0.5) '}} >- Estimated rank up in 1h</p>
              </div>
              
            </div>
          </div>
          <div className='flex w-full justify-between'>
            <div className='flex w-[40%] flex-col'>
              <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>WEAPONS
                <span className='font-bold text-sm w-[30%] text-end'> 134/195<Progress progress={60}/> </span>
              </div>
              <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>KITS
                <span className='font-bold text-sm w-[30%] text-end'> 46/64<Progress progress={60}/> </span>
              </div>
              <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>WEHICLES
                <span className='font-bold text-sm w-[30%] text-end'> 77/182<Progress progress={60}/> </span>
              </div>
              <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>MEDALS
                <span className='font-bold text-sm w-[30%] text-end'> 11/54<Progress progress={60}/> </span>
              </div>
              <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>ASSIGNMENT
                <span className='font-bold text-sm w-[30%] text-end'> 21/110<Progress progress={60}/> </span>
              </div>
              <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>DOG TAGS
                <span className='font-bold text-sm w-[30%] text-end'> 357/720<Progress progress={60}/> </span>
              </div>
              <div style={{borderBottom:'1px solid rgba(255, 255, 255, 0.15)', borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full flex justify-between p-2 font-medium text-white'>BATTLEPACKS
                
              </div>
              
            </div>
            <div className='flex w-[55%] flex-col'>
              <div className='w-[70%] flex justify-between text-white'>
                <div className='font-bold'>
                  <p className=' text-sm'>WINS</p>
                  <h1 className='text-xl'>44%</h1>
                </div>
                <div className='font-bold'>
                  <p className=' text-sm'>SCORE/MIN</p>
                  <h1 className='text-xl'>592</h1>
                </div>
                <div className='font-bold'>
                  <p className=' text-sm'>KILLS/MIN</p>
                  <h1 className='text-xl'>0.60</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}