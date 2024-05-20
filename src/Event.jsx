import React from "react";
import two from "../src/2.png";

function Event() {
  return (
    <div class="flex flex-row justify-center items-center w-full">
      <div className="max-w-[85%] flex flex-row justify-center items-center">
        <div class="flex flex-col">
          <div class="">
            <h1 class="font-serif font-semibold text-4xl mb-4">Mitä teemme</h1>
          </div>
          <div class="w-7/12 flex flex-col justify-between ">
            <h2 class="py-5 leading-7">
              Neljän päivän ajan näytämme elokuvia Lapinlahden merellisessä
              ympäristössä luoden merkittäviä kohtaamisia. Päivisin näytöksiä
              järjestetään pimennetyssä teltassa, josta ulos astuessa aukeaa
              upea historiallinen puutarha. Auringon laskiessa kivipihalla
              järjestetään ulkoilmanäytös isolta valkokankaalta. Unohtumaton
              kulttuurikokemus on taattu 400-paikkaisessa katsomossa
              tähtitaivaan alla
            </h2>
            <h2 class="py-5 leading-7">
              Lapinlahden elokuvajuhlat on elokuvafestivaali, jossa jaettu
              elokuvakokemus on keskiössä. Festivaalilla elokuvat eivät kilpaile
              keskenään, vaan rakentuvat vuosittain vaihtuvan teeman ympärille.
              Vuoden 2024 teema on: “Elokuva tekee hyvää”.  Elokuvajuhlille
              valikoituvat pitkät teokset jaetaan kolmeen teemaan: Luontosuhde,
              ego ja kasvukipuja.
            </h2>
            <h2 class="py-5 leading-7">
              Neljän päivän ajan näytämme elokuvia Lapinlahden merellisessä
              ympäristössä luoden merkittäviä kohtaamisia. Päivisin näytöksiä
              järjestetään pimennetyssä teltassa, josta ulos astuessa aukeaa
              upea historiallinen puutarha. Auringon laskiessa kivipihalla
              järjestetään ulkoilmanäytös isolta valkokankaalta. Unohtumaton
              kulttuurikokemus on taattu 400-paikkaisessa katsomossa
              tähtitaivaan alla
            </h2>
            <h2 class="py-5 leading-7">
              Lapinlahden elokuvajuhlat on elokuvafestivaali, jossa jaettu
              elokuvakokemus on keskiössä. Festivaalilla elokuvat eivät kilpaile
              keskenään, vaan rakentuvat vuosittain vaihtuvan teeman ympärille.
              Vuoden 2024 teema on: “Elokuva tekee hyvää”.  Elokuvajuhlille
              valikoituvat pitkät teokset jaetaan kolmeen teemaan: Luontosuhde,
              ego ja kasvukipuja.
            </h2>
          </div>
        </div>
        <div>
          <div class=" mb-6">
            <img src={two} alt="image" />
          </div>
          <div class=" mb-6">
            <img src={two} alt="image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Event;
