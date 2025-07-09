import "./index.css";
import { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
  const [menuDisplayStatus, setMenuDisplayStatus] = useState(false);
  return (
    <Provider store={appStore}>
      <div>
        <Header setmenuflag={setMenuDisplayStatus} />
        <Body showMenu={menuDisplayStatus} />
      </div>
    </Provider>
  );
}

/*{
 -Head 
 -Body
   -sidebar
     -menuItems
   -MainContainer
     -Buttonlist
     -videoContainer
       -videocard 


}*/

export default App;
