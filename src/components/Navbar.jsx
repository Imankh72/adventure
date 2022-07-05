import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="bg-neutral-900  w-[100%] h-[60px] fixed top-0 left-0 text-white text-2xl px-2 z-50  md:flex md:justify-between md:max-w-7xl xl:left-[50%] xl:translate-x-[-50%] ">
      <div className="flex items-center justify-between text-3xl h-full md:gap-3">
        <Link to="/" className=" flex items-center gap-1">
          TRVL <FaTypo3 />
        </Link>
        {openMenu ? (
          <FaTimes
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <FaBars
            className="w-8 hover:cursor-pointer hover:opacity-80 transition-all md:hidden"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>
      <ul
        className={`flex flex-col absolute w-full h-[100vh] bg-neutral-900 py-5 ${
          openMenu ? "left-0" : "left-[-100%]"
        } transition-all duration-700 ease-in-out md:flex-row md:w-auto md:h-auto md:static md:space-y-0 md:items-center md:justify-center`}
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/products"
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
        >
          Products
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
