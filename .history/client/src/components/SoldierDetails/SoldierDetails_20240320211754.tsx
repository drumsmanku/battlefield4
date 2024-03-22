import React from 'react';
import soldier_det from '../../assets/soldier__look.png';
import level from '../../assets/soldier__level.png';
import Progress from '../helpers/Progress';
import tank from '../../assets/soldier__tank-white.png'



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
                <div className=''>
                  <p className=' text-sm font-medium'>WINS</p>
                  <h1 className='text-xl font-bold'>44%</h1>
                </div>
                <div className=''>
                  <p className=' text-sm font-medium'>SCORE/MIN</p>
                  <h1 className='text-xl font-bold'>592</h1>
                </div>
                <div className=''>
                  <p className=' text-sm font-medium'>KILLS/MIN</p>
                  <h1 className='text-xl font-bold'>0.60</h1>
                </div>
              </div>
              <div className=' w-[100%] h-full grid-cols-4'>
                <div style={{backgroundColor:'rgba(16, 16, 16, 0.5)'}} className='p-2 w-[50%]'>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-medium'>TOP VEHICLE</p>
                  <img src={tank} alt="" width={150} />
                  <p style={{color:'white'}} className=' text-xs font-bold'>MAIN BATTLE TANK</p>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-bold'>33 KILLS</p>
                </div>
                <div style={{backgroundColor:'rgba(16, 16, 16, 0.5)'}} className='p-2 w-[50%]'>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-medium'>TOP VEHICLE</p>
                  <img src={tank} alt="" width={150} />
                  <p style={{color:'white'}} className=' text-xs font-bold'>MAIN BATTLE TANK</p>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-bold'>33 KILLS</p>
                </div>
                <div style={{backgroundColor:'rgba(16, 16, 16, 0.5)'}} className='p-2 w-[50%]'>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-medium'>TOP VEHICLE</p>
                  <img src={tank} alt="" width={150} />
                  <p style={{color:'white'}} className=' text-xs font-bold'>MAIN BATTLE TANK</p>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-bold'>33 KILLS</p>
                </div>
                <div style={{backgroundColor:'rgba(16, 16, 16, 0.5)'}} className='p-2 w-[50%]'>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-medium'>TOP VEHICLE</p>
                  <img src={tank} alt="" width={150} />
                  <p style={{color:'white'}} className=' text-xs font-bold'>MAIN BATTLE TANK</p>
                  <p style={{color:'rgba(255, 255, 255, 0.75)'}} className=' text-xs font-bold'>33 KILLS</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}