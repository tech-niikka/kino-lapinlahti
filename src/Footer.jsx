import React from "react";
import logo from "../src/assets/logo/logo-white-en.png";

import {
  AiOutlineInstagram,
  AiOutlineFacebook,
  AiOutlineLinkedin,
} from "react-icons/ai";

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer({ data }) {
  return (
    <div>
      <div className="w-full bg-peony py-8 flex flex-row">
        <div className="w-[88%] sm:w-[85%] mx-auto">
          <div className="grid custom-883:grid-cols-5 grid-cols-2 custom-588:grid-cols-3 custom-883:items-center pb-8 gap-y-10">

            {/* Sponsor logos */}

            {data?.logos?.slice(1).map((logoItem, index) => ( // slice(1) to avoid using LFF logo here which is used elsewhere in the footer
              <div key={logoItem?.fields?.logo?.sys?.id || index} className="flex justify-center items-center">
                <a
                  href={logoItem?.fields?.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-36 h-24 flex justify-center items-center overflow-hidden"
                >
                  <img
                    className="object-contain max-w-full max-h-full"
                    src={logoItem?.fields?.logo?.fields?.file?.url}
                    alt={logoItem?.fields?.altText || "Sponsor logo"}
                    loading="lazy"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full bg-blueberry py-8 flex flex-col md:flex-row">
        <div className="w-[88%] sm:w-[85%] mx-auto">
          <div className="flex flex-col md:flex-row gap-y-8 md:gap-y-0 md:gap-x-8">

            {/* Contact info, privacy notice, etc. */}

            <div className="flex flex-col md:flex-row items-stretch gap-4 md:gap-16 w-full md:flex-grow">

            {/* Left column */}

              <div className="flex flex-col">

                {/* Festival logo button */}

                <div className="py-4 flex items-center">
                  <button
                    onClick={() => {
                      topFunction(); // Call topFunction to scroll to top
                    }}
                    id="Lapinlahti logo button"
                    title="Scroll to top / Palaa sivun alkuun"
                    className="flex justify-start items-center"
                  >
                    <img 
                      className="w-30 h-12 pb-[0.5rem]"
                      src={data?.logos[0].fields.logo.fields.file.url || logo} 
                      alt="logo" /> 
                  </button>
                </div>

                <div className="flex flex-col mt-auto space-y-1">
                  <div>
                    <a 
                      href="https://maps.app.goo.gl/umz7SezqGTJSiJS88"
                      target="_blank"
                      rel="noopener noreferrer" 
                      className="inline-block hover:underline">
                      {data?.address}
                    </a>
                  </div>

                  {/*}
                  <div>
                    <a 
                      href="tel:+358442788829"
                      className="inline-block hover:underline">
                      {data?.phoneNumber}
                    </a>
                  </div>
                  */}
                  
                  <div>
                    <a 
                      href="mailto:kinolapinlahti@gmail.com"
                      className="inline-block hover:underline">
                      {data?.emailAddress}
                    </a>
                  </div>
                </div>
              </div>

            {/* Right column */}
            
            <div className="flex flex-col justify-end w-full md:w-1/2 min-w-0">
              <div className="flex flex-row py-2 items-center">
                <a 
                  href="https://www.instagram.com/lapinlahtifilmfestival/"
                  target="_blank"
                  rel="noopener noreferrer">
                  <AiOutlineInstagram
                    size={32}
                    className="cursor-pointer text-heading"
                  />
                </a>
                <a 
                  href="https://www.facebook.com/events/2063526377510306/"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  <AiOutlineFacebook
                    size={32}
                    className="cursor-pointer text-heading" 
                  />
                </a>
                <a 
                  href="https://www.linkedin.com/company/kino-lapinlahti-ry/"
                  target="_blank"
                  rel="noopener noreferrer"> 
                  <AiOutlineLinkedin
                    size={32}
                    className="cursor-pointer text-heading" 
                  />
                </a>
              </div>

              <div className="flex flex-col space-y-1">
                <div>
                  <a 
                    href="https://docs.google.com/document/d/1s5Tda7QWJ9YQH6VCThGGvxd1Ol-r2TGbU8_Q8ijprJA/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block hover:underline">
                    {data?.privacyNotice}
                  </a>
                </div>

                <h2>
                  {data?.copyright}
                </h2>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Footer;
