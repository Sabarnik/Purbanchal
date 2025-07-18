import React from "react";
import { ChevronDown, Search } from "lucide-react";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-[#003087] text-white text-sm py-2 px-4 z-50">
      <div className="max-w-7xl mx-auto flex justify-end items-center space-x-6">
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <span>Dealer Corner</span>
          <ChevronDown size={16} />
        </div>
        <div className="cursor-pointer hover:underline">Employee Login</div>
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <span>Our Businesses</span>
          <ChevronDown size={16} />
        </div>
        <div className="flex items-center space-x-1 cursor-pointer hover:underline">
          <Search size={16} />
          <span>Search</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
