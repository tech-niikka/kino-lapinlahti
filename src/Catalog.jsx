import { Film } from "./Film";

export const Catalog = ({ films }) => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-wrap justify-start custom-590:flex-row sm:flex-col flex-wrap w-[88%] sm:w-[85%] bg-cloud px-[1rem] py-[1rem] custom-1150:flex-row">
        {films?.map((film, index) => (
          <Film key={index} film={film} />
        ))}
      </div>
    </div>
  );
};
