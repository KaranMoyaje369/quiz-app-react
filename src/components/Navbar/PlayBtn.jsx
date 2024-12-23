import React from "react";
import { NavLink } from "react-router-dom";
const PlayBtn = () => {
  return (
    <>
      <NavLink
        to="/play"
        className="bg-orange-500 mr-0 md:mr-2 py-2 px-2 md:px-4 rounded-lg "
      >
        Let's Play
      </NavLink>
    </>
  );
};

export default PlayBtn;
