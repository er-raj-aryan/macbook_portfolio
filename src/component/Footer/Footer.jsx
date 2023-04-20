import React from 'react'

function Footer() {
  return (
    <div className=" flex justify-center bottom-0 fixed  w-[100%]  p-16 pt-2 pb-2">
    <div className='flex justify-center gap-5 w-[fit-content]  p-3 bg-black  border-gray-400  rounded-2xl '>
    <img className="w-12" src="./app-store.svg" alt='' />
    <img className="w-12" src="./facetime.svg" alt='' />
    <img className="w-12" src="./settings.svg" alt='' />
    <img className="w-12" src="./maps.svg" alt='' />
    <img className="w-12" src="./contacts.svg" alt='' />
    <img className="w-12" src="./safari.svg" alt='' />
    <img className="w-12" src="./find-my.svg" alt='' />
    <img className="w-12" src="./notes.svg" alt='' />
    </div>
    </div>
  )
}

export default Footer