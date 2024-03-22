import React from 'react'
import games_img from '../../assets/side-menu__games.png'
import other_img from '../../assets/side-menu__other.png';
import misc_img from '../../assets/side-menu__misc.png';
import game_side_1 from '../../assets/side-menu1.png'
import game_side_2 from '../../assets/side-menu2.png'
import game_side_3 from '../../assets/side-menu3.png'
import game_side_4 from '../../assets/side-menu4.png'


function SideMenu() {
  return (
    <div style={{borderRight:'1px solid rgba(255, 255, 255, 0.15)'}} className=' w-[4.5%] h-full flex flex-col  justify-between'>
      <div className=' space-y-4 h-[65%] flex flex-col justify-end'>
        <div className='w-full ml-4 space-y-3'>
          <img src={game_side_2} alt="games" width={35} />
          <img className=' mr-4' src={game_side_1} alt="games" width={35} />
          <img src={game_side_4} alt="games" width={50} />
          <img src={game_side_3} alt="games" width={35} />
        </div>
        
        <img className='ml-4' src={other_img} alt="other" width={35} />
      </div>
      <div className='w-full h-[12%] flex justify-center items-start'>
        <img src={misc_img} alt="misc" width={20} />
      </div>
    </div>
  )
}

export default SideMenu