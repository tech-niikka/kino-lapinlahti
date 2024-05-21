export const Film = ({ film }) => {
  return (
    <div class="flex flex-row justify-center w-[100%] text-sm relative p-[1rem] lg:w-[50%]">
      <div>
        <img
          src={film.fields.artwork.fields.file.url}
          alt=""
          class="w-[100%] pr-[1rem] h-auto min-h-[16rem]"
        />
      </div>
      <div class="flex flex-col justify-between h-full w-[60%]">
        <div class="flex flex-col justify-between gap-[0.15rem]">
          <div class="uppercase text-sm">{film.fields.genre}</div>
          <div class="flex gap-[0.5rem] text-sm lowercase">
            <div>{film.fields.day}</div>
            <div>{film.fields.date}</div>
            <div>{film.fields.time}</div>
          </div>
          <h3 class="text-[1.25rem] py-[0.25rem] font-semibold font-serif capitalize">
            {film.fields.title}
          </h3>
          <div class="text-[1rem] font-semibold">{film.fields.length}</div>
          <div class="text-xs">{film.fields.country}</div>
          <p class="text-s min-h-[7.5rem] overflow-hidden">
            {film.fields.description}
          </p>
        </div>
        <div class="text-xs pt-[0.25rem]">{film.fields.productionCompany}</div>
      </div>
    </div>
  );
};
