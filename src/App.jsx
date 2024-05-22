import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div className="p-12 font-[gilroy-heavy] ">
      <Navbar />
      <Contact />
      <Outlet />
    </div>
  );
};

export default App;
