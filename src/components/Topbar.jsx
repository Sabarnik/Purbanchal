import React, { useState } from "react";
import { ChevronDown, Phone, Menu, X } from "lucide-react";

const Topbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full bg-[#3366BB] text-white text-sm py-2 z-50 border-b border-b-white/20">
      {/* Container aligned with Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 ml-auto">
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
            <Phone size={16} />
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-2 space-y-2 px-4 sm:px-6 lg:px-8">
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
            <Phone size={16} />
            <span>Contact</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Topbar;