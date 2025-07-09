import "./index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

function App() {
 
  return (
    <Provider store={appStore}>
      <div>
        <Header  />
        <Body  />
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
