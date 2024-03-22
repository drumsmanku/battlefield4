import React, {useState} from 'react'
import logo from '../../assets/level-wrapper.png'
import invite from '../../assets/invite.png'


export default function RightSideMenu() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className='w-[25%] flex justify-end pt-4 h-full'>
       <div className='slide-in-content' style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '20%',
        transform: isHovered ? 'translateX(0)' : 'translateX(-100%)',
        transition: 'transform 0.3s ease'
      }}>
        {/* Content */}
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