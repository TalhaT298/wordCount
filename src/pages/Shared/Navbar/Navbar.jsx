import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import logo from "../../../assets/W.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <div>
      <nav className="flex items-center justify-between bg-black px-4 py-2 text-white ">
        <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 ">
          <Link to="/">
          <div className="flex items-center">
            <h2 style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
              Countify
            </h2>
            <img src={logo} className="w-24 h-7" alt="Logo" style={{ marginLeft: "8px" }} />
          </div>
          </Link>
        </div>
        <ul className="hidden items-center justify-between gap-10 md:flex">
          <Link to="/blog">
          <li className="group flex  cursor-pointer flex-col" style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
            Blog
            <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-slate-50 transition-all duration-300 group-hover:w-full"></span>
          </li>
          </Link>
          <li className="group flex  cursor-pointer flex-col" style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
            Services
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-50 transition-all duration-300 group-hover:w-full"></span>
          </li>
          <li className="group flex  cursor-pointer flex-col" style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
            About
            <span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-slate-50 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </ul>
        <div
          ref={dropDownMenuRef}
          onClick={() => setDropDownState(!dropDownState)}
          className="relative flex transition-transform md:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer"
          >
            {" "}
            <line x1="4" x2="20" y1="12" y2="12" />{" "}
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />{" "}
          </svg>
          {dropDownState && (
            <ul className=" z-10  gap-2  bg-black  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
              <Link to="/blog">
              <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-slate-50 "style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
                Blog
              </li>
              </Link>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-slate-50 "style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
                Services
              </li>
              <li className="cursor-pointer  px-6 py-2 text-white hover:bg-slate-50 "style={{ fontFamily: "Atma, serif", fontWeight: 600 }}>
                About
              </li>
              
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
