export const ShortFilm = ({ shortFilm }) => {
  return (

    <div className="flex-grow-0 flex flex-col items-start w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[2rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%] mx-auto sm:mx-0 gap-y-2 sm:gap-y-0">
      
      <div>
        <img
          src={shortFilm.fields.artwork.fields.file.url}
          alt={`${shortFilm.fields.title} poster`}
          className="w-[100%] sm:pr-[2rem] pr-0 h-auto custom-588:w-[20rem] min-h-[18rem]"
          loading="lazy"
        />
      </div>

      <div className="flex flex-col justify-between w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div className="flex flex-col justify-between gap-[0.15rem]">

          <div className='flex flex-col justify-between custom-588:pt-0'>
            <h3 className="text-2xl pt-[0.2rem] sm:py-[0.20rem] font-semibold font-serif">
              {shortFilm.fields.title}
            </h3>

            <h4 className="text-base  sm:py-[0.25rem] font-light font-serif">
              {shortFilm.fields.originalTitle}
            </h4>
{/*}
            <div className="uppercase text-sm font-light">
              {shortFilm.fields.genre}
            </div>
            */}
          </div>
{/*}
          <div className="flex gap-[0.5rem] pt-[1rem] text-[1rem] lowercase font-semibold">
            <div>{shortFilm.fields.day}</div>
            <div>{shortFilm.fields.date}</div>
            <div>{shortFilm.fields.time}</div>
          </div>
*/}
          <div className="text-sm pt-[0.1rem] pb-[0rem] font-light">
            {shortFilm.fields.length}
          </div>

          {/*
          <div className="flex flex-row">
            <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
              {shortFilm.fields.languageTitle}
            </div>

            <div className="text-sm pt-[0.1rem] font-light">
              {shortFilm.fields.filmlanguage}
            </div>
          </div>
          */}

          <div className="flex flex-row">
            <div className="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">
              {shortFilm.fields.textTitle}
            </div>

            <div className="text-sm pt-[0.1rem] pb-[1rem] font-light">
              {shortFilm.fields.textlanguage}
            </div>
          </div>
            
          <p className="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden whitespace-pre-line">
            {shortFilm.fields.filmDescription}
          </p>

          <div className="flex flex-row text-xs pt-[0.25rem] custom-588:pt-[1rem] pb-[0.5rem] custom-588:pb-[0.5rem]">
            {shortFilm.fields.productionCompany}
            {shortFilm.fields.productionCompany && shortFilm.fields.country ? " – " : ""}
            {shortFilm.fields.country}
          </div>
        </div>


      </div>
    </div>
  );
};
