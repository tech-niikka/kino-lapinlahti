import React, { useEffect, useRef } from "react";
import mothImg from "./assets/moth-cursor.png";

// Yökkönen joka lentää hiiren osoittimen perässä omana elementtinään:
// seuraa pehmeällä viiveellä, kääntyy menosuuntaan, jättää perässään
// häipyviä ilmavirtapöllähdyksiä ja räpäyttää siipiään klikatessa.
// Hiiren oma osoitin pysyy normaalina kaikkialla.
// Ei renderöidy kosketuslaitteilla eikä kun liike-efektit on estetty.
function MothCursor() {
  const mothRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const moth = mothRef.current;
    const layer = layerRef.current;
    let targetX = -200;
    let targetY = -200;
    let x = targetX;
    let y = targetY;
    let angle = 0;
    let raf;
    let lastSpawn = 0;
    let visible = false;

    const onMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!visible) {
        visible = true;
        // Ilmesty suoraan osoittimen viereen, ei lentoa ruudun laidasta
        x = targetX;
        y = targetY;
        moth.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      moth.style.opacity = "0";
    };

    const onDown = () => {
      moth.classList.remove("moth-flap");
      // Pakota animaation uudelleenkäynnistys
      void moth.offsetWidth;
      moth.classList.add("moth-flap");
    };

    const spawnPuff = (px, py, dirAngle) => {
      const p = document.createElement("span");
      p.className = "moth-puff";
      const size = 4 + Math.random() * 7;
      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.left = `${px + (Math.random() - 0.5) * 14}px`;
      p.style.top = `${py + (Math.random() - 0.5) * 14}px`;
      // Pöllähdys ajautuu menosuuntaa vastaan eli yökkösen taakse
      const drift = 16 + Math.random() * 20;
      p.style.setProperty("--dx", `${-Math.cos(dirAngle) * drift}px`);
      p.style.setProperty("--dy", `${-Math.sin(dirAngle) * drift}px`);
      p.addEventListener("animationend", () => p.remove());
      layer.appendChild(p);
    };

    const tick = (t) => {
      // Pehmeä seuraaminen — yökkönen jää hieman osoittimen perään
      const px = x;
      const py = y;
      x += (targetX - x) * 0.11;
      y += (targetY - y) * 0.11;
      const vx = x - px;
      const vy = y - py;
      const speed = Math.hypot(vx, vy);

      // Käänny menosuuntaan vain kun liikutaan; paikallaan säilytä asento.
      // Kuva osoittaa vasemmalle-ylös (~200°), joten offset kohdistaa pään
      // kulkusuuntaan. Tasoitus estää nykimisen.
      if (speed > 0.5) {
        const targetAngle = (Math.atan2(vy, vx) * 180) / Math.PI + 200;
        let diff = targetAngle - angle;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;
        angle += diff * 0.15;
      }

      moth.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;

      if (visible && speed > 1.5 && t - lastSpawn > 50) {
        lastSpawn = t;
        spawnPuff(x, y, Math.atan2(vy, vx));
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div ref={layerRef} className="moth-layer" aria-hidden="true">
      <div ref={mothRef} className="moth-follower" style={{ opacity: 0 }}>
        <img src={mothImg} alt="" draggable="false" />
      </div>
    </div>
  );
}

export default MothCursor;
