import React from "react";
import { HelmetProvider, Helmet } from 'react-helmet-async';
import Nav from "./Nav.jsx";
import Schedule from "./Schedule.jsx";

import { useState, useEffect, useRef } from "react";
import client from "./contentfulClient.js";

import { Catalog } from "./Catalog.jsx";
import Area from "./Area.jsx";
import Footer from "./Footer.jsx";
import Event from "./Event.jsx";

import "./App.css";

function App() {
  const [content, setContent] = useState({
    landingPage: [],
    scheduleSection: [],
    catalogSection: [],
    eventSection: [],
    areaSection: [],
    buttons: [],
  });

  console.log("AAAAAAAAAHH", content.catalogSection);

  const [language, setLanguage] = useState("fi");

  const aikataulu = useRef(null);
  const ohjelmisto = useRef(null);
  const info = useRef(null);
  const alue = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const changeLanguage = () => {
    language === "fi" ? setLanguage("en-US") : setLanguage("fi");
  };

  useEffect(() => {
    document.cookie = "initialVisit=true; SameSite=Lax; Secure";
  }, []);

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const contentTypes = [
          { type: "landingPage", key: "landingPage" },
          { type: "scheduleSection", key: "scheduleSection", include: 6 },
          { type: "catalogSection", key: "catalogSection" },
          { type: "eventSection", key: "eventSection" },
          { type: "areaSection", key: "areaSection" },
          { type: "button", key: "buttons" },
        ];

        const requests = contentTypes.map(({ type, key, include }) =>
          client.getEntries({ content_type: type, locale: language, include })
        );

        const responses = await Promise.all(requests);

        const newContent = responses.reduce((acc, response, index) => {
          acc[contentTypes[index].key] = response.items;
          return acc;
        }, {});

        setContent(newContent);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    fetchEntries();
  }, [language]);

  const helmetContext = {};



  return (
    <div>
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Lapinlahden Elokuvajuhlat</title>
          <meta name="description" content="Lapinlahden Elokuajuhlat järjestetään 22.8.-24.8.2024 Lapinlahden merellisessä ympäristössä luoden merkittäviä kohtaamisia." />
        </Helmet>
      <Nav
        handleScroll={handleScroll}
        changeLanguage={changeLanguage}
        language={language}
        schedualeTitle={content.scheduleSection[0]?.fields.title}
        catalogTitle={content.catalogSection[0]?.fields.title}
        eventTitle={content.eventSection[0]?.fields.title}
        areaTitle={content.areaSection[0]?.fields.title}
        ref={[aikataulu, ohjelmisto, info, alue]}
      />
      <div class="bg-main pt-[0.25rem] text-heading text-center">
        <div class=" flex flex-col items-center justify-between">
          <h2 class="pt-16 font-serif font-semibold text-xl leading-7 xsm:text-2xl md:text-3xl">
            {content.landingPage[0]?.fields.date}
          </h2>
          <h1 class="pt-[0.25rem] pb-[4rem] xsm:pb-[2rem] font-serif font-semibold text-3xl xsm:text-4xl md:text-5xl">
            {content.landingPage[0]?.fields.title}
          </h1>
        </div>
        <style>
          {`
          .grid-container {
            display: grid;
            grid-template-columns: 1fr;
      
          }

          @media (min-width: 640px) {
            .grid-container {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 740px) {
            .grid-container {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .grid-container {
              grid-template-columns: repeat(4, 1fr);
            }
          }
        `}
        </style>
        <div className="grid-container">
          {content.landingPage[0]?.fields.images.map((image, index) => (
            <div
              key={index}
              class={`w-full rounded h-96  ${
                index === 0 ? "hidden lg:block" : ""
              }
            ${index === 1 ? "hidden sm:block" : ""}
            ${index === 2 ? "hidden xsm:block" : ""}
            ${index === 3 ? "block" : ""}
            `}
            >
              <img
                class={`h-[20rem] w-full object-cover xsm:h-96`}
                src={image.fields.file.url}
                alt="image"
              />
            </div>
          ))}
        </div>
        <div class="flex flex-col items-center justify-between pt-0">
          <h3 class="pt-0 xsm:pt-16 custom-440:pb-[2rem] xsm:pb-[0rem] uppercase font-serif font-semibold text-text text-2xl xsm:text-3xl leading-7 w-[200px] custom-440:w-full">
            {content.landingPage[0]?.fields.secondaryTitle}
          </h3>
        </div>
      </div>
      <div
        ref={aikataulu}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[2rem]">
            <h2 class="font-semibold text-xl">
              {content.scheduleSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center ">
        {content.scheduleSection[0]?.fields.schedule.map((item, index) => (
          <Schedule
            key={index}
            data={item}
            index={index}
            buttons={content.buttons}
          />
        ))}
      </div>

      <div
        ref={ohjelmisto}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[2rem]">
            <h2 class="font-semibold text-xl">
              {content.catalogSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Catalog films={content.catalogSection[0]?.fields.films} />
      <div
        ref={info}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[2rem]">
            <h2 class="font-semibold text-xl">
              {content.eventSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Event data={content.eventSection[0]?.fields} />
      <div
        ref={alue}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[2rem]">
            <h2 class="font-semibold text-xl">
              {content.areaSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Area data={content.areaSection[0]?.fields} />
      <Footer />
      </HelmetProvider>
    </div>
  );
}

export default App;
