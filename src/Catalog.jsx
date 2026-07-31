import { Film } from "./Film";
import { Music } from "./Music";
import { Workshops } from "./Workshops";
import { ShortFilm } from "./ShortFilm";
import { Now } from "./Now";
import { Art } from "./Art";

// Ankkuri-id, jota App.jsx käyttää aikataulusta korttiin vierittämiseen
export const catalogAnchorId = (type, id) => `catalog-${type}-${id}`;

export const Catalog = ({
  films, shortFilms, music, workshops, now, art,
  filmTitle, shortFilmTitle, musicTitle, workshopTitle, nowTitle, artTitle,
  selectedType, onSelect,
  handleScroll, scrollRef }) => {

  const handleSelect = (type) => {
    onSelect(type);
  };

  const renderContent = () => {
    if (selectedType === "films") {
      return films
        ?.filter((film) => film?.fields) // filter out invalid entries
        .map((film, index) => (
          <Film
            key={index}
            film={film}
            anchorId={film.id ? catalogAnchorId("films", film.id) : undefined}
          />
        ));
    } else if (selectedType === "music") {
      return music
        ?.filter((artist) => artist?.fields)
        .map((artist, index) => (
          <Music
            key={index}
            music={artist}
            anchorId={
              artist.id ? catalogAnchorId("music", artist.id) : undefined
            }
          />
        ));
    } else if (selectedType === "shortFilms") {
      return shortFilms
        ?.filter((shortFilm) => shortFilm?.fields)
        .map((shortFilm, index) => (
          <ShortFilm
            key={index}
            shortFilm={shortFilm}
            anchorId={
              shortFilm.id
                ? catalogAnchorId("shortFilms", shortFilm.id)
                : undefined
            }
          />
        ));
    } else if (selectedType === "workshops") {
      return workshops
        ?.filter((workshop) => workshop?.fields)
        .map((workshop, index) => (
          <Workshops
            key={index}
            workshop={workshop}
            anchorId={
              workshop.id
                ? catalogAnchorId("workshops", workshop.id)
                : undefined
            }
          />
        ));
    } else if (selectedType === "now" && now?.fields) {
      return <Now now={now} />;
    } else if (selectedType === "art") {
      return art
        ?.filter((item) => item?.fields)
        .map((item, index) => (
          <Art
            key={index}
            art={item}
            anchorId={item.id ? catalogAnchorId("art", item.id) : undefined}
          />
        ));
    }
  };

  // Näytetään vain välilehdet joilla on sisältöä
  const tabs = [
    { type: "films", title: filmTitle, hasContent: (films?.length ?? 0) > 0 },
    { type: "music", title: musicTitle, hasContent: (music?.length ?? 0) > 0 },
    {
      type: "shortFilms",
      title: shortFilmTitle,
      hasContent: (shortFilms?.length ?? 0) > 0,
    },
    {
      type: "workshops",
      title: workshopTitle,
      hasContent: (workshops?.length ?? 0) > 0,
    },
    { type: "art", title: artTitle, hasContent: (art?.length ?? 0) > 0 },
    { type: "now", title: nowTitle, hasContent: !!now },
  ].filter((tab) => tab.hasContent);

  return (
    <div className="w-full flex flex-col items-center">
      {/* Catalog selector */}

      <div className="flex flex-col custom-590:flex-row flex-wrap justify-center gap-2 mb-4 items-center">
        {tabs.map((tab) => (
          <button
            key={tab.type}
            onClick={() => {
              handleSelect(tab.type);
              handleScroll(scrollRef);
            }}
            className={`px-2 py-1 text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer ${
              selectedType === tab.type ? "bg-heading text-peony" : "text-plum"
            }`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Catalog Content */}
      <div className="flex flex-wrap justify-start custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-cloud px-[1rem] py-[1rem] custom-1150:flex-row space-y-4 custom-590:space-y-0">
        {renderContent()}
      </div>
    </div>
  );
};
