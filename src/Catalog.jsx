import { Film } from "./Film";

export const Catalog = ({ films }) => {
  return (
    <div class="w-full flex justify-center">
      <div class="flex flex-wrap w-[85%] bg-yellow">
        {films.map((film) => (
          <Film film={film} />
        ))}
      </div>
    </div>
  );
};
