import React from 'react'
import logo from '../../assets/level-wrapper.png'
import invite from '../../assets/invite.png';
import './RightSideMenu.css'


export default function RightSideMenu() {
  return (
    <div className='w-[25%] flex justify-end pt-4 h-full'>
      <div className='slide-in-content absolute top-0 left-0 h-full' style={{ width: '20%', transform: 'translateX(-100%)'}}>
       hey
      </div>
      <div>
        <img src={logo} alt="" width={180} />
      </div>
      <div className='invite h-full w-[15%] flex justify-center items-start pt-2 ml-3'>
        <img src={invite} alt="" width={40}  />
      </div>
      
    </div>
  )
}