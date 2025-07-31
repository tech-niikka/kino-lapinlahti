import React from "react";

function Event({ data }) {
  return (

    <div className="flex flex-row justify-center items-center w-full leading-7">
      <div className="max-w-[88%] sm:max-w-[85%] flex flex-col justify-center items-start lg:flex-row">
        <div className="flex flex-col w-[100%] lg:pr-[5rem] lg:w-[50%]">
          <div className="w-[100%] mb:w-[88%]">
            <div className="">
              <h1 className="font-serif font-semibold text-white text-4xl mb-4">
                {data?.secondaryTitle}
              </h1>
            </div>

            <div className="flex flex-col justify-between item text-white">
              <h2 className="py-5 leading-7">{data?.paragraph}</h2>
              <h2 className="py-5 leading-7">{data?.paragraph2}</h2>
              <h2 className="py-5 leading-7">{data?.paragraph3}</h2>
              <h2 className="py-5 leading-7">{data?.paragraph4}</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-row justify-between w-full px-[0rem] pl-[0rem] lg:flex-col lg:w-[50%] lg:pl-[8rem] lg:px-[0rem] custom-1020:mt-[8rem]">
          <img
            className="aspect-square w-[100%] max-w-[20rem] h-auto object-cover pb-[0rem] lg:pb-[1rem] lg:max-w-[40rem]"
            src={data?.images[0].fields.file.url}
            alt="image"
            loading="lazy"
          />

          {/*
          <img
            className="aspect-square w-[100%] max-w-[20rem] h-auto object-cover lg:max-w-[40rem] hidden custom-780:block"
            src={data?.images[1].fields.file.url}
            alt="image"
          />
          */}
          
        </div>
      </div>
    </div>
  );
}

export default Event;
