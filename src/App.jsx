import React from "react";
import { useState, useEffect, useRef } from "react";
import { getContent, getPlaceholders } from "./data/content.js";

import Nav from "./Nav.jsx";
import Schedule from "./Schedule.jsx";
import ProgramTimeline from "./ProgramTimeline.jsx";
import { Catalog } from "./Catalog.jsx";
import Footer from "./Footer.jsx";
import Event from "./Event.jsx";
import Teaser from "./Teaser.jsx";
import Venues from "./Venues.jsx";
import Contacts from "./Contacts.jsx";

import poster2 from "./assets/banner-2026-1920.jpg"

import "./App.css";

// Sisältö tulee paikallisesta moduulista `src/data/content.js`.
// Kun sisältöjä tulee lisää (esim. 2026 ohjelmisto), lisää ne sinne
// — ei tarvita ulkopuolista CMS:ää nykyisellä toteutuksella.

function App() {
  const [language, setLanguage] = useState("fi");
  const [content, setContent] = useState(() => getContent("fi"));
  const [placeholders, setPlaceholders] = useState(() => getPlaceholders("fi"));

  // Ohjelmiston valittu välilehti + aikataulusta avattu kortti
  const [catalogType, setCatalogType] = useState("films");
  const [catalogFocus, setCatalogFocus] = useState(null);

  // Aikataulurivin klikkaus: avaa oikea välilehti ja vieritä korttiin
  const openCatalog = (link) => {
    setCatalogType(link.type);
    setCatalogFocus(link.id);
  };

  useEffect(() => {
    if (!catalogFocus) return;
    const el = document.getElementById(
      `catalog-${catalogType}-${catalogFocus}`
    );
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setCatalogFocus(null);
  }, [catalogFocus, catalogType]);

  useEffect(() => {
    document.documentElement.lang =
      language === "sv" ? "sv" : language === "en-US" ? "en" : "fi";
  }, [language]);

  const aikataulu = useRef(null);
  const ohjelmisto = useRef(null);
  const info = useRef(null);
  const alue = useRef(null);
  const yhteystiedot = useRef(null);

  const handleScroll = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // Kielivalinta tulee Navista koodina ("fi" | "en-US" | "sv")

  useEffect(() => {
    document.cookie = "initialVisit=true; SameSite=Lax; Secure";
  }, []);

  // Päivitä sisältö kun kieli vaihtuu
  useEffect(() => {
    setContent(getContent(language));
    setPlaceholders(getPlaceholders(language));
  }, [language]);

  // Apurit: onko sektiolla näytettävää sisältöä?
  const hasSchedule = (content.scheduleSection[0]?.fields.schedule?.length ?? 0) > 0;
  const hasProgram = (content.programSection?.[0]?.fields.days?.length ?? 0) > 0;
  const catalogFields = content.catalogSection[0]?.fields;
  const hasCatalog =
    (catalogFields?.films?.length ?? 0) > 0 ||
    (catalogFields?.music?.length ?? 0) > 0 ||
    (catalogFields?.shortFilms?.length ?? 0) > 0 ||
    (catalogFields?.workshops?.length ?? 0) > 0 ||
    (catalogFields?.art?.length ?? 0) > 0 ||
    !!catalogFields?.now;
  const hasEvent = (content.eventSection[0]?.fields.images?.length ?? 0) > 0 ||
    !!content.eventSection[0]?.fields.paragraph;

  return (
    <div>
      <Nav
        handleScroll={handleScroll}
        setLanguage={setLanguage}
        language={language}
        scheduleTitle={content.scheduleSection[0]?.fields.title}
        catalogTitle={content.catalogSection[0]?.fields.title}
        eventTitle={content.eventSection[0]?.fields.title}
        areaTitle={content.areaSection[0]?.fields.title}
        contactsTitle={content.contactsSection[0]?.fields.title}
        ref={[aikataulu, ohjelmisto, info, alue, yhteystiedot]}
        logoUrl={content.navBar[0]?.fields.logo?.fields.file.url}
        ticketButton={content.navBar[0]?.fields.ticketButton}
      />

      <div className="bg-grape pt-[0.25rem] text-plum text-center">
        <div className="flex flex-col items-center justify-between">
          <h2 className="pt-16 font-serif font-semibold text-xl leading-7 xsm:text-2xl md:text-3xl">
            {content.landingPage[0]?.fields.date} {/* festival date above site main heading */}
          </h2>

          <h1 className="pt-[0.25rem] custom-710:pb-[2rem] pb-[1rem] font-serif font-semibold text-3xl xsm:text-4xl md:text-5xl">
            {content.landingPage[0]?.fields.title} {/* site main heading */}
          </h1>
        </div>

        {/*}
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
          <h3 className="pt-[1rem] custom-710:pt-[2rem] custom-883:pt-[5rem] custom-440:pb-[2rem] xsm:pb-[0rem] uppercase font-serif font-semibold text-plum text-2xl xsm:text-3xl leading-7 w-[200px] custom-440:w-full">
            {content.landingPage[0]?.fields.secondaryTitle}
          </h3>
        </div>
      </div>

      {/* Lipunvarauksen aukeamisaika. Varsinainen Liput-nappi on poistettu
          etusivulta siihen asti, kunnes varaus on auki — nappi löytyy yhä
          navigaatiosta. Palauta tähän kun Fienta-varaus aukeaa. */}
      <div className="flex flex-col items-center justify-between pt-8">
        {content.buttons[0]?.fields.ticketNote && (
          <p className="px-6 text-plum text-center font-semibold text-lg xsm:text-xl md:text-2xl leading-8">
            {content.buttons[0].fields.ticketNote}
          </p>
        )}
      </div>

      {/* Sektioiden järjestys 2026:
          1) Tapahtumasta
          2) Aikataulu (päiväkohtainen ohjelma)
          3) Ohjelmisto (kortit)
          4) Alue (kartta + Lapinlahden Lähde) + teaser-video
          5) Yhteystiedot
          Ohjelmasisältö ensin, käytännön tiedot loppuun.
          Refs säilytetty Nav-painikkeiden scroll-toiminnan vuoksi —
          DOM-järjestys on riippumaton refs-indekseistä. */}

      <div
        ref={info}
        className="pt-[6rem] custom-710:pt-[4rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-plum w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl text-plum">
              {content.eventSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-plum w-[100%] h-0.5 "></div>
        </div>
      </div>

      {hasEvent ? (
        <Event data={content.eventSection[0]?.fields} />
      ) : (
        <p className="text-plum text-center text-lg pt-4 pb-8">
          {placeholders.event}
        </p>
      )}

      <div
        ref={aikataulu}
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className="bg-plum w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl text-plum">
              {content.scheduleSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-plum w-[100%] h-0.5 "></div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center">
        {hasProgram ? (
          <ProgramTimeline
            data={content.programSection[0]?.fields}
            onOpenCatalog={openCatalog}
          />
        ) : hasSchedule ? (
          content.scheduleSection[0]?.fields.schedule.map((item, index) => (
            <Schedule
              key={index}
              data={item}
              index={index}
              buttons={content.buttons}
            />
          ))
        ) : (
          <p className="text-plum text-center text-lg pt-8 pb-8">
            {placeholders.schedule}
          </p>
        )}
      </div>

      <div
        ref={ohjelmisto}
        className="pt-[4rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className="bg-plum w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl text-plum">
              {content.catalogSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-plum w-[100%] h-0.5 "></div>
        </div>
      </div>

      {hasCatalog ? (
        <Catalog
          films={content.catalogSection[0]?.fields.films}
          music={content.catalogSection[0]?.fields.music}
          shortFilms={content.catalogSection[0]?.fields.shortFilms}
          workshops={content.catalogSection[0]?.fields.workshops}
          now={content.catalogSection[0]?.fields.now}
          art={content.catalogSection[0]?.fields.art}
          filmTitle={content.catalogSection[0]?.fields.filmSectionTitle}
          musicTitle={content.catalogSection[0]?.fields.musicSectionTitle}
          shortFilmTitle={content.catalogSection[0]?.fields.shortFilmSectionTitle}
          workshopTitle={content.catalogSection[0]?.fields.workshopSectionTitle}
          nowTitle={content.catalogSection[0]?.fields.nowSectionTitle}
          artTitle={content.catalogSection[0]?.fields.artSectionTitle}
          selectedType={catalogType}
          onSelect={setCatalogType}
          handleScroll={handleScroll}
          scrollRef={ohjelmisto}
        />
      ) : (
        <p className="text-plum text-center text-lg pt-4 pb-8">
          {placeholders.catalog}
        </p>
      )}

      <div
        ref={alue}
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className=" bg-plum w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-plum text-xl">
              {content.areaSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-plum w-[100%] h-0.5 "></div>
        </div>
      </div>

      <Venues data={content.venuesSection} />

      <Teaser />

      <div
        ref={yhteystiedot}
        className="pt-[8rem] pb-[4rem] mx-auto w-full max-w-[88%] sm:max-w-[85%]"
      >
        <div className="flex flex-row items-center justify-center ">
          <div className="bg-plum w-[100%] h-0.5"></div>
          <div className="px-[2rem]">
            <h2 className="font-semibold text-xl text-plum">
              {content.contactsSection[0]?.fields.title}
            </h2>
          </div>
          <div className="bg-plum w-[100%] h-0.5 "></div>
        </div>
      </div>

      <Contacts contacts={content.contactsSection[0]?.fields.contacts} />

      <Footer data={content.footer[0]?.fields}/>
    </div>
  );
}

export default App;
