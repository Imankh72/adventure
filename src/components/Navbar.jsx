import { useState } from "react";
import { Link } from "react-router-dom";
import { FaTypo3, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <nav>
      <div>
        <Link to="/" className="logo">
          TRVL <FaTypo3 />
        </Link>
        <div className="menu-icon" onClick={() => setOpenMenu(!openMenu)}>
          {openMenu ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={openMenu ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="/"
              className="nav-links"
              onClick={() => setOpenMenu(false)}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={() => setOpenMenu(false)}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/products"
              className="nav-links"
              onClick={() => setOpenMenu(false)}
            >
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/sign-up"
              className="nav-links-mobile"
              onClick={() => setOpenMenu(false)}
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
