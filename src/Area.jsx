import React from "react";

function Area({ data }) {
  return (
    <div class="mb-20 flex flex-row justify-center items-center w-full leading-7">
      <div class="max-w-[88%] sm:max-w-[85%] flex flex-col justify-center items-start md:flex-row md:items-center md:justify-between">
        <div class="flex flex-col mr-[1.5rem] w-[100%] md:w-[50%]">
          <div class="">
            <h1 class="font-serif font-semibold text-4xl mb-4">
              {data?.secondaryTitle}
            </h1>
          </div>
          <div class=" flex flex-col justify-between">
            <div class="py-4">
              <h3 class="font-bold leading-7">{data?.subheading1}</h3>
              <h2 class="">{data?.paragraph1}</h2>
            </div>

            <div class="py-4">
              <h3 class="font-bold">{data?.subheading2}</h3>
              <div>{data?.openHours.fields.item1}</div>
              <div>{data?.openHours.fields.item2}</div>
              <div>{data?.openHours.fields.item3}</div>
              <div>{data?.openHours.fields.item4}</div>
            </div>
            <div class="py-4">
              <h3 class="font-bold leading-7">{data?.subheading3}</h3>
              <h2 class="">{data?.paragraph3}</h2>
            </div>
            <div class="py-4">
              <h3 class="font-bold leading-7">{data?.subheading4}</h3>
              <h2 class="">{data?.paragraph4}</h2>
            </div>
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
