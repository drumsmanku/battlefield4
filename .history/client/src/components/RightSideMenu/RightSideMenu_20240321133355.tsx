import React from 'react'
import logo from '../../assets/level-wrapper.png'
import invite from '../../assets/invite.png'


export default function RightSideMenu() {
  return (
    <div className='w-[25%] flex justify-end pt-4 h-full'>
      <div>
        <img src={logo} alt="" width={180} />
      </div>
      <div className='h-full w-[40%]'>
        <img src={invite} alt="" />
      </div>
      
    </div>
  )
}