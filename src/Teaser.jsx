import React from "react";

// Teaser-video koko ruudun levyisenä.
// Mobiili (alle md = 868px): pystyversio. Desktop (md ja yli): vaakaversio.
function Teaser() {
  return (
    <div className="w-full pt-8">
      <video
        className="block md:hidden w-full h-auto"
        src="/teaser-pysty.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Lapinlahden elokuvajuhlat -teaser"
      />
      <video
        className="hidden md:block w-full h-auto"
        src="/teaser-vaaka.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Lapinlahden elokuvajuhlat -teaser"
      />
    </div>
  );
}

export default Teaser;
