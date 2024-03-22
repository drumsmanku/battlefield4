import React, { useState } from 'react';
import logo from '../../assets/level-wrapper.png';
import invite from '../../assets/invite.png';
import './RightSideMenu.css'; // Import CSS file for styling
import squad from '../../assets/squad.png'

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
              <p style={{marginTop:'0.1rem'}} className='text-sm font-bold'>SQUAD</p>
            </div>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
