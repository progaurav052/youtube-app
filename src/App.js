import "./index.css";

import Header from "./components/Header";
import Body from "./components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";

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
