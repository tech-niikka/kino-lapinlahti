import React from "react";

function Event({ data }) {
  return (
    <div className="w-full leading-7">
      {/* Tekstiosa pysyy sivun marginaalien sisällä */}
      <div className="flex flex-row justify-center items-center w-full">
        <div className="max-w-[88%] sm:max-w-[85%] w-full">
          {data?.secondaryTitle && (
            <div>
              <h1 className="font-serif font-semibold text-plum text-4xl mb-4">
                {data.secondaryTitle}
              </h1>
            </div>
          )}

          <div className="flex flex-col justify-between item text-plum text-lg leading-8">
            {data?.paragraph && (
              <h2 className="py-5">{data.paragraph}</h2>
            )}
            {data?.paragraph2 && (
              <h2 className="py-5">{data.paragraph2}</h2>
            )}
            {data?.paragraph3 && (
              <h2 className="py-5">{data.paragraph3}</h2>
            )}
            {data?.paragraph4 && (
              <h2 className="py-5">{data.paragraph4}</h2>
            )}
          </div>
        </div>
      </div>
      {/* Teaser-video on siirretty Alue-osion perään (Teaser.jsx) */}
    </div>
  );
}

export default Event;
