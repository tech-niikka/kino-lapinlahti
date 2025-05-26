import React, { useState } from "react";
import logo from "../src/assets/logo/logo-black-en.png";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

const Nav = React.forwardRef(
  (
    {
      handleScroll,
      changeLanguage,
      language,
      scheduleTitle,
      catalogTitle,
      eventTitle,
      areaTitle,
    },
    ref
  ) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <div className="bg-navorange flex items-center justify-between py-[1.5rem] px-[1rem] custom-710:px-[4rem]">
        <div>
          <img
            class="w-30 h-12 cursor-pointer custom-710:w-[180px] custom-710:h-[52px]"
            src={logo}
            alt="image"
          />
        </div>
        <div class="hidden custom-955:flex">
          <div className="flex first-letter:items-center">
            <ul className="flex flex-row flex-wrap md:gap-[1rem]">
              <li
                onClick={() => handleScroll(ref[0])}
                class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-navorange text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {scheduleTitle}
              </li>
              <li
                onClick={() => handleScroll(ref[1])}
                class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-navorange text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {catalogTitle}
              </li>
              <li
                onClick={() => handleScroll(ref[2])}
                class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-navorange text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {eventTitle}
              </li>
              <li
                onClick={() => handleScroll(ref[3])}
                class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-navorange text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {areaTitle}
              </li>
            </ul>

            <div class="pl-[1rem] py-1 ">
              <ul class="flex flex-row" onClick={changeLanguage}>
                <li>
                  <button
                    className={`text-heading text-sm custom-983:text-base uppercase px-1  ${
                      language === "fi" ? "underline" : ""
                    }`}
                  >
                    fi
                  </button>
                </li>
                <li>
                  <button
                    className={`text-heading text-sm custom-983:text-base uppercase px-1  ${
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
        <div onClick={handleNav} className="custom-955:hidden cursor-pointer ">
          <AiOutlineMenu size={20} class="flex justify-end" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-50 left-0 top-0 w-[100%] custom-955:hidden h-full bg-navorange shadow-lg p-10 ease-in duration-500"
              : "fixed left-[-100%] w-[100%] h-full top-0 p-10 ease-in duration-500"
          }
        >
          <div class="w-full flex flex-col justify-between">
            <div class="flex items-center justify-between">
              <img class="w-30 h-12 mb-10 " src={logo} alt="image" />
              <div onClick={handleNav} class="cursor-pointer mb-10 ml-4">
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div class="flex flex-col justify-between items-center py-8">
              <div>
                <ul className="flex flex-col flex-wrap gap-[1.5rem]">
                  <li
                    onClick={() => {
                      handleScroll(ref[0]), setMenuOpen(false);
                    }}
                    class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700 cursor-pointer"
                  >
                    {scheduleTitle}
                  </li>
                  <li
                    onClick={() => {
                      handleScroll(ref[1]), setMenuOpen(false);
                    }}
                    class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700 cursor-pointer"
                  >
                    {catalogTitle}
                  </li>
                  <li
                    onClick={() => {
                      handleScroll(ref[2]), setMenuOpen(false);
                    }}
                    class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700 cursor-pointer"
                  >
                    {eventTitle}
                  </li>
                  <li
                    onClick={() => {
                      handleScroll(ref[3]), setMenuOpen(false);
                    }}
                    class="px-2 py-1 text-heading text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-navorange font-sans-700 cursor-pointer"
                  >
                    {areaTitle}
                  </li>
                </ul>
              </div>
              <div class=" py-8 ">
                <ul class="flex flex-row" onClick={changeLanguage}>
                  <li>
                    <button
                      className={`text-heading uppercase p-1 ${
                        language === "fi" ? "underline" : ""
                      }`}
                    >
                      fi
                    </button>
                  </li>
                  <li>
                    <button
                      className={`text-heading uppercase p-1 ${
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
          <div class="flex flex-row justify-center items-center">
           <a href="https://www.instagram.com/lapinlahtifilmfestival/"> <AiOutlineInstagram
              size={30}
              class="cursor-pointer  text-heading"
            /></a>
           <a href="https://www.facebook.com/events/lapinlahdenpolku-8-00180-helsinki-finland/lapinlahden-elokuvajuhlat-lapinlahti-film-festival/1397138120949216/"> <AiOutlineFacebook
               size={30} class="cursor-pointer text-heading" />
               </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Nav;
