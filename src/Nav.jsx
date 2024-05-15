import React from 'react';
import logo from '../src/logo.png'

function Nav() {
  return (
    <div className='bg-navorange flex flex-wrap items-center justify-between h-24 w-screen'>
      <div>
        <button onClick={() => window.location.reload(false)} className='flex items-center'>
        <img class="w-30 h-12 px-20" src={logo}
            alt="image"/>
        </button>
      </div>
      <ul className="flex flex-row"> {/* Added flex-row class to the ul */}
  <li class='p-1 h-7'><button className='text-heading uppercase border-2 border-solid rounded-full w-28 h-8 hover:bg-heading hover:text-navorange font-sans-700'>aikataulu</button></li>
  <li class='p-1 h-7'><button className='text-heading uppercase border-2 border-solid rounded-full w-28 h-8 hover:bg-heading hover:text-navorange'>ohjelmisto</button></li>
  <li class='p-1 h-7'><button className='text-heading uppercase border-2 border-solid rounded-full w-28 h-8 hover:bg-heading hover:text-navorange'>info</button></li>
  <li class='p-1 h-7'><button className='text-heading uppercase border-2 border-solid rounded-full w-28 h-8 hover:bg-heading hover:text-navorange'>alue</button></li>
</ul>

      <div class='p-4'>
        <ul class='flex flex-row' >
         <li>
         <button className='text-heading uppercase pr-1 underline'>fi</button>
        </li>
        <li> <p>/</p> </li>
        <li>
         <button className='text-heading uppercase pl-1 hover:underline'>en</button>
        </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
