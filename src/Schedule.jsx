import React from 'react'

function Schedule() {
  return (
    <div class=" w-full  ">
      <div class=' flex items-center justify-center'>
        <div class='p-10  w-10/12 flex-row flex items-center justify-center bg-yellow'>
          <div class='flex flex-col '>
            <div>
                <h1 class=' uppercase font-serif font-semibold text-4xl' >Torstai 22.8</h1>
            </div>
            <div>
                <h2 class='py-8 font-serif font-semibold text-2xl'>Ego</h2>
            </div>
            
             <div>
                <h3 class='w-2/3 leading-7'>
                Teema pitää sisällään... Eli jokaisen teeman alle tähän kohtaan ja tällä muotoilulla tulee lyhyt kuvaus siitä, mitä kyseisellä teemalla halutaan käsitellä.  Eli mielellään muutaman lauseen pituudelta tekstiä. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec iaculis et leo in congue. 
                </h3>
             </div>
              <div>
                <button> <p class='mt-12 font-semibold hover:underline'>lue lisää</p></button>
              </div>
          </div>
          <div class='flex justify-end' >
                <div class='mx-6 w-80 h-80 bg-green'>
                    <p >Teemaan liittyvä kuva?</p>
                 </div>
             </div>
        </div>  
      </div>
      <div class='flex items-center justify-center '>
      <div class='w-10/12 bg-yellow'>
        <div class='flex flex-wrap'>
        <div class='p-10 w-1/2' >
            <h2 class='pb-4 font-serif font-semibold'>Pitkät elokuvat</h2>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
        </div>
        <div class='p-10 w-1/2 h-40'>
            <h2 class='pb-4 font-serif font-semibold'>Lyhärit</h2>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            
        </div>
        <div class='p-10 w-1/2 '>
            <h2 class='pb-4 font-serif font-semibold'>Oheisohjelma</h2>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            <div class='flex flex-row justify-between p-3'>
            <h3>Elokuva</h3>
            <h4>18:00</h4>
            <h5>Kivipiha</h5>
            </div>
            <div class='w-full h-px bg-gray'/>
            
            
            
        </div>
        </div>
        
      </div>

      </div>
      
   </div>
   
  )
}

export default Schedule