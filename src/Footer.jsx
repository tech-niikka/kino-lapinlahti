import React from "react";
import logo from "../src/logo.png";

function topFunction() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Footer() {
  return (
    <div class="w-full bg-purple py-8 flex flex-row items-center justify-center">
      <div class="w-[85%] ">
        <div class="py-10">
          <button
            onClick={() => {
              topFunction(); // Call topFunction to scroll to top
            }}
            id="Lapinlahti logo button"
            title="Scroll to top"
            className="flex items-center"
          >
            <img className="w-30 h-12" src={logo} alt="image" />
          </button>
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
