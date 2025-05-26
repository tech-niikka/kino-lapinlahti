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

function Footer() {
  return (
    <div className="w-full bg-purple py-8 flex flex-row ">
      <div className="w-[88%] sm:w-[85%] mx-auto">
        <div className="grid custom-883:grid-cols-5 grid-cols-2 custom-588:grid-cols-3 custom-883:items-center">
          <button
            onClick={() => {
              topFunction(); // Call topFunction to scroll to top
            }}
            id="Lapinlahti logo button"
            title="Scroll to top / Palaa sivun alkuun"
            className="flex justify-center items-center"
          >
            <img className="w-30 h-12 pb-[0.5rem] " src={logo} alt="image" />
          </button>
          <div className="flex justify-center items-center"> 
          <a href="https://mieli.fi/" target="_blank">
            <img className="w-32 h-auto cursor-pointer pb-[1rem]" src={mlogo} alt="mieli ry logo joka toimii linkkinä" />
            </a>
          </div>
          <div className="flex justify-center items-center">
          <a href="https://lapinlahdenlahde.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={llogo}
              alt="Lapinlahden Lähteen logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.prolapinlahtiry.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={plogo}
              alt="Pro Lapinlahti -logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
          <a href="https://www.myhelsinki.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={hlogo}
              alt="Helsingin kaupungin logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
          <a href="https://cinemamondo.fi/" target="_blank">
            <img
              className="w-48 h-auto cursor-pointer pb-[1rem]"
              src={cinemalogo}
              alt="Cinema Mondon logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
          <a href="https://www.dokumenttikilta.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem]"
              src={dokulogo}
              alt="Dokumenttikillan logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://setry.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem] "
              src={setlogo}
              alt="SET ry:n logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.cined.eu/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[1rem]"
              src={cinedlogo}
              alt="CineD:in logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://cinemaorion.fi/en/elavan-kuvan-keskus-elke-ry/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={elkelogo}
              alt="Cinema Orionin logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.ihmefilmi.fi/" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={ihmelogo}
              alt="Ihmefilmin logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://lapinlahdenlahde.fi/kuntalaisaloite/" target="_blank" title="Allekirjoita kuntalaisaloite Lapinlahden pelastamiseksi">
            <img
              className="w-60 h-auto cursor-pointer pb-[2rem]"
              src={laplogo}
              alt="Kuntalaisaloite Lapinlahden Lähteen pelastamiseksi -logo, joka toimii linkkinä"
            />
            </a>
          </div>



          <div className="flex justify-center items-center">
            <a href="https://cinemanse.fi/" title=" linkki cinemansen sivuille" target="_blank">
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={clogo}
              alt="Cinemansen logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.osallisuusmedia.fi" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={hyvälogo}
              alt="Hyvinvointivaalijat ry:n logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.originbyocean.com/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={oceanlogo}
              alt="Origin by Ocean -logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://jalotofu.fi/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={jalologo}
              alt="Jalotofun logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://www.estrella.fi/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={elogo}
              alt="Estrellan logo, joka toimii linkkinä"
            />
            </a>
          </div>
        
          <div className="flex justify-center items-center">
            <a href="https://www.buenosaires.fi/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={bulogo}
              alt="Buenos Aires -kahvilan/baarin logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://dashcoffees.com/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={dlogo}
              alt="Dash Coffeen logo, joka toimii linkkinä"
            />
            </a>
          </div>
          <div className="flex justify-center items-center">
            <a href="https://pidasaaristosiistina.fi/" target="_blank" >
            <img
              className="w-32 h-auto cursor-pointer pb-[2rem]"
              src={slogo}
              alt="Pidetään saaristo siistinä ry:n logo, joka toimii linkkinä"
            />
            </a>
          </div>

        </div>
        <div className="py-4">
          <a href="https://maps.app.goo.gl/umz7SezqGTJSiJS88" className="block hover:underline">
            Lapinlahdenpolku 8, 00180 Helsinki
            </a>
          <a href="tel:+358442788829" className="block hover:underline">
            +358 44 278 8829
          </a>
          <a href="mailto:kinolapinlahti@gmail.com" className="block hover:underline">
            kinolapinlahti@gmail.com
          </a>
          <div className="flex flex-row pt-[0.5rem]">
           <a href="https://www.instagram.com/lapinlahtifilmfestival/"> <AiOutlineInstagram
              size={30}
              className="cursor-pointer  text-heading "
            /></a>
           <a href="https://www.facebook.com/events/lapinlahdenpolku-8-00180-helsinki-finland/lapinlahden-elokuvajuhlat-lapinlahti-film-festival/1397138120949216/"> <AiOutlineFacebook
               size={30} className="cursor-pointer text-heading" />
               </a>
          </div>
        </div> 
        <a href="https://docs.google.com/document/d/1s5Tda7QWJ9YQH6VCThGGvxd1Ol-r2TGbU8_Q8ijprJA/"  target="_blank" className="block hover:underline">Tietosuojaseloste / Privacy Notice</a>
        <div className="py-4">
          <h2>© 2025 Kino Lapinlahti ry. Kaikki oikeudet pidätetään.</h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
