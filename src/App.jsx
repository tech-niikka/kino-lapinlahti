import React from "react";
import Nav from "./Nav.jsx";
import Schedule from "./Schedule.jsx";
import one from "../src/1.png";
import two from "../src/2.png";
import three from "../src/3.png";

import { useState, useEffect, useRef } from "react";
import client from "./contentfulClient.js";

import { Catalog } from "./Catalog.jsx";
import Area from './Area.jsx';
import Footer from './Footer.jsx';

function App() {
  const [schedule, setSchedule] = useState([]);
  const [event, setEvent] = useState([]);
  const [films, setFilms] = useState([]);
  
  const aikataulu = useRef(null);
  const ohjelmisto = useRef(null);
  const info = useRef(null);
  const alue = useRef(null);

  useEffect(() => {
    client
      .getEntries({ content_type: "schedule", include: 4 })
      .then((response) => {
        setSchedule(response.items);
      })
      .catch(console.error);
  }, []);

  console.log("schedule i app", schedule);

  useEffect(() => {
    client
      .getEntries({ content_type: "slot" })
      .then((response) => {
        setEvent(response.items);
      })
      .catch(console.error);
  }, []);

  console.log("event", event);

  useEffect(() => {
    client
      .getEntries({ content_type: "film" })
      .then((response) => {
        setFilms(response.items);
      })
      .catch(console.error);
  }, []);

  console.log("film", films);

  return (
    <div>
      <Nav handleScroll={handleScroll} ref={[aikataulu,ohjelmisto, info, alue ]}/>
      <div class="bg-main pt-5 text-heading">
        <div class=" flex flex-col items-center justify-between">
          <h2 class="pt-16 font-serif font-semibold text-3xl leading-7">
            22.8.-24.8.2024
          </h2>
          <h1 class="pt-3  font-serif font-semibold text-5xl leading-loose">
            Lapinlahden elokuvajuhlat
          </h1>
        </div>

        <div class=" mx-auto overflow-x-auto lg:space-y-0 lg:gap-0 lg:grid lg:grid-cols-4">
          <div class="w-full rounded h-96">
            <img class="h-96 w-full object-cover" src={three} alt="image" />
          </div>
          <div class="w-full rounded h-96">
            <img class="h-96 w-full object-cover" src={one} alt="image" />
          </div>
          <div class="w-full rounded h-96">
            <img class="h-96 w-full object-cover" src={two} alt="image" />
          </div>
          <div class="w-full rounded h-96 ">
            <img class="h-96 w-full object-cover" src={three} alt="image" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <h3 class="pt-8 uppercase font-serif font-semibold text-2xl leading-7">
            Elokuva tekee hyvää
          </h3>
        </div>
      </div>
      <div ref={aikataulu} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">AIKATAULU</h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center ">
        {schedule.map((item) => (
          <Schedule data={item} />
        ))}
      </div>

      <div ref={ohjelmisto} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">OHJELMISTO</h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Catalog films={films} />
      <div ref={info} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">TAPAHTUMASTA</h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
        <Event/>
      <div ref={alue} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">ALUE</h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
        <div class="mx-20 bg-text w-2/3 h-0.5 "></div>
    </div>
    </div>
    <Area/>
    <Footer/>
    </div>
  );
}

export default App;
