export const Film = ({ film }) => {
  return (
    <div class="flex flex-col justify-center w-[95%] custom-440:w-[70%] text-sm relative px-0 custom-588:px-[1rem] py-[0.1rem] custom-588:py-[3rem] custom-590:flex-col custom-590:w-[50%] custom-1120:w-[50%] sm:w-[100%] sm:flex-row custom-1150:w-[50%]">
      <div>
        <img
          src={film.fields.artwork.fields.file.url}
          alt=""
          class="w-[100%] sm:pr-[2rem] pr-0 h-auto custom-588:max-w-[15rem] min-h-[18rem]"
        />
      </div>
      <div class="flex flex-col justify-between h-full w-[100%] sm:w-[60%] custom-1150:w-[60%] custom-1120:w-[60%]">
        <div class="flex flex-col justify-between gap-[0.15rem]">
          <div class='flex flex-row justify-between pt-2 custom-588:pt-0 custom-588:flex-col'>
          <div class="uppercase text-sm font-light">{film.fields.genre}</div>
          <div class="flex gap-[0.5rem] text-sm lowercase font-light">
            <div>{film.fields.day}</div>
            <div>{film.fields.date}</div>
            <div>{film.fields.time}</div>
          </div>
          </div>
          <h3 class="text-2xl pt-[0.2rem] sm:py-[0.25rem]  font-semibold font-serif">
            {film.fields.title}
          </h3>
          <div class="text-[1rem] py-[0.4rem] font-semibold">{film.fields.length}</div>
          <div class="text-xs py-[0.3rem] font-light pb-[0.25rem] sm:pb-[1rem]">
            {film.fields.country}
          </div>
          <p class="text-base min-h-[6.5rem] py-[0.2rem] font-light overflow-hidden">
            {film.fields.description}
          </p>
        </div>
        <div class="text-xs pt-[0.25rem] custom-588:pt-[1rem] pb-[2rem] custom-588:pb-[0.5rem]">{film.fields.productionCompany}</div>
      </div>
    </div>
  );
};
