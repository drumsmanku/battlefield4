"use client"
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import soldier_det from '../../assets/soldier__look.png';
import level from '../../assets/soldier__level.png';
import Progress from '../helpers/Progress';
import tank from '../../assets/soldier__tank-white.png'
import ar from '../../assets/acw-white.png'
import pistol from '../../assets/m9-white.png'
import vec from '../../assets/Vector.png'
import './SoldierDetails.css'

interface Soldier{
  name: string,
  level: number,
  xp_max: string,
  xp_min: string,
  weapons_min: number,
  weapons_max: number,
  kits_min: number,
  kits_max: number,
  vehicles_min: number,
  vehicles_max: number,
  medals_min: number,
  medals_max: number,
  assignment_min: number,
  assignment_max: number,
  tags_min: number,
  tags_max: number,
  wins: number,
  score: number,
  kills: number,
  tank_name: string,
  ar_name: string,
  util_name: string,
  pistol_name: string,
  tank_kills: number,
  ar_kills: number,
  util_score: number,
  pistol_kills: number,
}



export default function SoldierDetails() {
  const [data, setData] = useState<Soldier[]>([]);


  useEffect(()=>{
    axios.get('http://localhost:4000/get-soldier')
          .then(res=>{setData(res.data); console.log(res.data)})
          .catch(err=>console.log(err))
  },[])

  if (!data) {
    // Return loading state, placeholder, or a similar fallback
    return <div>Loading...</div>;
  }
  else{
    return (
    
      <div className=' w-[200px] h-full flex flex-col items-center '>
        <div style={{borderBottom:'1px solid rgba(255, 255, 255, 0.15)'}} className=' w-[90%]  flex space-x-6 h-[10%] items-end font-medium text-slate-300'>
          <h1 className='glow text-xl'>HOME</h1>
          <h1 className=' glow text-xl'>MULTIPLAYER</h1>
          <h1 className=' glow text-xl'>CAMPAIGN</h1>
          <h1 style={{borderBottom:'1px solid white', color:'white' }} className=' text-xl glow'>SOLDIER</h1>
          <h1 className=' glow text-xl'>STORE</h1>
          <h1 className=' glow text-xl'>MORE</h1>
        </div>
  
        <div className='h-[90%] w-full flex items-center mt-4'>
          <img src={soldier_det} alt="soldier" width={350} />
          <div className='h-[80%] flex flex-col justify-start w-full'>
            <div className='flex w-[80%] justify-center mb-4'>
              <img src={level} alt="level" width={70} />
              <div className='flex flex-col justify-center w-full ml-6'>
                <h1 className='text-2xl font-bold text-white'>{data[0]?.name}</h1>
                <div className='flex  w-full space-x-3'>
                  <button style={{border:'1px solid rgba(255, 255, 255, 0.15) '}} className=' bg-none px-3 cursor-default text-white py-0 h-6'>{data[0]?.level}</button>
                  <p className='text-white'>{data[0]?.xp_max} / {data[0]?.xp_min}</p>
                  <p style={{color:'rgba(255, 255, 255, 0.5) '}} >- Estimated rank up in 1h</p>
                </div>
                
              </div>
            </div>
            <div className='flex w-full justify-between'>
              <div className='flex w-[40%] flex-col'>
                <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>WEAPONS
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.weapons_min}/{data[0]?.weapons_max}<Progress progress={60}/> </span>
                </div>
                <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>KITS
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.kits_min}/{data[0]?.kits_max}<Progress progress={60}/> </span>
                </div>
                <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>VEHICLES
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.vehicles_min}/{data[0]?.vehicles_max}<Progress progress={60}/> </span>
                </div>
                <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>MEDALS
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.medals_min}/{data[0]?.vehicles_max}<Progress progress={60}/> </span>
                </div>
                <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className=' stats w-full flex justify-between p-2 font-medium '>ASSIGNMENT
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.assignment_min}/{data[0]?.assignment_max}<Progress progress={60}/> </span>
                </div>
                <div style={{ borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>DOG TAGS
                  <span className='font-bold text-sm w-[30%] text-end'> {data[0]?.tags_min}/{data[0]?.tags_max}<Progress progress={60}/> </span>
                </div>
                <div style={{borderBottom:'1px solid rgba(255, 255, 255, 0.15)', borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='stats w-full flex justify-between p-2 font-medium '>BATTLEPACKS
                  
                </div>
                
              </div>
              <div className='flex w-[55%] flex-col'>
                <div className='w-[70%] flex justify-between text-white mb-5'>
                  <div className=''>
                    <p className=' text-sm font-medium'>WINS</p>
                    <h1 className='text-xl font-bold'>{data[0]?.wins}%</h1>
                  </div>
                  <div className=''>
                    <p className=' text-sm font-medium'>SCORE/MIN</p>
                    <h1 className='text-xl font-bold'>{data[0]?.score}</h1>
                  </div>
                  <div className=''>
                    <p className=' text-sm font-medium'>KILLS/MIN</p>
                    <h1 className='text-xl font-bold'>{data[0]?.kills}0</h1>
                  </div>
                </div>
                <div className=' w-full h-full grid-cols-4 flex flex-wrap'>
                  <div  className='divContainer p-2 w-[45%] mr-2 mb-2'>
                    <p  className=' text-xs font-medium'>TOP VEHICLE</p>
                    <img  src={tank} alt="" width={150} />
                    <h1 className=' text-xs font-bold'>{data[0]?.tank_name}</h1>
                    <p  className=' text-xs font-bold'>{data[0]?.tank_kills} KILLS</p>
                  </div>
                  <div  className='divContainer p-2 w-[45%] mb-2'>
                    <p  className=' text-xs font-medium'>TOP PRIMARY</p>
                    <img src={ar} alt="" width={150} />
                    <p  className=' text-xs font-bold'>{data[0]?.ar_name}</p>
                    <p  className=' text-xs font-bold'>{data[0]?.ar_kills} KILLS</p>
                  </div>
                  <div  className='divContainer p-2 mr-2 w-[45%]'>
                    <p  className=' text-xs font-medium'>TOP CLASS</p>
                    <div className='w-full flex justify-center'>
                     <img src={vec} alt="" width={60} />
                    </div>
                    
                    <p className=' text-xs font-bold'>{data[0]?.util_name}</p>
                    <p  className=' text-xs font-bold'>{data[0]?.util_score} SCORE</p>
                  </div>
                  <div className='divContainer p-2 w-[45%]'>
                    <p className=' text-xs font-medium'>TOP SIDEARM</p>
                    <div className='w-full flex justify-center'>
                      <img src={pistol} alt="" width={100} />
                    </div>
                   
                    <p className=' text-xs font-bold'>{data[0]?.pistol_name}</p>
                    <p className=' text-xs font-bold'>{data[0]?.pistol_kills} KILLS</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
}