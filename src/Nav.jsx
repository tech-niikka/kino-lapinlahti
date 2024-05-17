import React from 'react';
import logo from '../src/logo.png'


const Nav = React.forwardRef(({handleScroll}, ref) => {



  return (
    <div className='bg-navorange flex flex-wrap items-center justify-between h-24 w-screen'>
      <div>
        <button onClick={() => window.location.reload(false)} className='flex items-center'>
        <img class="w-30 h-12 px-20" src={logo}
            alt="image"/>
        </button>
      </div>
      <ul className="flex flex-row gap-2 ml-72"> {/* Added flex-row class to the ul */}
  <li onClick={() => handleScroll(ref[0])} class='px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700'>aikataulu</li>
  <li onClick={() => handleScroll(ref[1])} class='px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700'>ohjelmisto</li>
  <li onClick={() => handleScroll(ref[2])} class='px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700'>tapahtumasta</li>
  <li onClick={() => handleScroll(ref[3])} class='px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700'>alue</li>
  
</ul>

      <div class='p-4 mr-20'>
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
})

export default Nav;
