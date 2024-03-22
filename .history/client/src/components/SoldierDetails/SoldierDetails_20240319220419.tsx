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
        </div>
        <div className="mt-4 w-full min-h-[1px] max-md:max-w-full" />
      </div>
      <div className="flex flex-col justify-center">
        <div>Soldier</div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a5f3745fdebc3bd165f0d76c60e5a6485b32df928ce925fb28a482c78649665f?apiKey=4dbcf2baa1404cc8b05823cc937fc90e&"
          className="self-center mt-4 border border-white border-solid aspect-[100] fill-white stroke-[1px] stroke-white w-[100px]"
        />
      </div>
    </div>
    <div className="flex gap-5 justify-between self-start">
      <div className="justify-center">store</div>
      <div className="justify-center">more</div>
    </div>
  </div>
  )
}