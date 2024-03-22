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
          <div className="expanded-content flex flex-col ">
            
           <div style={{borderTop:'1px solid rgba(255, 255, 255, 0.15)'}} className='w-full'>
            <div className='w-full '>
              <img src={squad} alt="" width={10} />
              SQUAD
            </div>
           </div>
          </div>
        )}
      </div>
    </div>
  );
}
