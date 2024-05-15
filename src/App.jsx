import React from "react";
import Nav from "./Nav.jsx";
import one from "../src/1.png";
import two from "../src/2.png";
import three from "../src/3.png";

import { useState, useEffect } from "react";

import client from "./contenfulClient.js";

function App() {
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    client
      .getEntries()
      .then((response) => {
        setEntries(response.items);
      })
      .catch(console.error);
  }, []);

  console.log(entries);

  return (
    <div>
      <Nav />
      <div class="bg-main pt-5 text-heading">
        <div class=" flex flex-col items-center justify-between">
          <h2 class="pt-16 font-serif font-semibold text-3xl leading-7">
            22.8.-24.8.2024
          </h2>
          <h1 class="pt-3  font-serif font-semibold text-5xl leading-loose">
            Lapinlahden elokuvajuhlat
          </h1>
        </div>
        <div class=" mx-auto overflow-x-auto lg:space-y-0 lg:gap-0 lg:grid lg:grid-cols-6">
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
          <div class="w-full rounded h-96">
            <img class="h-96 w-full object-cover" src={one} alt="image" />
          </div>
          <div class="w-full rounded h-96">
            <img class="h-96 w-full object-cover" src={two} alt="image" />
          </div>
        </div>
        <div class="flex flex-col items-center justify-between">
          <h3 class="pt-8 uppercase font-serif font-semibold text-2xl leading-7">
            Elokuva tekee hyvää
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
