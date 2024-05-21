export const Film = ({ film }) => {
  return (
    <div class="flex flex-row justify-center w-[50%] text-sm relative p-[1rem]">
      <div>
        <img
          src={film.fields.artwork.fields.file.url}
          alt=""
          class="w-[100%] pr-[1rem]"
        />
      </div>
      <div class="flex flex-col justify-between h-full w-[60%]">
        <div class="flex flex-col justify-between gap-[0.5rem]">
          <div class="uppercase text-sm">{film.fields.genre}</div>
          <div class="flex gap-[0.5rem] text-sm lowercase">
            <div>{film.fields.day}</div>
            <div>{film.fields.date}</div>
            <div>{film.fields.time}</div>
          </div>
          <h3 class="text-2xl font-semibold font-serif capitalize">
            {film.fields.title}
          </h3>
          <div class="text-xl font-semibold">{film.fields.length}</div>
          <div class="text-xs">{film.fields.country}</div>
          <p class="text-s">{film.fields.description}</p>
        </div>
        <div class="text-sm">{film.fields.productionCompany}</div>
      </div>
    </div>
  );
};
