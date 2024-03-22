import React from 'react'



export default function SoldierDetails() {
  const healineItems=['HOME', 'MULTIPLAYER', 'CAMPAIGN', 'SOLDIER', 'STORE', 'MORE']
  return (
    <div className="flex gap-0 justify-center pt-2 pr-20 text-3xl font-medium tracking-wider text-white uppercase whitespace-nowrap max-md:flex-wrap max-md:pr-5">
    <div className="flex gap-0 max-md:flex-wrap">
      <div className="flex flex-col w-full max-md:max-w-full">
        <div className="flex gap-5 justify-between self-start">
          <div className="justify-center">HOme</div>
          <div className="justify-center">Multiplayer</div>
          <div className="justify-center">Campaign</div>
          <div  className="justify-center">Soldier</div>
        </div>
       
      </div>
      
    </div>
    <div className="flex gap-5 justify-between self-start">
      <div className="justify-center">store</div>
      <div className="justify-center">more</div>
    </div>
  </div>
  )
}