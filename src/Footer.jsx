import React from "react";
import logo from "../src/assets/logo/logo-black-en.png";
import llogo from "../src/assets/logo/llLogo.png";
import plogo from "../src/assets/logo/prologo.png";
import mlogo from "../src/assets/logo/mielilogo.png";
import hlogo from "../src/assets/logo/Helsinki_logo.png";
import cinemalogo from "../src/assets/logo/cinemamondo_logo.png";
import dokulogo from "../src/assets/logo/dokumenttikilta_logo.png";
import setlogo from "../src/assets/logo/set_logo.png";
import cinedlogo from "../src/assets/logo/cined_logo.png";
import elkelogo from "../src/assets/logo/elke_logo.png";
import ihmelogo from "../src/assets/logo/ihme_logo.png"
import laplogo from "../src/assets/logo/lap_kan.png"
import clogo from "../src/assets/logo/cinemanselogo.jpg"
import hyvälogo from "../src/assets/logo/hyvä.png"
import oceanlogo from "../src/assets/logo/ocean.png"
import elogo from "../src/assets/logo/estrella-logo.png"
import jalologo from "../src/assets/logo/Jalotofu.png"
import bulogo from "../src/assets/logo/images.png"
import dlogo from "../src/assets/logo/dash.png"
import slogo from "../src/assets/logo/siili.png"


import {
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer({ data }) {
  return (
    <div className="w-full bg-peony py-8 flex flex-row ">
      <div className="w-[88%] sm:w-[85%] mx-auto">
        <div className="grid custom-883:grid-cols-5 grid-cols-2 custom-588:grid-cols-3 custom-883:items-center">

          {/* Festival logo button */}

          <button
            onClick={() => {
              topFunction(); // Call topFunction to scroll to top
            }}
            id="Lapinlahti logo button"
            title="Scroll to top / Palaa sivun alkuun"
            className="flex justify-center items-center mx-auto"
          >
            <img 
              className="w-30 h-12 pb-[0.5rem]"
              src={data?.logos[0].fields.logo.fields.file.url || logo} 
              alt="logo" /> 
          </button>

          {/* Sponsor logos -- these could (and should) be modified to loop through the logos automatically, this solution is a bit too manual */}

          <div className="flex justify-center items-center"> 
          <a href={data?.logos[1].fields.url} target="_blank" rel="noopener noreferrer">
            <img 
              className="w-32 h-auto cursor-pointer pb-[1rem]" 
              src={data?.logos[1].fields.logo.fields.file.url || mlogo} 
              alt={data?.logos[1].fields.altText} />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[2].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[2].fields.logo.fields.file.url || llogo} 
              alt={data?.logos[2].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
            <a href={data?.logos[3].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[3].fields.logo.fields.file.url || plogo} 
              alt={data?.logos[3].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[4].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[4].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[4].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[5].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[5].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[5].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[6].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[6].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[6].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[7].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[7].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[7].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[8].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[8].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[8].fields.altText}
            />
            </a>
          </div>
          {/*
          <div className="flex justify-center items-center">
          <a href={data?.logos[9].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[9].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[9].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[10].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[10].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[10].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[11].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[11].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[11].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[12].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[12].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[12].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[13].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[13].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[13].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[14].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[14].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[14].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[15].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[15].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[15].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[16].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[16].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[16].fields.altText}
            />
            </a>
          </div>
        
          <div className="flex justify-center items-center">
          <a href={data?.logos[17].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[17].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[17].fields.altText}
            />
            </a>
          </div>

          <div className="flex justify-center items-center">
          <a href={data?.logos[18].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[18].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[18].fields.altText}
            />
            </a>
          </div>
          
          <div className="flex justify-center items-center">
          <a href={data?.logos[19].fields.url} target="_blank" rel="noopener noreferrer">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={data?.logos[19].fields.logo.fields.file.url || hlogo} 
              alt={data?.logos[19].fields.altText}
            />
            </a>
          </div>
          */}
        </div>


        {/* Contact info, privacy notice, etc. */}

        <div className="py-4">

          <div>
            <a 
              href="https://maps.app.goo.gl/umz7SezqGTJSiJS88" 
              className="inline-block hover:underline">
              {data?.address}
            </a>
          </div>

          <div>
            <a 
              href="tel:+358442788829"
              className="inline-block hover:underline">
              {data?.phoneNumber}
            </a>
          </div>

          <div>
            <a 
              href="mailto:kinolapinlahti@gmail.com"
              className="inline-block hover:underline">
              {data?.emailAddress}
            </a>
          </div>

          <div className="flex flex-row pt-[0.5rem]">
            <a 
              href="https://www.instagram.com/lapinlahtifilmfestival/">
              <AiOutlineInstagram
                size={30}
                className="cursor-pointer text-heading"
              />
            </a>
            <a 
              href="https://www.facebook.com/events/lapinlahdenpolku-8-00180-helsinki-finland/lapinlahden-elokuvajuhlat-lapinlahti-film-festival/1397138120949216/">
              <AiOutlineFacebook
                size={30}
                className="cursor-pointer text-heading" 
              />
            </a>
          </div>
        </div>

          <div>
            <a 
              href="https://docs.google.com/document/d/1s5Tda7QWJ9YQH6VCThGGvxd1Ol-r2TGbU8_Q8ijprJA/"
              target="_blank" rel="noopener noreferrer"
              className="inline-block hover:underline">
              {data?.privacyNotice}
            </a>
          </div>

        <div className="py-4">

          <h2>
            {data?.copyright}
          </h2>
        </div>

      </div>
    </div>
  );
}

export default Footer;
