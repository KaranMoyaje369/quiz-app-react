import React from "react";
import { NavLink } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 p-10 tracking-wider">
        <div className="">
          {/* Logo */}
          <div className="text-2xl md:text-3xl shadow-lg shadow-orange-500 py-3 rounded-lg text-center mb-8">
            <span className="text-2xl md:text-4xl text-orange-500">Q</span>uiz
            <span className="text-2xl md:text-4xl text-orange-500">A</span>PP
          </div>

          <div className="text-lg font-bold md:text-2xl text-left md:text-center p-2">
            <p className="mb-2"> A project by</p>
            <p className="text-orange-500 text-2xl font-bold">
              The Learn Programmers
            </p>
          </div>
        </div>
        <div className="p-2 font-bold">
          <h3 className="text-lg text-left md:text-center mb-2 text-orange-500">
            Quick Links
          </h3>
          <ul className="flex flex-col items-start md:items-center justify-center gap-2 mt-5">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-orange-500 pb-2" : " hover:text-white pb-2"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/quizzes"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 pb-2"
                    : " hover:text-orange-500 pb-2"
                }
              >
                Quiz
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 pb-2"
                    : " hover:text-orange-500 pb-2"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "text-orange-500 pb-2"
                    : " hover:text-orange-500 pb-2"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="p-2 font-bold">
          <h3 className="text-lg text-left mb-2 text-orange-500 px-2">
            Contact Us
          </h3>
          <div className="flex flex-col gap-3 mt-5 p-2">
            <div>
              <a href="mailto:quiz369@gmail.com">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="flex items-center justify-start gap-2 text-orange-500">
                    <MdEmail className="border-[1px] border-orange-400 p-[1px] rounded-full text-2xl shadow-lg  hover:shadow-orange-500" />
                    <p>E-Mail :</p>
                  </div>
                  <i className="ps-6 md:ps-0">quiz369@gmail.com</i>
                </div>
              </a>
            </div>
            <div>
              <a href="tel:+1234567890">
                <div className="flex flex-col items-start justify-start gap-2">
                  <div className="flex items-center justify-start gap-2 text-orange-500 ">
                    <IoCall className="border-[1px] border-orange-400 p-[1px] rounded-full text-2xl shadow-lg  hover:shadow-orange-500" />
                    <p>Contact No :</p>
                  </div>
                  <i className="ps-6 md:ps-0">+12345 67890</i>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
