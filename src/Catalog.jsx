import { Film } from "./Film";

export const Catalog = ({ films }) => {
  return (
    <div class="w-full flex justify-center">
      <div class="flex flex-col items-center custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-yellow px-[1rem] py-[1rem] custom-1150:flex-row">
        {films?.map((film, index) => (
          <Film key={index} film={film} />
        ))}
      </div>
    </div>
  );
};
