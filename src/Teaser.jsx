import React from "react";

// Festivaalitraileri koko ruudun levyisenä sivun lopussa.
// Yksi vaakaversio kaikille näyttöko'oille (2026-traileri).
function Teaser() {
  return (
    <div className="w-full pt-8">
      <video
        className="w-full h-auto"
        src="/trailer-2026.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label="Lapinlahden elokuvajuhlat 2026 -traileri"
      />
    </div>
  );
}

export default Teaser;
