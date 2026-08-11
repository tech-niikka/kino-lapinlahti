import React, { useRef, useState } from "react";

// Festivaalitraileri koko ruudun levyisenä sivun lopussa.
// Autoplay mykistettynä; käyttäjä voi kytkeä äänet päälle ja
// avata videon koko ruudun tilaan oikean alakulman napeista.
function Teaser({ language = "fi" }) {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);

  const t = (fi, en, sv) =>
    language === "sv" ? sv : language === "en-US" ? en : fi;

  const toggleMute = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    // Autoplay on voinut jäädä pauselle — varmista toisto
    if (v.paused) v.play().catch(() => {});
  };

  const enterFullscreen = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.requestFullscreen) {
      v.requestFullscreen();
    } else if (v.webkitEnterFullscreen) {
      // iOS Safari
      v.webkitEnterFullscreen();
    }
  };

  const buttonClass =
    "pointer-events-auto flex items-center justify-center w-11 h-11 rounded-full " +
    "bg-[rgba(0,0,0,0.5)] text-white hover:bg-[rgba(0,0,0,0.7)] transition-colors";

  return (
    <div className="w-full pt-8 relative">
      <video
        ref={videoRef}
        className="w-full h-auto"
        src="/trailer-2026.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        aria-label={t(
          "Lapinlahden elokuvajuhlat 2026 -traileri",
          "Lapinlahti Film Festival 2026 trailer",
          "Lapinlahti Film Festival 2026 -trailer"
        )}
      />
      <div className="pointer-events-none absolute bottom-4 right-4 flex gap-2">
        <button
          type="button"
          className={buttonClass}
          onClick={toggleMute}
          aria-label={
            muted
              ? t("Laita äänet päälle", "Unmute", "Sätt på ljudet")
              : t("Mykistä", "Mute", "Stäng av ljudet")
          }
          title={
            muted
              ? t("Laita äänet päälle", "Unmute", "Sätt på ljudet")
              : t("Mykistä", "Mute", "Stäng av ljudet")
          }
        >
          {muted ? (
            // Kaiutin yliviivattuna
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <line x1="23" y1="9" x2="17" y2="15" />
              <line x1="17" y1="9" x2="23" y2="15" />
            </svg>
          ) : (
            // Kaiutin ääniaalloilla
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5" fill="currentColor" />
              <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
              <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
            </svg>
          )}
        </button>
        <button
          type="button"
          className={buttonClass}
          onClick={enterFullscreen}
          aria-label={t("Koko ruudun tila", "Fullscreen", "Helskärm")}
          title={t("Koko ruudun tila", "Fullscreen", "Helskärm")}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M8 3H5a2 2 0 0 0-2 2v3" />
            <path d="M21 8V5a2 2 0 0 0-2-2h-3" />
            <path d="M3 16v3a2 2 0 0 0 2 2h3" />
            <path d="M16 21h3a2 2 0 0 0 2-2v-3" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default Teaser;
