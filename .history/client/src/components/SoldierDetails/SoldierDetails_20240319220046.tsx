import React from 'react'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className=' w-[70%] flex flex-col items-center'>
      <div className="w-96 h-11 relative">
  <div className="w-96 h-11 left-0 top-0 absolute">
    <div className="w-96 h-px left-0 top-[43.83px] absolute border border-white border-opacity-20"></div>
    <div className="w-16 h-11 left-[0.54px] top-0 absolute opacity-80">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">HOme</div>
    </div>
    <div className="w-40 h-11 left-[102.99px] top-0 absolute opacity-80">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">Multiplayer</div>
    </div>
    <div className="w-32 h-11 left-[297.43px] top-0 absolute opacity-80">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">Campaign</div>
    </div>
    <div className="w-24 h-11 left-[455.87px] top-0 absolute">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">Soldier</div>
    </div>
    <div className="w-20 h-11 left-[590.31px] top-0 absolute opacity-80">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">store</div>
    </div>
    <div className="w-16 h-11 left-[699.76px] top-0 absolute opacity-80">
      <div className="left-[0.44px] top-0 absolute text-white text-3xl font-medium font-['Rajdhani'] uppercase tracking-wide">more</div>
    </div>
  </div>
</div>
    </div>
  )
}