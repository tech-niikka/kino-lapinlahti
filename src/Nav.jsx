import React, { useState } from "react";
import logo from "../src/assets/logo/logo-white-en.png";
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
      logoUrl,
    },
    ref
  ) => {

    const [menuOpen, setMenuOpen] = useState(false);

    const handleNav = () => {
      setMenuOpen(!menuOpen);
    };

    return (
      <div className="bg-blueberry flex items-center justify-between py-[1.5rem] px-[1rem] custom-710:px-[4rem]">
        <div>
          <img
            className="max-h-[52px] w-auto"
            src={logoUrl ? `https:${logoUrl}` : logo}
            alt="logo"
          />
        </div>
        
        <div className="hidden custom-955:flex">
          <div className="flex first-letter:items-center">
            <ul className="flex flex-row flex-wrap md:gap-[1rem]">
              {/* hidden until schedule section is good to go
              <li
                onClick={() => handleScroll(ref[0])}
                className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {scheduleTitle}
              </li>
              */}
              <li
                onClick={() => handleScroll(ref[1])}
                className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {catalogTitle}
              </li>
              <li
                onClick={() => handleScroll(ref[2])}
                className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {eventTitle}
              </li>
              <li
                onClick={() => handleScroll(ref[3])}
                className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-32 custom-1020:w-36 hover:bg-heading hover:text-peony text-sm custom-1020:text-base hover:cursor-pointer"
              >
                {areaTitle}
              </li>
            </ul>

            <div className="pl-[1rem] py-1">
              <ul className="flex flex-row" onClick={changeLanguage}>
                <li>
                  <button
                    className={`text-white text-sm custom-983:text-base uppercase px-1 hover:text-peony  ${
                      language === "fi" ? "underline" : ""
                    }`}
                  >
                    fi
                  </button>
                </li>
                <li>
                  <button
                    className={`text-white text-sm custom-983:text-base uppercase px-1 hover:text-peony  ${
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
          <AiOutlineMenu size={20} className="flex justify-end text-white" />
        </div>
        <div
          className={
            menuOpen
              ? "fixed z-50 left-0 top-0 w-[100%] custom-955:hidden h-full bg-blueberry shadow-lg p-10 ease-in duration-500"
              : "fixed left-[-100%] w-[100%] h-full top-0 p-10 ease-in duration-500"
          }
        >
          <div className="w-full flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <img 
                className="w-30 h-12 mb-10"
                src={logoUrl ? `https:${logoUrl}` : logo}
                alt="logo"
              />
              <div onClick={handleNav} className="cursor-pointer mb-10 ml-4 text-white">
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="flex flex-col justify-between items-center py-8">
              <div>
                <ul className="flex flex-col flex-wrap gap-[1.5rem]">
                  {/* hidden until schedule section is good to go
                  <li
                    onClick={() => {
                      handleScroll(ref[0]), setMenuOpen(false);
                    }}
                    className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-peony font-sans-700 cursor-pointer"
                  >
                    {scheduleTitle}
                  </li>
                  */}
                  <li
                    onClick={() => {
                      handleScroll(ref[1]), setMenuOpen(false);
                    }}
                    className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-peony font-sans-700 cursor-pointer"
                  >
                    {catalogTitle}
                  </li>
                  <li
                    onClick={() => {
                      handleScroll(ref[2]), setMenuOpen(false);
                    }}
                    className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-peony font-sans-700 cursor-pointer"
                  >
                    {eventTitle}
                  </li>
                  <li
                    onClick={() => {
                      handleScroll(ref[3]), setMenuOpen(false);
                    }}
                    className="px-2 py-1 text-white text-center uppercase border-2 border-solid rounded-full w-36  hover:bg-heading hover:text-peony font-sans-700 cursor-pointer"
                  >
                    {areaTitle}
                  </li>
                </ul>
              </div>
              <div className=" py-8 ">
                <ul className="flex flex-row" onClick={changeLanguage}>
                  <li>
                    <button
                      className={`text-white uppercase p-1 hover:text-peony ${
                        language === "fi" ? "underline" : ""
                      }`}
                    >
                      fi
                    </button>
                  </li>
                  <li>
                    <button
                      className={`text-white uppercase p-1 hover:text-peony ${
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

          <div className="flex flex-row justify-center items-center">
            <a 
              href="https://www.instagram.com/lapinlahtifilmfestival/">
              <AiOutlineInstagram
              size={32}
              className="cursor-pointer text-white"
              />
            </a>
            <a 
              href="https://www.facebook.com/events/lapinlahdenpolku-8-00180-helsinki-finland/lapinlahden-elokuvajuhlat-lapinlahti-film-festival/1397138120949216/">
              <AiOutlineFacebook
                size={32}
                className="cursor-pointer text-white"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default Nav;
