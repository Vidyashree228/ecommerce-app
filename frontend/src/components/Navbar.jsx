import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { setShowSearch, getCartCount } = useContext(ShopContext);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleDropdown();
    }
  };

  return (
    <nav className="flex items-center justify-between py-5 px-4 sm:px-6 md:px-8 lg:px-10 font-medium relative">
      {/* Logo */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img src={assets.logo} alt="logo" className="w-36 h-auto" />
        </Link>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden sm:flex flex-1 justify-center gap-6 text-sm">
        {[
          { to: "/", label: "HOME" },
          { to: "/collection", label: "COLLECTION" },
          { to: "/about", label: "ABOUT" },
          { to: "/contact", label: "CONTACT" },
        ].map(({ to, label }) => (
          <li key={to}>
            <NavLink
              to={to}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 ${
                  isActive
                    ? "font-semibold text-black"
                    : "text-gray-700 hover:text-black transition-colors duration-200"
                }`
              }
            >
              <p>{label}</p>
              <hr
                className={`w-2/4 border-none h-[1.5px] bg-gray-700 ${
                  window.location.pathname === to ? "block" : "hidden"
                }`}
              />
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6 sm:gap-8 md:gap-10 flex-shrink-0 min-w-[180px] justify-end">
        {/* Search */}
        <img
          onClick={() => setShowSearch(true)}
          src={assets.search_icon}
          alt="search"
          className="w-5 min-w-[20px] cursor-pointer"
        />

        {/* Profile with dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
          onClick={toggleDropdown}
          tabIndex={0}
          onKeyDown={handleKeyDown}
          aria-haspopup="true"
          aria-expanded={dropdownOpen}
          role="button"
        >
          <Link to='/login'><img
            src={assets.profile_icon}
            alt="profile"
            className="w-5 min-w-[20px] cursor-pointer"
          /></Link>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-36 bg-slate-100 text-gray-500 rounded shadow-lg flex flex-col gap-2 p-3 z-50">
              <p className="cursor-pointer hover:text-black">My profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Logout</p>
            </div>
          )}
        </div>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} alt="cart" className="w-5 min-w-[20px]" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Hamburger menu (mobile only) */}
        <img
          src={assets.menu_icon}
          alt="menu"
          className="w-5 min-w-[20px] cursor-pointer sm:hidden"
          onClick={() => setMenuOpen(true)}
        />
      </div>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full text-gray-600">
          <div
            className="flex items-center gap-4 p-4 cursor-pointer border-b"
            onClick={() => setMenuOpen(false)}
          >
            <img src={assets.dropdown_icon} alt="Back" className="h-4 rotate-180" />
            <p>Back</p>
          </div>

          {[
            { to: "/", label: "HOME" },
            { to: "/collection", label: "COLLECTION" },
            { to: "/about", label: "ABOUT" },
            { to: "/contact", label: "CONTACT" },
          ].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className="py-4 pl-6 border-b text-lg"
            >
              {label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
