import { PiHeart, PiShoppingCart } from "react-icons/pi";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/favicon-16x16.png";

export default function NavBar() {
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboard</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-myPurple px-10 w-11/12 max-w-screen-2xl mx-auto rounded-2xl rounded-b-none">
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex="0"
            role="button"
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost text-xl text-white"
        >
          <img src={logo} />
          Gadget Heaven
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-1 menu-horizontal px-1 text-white">{links}</ul>
      </div>
      <div className="navbar-end">
        <Link className="btn btn-circle btn-sm mr-3">
          <PiShoppingCart />
        </Link>
        <Link className="btn btn-circle btn-sm">
          <PiHeart />
        </Link>
      </div>
    </div>
  );
}
