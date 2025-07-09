import Sidebar from "./Sidebar";
import MainContainer from "./MainContainer";

const Body = (props) => {
  const { showMenu } = props;

  return (
    <div className="flex">
      {showMenu && <Sidebar />}
      <MainContainer />
    </div>
  );
};

export default Body;
