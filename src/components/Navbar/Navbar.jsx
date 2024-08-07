import mainLogo from "../../assets/Project 2_3 (1).png";
import { Link, NavLink } from "react-router-dom";
import { RiCloseLargeLine, RiMenu2Line } from "@remixicon/react";
import { useState } from "react";

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);
  return (
    <nav
      className={`flex flex-wrap justify-between font-[gilroy-regular] font-medium`}
      data-scroll
    >
      <span>
        <Link to="/">
          <img className="h-14" src={mainLogo} alt="logo" />
        </Link>
      </span>
      <ul
        className={`mx-24 ${
          menu ? "block" : "hidden"
        }  md:border-none text-center md:w-auto md:bg-transparent md:static md:mx-0 md:flex gap-6`}
      >
        <li className="text-xl transition ease delay-150 duration-300 p-2 md:p-0">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${isActive && "border-b-4 border-[#08D9D6] text-xl"}`
            }
          >
            HOME
          </NavLink>
        </li>
        <li
          id="work"
          className="text-xl transition ease delay-150 duration-300 p-2 md:p-0"
        >
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `text-xl ${isActive && "border-b-4 border-[#FF2E63]"}`
            }
          >
            WORK
          </NavLink>
        </li>

        <li
          id="/about"
          className="text-xl transition ease delay-150  p-2 md:p-0"
        >
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive && "border-b-4 border-[#08D9D6] "}`
            }
          >
            ABOUT
          </NavLink>
        </li>
      </ul>
      {showMenu ? (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-12 top-14 transition-all ease-in duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      ) : (
        <RiCloseLargeLine
          size={30}
          className="md:hidden absolute right-12 top-14 transition-all ease-in duration-300"
          onClick={() => {
            openMenu(!menu);
            setShowmenu(!showMenu);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
