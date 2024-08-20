import React from "react";
import logo from "../src/logo.png";
import llogo from "../src/llLogo.png";
import plogo from "../src/prologo.png";
import mlogo from "../src/mielilogo.png";
import hlogo from "../src/Helsinki_logo.png";
import cinemalogo from "../src/cinemamondo_logo.png";
import dokulogo from "../src/dokumenttikilta_logo.png";
import setlogo from "../src/set_logo.png";
import cinedlogo from "../src/cined_logo.png";
import elkelogo from "../src/elke_logo.png";
import ihmelogo from "../src/ihme_logo.png"
import laplogo from "../src/lap_kan.png"
import clogo from "../src/cinemanselogo.jpg"
import hyvälogo from "../src/hyvä.png"
import oceanlogo from "../src/ocean.png"
import elogo from "../src/estrella-logo.png"
import jalologo from "../src/Jalotofu.png"
import bulogo from "../src/images.png"
import dlogo from "../src/dash.png"
import slogo from "../src/siili.png"


import {
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <div class="w-full bg-purple py-8 flex flex-row ">
      <div class="w-[88%] sm:w-[85%] mx-auto">
        <div class="  flex-wrap custom-883:flex-row flex-row grid custom-883:grid-cols-5 grid-cols-2 custom-588:grid-cols-3 custom-883:items-center">
          <button
            onClick={() => {
              topFunction(); // Call topFunction to scroll to top
            }}
            id="Lapinlahti logo button"
            title="Scroll to top / skrollaa sivun alkuun"
            className="flex items-center "
          >
            <img className="w-30 h-12 pb-[0.5rem] " src={logo} alt="image" />
          </button>
          <div class="flex justify-center items-center"> 
          <a href="https://mieli.fi/" target="_blank">
            <img class="w-32 h-auto cursor-pointer pb-[1rem]" src={mlogo} alt="mieli ry logo joka toimii linkkinä" />
            </a>
          </div>
          <div class="flex justify-center items-center">
          <a href="https://lapinlahdenlahde.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem] "
              src={llogo}
              alt="lapinlahden lähde logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.prolapinlahtiry.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem] "
              src={plogo}
              alt="pro lapinlahti logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
          <a href="https://www.myhelsinki.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem] "
              src={hlogo}
              alt="helsingin kaupungin logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
          <a href="https://cinemamondo.fi/" target="_blank">
            <img
              class="w-48 h-auto cursor-pointer pb-[1rem]"
              src={cinemalogo}
              alt="cinemamondon logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
          <a href="https://www.dokumenttikilta.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem]"
              src={dokulogo}
              alt="dokumenttikillan logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://setry.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem] "
              src={setlogo}
              alt="set ry:n logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.cined.eu/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[1rem]"
              src={cinedlogo}
              alt="cined:in logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://cinemaorion.fi/en/elavan-kuvan-keskus-elke-ry/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={elkelogo}
              alt="cinema orionin logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.ihmefilmi.fi/" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={ihmelogo}
              alt="ihme filmin logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://lapinlahdenlahde.fi/kuntalaisaloite/" target="_blank" title="Allekirjoita kuntalaisaloite Lapinlahden pelastamiseksi">
            <img
              class="w-60 h-auto cursor-pointer pb-[2rem]"
              src={laplogo}
              alt="kuntalaisaloite lapinlanlahden lähteen pelastamiseksi logo joka toimii linkkinä"
            />
            </a>
          </div>



          <div class="flex justify-center items-center">
            <a href="https://cinemanse.fi/" title=" linkki cinemansen sivuille" target="_blank">
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={clogo}
              alt="cinemanse logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.osallisuusmedia.fi" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={hyvälogo}
              alt="hyvinvointivaalijat ry:n logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.originbyocean.com/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={oceanlogo}
              alt="origin by ocean logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://jalotofu.fi/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={jalologo}
              alt="jalotofun logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://www.estrella.fi/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={elogo}
              alt="estrellan logo joka toimii linkkinä"
            />
            </a>
          </div>
        
          <div class="flex justify-center items-center">
            <a href="https://www.buenosaires.fi/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={bulogo}
              alt="buenos aires kahvila baarin logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://dashcoffees.com/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={dlogo}
              alt="dash coffeen logo joka toimii linkkinä"
            />
            </a>
          </div>
          <div class="flex justify-center items-center">
            <a href="https://pidasaaristosiistina.fi/" target="_blank" >
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={slogo}
              alt="pidetään saaristo siistinä ry:n logo joka toimii linkkinä"
            />
            </a>
          </div>

        </div>
        <div class="py-4">
          <h2>Lapinlahdenpolku 8, 00180 Helsinki</h2>
          <h2>+358 44 278 8829</h2>
          <a href="mailto:kinolapinlahti@gmail.com" className="btn-mailto">
            kinolapinlahti@gmail.com
          </a>
          <div class="flex flex-row pt-[0.5rem]">
           <a href="https://www.instagram.com/lapinlahtifilmfestival/"> <AiOutlineInstagram
              size={30}
              class="cursor-pointer  text-heading "
            /></a>
           <a href="https://www.facebook.com/events/lapinlahdenpolku-8-00180-helsinki-finland/lapinlahden-elokuvajuhlat-lapinlahti-film-festival/1397138120949216/"> <AiOutlineFacebook
               size={30} class="cursor-pointer text-heading" />
               </a>
          </div>
        </div> 
        <a href="https://docs.google.com/document/d/1s5Tda7QWJ9YQH6VCThGGvxd1Ol-r2TGbU8_Q8ijprJA/"  target="_blank">Tietosuojaseloste / Privacy Notice</a>
        <div class="py-4">
          <h2>© 2024 Kino Lapinlahti ry. Kaikki oikeudet pidätetään.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
