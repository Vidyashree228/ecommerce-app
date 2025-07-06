import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";

const Searchbar = () => {
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const location = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(location.pathname.includes("collection"));
  }, [location]);

  if (!showSearch || !isVisible) return null;

  return (
    <div className="border-t border-b bg-gray-50 text-center py-5">
      <div className="inline-flex items-center border border-gray-400 px-5 py-2 mx-3 rounded-full w-3/4 sm:w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm"
        />
        <img src={assets.search_icon} alt="Search" className="w-4" />
      </div>
      <img
        src={assets.cross_icon}
        alt="Close"
        className="w-3 mt-3 inline cursor-pointer"
        onClick={() => setShowSearch(false)}
      />
    </div>
  );
};

export default Searchbar;
