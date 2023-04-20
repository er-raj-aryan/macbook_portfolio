import React from 'react';

function Navbar() {
  return (
    <div className='h-10 p-2 pl-5 pr-5 bg-black text-white text-sm flex justify-between items-center'>
      <div className='h-[100%] flex gap-4 items-center'>
      {/* logo */}
      <img className="h-[80%] cursor-pointer" src="./apple.svg" alt="apple" />
      {/* menu list */}
      <ul className='flex gap-5 '>
        <li className='cursor-pointer'>Finder</li>
        <li className='cursor-pointer'>File</li>
        <li className='cursor-pointer'>Edit</li>
        <li className='cursor-pointer'>View</li>
        <li className='cursor-pointer'>Terminal</li>
      </ul>
      </div>

      {/* controls */}
      <div className="h-[100%] flex gap-4 items-center w-[260px]">
        <img className="h-[100%]" src="./battery2.svg" alt="battery"/>
        <img className="h-[80%] " src="./wifi.svg" alt="battery"/>
        <img className="h-[80%] " src="./search.svg" alt="battery"/>
        <div className='w-[100%]'>Sat 21 Jan</div>
        <div className='w-[100%]'>9:43 PM</div>
      </div>

      {/* todays date / current time */}
    </div>
  )
}

export default Navbar