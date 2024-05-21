import React from "react";
import Nav from "./Nav.jsx";
import Schedule from "./Schedule.jsx";

import { useState, useEffect, useRef } from "react";
import client from "./contentfulClient.js";

import { Catalog } from "./Catalog.jsx";
import Area from "./Area.jsx";
import Footer from "./Footer.jsx";
import Event from "./Event.jsx";

function App() {
  const [schedule, setSchedule] = useState([]);
  const [films, setFilms] = useState([]);
  const [landingPage, setLandingPage] = useState([]);
  const [scheduleSection, setScheduleSection] = useState([]);
  const [catalogSection, setCatalogSection] = useState([]);
  const [eventSection, setEventSection] = useState([]);
  const [areaSection, setAreaSection] = useState([]);

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
    const fetchEntries = async () => {
      try {
        const responses = await Promise.all([
          client.getEntries({ content_type: "landingPage", locale: language }),
          client.getEntries({
            content_type: "schedule",
            include: 4,
            locale: language,
          }),
          client.getEntries({ content_type: "film", locale: language }),
          client.getEntries({
            content_type: "scheduleSection",
            locale: language,
          }),
          client.getEntries({
            content_type: "catalogSection",
            locale: language,
          }),
          client.getEntries({ content_type: "eventSection", locale: language }),
          client.getEntries({ content_type: "areaSection", locale: language }),
        ]);

        const [
          landingPageResponse,
          scheduleResponse,
          filmResponse,
          scheduleSectionResponse,
          catalogSectionResponse,
          eventSectionResponse,
          areaSectionResponse,
        ] = responses;

        setLandingPage(landingPageResponse.items);
        setSchedule(scheduleResponse.items);
        setFilms(filmResponse.items);
        setScheduleSection(scheduleSectionResponse.items);
        setCatalogSection(catalogSectionResponse.items);
        setEventSection(eventSectionResponse.items);
        setAreaSection(areaSectionResponse.items);
      } catch (error) {
        console.error("Error fetching entries:", error);
      }
    };
    fetchEntries();
  }, [language]);

  console.log("hejhååå", landingPage);

  return (
    <div>
      <Nav
        handleScroll={handleScroll}
        changeLanguage={changeLanguage}
        language={language}
        schedualeTitle={scheduleSection[0]?.fields.title}
        catalogTitle={catalogSection[0]?.fields.title}
        eventTitle={eventSection[0]?.fields.title}
        areaTitle={areaSection[0]?.fields.title}
        ref={[aikataulu, ohjelmisto, info, alue]}
      />
      <div class="bg-main pt-[0.25rem] text-heading text-center">
        <div class=" flex flex-col items-center justify-between">
          <h2 class="pt-16 font-serif font-semibold text-2xl leading-7 md:text-3xl">
            {landingPage[0]?.fields.date}
          </h2>
          <h1 class="pt-[0.25rem] pb-[2rem] font-serif font-semibold text-4xl sm:text-4xl md:text-5xl">
            {landingPage[0]?.fields.title}
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
          {landingPage[0]?.fields.images.map((image, index) => (
            <div
              class={`w-full rounded h-96  ${
                index === 0 ? "hidden lg:block" : ""
              }
            ${index === 1 ? "hidden sm:block" : ""}
            ${index === 2 ? "hidden xsm:block" : ""}
            ${index === 3 ? "block" : ""}`}
            >
              <img
                class={`h-96 w-full object-cover `}
                src={image.fields.file.url}
                alt="image"
              />
            </div>
          ))}
        </div>
        <div class="flex flex-col items-center justify-between">
          <h3 class="pt-8 uppercase font-serif font-semibold text-2xl leading-7">
            {landingPage[0]?.fields.secondaryTitle}
          </h3>
        </div>
      </div>
      <div
        ref={aikataulu}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">
              {scheduleSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <div class="flex flex-col justify-center items-center ">
        {schedule.map((item, index) => (
          <Schedule key={index} data={item} index={index} />
        ))}
      </div>

      <div
        ref={ohjelmisto}
        class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]"
      >
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">
              {catalogSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Catalog films={films} />
      <div ref={info} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">
              {eventSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Event data={eventSection[0]?.fields} />
      <div ref={alue} class="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[85%]">
        <div class="flex flex-row items-center justify-center ">
          <div class=" bg-text w-[100%] h-0.5"></div>
          <div class="px-[4rem]">
            <h2 class="font-semibold text-xl">
              {areaSection[0]?.fields.title}
            </h2>
          </div>
          <div class="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Area data={areaSection[0]?.fields} />
      <Footer />
    </div>
  );
}

export default App;
