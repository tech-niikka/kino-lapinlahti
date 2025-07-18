import { useState } from "react";
import { Film } from "./Film";
import { Music } from "./Music";
import { Workshops } from "./Workshops";
import { ShortFilm } from "./ShortFilm";

export const Catalog = ({ films, shortFilms, music, workshops, filmTitle, shortFilmTitle, musicTitle, workshopTitle }) => {
  const [selectedType, setSelectedType] = useState("films");

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  const renderContent = () => {
    if (selectedType === "films") {
      return films?.map((film, index) => <Film key={index} film={film} />);
    } else if (selectedType === "music") {
      return music?.map((artist, index) => <Music key={index} music={artist} />);
    } else if (selectedType === "shortFilms") {
      return shortFilms?.map((shortFilm, index) => <ShortFilm key={index} shortFilm={shortFilm} />);
    } else if (selectedType === "workshops") {
      return workshops?.map((workshop, index) => <Workshops key={index} workshop={workshop} />);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Catalog selector */}

      <div className="flex space-x-4 mb-4">
        <button
          onClick={() => handleSelect("films")}

          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "films" ? "bg-heading text-peony" : "text-white"}`}
        >
          {filmTitle}
        </button>
        <button
          onClick={() => handleSelect("music")}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "music" ? "bg-heading text-peony" : "text-white"}`}
        >
          {musicTitle}
        </button>
        {/* ~~~ remove comment to reveal buttons :^) ~~~
        <button
          onClick={() => handleSelect("shortFilms")}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "shortFilms" ? "bg-heading text-peony" : "text-white"}`}
        >
          {shortFilmTitle}
        </button>
        <button
          onClick={() => handleSelect("workshops")}
          className={`px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${selectedType === "workshops" ? "bg-heading text-peony" : "text-white"}`}
        >
          {workshopTitle}
        </button>
        */}
      </div>

      {/* Catalog Content */}
      <div className="flex flex-wrap justify-start custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-cloud px-[1rem] py-[1rem] custom-1150:flex-row space-y-4 custom-590:space-y-0">
        {renderContent()}
      </div>
    </div>
  );
};
