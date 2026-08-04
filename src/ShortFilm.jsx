import { imgUrl } from "./imgUrl.js";

export const ShortFilm = ({ shortFilm, anchorId }) => {
  return (
    <div
      id={anchorId}
      className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0 scroll-mt-24"
    >
      <div className="sm:pr-[2rem] pr-0">
        <img
          src={imgUrl(
            shortFilm.fields.artwork?.fields.file.url,
            "?w=600&fm=webp"
          )}
          alt={`${shortFilm.fields.title} poster`}
          className="w-[100%] h-auto custom-588:w-[20rem] min-h-[18rem] object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">
          <div className="flex flex-col justify-between custom-588:pt-0">
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {shortFilm.fields.title}
            </h3>

            <h4 className="text-base sm:py-[0.25rem] font-light font-serif">
              {shortFilm.fields.originalTitle}
            </h4>
          </div>

          {/* Näytösaika ja paikka */}
          {shortFilm.fields.screening && (
            <div className="text-sm pt-[0.2rem] pb-[0.3rem] font-semibold">
              {shortFilm.fields.screening}
            </div>
          )}

          <div className="text-sm pt-[0.1rem] pb-[0rem] font-light">
            {shortFilm.fields.length}
          </div>

          {shortFilm.fields.textlanguage && (
            <div className="flex flex-row">
              <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
                {shortFilm.fields.textTitle}
              </div>

              <div className="text-sm pt-[0.1rem] font-light">
                {shortFilm.fields.textlanguage}
              </div>
            </div>
          )}

          {shortFilm.fields.ageLimit && (
            <div className="flex flex-row pb-[1rem]">
              <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
                {shortFilm.fields.ageLimitTitle}
              </div>

              <div className="text-sm pt-[0.1rem] font-light">
                {shortFilm.fields.ageLimit}
              </div>
            </div>
          )}

          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {shortFilm.fields.filmDescription}
          </p>

          {/* Blokin lyhytelokuvat: ohjaaja, maa, vuosi, kesto, ikäraja, synopsis */}
          {shortFilm.fields.shorts?.length > 0 && (
            <div className="pt-[0.75rem]">
              <h4 className="text-base font-semibold font-serif pb-[0.4rem]">
                {shortFilm.fields.shortsTitle}
              </h4>
              <ol className="flex flex-col gap-[0.9rem] list-none">
                {shortFilm.fields.shorts.map((s, i) => (
                  <li key={s.title}>
                    <div className="text-sm font-semibold">
                      {i + 1}. {s.title}
                      {s.originalTitle ? ` (${s.originalTitle})` : ""}
                    </div>
                    <div className="text-xs font-light">
                      {shortFilm.fields.directedLabel}: {s.director} · {s.meta} ·{" "}
                      {shortFilm.fields.ageLimitLabel} {s.ageLimit}
                    </div>
                    <p className="text-sm font-light pt-[0.15rem]">
                      {s.synopsis}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          )}

          <div className="flex flex-row text-xs pt-[0.25rem] custom-588:pt-[1rem] pb-[0.5rem] custom-588:pb-[0.5rem]">
            {shortFilm.fields.productionCompany}
            {shortFilm.fields.productionCompany && shortFilm.fields.country
              ? " – "
              : ""}
            {shortFilm.fields.country}
          </div>

          {/* Lipunvarauslinkki (Fienta) */}
          {shortFilm.fields.fientaUrl && (
            <div className="pb-[0.5rem]">
              <a
                href={shortFilm.fields.fientaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline hover:no-underline"
              >
                {shortFilm.fields.fientaLabel}
              </a>
              {shortFilm.fields.fientaNote && (
                <div className="text-xs pt-[0.2rem] font-light">
                  {shortFilm.fields.fientaNote}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
