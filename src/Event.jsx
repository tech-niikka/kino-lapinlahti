import React from "react";

function Event({ data }) {
  const imageUrl = data?.images?.[0]?.fields?.file?.url;

  return (
    <div className="flex flex-row justify-center items-center w-full leading-7">
      <div className="max-w-[88%] sm:max-w-[85%] flex flex-col justify-center items-start lg:flex-row">
        <div className="flex flex-col w-[100%] lg:pr-[5rem] lg:w-[50%]">
          <div className="w-[100%] mb:w-[88%]">
            {data?.secondaryTitle && (
              <div>
                <h1 className="font-serif font-semibold text-plum text-4xl mb-4">
                  {data.secondaryTitle}
                </h1>
              </div>
            )}

            <div className="flex flex-col justify-between item text-plum">
              {data?.paragraph && (
                <h2 className="py-5 leading-7">{data.paragraph}</h2>
              )}
              {data?.paragraph2 && (
                <h2 className="py-5 leading-7">{data.paragraph2}</h2>
              )}
              {data?.paragraph3 && (
                <h2 className="py-5 leading-7">{data.paragraph3}</h2>
              )}
              {data?.paragraph4 && (
                <h2 className="py-5 leading-7">{data.paragraph4}</h2>
              )}
            </div>
          </div>
        </div>

        {imageUrl && (
          <div className="flex flex-row justify-center w-full px-[0rem] pl-[0rem] lg:flex-col lg:w-[50%] lg:pl-[8rem] lg:px-[0rem] custom-1020:mt-[8rem] pt-8 lg:pt-0">
            <img
              className="aspect-square w-[100%] max-w-[20rem] h-auto object-cover pb-[0rem] lg:pb-[1rem] lg:max-w-[40rem]"
              src={imageUrl.startsWith("//") ? `https:${imageUrl}` : imageUrl}
              alt="image"
              loading="lazy"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Event;
