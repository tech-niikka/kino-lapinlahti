import React, { useState } from "react";

function Schedule({ data, index, buttons }) {
  const [showSchedule, setShowSchedule] = useState(false);
  const [buttonText, setButtonText] = useState(buttons[0]?.fields.closed);

  const toggleSchedule = () => {
    setShowSchedule(!showSchedule);
  };

  const handleClick = () => {
    setButtonText(
      buttonText === buttons[0].fields.closed
        ? buttons[0].fields.open
        : buttons[0].fields.closed
    );
  };

  const handleBothClicks = () => {
    toggleSchedule();
    handleClick();
  };

  return (
    <div className=" w-full ">
      <div className="flex items-center justify-center">
        <div
          className={`px-8 xsm:px-16 pt-16 pb-16 w-[88%] sm:w-[85%] flex-col flex items-between justify-center ${
            index % 2 === 0 ? "bg-yellow" : "bg-blue"
          }  overflow-hidden md:flex-row relative`}
        >
          <div className="flex flex-col">
            <div>
              <h1 className="uppercase font-serif font-semibold text-4xl">
                {data.fields.date} {/* schedule block heading (weekday & date) */}
              </h1>
            </div>
            <div>
              <h2 className="py-8 font-serif font-semibold text-2xl">
                {data.fields.theme} {/* schedule block subheading (theme) */}
              </h2>
            </div>
            <div>
              <h3 className="w-[100%] lg:w-[88%] pr-[0rem] pb-[1rem] md:pb-[1rem] md:pr-[3rem]">
                {data.fields.description.content[0].content[0].value} {/* body text 1st paragraph */}
              </h3>
            </div>
            <div>
              <h3 className="w-[100%] lg:w-[88%] pr-[0rem] pb-[1rem] md:pb-[3rem] md:pr-[3rem]">
                {data.fields.descriptionTwo?.content[0]?.content[0]?.value} {/* body text 2nd paragraph (placeholder atm) */}
              </h3>
            </div>
          </div>

          <div className="flex flex-grow custom-1150:justify-end justify-start items-center w-[100%] pb-[1rem] md:pb-[0rem]">
            <div className=" w-[14rem] h-auto md:w-[16rem] lg:w-[20rem] custom-1150:ml-[3rem] custom-883:pb-0 pb-[2rem]">
              <img
                className="aspect-square object-cover "
                src={data.fields.image.fields.file.url}
                alt="image"
              />
            </div>
          </div>



          <div className="absolute bottom-[3rem] left-[2rem] xsm:left-[4rem]">
          <div className='font-semibold underline custom-883:mt-12'>
            <a href="/aik.pdf" target="_blank" >PDF-aikataulu / PDF-schedule</a> {/* link to pdf schedule */}
          </div>
          
            <button
              onClick={handleBothClicks}
              className="font-semibold underline"
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
      {showSchedule && (
        <div className="flex items-center justify-center">
          <div
            className={`px-6 pb-12 w-[88%] sm:w-[85%] ${
              index % 2 === 0 ? "bg-yellow" : "bg-blue"
            }
            flex items-center justify-center`}
          >
            <div className="flex flex-col flex-wrap md:flex-row w-[100%]">
              {data.fields.eventCategory.map((item) => (
                <div className="sm:px-[2rem] py-5 w-1/1 md:w-1/2">
                  <h2 className="pb-4 font-serif font-semibold capitalize">
                    {item.fields.title}
                  </h2>
                  {item.fields.events.map((event) => (
                    <div className="text-xs custom-330:text-sm">
                      <div className="w-full h-px bg-gray" />
                      <div className="grid grid-cols-[3fr_1fr_2fr] gap-2 p-3 text-left"> {/* columns aligned, widths based on content (title 3, time 1, location 2) */}
                        <h3>{event.fields.title}</h3>
                        <h4>{event.fields.time}</h4>
                        <h5>{event.fields.location}</h5>
                      </div>
                    </div>
                  ))}
                  <div className="w-full h-px bg-gray" />
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
