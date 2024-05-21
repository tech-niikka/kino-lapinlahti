import { Film } from "./Film";

export const Catalog = ({ films }) => {
  return (
    <div class="w-full flex justify-center">
      <div class="flex flex-col flex-wrap w-[85%] bg-yellow lg:flex-row">
        {films.map((film) => (
          <Film film={film} />
        ))}
      </div>
    </div>
  );
};
