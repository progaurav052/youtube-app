import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const showMenu = useSelector((store) => store.app.isMenuOpen);

  return !showMenu ? null : (
    <div className="p-5 shadow-lg w-48 rounded-md">
      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Live</li>
      </ul>
      <h1 className="font-bold pt-5">Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
      <h1 className="font-bold pt-5">Watch later</h1>
      <ul>
        <li>Music</li>
        <li>Sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>
    </div>
  );
};

export default Sidebar;
