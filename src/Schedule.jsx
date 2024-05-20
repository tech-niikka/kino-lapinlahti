import React, { useState } from 'react';
import one from '../src/1.png'

function Schedule({ data }) {
    const [showSchedule, setShowSchedule] = useState(false);
    const [buttonText, setButtonText] = useState('katso päivän aikataulu');

const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

const handleClick = () => {
    setButtonText(buttonText === 'katso päivän aikataulu' ? 'sulje aikataulu' : 'katso päivän aikataulu');
};

const handleBothClicks = () => {
    toggleSchedule();
    handleClick();
};

  return (
    <div class=" w-full leading-7 ">
      <div class="flex items-center justify-center">
        <div class="px-16 pt-16 pb-16  w-[85%] flex-row flex items-center justify-center bg-yellow overflow-hidden">
          <div class="flex flex-col ">
            <div>
              <h1 class="uppercase font-serif font-semibold text-4xl">
                {data.fields.date}
              </h1>
            </div>
            <div>
              <h2 class="py-8 font-serif font-semibold text-2xl">
                {data.fields.theme}
              </h2>
            </div>
            <div>
              <h3 class="w-2/3 ">
                {data.fields.description.content[0].content[0].value}
              </h3>
            </div>
            <div>
                <button onClick={handleBothClicks} class='mt-12 font-semibold hover:underline' > {buttonText} </button>
              </div>
          </div>
          <div class="flex justify-end w-full h-auto">
          <div class=' w-96 h-auto  bg-green'>
                    <img class='aspect-square' src={one} alt="image" />
                 </div>
          </div>
        </div>
      </div>
  {showSchedule && (
      <div class=" flex items-center justify-center">
        <div class="px-6 pb-12 w-[85%] bg-yellow">
          <div class="flex flex-wrap">
            {data.fields.eventCategory.map((item) => (
              <div class="p-10 py-5 w-1/2">
                <h2 class="pb-4 font-serif font-semibold capitalize">
                  {item.fields.title}
                </h2>
                {item.fields.events.map((event) => (
                  <div>
                    <div class="w-full h-px bg-gray" />
                    <div class="flex flex-row justify-between p-3">
                      <h3>{event.fields.title}</h3>
                      <h4>{event.fields.time}</h4>
                      <h5>{event.fields.location}</h5>
                    </div>
                  </div>
                ))}
                <div class="w-full h-px bg-gray" />
              </div>
            ))}
          </div>
        </div>
      </div>
)}

    </div>
  );
}

export default Schedule;
