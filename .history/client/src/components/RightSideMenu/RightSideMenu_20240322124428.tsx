import React, { useState } from 'react';
import logo from '../../assets/level-wrapper.png';
import invite from '../../assets/invite.png';
import './RightSideMenu.css'; // Import CSS file for styling
import squad from '../../assets/squad.png'
import join from '../../assets/join.png'
import online from '../../assets/online.png'
import friend from '../../assets/friend.png'
import offline from '../../assets/offline.png'

export default function RightSideMenu() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className='w-[25%] flex justify-end pt-4 h-full relative'>
      <div>
        <img src={logo} alt="" width={180} />
      </div>
      <div
        className={`invite h-full w-[15%] flex justify-center items-start pt-2 ml-3 ${isHovered ? 'expanded' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src={invite} alt="" width={40} />
        {isHovered && (
          <div className="expanded-content flex flex-col items-end ">
            
           <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.50)'}} className='w-[90%] mt-3 text-white'>
            <div className='w-full flex mt-2 space-x-2'>
              <div className='mt-1'>
               <img src={squad} alt="" width={12} />
              </div>
              <p style={{marginTop:'0.1rem'}} className='text-xs font-bold'>SQUAD</p>
            </div>
            <div className='w-full flex items-center mt-2 space-x-2'>
              <div>
                <img src={join} alt="" width={38} /> 
              </div>
              <p className='text-xs font-bold'>SQUAD JOIN</p>
            </div>
           </div>

           <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.50)'}} className='w-[90%] mt-3 text-white'>
            <div className='w-full flex mt-2 space-x-2'>
              <div className='mt-1'>
               <img src={online} alt="" width={12} />
              </div>
              <p style={{marginTop:'0.1rem'}} className='text-xs font-bold'>ONLINE</p>
            </div>
            <div className='w-full flex items-center mt-2 space-x-2'>
              <div>
                <img src={friend} alt="" width={38} /> 
              </div>
              <div>
                <p className='text-xs font-bold'>MARY JANE</p>
                <p style={{color:'rgba(255, 255, 255, 0.50)'}} className='text-xs font-bold'>ONLINE</p>
              </div>
              
            </div>
           </div>

           <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.50)'}} className='w-[90%] mt-3 text-white'>
            <div className='w-full flex mt-2 space-x-2'>
              <div className='mt-1'>
               <img src={online} alt="" width={12} />
              </div>
              <p style={{marginTop:'0.1rem'}} className='text-xs font-bold'>ONLINE</p>
            </div>
            <div className='w-full flex items-center mt-2 space-x-2'>
              <div>
                <img src={friend} alt="" width={38} /> 
              </div>
              <div>
                <p className='text-xs font-bold'>MARY JANE</p>
                <p style={{color:'rgba(255, 255, 255, 0.50)'}} className='text-xs font-bold'>ONLINE</p>
              </div>
              
            </div>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
