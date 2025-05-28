import React from "react";

function Area({ data }) {
  return (
    <div className="mb-20 flex flex-row justify-center items-center w-full leading-7">
      <div className="max-w-[88%] sm:max-w-[85%] flex flex-col justify-between items-start md:flex-row md:items-center">
        <div className="flex flex-col mr-[1.5rem] custom-1020:mr-[8rem] w-[100%] md:w-[50%]">
          <div className="">
            <h1 className="font-serif font-semibold text-4xl mb-4">
              {data?.secondaryTitle} {/* Main heading (how to arrive) */}
            </h1>
          </div>
          <div className=" flex flex-col justify-between w-2/3">
            <div className="py-4">
              <h3 className="font-bold leading-7">{data?.subheading1}</h3> {/* Subheading */}
              <h2 className="">{data?.paragraph1}</h2>
              <h2 className="pt-[0.5rem]">{data?.paragraph5}</h2>
            </div>

            <div className="py-4">
              <h3 className="font-bold">{data?.subheading2}</h3>
              <div>{data?.openHours.fields.item1}</div> {/* Festival opening hours */}
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
              {/* Links to accessibility guides etc. */}
              <a className='hover:underline'  target="_blank" href="https://docs.google.com/document/d/18mhspc47rtUlAMXKDayj_F4Q89gykPB0-dy2PHDo1nQ/"><h3 className=" italic leading-7 pt-4">{data?.subheading5}</h3></a>
              <a className='hover:underline'  target="_blank" href="https://lapinlahdenlahde.fi/wp-content/uploads/FI-Q-door-access-ramp-Omatoimiohje.pdf"><h3 className=" italic leading-7 pt-2">{data?.subheading6}</h3></a>
              <a className='hover:underline'  target="_blank" href="https://docs.google.com/document/d/1HPmF-iGggS4Mc2DQ-sHwWL8seaGIxKXDG_o1tgJf1_o/"><h3 className=" italic leading-7 pt-2">{data?.subheading7}</h3></a>
              <a className='hover:underline'  target="_blank" href="https://bit.ly/myos-safer-space"><h3 className=" italic leading-7 pt-2">{data?.subheading8}</h3></a>
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

        <div>
          <div className="w-[100%] mb-6 md:w-[50%]">
            <style>
              {`
          @media (max-width: 1024px) {
            iframe.responsive-iframe {
              width: 20.125rem;
              height: 18.875rem
            }
          }

          @media (min-width: 1025px) {
            iframe.responsive-iframe {
              width: 28.125rem;
              height: 26.875rem;
            }
          }
        `}
            </style>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1584.4612808598185!2d24.911512298500625!3d60.16752629689014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46920a37d09b33d7%3A0x80af25826e6d8cf6!2sLapinlahden%20L%C3%A4hde!5e0!3m2!1sen!2sse!4v1715858112461!5m2!1sen!2sse"
              className="responsive-iframe"
              style={{ border: 0 }}
              allowFullScreen=""
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
