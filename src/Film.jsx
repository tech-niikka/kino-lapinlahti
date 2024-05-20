import placeholderImg from "../src/assets/movieCover.png";

export const Film = ({ film }) => {
  return (
    <div class="flex flex-row justify-between w-[50%] text-sm relative p-10 leading-7">
      <div>
        <img src={placeholderImg} alt="" class="w-[28rem] pr-[1rem]" />
      </div>
      <div class="flex flex-col justify-between h-full">
        <div class="flex flex-col justify-between gap-[0.5rem]">
          <div class="uppercase text-sm">{film.fields.genre}</div>
          <div class="flex gap-[0.5rem] text-sm lowercase">
            <div>Day</div>
            <div>Date</div>
            <div>Time</div>
          </div>
          <h3 class="text-2xl font-semibold font-serif capitalize">Title</h3>
          <div class="text-xl font-semibold">1h 50min</div>
          <div class="text-xs">Country</div>
          <p class="text-base">
            Description description description description description
            description
          </p>
        </div>
        <div class="text-sm">Production Company</div>
      </div>
    </div>
  );
};
