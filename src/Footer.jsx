import React from "react";
import logo from "../src/logo.png";
import llogo from "../src/llLogo.png";
import plogo from "../src/prologo.png";
import mlogo from "../src/mielilogo.png";

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <div class="w-full bg-purple py-8 flex flex-row items-center justify-center">
      <div class="w-[90%] sm:w-[85%] ">
        <div class=" flex custom-883:flex-row flex-col  justify-between custom-883:items-center">
          <button
            onClick={() => {
              topFunction(); // Call topFunction to scroll to top
            }}
            id="Lapinlahti logo button"
            title="Scroll to top"
            className="flex items-center"
          >
            <img className="w-30 h-12 pb-[0.5rem]" src={logo} alt="image" />
          </button>
          <div>
            <img class="w-32 h-auto cursor-pointer" src={mlogo} alt="image" />
          </div>
          <div>
            <img
              class="w-32 h-auto cursor-pointer pb-[2rem]"
              src={llogo}
              alt="image"
            />
          </div>
          <div>
            <img
              class="w-32 h-auto cursor-pointer py-[1rem]"
              src={plogo}
              alt="image"
            />
          </div>
        </div>
        <div class="py-4">
          <h2>Lapinlahdenkatu 12 A 12, 00100 Helsinki</h2>
          <h2>+358 40 59567077</h2>
          <a href="mailto:kinolapinlahti@gmail.com" className="btn-mailto">
            kinolapinlahti@gmail.com
          </a>
        </div>
        <div class="py-4">
          <h2>Kino Lapinlahti </h2>
          <h2>2024 </h2>
        </div>
      </div>
    </div>
  );
}

export default Footer;
