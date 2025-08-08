import { useState } from "react";
import { Film } from "./Film";
import { Music } from "./Music";
import { Workshops } from "./Workshops";
import { ShortFilm } from "./ShortFilm";
import { Now } from "./Now";

export const Catalog = ({ films, shortFilms, music, workshops, now, filmTitle, shortFilmTitle, musicTitle, workshopTitle, nowTitle, handleScroll, scrollRef }) => {
  const [selectedType, setSelectedType] = useState("films");

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  const renderContent = () => {
    if (selectedType === "films") {
      return films
        ?.filter((film) => film?.fields) // filter out invalid entries
        .map((film, index) => <Film key={index} film={film} />);
    } else if (selectedType === "music") {
      return music
        ?.filter((artist) => artist?.fields)
        .map((artist, index) => <Music key={index} music={artist} />);
    } else if (selectedType === "shortFilms") {
      return shortFilms
        ?.filter((shortFilm) => shortFilm?.fields)
        .map((shortFilm, index) => <ShortFilm key={index} shortFilm={shortFilm} />);
    } else if (selectedType === "workshops") {
      return workshops
        ?.filter((workshop) => workshop?.fields)
        .map((workshop, index) => <Workshops key={index} workshop={workshop} />);
    } else if (selectedType === "now" && now?.fields) {
      return <Now now={now} />;
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Catalog selector */}

      <div className="flex flex-col custom-590:flex-row flex-wrap justify-center gap-2 mb-4 items-center">
        <button
          onClick={() => { 
            handleSelect("films"); 
            handleScroll(scrollRef)
          }}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "films" ? "bg-heading text-peony" : "text-white"}`}
        >
          {filmTitle}
        </button>
        <button
          onClick={() => { 
            handleSelect("music"); 
            handleScroll(scrollRef)
          }}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "music" ? "bg-heading text-peony" : "text-white"}`}
        >
          {musicTitle}
        </button>
        <button
          onClick={() => { 
            handleSelect("shortFilms"); 
            handleScroll(scrollRef)
          }}
          className={`px-2 py-1 text-white text-center whitespace-nowrap uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "shortFilms" ? "bg-heading text-peony" : "text-white"}`}
        >
          {shortFilmTitle}
        </button>
        <button
          onClick={() => { 
            handleSelect("workshops"); 
            handleScroll(scrollRef)
          }}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "workshops" ? "bg-heading text-peony" : "text-white"}`}
        >
          {workshopTitle}
        </button>

        <button
          onClick={() => { 
            handleSelect("now"); 
            handleScroll(scrollRef)
          }}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "now" ? "bg-heading text-peony" : "text-white"}`}
        >
          {nowTitle}
        </button>

       
      </div>

      {/* Catalog Content */}
      <div className="flex flex-wrap justify-start custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-cloud px-[1rem] py-[1rem] custom-1150:flex-row space-y-4 custom-590:space-y-0">
        {renderContent()}
      </div>
    </div>
  );
};
