import React from "react";
import client from "./contentfulClient.js";

import Nav from "./Nav.jsx";
import Schedule from "./Schedule.jsx";

import { useState, useEffect, useRef } from "react";


import { Catalog } from "./Catalog.jsx";
import Area from "./Area.jsx";
import Footer from "./Footer.jsx";
import Event from "./Event.jsx";

import poster2 from "./assets/poster_2024.jpg"

import "./App.css";

{/* Contentful: Content model content types
    When adding new content type, add it here and also below*/}
function App() {
  const [content, setContent] = useState({
    landingPage: [],
    scheduleSection: [],
    catalogSection: [],
    eventSection: [],
    areaSection: [],
    buttons: [],
    navBar: [],
    footer: [],
  });

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

  {/* Contentful: Add new content types also below inside contentTypes
      Then pass it to the component where it is needed (e.g., inside const Nav in Nav.jsx) */}
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
          { type: "navBar", key: "navBar"},
          { type: "footer", key: "footer"},
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

/*console.log('data={content.footer[0]?.fields', content.footer[0]?.fields)
/* ^ checks the fields in Contentful, helps understand field structure */

  return (
    <div>
      <Nav
        handleScroll={handleScroll}
        changeLanguage={changeLanguage}
        language={language}
        scheduleTitle={content.scheduleSection[0]?.fields.title}
        catalogTitle={content.catalogSection[0]?.fields.title}
        eventTitle={content.eventSection[0]?.fields.title}
        areaTitle={content.areaSection[0]?.fields.title}
        ref={[aikataulu, ohjelmisto, info, alue]}
        logoUrl={content.navBar[0]?.fields.logo?.fields.file.url}
      />
      <div className="bg-main pt-[0.25rem] text-heading text-center">
        <div className=" flex flex-col items-center justify-between">
          <h2 className="pt-16 font-serif font-semibold text-xl leading-7 xsm:text-2xl md:text-3xl">
            {content.landingPage[0]?.fields.date} {/* festival date above site main heading */}
          </h2>
          <h1 className="pt-[0.25rem] custom-710:pb-[2rem] pb-[1rem] font-serif font-semibold text-3xl xsm:text-4xl md:text-5xl">
            {content.landingPage[0]?.fields.title} {/* site main heading */}
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
      {/* Old image grid system!!!!
        <div className="grid-container">
          {content.landingPage[0]?.fields.images.map((image, index) => (
            <div
              key={index}
              className={`w-full rounded h-96  ${
                index === 0 ? "hidden lg:block" : ""
              }
            ${index === 1 ? "hidden sm:block" : ""}
            ${index === 2 ? "hidden xsm:block" : ""}
            ${index === 3 ? "block" : ""}
            `}
            >
              <img
                className={`h-[20rem] w-full object-cover xsm:h-96`}
                src={image.fields.file.url}
                alt="image"
              />
            </div> 
          ))}
        </div>
        */}
        <div>
        <img
                className={`h-[20rem] w-full object-cover object-[center_top] xsm:h-[37rem]`}
                src={poster2}
                alt="image"
              />
        </div>


        <div className="flex flex-col items-center justify-between pt-0">
          <h3 className="pt-[1rem] custom-710:pt-[2rem] custom-883:pt-[5rem]  custom-440:pb-[2rem] xsm:pb-[0rem] uppercase font-serif font-semibold text-text text-2xl xsm:text-3xl leading-7 w-[200px] custom-440:w-full">
            {content.landingPage[0]?.fields.secondaryTitle}
          </h3>
        </div>
      </div>

      <div
        ref={aikataulu}
        className="pt-[6rem] custom-710:pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-text w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl">
              {content.scheduleSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center ">
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
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-text w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl">
              {content.catalogSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Catalog films={content.catalogSection[0]?.fields.films} />
      <div
        ref={info}
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-text w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl">
              {content.eventSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Event data={content.eventSection[0]?.fields} />
      <div
        ref={alue}
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-text w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl">
              {content.areaSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-text w-[100%] h-0.5 "></div>
        </div>
      </div>
      <Area data={content.areaSection[0]?.fields} />
      <Footer data={content.footer[0]?.fields}/>
    </div>
  );
}

export default App;
