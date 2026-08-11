import React, { useEffect, useRef } from "react";
import mothImg from "./assets/moth-cursor.png";

// Yökkönen joka lentää hiiren osoittimen perässä omana elementtinään:
// seuraa verkkaisesti, kääntyy kohti kursoria ja kallistuu kaarroksissa,
// leijailee pehmeästi kun kursori on paikallaan, värisyttää siipiään
// lentäessään, räpäyttää siipiä klikatessa ja silloin tällöin omia
// aikojaan. Hiiren oma osoitin pysyy normaalina kaikkialla.
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
    let nextIdleFlap = 4000 + Math.random() * 4000;
    let visible = false;

    const flap = () => {
      moth.classList.remove("moth-flap");
      // Pakota animaation uudelleenkäynnistys
      void moth.offsetWidth;
      moth.classList.add("moth-flap");
    };

    // Räpäytyksen jälkeen palataan siipien normaaliin värinään
    const onFlapEnd = (e) => {
      if (e.animationName === "moth-flap") moth.classList.remove("moth-flap");
    };

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

    const onDown = () => flap();

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
      // Verkkainen seuraaminen — yökkönen lentelee osoittimen perässä
      const px = x;
      const py = y;
      x += (targetX - x) * 0.05;
      y += (targetY - y) * 0.05;
      const vx = x - px;
      const vy = y - py;
      const speed = Math.hypot(vx, vy);

      const dx = targetX - x;
      const dy = targetY - y;
      const dist = Math.hypot(dx, dy);

      // Käänny kohti kursoria (ei liikesuuntaan — se värähtelee ja
      // näyttää pyörimiseltä). Lähellä osoitinta asento säilyy, ettei
      // yökkönen pyörähtele paikallaan. Kuva osoittaa vasemmalle-ylös
      // (~200°), offset kohdistaa pään kohti kursoria. Hidas tasoitus
      // tekee kääntymisestä liidokkimaisen.
      let bank = 0;
      if (dist > 28) {
        const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 200;
        let diff = targetAngle - angle;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;
        angle += diff * 0.07;
        // Kallistus kaarroksen suuntaan tuo lentämisen tuntua
        bank = Math.max(-14, Math.min(14, diff * 0.3));
      }

      // Paikallaan leijunta: hidas pieni kaari kursorin vieressä
      const idle = dist < 40;
      const bobX = idle ? Math.sin(t * 0.0011) * 7 : 0;
      const bobY = idle ? Math.sin(t * 0.0008 + 2.1) * 6 : 0;

      moth.style.transform =
        `translate(${x + bobX}px, ${y + bobY}px) rotate(${angle + bank}deg)`;

      // Siipien värinä lennossa, levossa rauhallisempi
      moth.classList.toggle("moth-flying", speed > 0.8);

      if (visible && speed > 1 && t - lastSpawn > 60) {
        lastSpawn = t;
        spawnPuff(x, y, Math.atan2(vy, vx));
      }

      // Spontaani räpäytys silloin tällöin levossa
      if (visible && idle && t > nextIdleFlap) {
        nextIdleFlap = t + 4000 + Math.random() * 5000;
        flap();
      }

      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", onDown);
    document.documentElement.addEventListener("mouseleave", onLeave);
    moth.addEventListener("animationend", onFlapEnd);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      moth.removeEventListener("animationend", onFlapEnd);
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
