import { imgUrl } from "./imgUrl.js";

export const Art = ({ art, anchorId }) => {
  return (
    <div
      id={anchorId}
      className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0 scroll-mt-24"
    >
      {/* Kuva näytetään vain jos se on olemassa */}
      {art.fields.artwork && (
        <div className="sm:pr-[2rem] pr-0">
          <img
            src={imgUrl(art.fields.artwork.fields.file.url, "?w=600&fm=webp")}
            alt={`${art.fields.title} poster`}
            className="w-[100%] h-auto custom-588:w-[20rem] min-h-[18rem] object-cover"
            loading="lazy"
          />
          {/* Kuvaaja- tai graafikkokrediitti kuvan alla */}
          {art.fields.photoCredit && (
            <div className="text-xs pt-[0.3rem] font-light">
              {art.fields.photoCredit}
            </div>
          )}
        </div>
      )}

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">
          <div className="flex flex-col justify-between custom-588:pt-0">
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {art.fields.title}
            </h3>

            <h4 className="text-base sm:py-[0.25rem] font-light font-serif">
              {art.fields.originalTitle}
            </h4>
          </div>

          <div className="text-sm pt-[0.1rem] pb-[0rem] font-light">
            {art.fields.location}
          </div>

          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {art.fields.description}
          </p>

          {/* Ilmoittautumislinkki (Fienta) */}
          {art.fields.fientaUrl && (
            <div className="pt-[0.5rem] pb-[0.5rem]">
              <a
                href={art.fields.fientaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-semibold underline hover:no-underline"
              >
                {art.fields.fientaLabel}
              </a>
              {art.fields.fientaNote && (
                <div className="text-xs pt-[0.2rem] font-light">
                  {art.fields.fientaNote}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
