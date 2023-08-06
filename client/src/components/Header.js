import "../components/Header.css";
import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { useAuth } from "../../src/context/auth";
import toast from "react-hot-toast";
import SearchInput from "./Form/SearchInput";
import useCategory from "../hooks/useCategory.js";
import { useCart } from "../context/cart.js";
import { Badge } from "antd";
import { GiShoppingBag } from "react-icons/gi";

const Header = () => {
  const [auth, setAuth] = useAuth();
  const [cart] = useCart();
  const categories = useCategory();
  const [navDropdownOpen, setNavDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // New state for mobile menu

  const handleLogout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    toast.success("Logout Successfully");
  };

  const handleNavDropdownToggle = () => {
    setNavDropdownOpen(!navDropdownOpen);
  };

  const handleUserDropdownToggle = () => {
    setUserDropdownOpen(!userDropdownOpen);
  };
  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <nav

  style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)", fontFamily: "'Josefin Sans', sans-serif" }}
>
      <div className="container mx-auto px-4 py-2 md:px-8">
        <div className="flex items-center justify-between">
          <button
            className="lg:hidden text-2xl font-bold text-primary-500"
            type="button"
            onClick={handleNavDropdownToggle}
            aria-expanded={navDropdownOpen}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <Link to="/" className="text-3xl font-bold text-white">
            <span
              className="text-primary-500 font-semibold"
              style={{ fontSize: "3rem" }}
            >
              P
            </span>
            risa.
          </Link>
          <div
            className={`lg:flex items-right ${
              navDropdownOpen ? "block" : "hidden"
            }`}
          >
            <SearchInput
              className="text-xs bg-transparent outline-none border rounded-full py-3 px-2 text-gray-700 placeholder-gray-300"
              placeholder="Search"
            />
          </div>
          <div className="hidden lg:flex items-center space-x-4">
            <NavLink to="/" className="text-primary-500 text-white">
              HOME
            </NavLink>
            <div className="relative inline-block text-left">
              <Link
                className="text-primary-500 text-white cursor-pointer hover:text-primary-600"
                to={"/categories"}
                onClick={handleNavDropdownToggle}
              >
                CATEGORIES
              </Link>
              <ul
                className={`dropdown-menu absolute z-10 mt-2 bg-white border border-primary-300 divide-y divide-primary-300 rounded-lg ${
                  navDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <Link className="dropdown-item" to={"/categories"}>
                    ALL CATEGORIES
                  </Link>
                </li>
                {categories?.map((c) => (
                  <li key={c.slug}>
                    <Link className="dropdown-item" to={`/category/${c.slug}`}>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {!auth?.user ? (
              <>
                <NavLink to="/register" className="text-primary-500 text-white">
                  REGISTER
                </NavLink>
                <NavLink to="/login" className="text-primary-500 text-white">
                  LOGIN
                </NavLink>
              </>
            ) : (
              <div className="relative inline-block text-left">
                <NavLink
                  className="text-primary-500 text-white cursor-pointer hover:text-primary-600"
                  role="button"
                  onClick={handleUserDropdownToggle}
                >
                  {auth?.user?.name}
                </NavLink>
                <ul
                  className={`dropdown-menu absolute z-10 mt-2 bg-white border border-primary-300 divide-y divide-primary-300 rounded-lg ${
                    userDropdownOpen ? "block" : "hidden"
                  }`}
                >
                  <li>
                    <NavLink
                      to={`/dashboard/${
                        auth?.user?.role === 1 ? "admin" : "user"
                      }`}
                      className="dropdown-item"
                    >
                      DASHBOARD
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      onClick={handleLogout}
                      to="/login"
                      className="dropdown-item"
                    >
                      LOGOUT
                    </NavLink>
                  </li>
                </ul>
              </div>
            )}

            {/* The Badge component must be imported and correctly implemented */}
            <Badge count={cart?.length} showZero>
              <NavLink to="/cart" className="text-white flex items-center">
                <GiShoppingBag className="text-xl mr-2" /> {/* Cart Logo */}
              </NavLink>
            </Badge>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
