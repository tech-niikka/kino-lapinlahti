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
  const lightRef = useRef(null);
  const layerRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    // Natiiviosoitin piiloon — valopallo toimii kursorina
    document.documentElement.classList.add("moth-cursor-active");

    const moth = mothRef.current;
    const light = lightRef.current;
    const layer = layerRef.current;
    let targetX = -200;
    let targetY = -200;
    let x = targetX;
    let y = targetY;
    let angle = 0;
    let raf;
    let lastSpawn = 0;
    let nextIdleFlap = 4000 + Math.random() * 4000;
    let lastPointerMove = 0;
    // Yökkösen havaitsema kohde laahaa todellisen perässä — pieni
    // reagointiviive ennen kuin suunnanmuutos alkaa
    let seenX = -200;
    let seenY = -200;
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
      lastPointerMove = performance.now();
      if (!visible) {
        visible = true;
        // Ilmesty suoraan osoittimen viereen, ei lentoa ruudun laidasta
        x = targetX;
        y = targetY;
        seenX = targetX;
        seenY = targetY;
        moth.style.opacity = "1";
        light.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible = false;
      moth.style.opacity = "0";
      light.style.opacity = "0";
    };

    const onDown = () => flap();

    // Skrollatessa yökkönen kulkee sivun sisällön mukana (valo pysyy
    // kursorissa) ja lentää sitten omaan tahtiinsa takaisin valon luo.
    let prevScrollY = window.scrollY;
    const onScroll = () => {
      const delta = window.scrollY - prevScrollY;
      prevScrollY = window.scrollY;
      y -= delta;
      // Perhonen saa ajautua reilusti näkymän ulkopuolelle, jolloin
      // pitkän skrollauksen jälkeen paluulento kestää tovin — raja
      // vain estää täysin loputtoman matkan
      const margin = 600;
      y = Math.max(-margin, Math.min(window.innerHeight + margin, y));
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
      // Valo istuu aina suoraan osoittimen kohdalla
      light.style.transform = `translate(${targetX}px, ${targetY}px)`;

      // Kun osoitin pysähtyy, yökkönen alkaa kierrellä valoa kuin
      // lamppua: jahdattava piste siirtyy hitaalle kiertoradalle valon
      // ympärille. idleFactor nousee pehmeästi sekunnin paikallaanolon
      // jälkeen ja putoaa heti kun valo liikkuu.
      const idleTime = t - lastPointerMove;
      const idleFactor = Math.max(0, Math.min(1, (idleTime - 900) / 1800));
      const orbit = 38 * idleFactor;
      const chaseX = targetX + Math.cos(t * 0.00055) * orbit;
      const chaseY = targetY + Math.sin(t * 0.00055) * orbit;

      // Reagointiviive: havaittu kohde seuraa todellista pehmeästi,
      // joten suunnanvaihdot alkavat vasta hetken päästä
      seenX += (chaseX - seenX) * 0.04;
      seenY += (chaseY - seenY) * 0.04;

      const dx = seenX - x;
      const dy = seenY - y;
      const dist = Math.hypot(dx, dy);

      // Käänny kohti kursoria (ei liikesuuntaan — se värähtelee ja
      // näyttää pyörimiseltä). Lähellä osoitinta asento säilyy, ettei
      // yökkönen pyörähtele paikallaan. Kuvassa pää ja tuntosarvet
      // osoittavat ylös ja hieman vasemmalle (~256°, mitattu 4x-
      // suurennoksesta: pää keskellä ylhäällä, takaruumis alas-
      // oikealle), joten offset +104 kohdistaa tuntosarvet kohti
      // kursoria. Hidas tasoitus tekee kääntymisestä liidokkimaisen.
      // Kiertäessä kuollut alue kutistuu ja seuranta napakoituu, jotta
      // yökkönen pysyy radalla ja kääntyy lentämään nokka edellä
      // kehän suuntaisesti sen sijaan että ajelehtisi kylki edellä.
      const deadzone = 28 - 22 * idleFactor;
      const ease = 0.008 + 0.017 * idleFactor;
      let bank = 0;
      let heading = 1;
      if (dist > deadzone) {
        const targetAngle = (Math.atan2(dy, dx) * 180) / Math.PI + 104;
        let diff = targetAngle - angle;
        while (diff > 180) diff -= 360;
        while (diff < -180) diff += 360;
        angle += diff * 0.06;
        // Kallistus kaarroksen suuntaan tuo lentämisen tuntua
        bank = Math.max(-14, Math.min(14, diff * 0.3));
        // Lennä vasta kun nokka osoittaa kohti kursoria: kohtisuoraan
        // sivulle tai taakse ei lennetä, vaan käännytään ensin
        // paikallaan ja kiihdytetään suunnan tarkentuessa.
        heading = Math.max(0, Math.cos((diff * Math.PI) / 180));
      }

      // Verkkainen seuraaminen — nopeus riippuu suunnan osumisesta.
      // Huippunopeus on rajattu: kaukaakin palatessa yökkönen lentää
      // rauhallista matkavauhtia eikä kiihdy syöksyksi.
      const px = x;
      const py = y;
      let stepX = dx * ease * heading;
      let stepY = dy * ease * heading;
      const step = Math.hypot(stepX, stepY);
      const MAX_STEP = 2.6;
      if (step > MAX_STEP) {
        stepX *= MAX_STEP / step;
        stepY *= MAX_STEP / step;
      }
      x += stepX;
      y += stepY;
      const vx = x - px;
      const vy = y - py;
      const speed = Math.hypot(vx, vy);

      // Pieni väreily ennen kuin kiertorata käynnistyy
      const idle = dist < 40;
      const shimmer = idle && idleFactor < 0.3 ? 1 - idleFactor / 0.3 : 0;
      const bobX = Math.sin(t * 0.0011) * 5 * shimmer;
      const bobY = Math.sin(t * 0.0008 + 2.1) * 4 * shimmer;

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
    window.addEventListener("scroll", onScroll, { passive: true });
    document.documentElement.addEventListener("mouseleave", onLeave);
    moth.addEventListener("animationend", onFlapEnd);
    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("mouseleave", onLeave);
      moth.removeEventListener("animationend", onFlapEnd);
      document.documentElement.classList.remove("moth-cursor-active");
    };
  }, []);

  return (
    <div ref={layerRef} className="moth-layer" aria-hidden="true">
      <div ref={lightRef} className="moth-light" style={{ opacity: 0 }} />
      <div ref={mothRef} className="moth-follower" style={{ opacity: 0 }}>
        <img src={mothImg} alt="" draggable="false" />
      </div>
    </div>
  );
}

export default MothCursor;
