import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav className="navbar">
      <div className="flex items-center justify-between text-3xl h-full md:gap-3">
        <Link to="/" className="flex items-center gap-1">
          TRVL <FaTypo3 />
        </Link>
        {openMenu ? (
          <FaTimes
            className="mobile-menu-icon"
            onClick={() => setOpenMenu(false)}
          />
        ) : (
          <FaBars
            className="mobile-menu-icon"
            onClick={() => setOpenMenu(true)}
          />
        )}
      </div>
      <ul
        className={`nav-link-container ${
          openMenu ? "left-0 opacity-100" : "left-[-100%] opacity-0"
        } md:opacity-100`}
      >
        <NavLink to="/" className="nav-link" onClick={() => setOpenMenu(false)}>
          Home
        </NavLink>
        <NavLink
          to="/services"
          className="nav-link"
          onClick={() => setOpenMenu(false)}
        >
          Services
        </NavLink>
        <NavLink
          to="/products"
          className="nav-link"
          onClick={() => setOpenMenu(false)}
        >
          Products
        </NavLink>
        <button className="navbar-btn" onClick={() => setOpenMenu(false)}>
          Sign Up
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
