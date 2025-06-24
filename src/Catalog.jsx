import { useState } from "react";
import { Film } from "./Film";
import { Music } from "./Music";

export const Catalog = ({ films, music, filmTitle, musicTitle }) => {
  const [selectedType, setSelectedType] = useState("films");

  const handleSelect = (type) => {
    setSelectedType(type);
  };

  const renderContent = () => {
    if (selectedType === "films") {
      return films?.map((film, index) => <Film key={index} film={film} />);
    } else if (selectedType === "music") {
      return music?.map((artist, index) => <Music key={index} music={artist} />);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Catalog selector */}
      {/*} <= Remove this line to display catalog selector and to switch between different program types (music section still WIP)
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
      </div>

      {/* Catalog Content */}
      <div className="flex flex-wrap justify-start custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-cloud px-[1rem] py-[1rem] custom-1150:flex-row">
        {renderContent()}
      </div>
    </div>
  );
};
