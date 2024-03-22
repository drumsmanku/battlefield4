import React from 'react'
import games_img from '../../assets/side-menu__games.png'
import other_img from '../../assets/side-menu__other.png';
import misc_img from '../../assets/side-menu__misc.png'


function SideMenu() {
  return (
    <div className=' w-[10%] h-[85%] flex flex-col border-r-[#D9D9D9] justify-around items-center'>
      <div className=' space-y-4 h-[50%]'>
        <img src={games_img} alt="games" height={30} />
        <img src={other_img} alt="other" />
      </div>
      <img src={misc_img} alt="misc" />
    </div>
  )
}

export default SideMenu