import React from "react";
import NavLinkItem from "./NavLinkItem";
import PlayBtn from "./PlayBtn";
import ThemeChanger from "./ThemeChanger";
import ResponsiveNavbar from "./ResponsiveNavbar";

const MainNavbar = () => {
  return (
    <>
      <div className="container-fluid flex justify-around items-center py-6 shadow-lg shadow-orange-500 font-bold tracking-wider">
        {/* Logo */}
        <div className="text-2xl md:text-3xl shadow-lg shadow-orange-500 p-2 rounded-lg">
          <span className="text-2xl md:text-4xl text-orange-500">Q</span>uiz
          <span className="text-2xl md:text-4xl text-orange-500">A</span>PP
        </div>

        {/* Nav Links */}
        <div className="hidden md:block">
          <ul className="flex justify-center items-center gap-4 text-[20px] p-2">
            <NavLinkItem></NavLinkItem>
          </ul>
        </div>

        {/* Play Btn and Theme Changer */}
        <div className="flex justify-center items-center gap-3">
          <div className="hidden md:block">
            <PlayBtn></PlayBtn>
          </div>
          <div>
            <ThemeChanger></ThemeChanger>
          </div>
          <div>
            <ResponsiveNavbar></ResponsiveNavbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNavbar;
