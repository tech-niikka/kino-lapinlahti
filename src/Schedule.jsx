import React from "react";

function Schedule({ data }) {
  return (
    <div class=" w-full pb-[1rem] ">
      <div class=" flex items-center justify-center">
        <div class="p-10  w-[85%] flex-row flex items-center justify-center bg-yellow">
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
              <h3 class="w-2/3 leading-7">
                {data.fields.description.content[0].content[0].value}
              </h3>
            </div>
          </div>
          <div class="flex justify-end">
            <div class="mx-6 w-80 h-80 bg-green">
              <p>Teemaan liittyvä kuva?</p>
            </div>
          </div>
        </div>
      </div>
      <div class="flex items-center justify-center">
        <div class="w-[85%] bg-yellow">
          <div class="flex flex-wrap">
            {data.fields.eventCategory.map((item) => (
              <div class="p-10 w-1/2">
                <h2 class="pb-4 font-serif font-semibold">
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
    </div>
  );
}

export default Schedule;
