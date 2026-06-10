import Navbar from "./components/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Contact from "./components/Contact/Contact";
import { ContactProvider } from "./context/ContactContext";
import { ThemeProvider } from "./context/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <ContactProvider>
        <div className="min-h-screen bg-page text-content font-[gilroy-heavy] transition-colors duration-300">
          <div className="mx-auto max-w-7xl px-4 md:px-8 py-5 md:py-6">
            <Navbar />
            <Contact />
            <Outlet />
          </div>
        </div>
      </ContactProvider>
    </ThemeProvider>
  );
};

export default App;
