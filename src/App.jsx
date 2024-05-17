import React from 'react';
import { useRef } from 'react';
import Nav from './Nav.jsx';
import Schedule from './Schedule.jsx';
import Event from './Event.jsx';
import Area from './Area.jsx';
import Footer from './Footer.jsx';
import one from '../src/1.png'
import two from '../src/2.png'
import three from '../src/3.png'

function App() {
  const aikataulu = useRef(null);
  const ohjelmisto = useRef(null);
  const info = useRef(null);
  const alue = useRef(null);

  const handleScroll = (ref) => {
		ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
	};



  return (
    <div>
      <Nav handleScroll={handleScroll} ref={[aikataulu,ohjelmisto, info, alue ]}/>
      <div class='bg-main pt-5 text-heading'>
          <div class=' flex flex-col items-center justify-between'>
            <h2 class='pt-16 font-serif font-semibold text-3xl leading-7'>
            22.8.-24.8.2024
            </h2>
            <h1 class='pt-3  font-serif font-semibold text-5xl leading-loose'>
            Lapinlahden elokuvajuhlat
            </h1>
           </div>
    {/* Langing pictures */}     
       <div class=" mx-auto overflow-x-auto lg:space-y-0 lg:gap-0 lg:grid lg:grid-cols-4">
            <div class="w-full rounded ">
               <img class="h-96 w-full object-cover" src={three} alt="image"/>
            </div>
            <div class="w-full rounded h-96">
               <img class="h-96 w-full object-cover" src={one} alt="image"/>
            </div>
           <div class="w-full rounded h-96">
               <img class="h-96 w-full object-cover" src={two} alt="image"/>
           </div>
           <div class="w-full rounded h-96 ">
               <img class="h-96 w-full object-cover" src={three} alt="image"/> 
           </div> 
        </div>
      <div class='flex flex-col items-center justify-between'>
        <h3 class='pt-8 uppercase font-serif font-semibold text-2xl leading-7' >Elokuva tekee hyvää</h3>
      </div>
    </div>
    {/* Schedule */}
    <div ref={aikataulu} class='my-36 mx-auto w-full'>
     <div class="flex flex-row items-center justify-center">
        <div class="mx-20 bg-text w-2/3 h-0.5"></div>
         <div class="px-2">
            <h2 class="font-semibold text-xl">AIKATAULU</h2>
         </div>
        <div class="mx-20 bg-text w-2/3 h-0.5 "></div>
     </div>
    </div>
    {/* Schedule component */}
    <div class='flex justify-center items-center '>
      <Schedule/>
      </div>
      <div class='flex justify-center items-center '>
      <Schedule/>
      </div>
      <div class='flex justify-center items-center '>
      <Schedule/>
      </div>
      <div class='flex justify-center items-center '>
      <Schedule/>
      </div>
    {/* Catalogue */}
    <div ref={ohjelmisto} class='my-36 mx-auto w-full'>
     <div class="flex flex-row items-center justify-center">
        <div class="mx-20 bg-text w-2/3 h-0.5"></div>
          <div class="px-2">
            <h2 class="font-semibold text-xl">OHJELMISTO</h2>
          </div>
        <div class="mx-20 bg-text w-2/3 h-0.5 "></div>
      </div>
    </div>
    {/* Event */}
    <div ref={info} class='my-36 mx-auto w-full'>
      <div class="flex flex-row items-center justify-center">
        <div class="mx-20 bg-text w-2/3 h-0.5"></div>
          <div class="px-2">
            <h2 class="font-semibold text-xl">TAPAHTUMASTA</h2>
          </div>
        <div class="mx-20 bg-text w-2/3 h-0.5 "></div>
      </div>
    </div>
    <Event/>
    {/* Area */}
    <div ref={alue} class='my-36 mx-auto w-full'>
    <div class="flex flex-row items-center justify-center">
        <div class="mx-20 bg-text w-2/3 h-0.5"></div>
        <div class="px-2">
            <h2 class="font-semibold text-xl">ALUE</h2>
        </div>
        <div class="mx-20 bg-text w-2/3 h-0.5 "></div>
    </div>
    </div>
    <Area/>
    <Footer/>


    </div>
  );
}

export default App;
