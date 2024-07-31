export const Film = ({ film }) => {
  return (
    <div class="flex flex-col justify-center w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[3rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%]  ">
      <div>
        <img
          src={film.fields.artwork.fields.file.url}
          alt=""
          class="w-[100%] sm:pr-[2rem] pr-0 h-auto custom-588:w-[17rem] min-h-[18rem]"
        />
      </div>
      <div class="flex flex-col justify-between h-full w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div class="flex flex-col justify-between gap-[0.15rem]">

        <div class='flex flex-col justify-between  custom-588:pt-0'>
          <h3 class="text-2xl pt-[0.2rem] sm:py-[0.20rem]  font-semibold font-serif">
            {film.fields.title}
            <h3 class="text-base  sm:py-[0.25rem] font-light font-serif">
            {film.fields.originalTitle}
          </h3>
          </h3>
          <div class="uppercase text-sm font-light">{film.fields.genre}</div>
          </div>
          <div class="flex gap-[0.5rem] pt-[1rem] text-[1rem] lowercase font-semibold underline">
            <div>{film.fields.day}</div>
            <div>{film.fields.date}</div>
            <div>{film.fields.time}</div>
          </div>
          <div class="text-sm pt-[0.1rem] pb-[0rem] font-light">{film.fields.length}</div>
          <div class='flex flex-row  '>
          <div class="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">{film.fields.languageTitle}</div>
          <div class="text-sm pt-[0.1rem]  font-light">{film.fields.filmlanguage}</div>
          </div>
          <div class='flex flex-row  '>
          <div class="text-sm pt-[0.1rem] pr-[0.5rem] font-semibold">{film.fields.textTitle}</div>
          <div class="text-sm pt-[0.1rem] pb-[1rem] font-light">{film.fields.textlanguage}</div>
          </div>
          
          <p class="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden">
            {film.fields.description}
          </p>
        </div>
        <div class=" fle flex-row text-xs pt-[0.25rem] custom-588:pt-[1rem] pb-[2rem] custom-588:pb-[0.5rem]">{film.fields.productionCompany}  {film.fields.country}</div>
      </div>
    </div>
  );
};
