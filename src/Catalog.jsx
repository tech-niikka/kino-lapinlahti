import { Film } from "./Film";

export const Catalog = ({ films }) => {
  return (
    <div class="w-full flex justify-center">
      <div class="flex flex-col flex-wrap w-[85%] bg-yellow px-[1rem] py-[1rem] lg:flex-row">
        {films.map((film, index) => (
          <Film key={index} film={film} />
        ))}
      </div>
    </div>
  );
};
