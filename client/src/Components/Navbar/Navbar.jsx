// import "./styles/Navbar.css";
import logo from "./logo-nobg.png";
import Menuitems from "./Components/Menuitems";
import { Link } from "react-router-dom";
import { IoMdCart } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen((prev) => !prev);
  }
  return (
    <div className="w-full flex px-4 justify-between items-center bg-[#fdf8e1] text-sm md:text-lg fixed">
      <Link to="/">
        <img src={logo} alt="logo" className="size-28 rounded-full" />
      </Link>

      <div className="hidden lg:inline-block">
        <Menuitems />
      </div>

      <div className="hidden lg:inline-block">
        <ul className="flex gap-5 items-center h-full text-[var(--darkbrown)]">
          <li>
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1">
                Login/Signup
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>As a User</a>
                </li>
                <li>
                  <a>As a Seller</a>
                </li>
                <li>
                  <a>As a Admin</a>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/cart">
              <IoMdCart className="size-8 text-[var(--sage)]" />
            </Link>
          </li>
        </ul>
      </div>

      <GiHamburgerMenu
        className="absolute right-5 self-center size-6 text-[var(--darksage)] cursor-pointer z-10 lg:hidden"
        onClick={handleClick}
      />

      {isOpen && (
        <div className="absolute h-screen bg-[var(--lightsage)] right-0 flex flex-col p-15 text-lg justify-around">
          <div className="h-max">
            <Menuitems />
          </div>

          <div className="flex flex-col gap-5 items-center h-max">
            <div className="dropdown dropdown-start">
              <div tabIndex={0} role="button" className="btn m-1">
                Login/Signup
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
              >
                <li>
                  <a>As a User</a>
                </li>
                <li>
                  <a>As a Seller</a>
                </li>
                <li>
                  <a>As a Admin</a>
                </li>
              </ul>
            </div>
            <div>
              <Link to="/cart">
                <IoMdCart className="size-8 text-[var(--sage)]" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
