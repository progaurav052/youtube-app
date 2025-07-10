import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = (props) => {
  

  return (
    <div className="flex">
      <Sidebar />
      <Outlet/>
    </div>
  );
};

export default Body;
