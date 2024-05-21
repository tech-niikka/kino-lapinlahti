import React from "react";
import logo from "../src/logo.png";

const Nav = React.forwardRef(
  (
    {
      handleScroll,
      changeLanguage,
      language,
      schedualeTitle,
      catalogTitle,
      eventTitle,
      areaTitle,
    },
    ref
  ) => {
    return (
      <div className="bg-navorange flex items-center justify-between py-[1rem] px-[4rem]">
        <div>
          <img class="w-30 h-12" src={logo} alt="image" />
        </div>
        <div className="flex items-center">
          <ul className="flex flex-row flex-wrap gap-[1rem]">
            <li
              onClick={() => handleScroll(ref[0])}
              class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700"
            >
              {schedualeTitle}
            </li>
            <li
              onClick={() => handleScroll(ref[1])}
              class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700"
            >
              {catalogTitle}
            </li>
            <li
              onClick={() => handleScroll(ref[2])}
              class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700"
            >
              {eventTitle}
            </li>
            <li
              onClick={() => handleScroll(ref[3])}
              class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700"
            >
              {areaTitle}
            </li>
          </ul>

          <div class="pl-[1rem] ">
            <ul class="flex flex-row" onClick={changeLanguage}>
              <li>
                <button
                  className={`text-heading uppercase pr-1 ${
                    language === "fi" ? "underline" : ""
                  }`}
                >
                  fi
                </button>
              </li>
              <li>
                <button
                  className={`text-heading uppercase pr-1 ${
                    language === "en-US" ? "underline" : ""
                  }`}
                >
                  en
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
);

export default Nav;
