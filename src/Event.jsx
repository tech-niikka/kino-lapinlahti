import React from "react";

function Event({ data }) {
  console.log("eventData", data);
  return (
    <div class="flex flex-row justify-center items-center w-full leading-7">
      <div className="max-w-[85%] flex flex-row justify-center items-start">
        <div class="flex flex-col w-[50%] pr-[1rem]">
          <div class="w-[90%] ">
            <div class="">
              <h1 class="font-serif font-semibold text-4xl mb-4">
                {data?.secondaryTitle}
              </h1>
            </div>
            <div class=" flex flex-col justify-between item ">
              <h2 class="py-5 leading-7">{data?.paragraph}</h2>
              <h2 class="py-5 leading-7">{data?.paragraph2}</h2>
              <h2 class="py-5 leading-7">{data?.paragraph3}</h2>
              <h2 class="py-5 leading-7">{data?.paragraph4}</h2>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-between w-[50%] pl-[6rem]">
          <img
            class="aspect-square w-[100%] h-auto object-cover mb-[1rem]"
            src={data?.images[0].fields.file.url}
            alt="image"
          />

          <img
            class="aspect-square w-[100%] h-auto object-cover"
            src={data?.images[1].fields.file.url}
            alt="image"
          />
        </div>
      </div>
    </div>
  );
}

export default Event;
