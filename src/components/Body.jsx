import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = (props) => {
  

  return (
    <div className="flex">
      <Sidebar />
      <MainContainer />
    </div>
  );
};

export default Body;
