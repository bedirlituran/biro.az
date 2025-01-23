import { IoMdHeartEmpty } from "react-icons/io";
import { GrLanguage } from "react-icons/gr";
import { CiCirclePlus } from "react-icons/ci";
import { useState } from "react";
import { IoWalletOutline } from "react-icons/io5";


const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <div className="flex flex-row items-center justify-between bg-sky-900 px-4">
      <button className="flex-row items-center justify-center py-4 font-bold cursor-pointer">
        <h1 className=" text-white text-2xl"><span className="bg-red-400 text-white rounded-full p-2 w-10 h-10 ">B</span>iro.az</h1>
      </button>
      <div className="flex items-center justify-center gap-6">
      <button className="flex items-center justify-center text-white cursor-pointer">
          <IoMdHeartEmpty size={24} />
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-400 px-2 py-1 rounded cursor-pointer">
          <h3 className="text-white">Az</h3> 
          <GrLanguage className="text-white" />
        </button>
       
        <button className="flex items-center justify-center gap-2 bg-red-400 px-2 py-1 rounded cursor-pointer">
            <CiCirclePlus size={24} color="white"/>
            <h3 className="text-white text-md font-bold">Elan</h3>
        </button>
        <button className="flex items-center justify-center gap-2 bg-red-400 px-2 py-1 rounded cursor-pointer">
            <IoWalletOutline size={24} color="white"/>
        </button>
        {/* hamburger */}

        <div className="flex items-center justify-between border-b border-gray-400 py-8">
     
      <nav>
        <section className="MOBILE-MENU flex lg:hidden">
          <div
            className="HAMBURGER-ICON space-y-2"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <ul className="flex flex-col items-center justify-between min-h-[250px]">
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/about">Ana Səhifə</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/portfolio">Əlaqə</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Haqqımızda</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className="DESKTOP-MENU hidden space-x-8 lg:flex text-white">
          <li>
            <a href="/about">Ana Səhifə</a>
          </li>
          <li>
            <a href="/portfolio">Əlaqə</a>
          </li>
          <li>
            <a href="/contact">Haqqımızda</a>
          </li>
        </ul>
      </nav>
      <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
    </div>

     
      </div>
    </div>
  );
};

export default Navbar;
