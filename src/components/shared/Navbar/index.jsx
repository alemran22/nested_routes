import { useContext } from "react";
import navdata from "../../../constant/navbar.constant";
import { NavLink } from "react-router-dom";
import { ProductContext } from "../../../context/ProductContext";

const Navbar = () => {
  const { cardProducts } = useContext(ProductContext);
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Parent</a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navdata.map(({ title, id, link }) => (
            <NavLink
              to={link}
              key={id}
              className={"btn btn-md btn-success ml-6 relative"}
            >
              {title}
              {title === "Cart" ? (
                cardProducts.length < 1 ? (
                  ""
                ) : (
                  <span className="absolute -top-2 -right-2 p-1 px-2 bg-yellow-500 text-red-600 rounded-full font-bold">
                    {cardProducts.length}
                  </span>
                )
              ) : (
                ""
              )}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
