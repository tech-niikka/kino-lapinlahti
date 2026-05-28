import React from "react";

function Area({ data }) {
  return (
    <div className="mb-20 flex flex-row justify-center items-start w-full leading-7">
      <div className="max-w-[88%] sm:max-w-[85%] flex flex-col justify-between items-start md:flex-row md:items-start">
        <div className="flex flex-col mr-[1.5rem] custom-1020:mr-[8rem] w-[100%] md:w-[50%] text-plum">
          <div className="">
            <h1 className="font-serif font-semibold text-4xl mb-4">
              {data?.secondaryTitle}
            </h1>
          </div>

          <div className=" flex flex-col justify-between">
            <div className="py-4">
              <h3 className="font-bold leading-7">{data?.subheading1}</h3>
              <h2 className="">{data?.paragraph1}</h2>
              <h2 className="pt-[0.5rem]">{data?.paragraph5}</h2>
            </div>

            <div className="py-4">
              <h3 className="font-bold">{data?.subheading2}</h3>
              <div>{data?.openHours.fields.item1}</div>
              <div>{data?.openHours.fields.item2}</div>
              <div>{data?.openHours.fields.item3}</div>
              <div>{data?.openHours.fields.item4}</div>
            </div>

            <div className="py-4">
              <h3 className="font-bold leading-7">{data?.subheading3}</h3> 
              <h2 className="">{data?.paragraph3}</h2>
            </div>
            
            <div className="py-4">
              <h3 className="font-bold leading-7">{data?.subheading4}</h3>
              <h2 className="">{data?.paragraph4}</h2>
            </div>

              {/* Links to accessibility guides etc. */}

            <div className="py-4 font-bold leading-7">
              <div>
                <a 
                  href="https://docs.google.com/document/d/18mhspc47rtUlAMXKDayj_F4Q89gykPB0-dy2PHDo1nQ/"
                  className='inline-block hover:underline'
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="pt-4">{data?.subheading5}</h3>
                </a>
              </div>
              <div>
                <a 
                href="https://lapinlahdenlahde.fi/wp-content/uploads/FI-Q-door-access-ramp-Omatoimiohje.pdf"
                className='inline-block hover:underline'
                target="_blank"
                rel="noopener noreferrer"
                >
                  <h3 className="pt-2">{data?.subheading6}</h3>
                </a>
              </div>
              {/* ! Program in simple English commented out until we have a 2025 version ! 
              <div>
                <a
                  href="https://docs.google.com/document/d/1HPmF-iGggS4Mc2DQ-sHwWL8seaGIxKXDG_o1tgJf1_o/" 
                  className="inline-block hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="pt-2">{data?.subheading7}</h3>
                </a>
              </div>
              */}
              <div>
                <a
                  href="https://bit.ly/myos-safer-space"
                  className="inline-block hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <h3 className="pt-2">{data?.subheading8}</h3>
                </a>
              </div>
            </div>

            <h3 className="font-bold leading-7">{data?.subheading9} </h3>
            <h4>{data?.paragraph6}</h4>
            <h3 className="font-semibold leading-7 pt-4 underline"> {data?.subheading10}</h3>
            <h4>{data?.paragraph7}</h4>
            <h3 className="font-semibold leading-7 pt-4 underline"> {data?.subheading11}</h3>
            <h4>{data?.paragraph8}</h4>
            <h3 className="font-semibold leading-7 pt-4 underline"> {data?.subheading12}</h3>
            <h4>{data?.paragraph9}</h4>
          </div>
        </div>

        <div className="w-full md:w-1/2 mb-6 flex flex-col items-center">
          <a
            href="/area-map.png"
            target="_blank"
            rel="noopener noreferrer"
          >
            <picture>
              <source srcSet="/area-map-1000.webp" type="image/webp" />
              <img
                className="aspect-square w-[100%] max-w-[22rem] md:max-w-[28rem] h-auto object-cover pb-[0rem] lg:pb-[1rem] lg:max-w-[36rem]"
                src="/area-map.png"
                alt="image"
                loading="lazy"
              />
            </picture>
          </a>

          <div className="relative pt-[60%] rounded-2xl overflow-hidden shadow-lg mt-8 w-full max-w-[22rem] md:max-w-[28rem] lg:max-w-[36rem]">
            <iframe
              className="absolute top-0 left-0 w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4612808598185!2d24.911512298500625!3d60.16752629689014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a37d09b33d7%3A0x80af25826e6d8cf6!2sLapinlahden%20L%C3%A4hde!5e0!3m2!1sen!2sse!4v1715858112461!5m2!1sen!2sse"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Area;
