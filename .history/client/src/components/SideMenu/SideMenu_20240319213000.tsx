import React from 'react'
import games_img from '../../assets/side-menu__games.png'
import other_img from '../../assets/side-menu__other.png';
import misc_img from '../../assets/side-menu__misc.png'


function SideMenu() {
  return (
    <div style={{borderRight:'0.5px solid #D9D9D9'}} className=' w-[4.5%] h-full flex flex-col border-r-[#D9D9D9] justify-between'>
      <div className=' space-y-4 h-[65%] flex flex-col justify-end'>
        <img src={games_img} alt="games" width={50} />
        <img className='ml-4' src={other_img} alt="other" width={35} />
      </div>
      <div className='w-full flex justify-center'>
        <img src={misc_img} alt="misc" width={20} />
      </div>
    </div>
  )
}

export default SideMenu