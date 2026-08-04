import { imgUrl } from "./imgUrl.js";

export const Film = ({ film, anchorId }) => {
  return (
    <div
      id={anchorId}
      className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0 scroll-mt-24"
    >
      <div className="sm:pr-[2rem] pr-0">
        {/* Juliste vie traileriin, jos sellainen on tiedossa */}
        {film.fields.trailerUrl ? (
          <a
            href={film.fields.trailerUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={film.fields.trailerLabel}
            className="group block relative w-[100%] custom-588:w-[20rem]"
          >
            <img
              src={imgUrl(film.fields.artwork?.fields.file.url, "?w=600&fm=webp")}
              alt={`${film.fields.title} poster`}
              className="w-[100%] h-auto min-h-[18rem] aspect-[7/10] object-cover"
              loading="lazy"
            />
            {/* Toistokuvake — tummuu hiirellä ja näyttää tekstin */}
            <span className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-plum/0 group-hover:bg-plum/50 group-focus-visible:bg-plum/50 transition-colors">
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-white/85 opacity-70 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  className="w-6 h-6 translate-x-[2px] fill-plum"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              <span className="text-white text-sm font-semibold uppercase opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity">
                {film.fields.trailerLabel}
              </span>
            </span>
          </a>
        ) : (
          <img
            src={imgUrl(film.fields.artwork?.fields.file.url, "?w=600&fm=webp")}
            alt={`${film.fields.title} poster`}
            className="w-[100%] h-auto custom-588:w-[20rem] min-h-[18rem] aspect-[7/10] object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">
          <div className="flex flex-col justify-between custom-588:pt-0">
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {film.fields.title}
            </h3>

            <h4 className="text-base sm:py-[0.25rem] font-light font-serif">
              {film.fields.originalTitle}
            </h4>
          </div>

          {/* Näytösaika ja paikka */}
          {film.fields.screening && (
            <div className="text-sm pt-[0.2rem] pb-[0.3rem] font-semibold">
              {film.fields.screening}
            </div>
          )}

          <div className="text-sm pt-[0.1rem] pb-[0rem] font-light">
            {film.fields.length}
          </div>

          <div className="flex flex-row">
            <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
              {film.fields.languageTitle}
            </div>

            <div className="text-sm pt-[0.1rem] font-light">
              {film.fields.filmlanguage}
            </div>
          </div>

          <div className="flex flex-row">
            <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
              {film.fields.textTitle}
            </div>

            <div className="text-sm pt-[0.1rem] font-light">
              {film.fields.textlanguage}
            </div>
          </div>

          {film.fields.ageLimit && (
            <div className="flex flex-row pb-[1rem]">
              <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
                {film.fields.ageLimitTitle}
              </div>

              <div className="text-sm pt-[0.1rem] font-light">
                {film.fields.ageLimit}
              </div>
            </div>
          )}

          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {film.fields.filmDescription}
          </p>

          <div className="flex flex-row text-xs pt-[0.25rem] custom-588:pt-[1rem] pb-[0.5rem] custom-588:pb-[0.5rem]">
            {film.fields.productionCompany}
            {film.fields.productionCompany && film.fields.country ? " – " : ""}
            {film.fields.country}
          </div>

          {/* Lipunvarauslinkki (Fienta) */}
          {film.fields.fientaUrl && (
            <div className="pb-[0.5rem]">
              <a
                href={film.fields.fientaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline hover:no-underline"
              >
                {film.fields.fientaLabel}
              </a>
              {film.fields.fientaNote && (
                <div className="text-xs pt-[0.2rem] font-light">
                  {film.fields.fientaNote}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
