import "./index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import DemoCode1 from "./components/DemoCode1";
import DemoCode2 from "./components/DemoCode2";
function App() {
  return (
    
      <Provider store={appStore}>
        <div>
          <Header /> {/*We Keep the header for each page  */}
          <RouterProvider router={appRouter}/>
        </div>
      </Provider>
    
  );
}

export default App;
export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path:"/demo1",
        element:<DemoCode1/>,
      },
      {
        path:"/demo2",
        element:<DemoCode2/>,
      }
    ],
  },
]);

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
