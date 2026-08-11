import React from "react";

// Koristekuvitus — käsinpiirretyt kasvit ja perhoset sektioiden reunoille.
// Puhtaasti dekoratiivinen: aria-hidden, ei klikattava, piilossa
// kapeilla näytöillä ettei kuvitus mene sisällön päälle.
//
// Käyttö: <Decor img={moth} side="right" className="w-24 -rotate-6 top-0" />
// Sijoitetaan relative-konttiin; side määrää reunan.
function Decor({ img, side = "left", className = "" }) {
  const sideClass = side === "left" ? "left-0" : "right-0";
  return (
    <img
      src={img}
      alt=""
      aria-hidden="true"
      draggable="false"
      className={`hidden md:block pointer-events-none select-none absolute ${sideClass} ${className}`}
    />
  );
}

export default Decor;
