
import './index.css'



import Header from "./Components/Header";
import Body from "./Components/Body";
import { Outlet } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Header />
      <Outlet />
    </div>
  );
}

