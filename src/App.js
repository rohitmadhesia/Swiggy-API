
import './index.css'
import userContext from './Utilites/userContext';
import { Provider } from 'react-redux';

import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
import appStore from './Utilites/appStore';
export default function App() {
  return (
    <Provider store={appStore}>
    <userContext.Provider value={{userLoggedIn: "elon musk"}}>
    <div className="App">
      <Header />
      <Outlet />
    </div>
    </userContext.Provider>
    </Provider>
  );
}

