import React, { useState, useRef, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp, HiSearch } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const DropdownMenu = ({ items, isOpen, onClose }) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-xl z-[1001] border border-gray-200 overflow-hidden"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                initial={{ x: -10 }}
                animate={{ x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="block px-5 py-3 text-base text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-all duration-200"
              >
                {item.label}
              </motion.a>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [openDropdown, setOpenDropdown] = useState(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  const navLinks = [
    {
      href: "#about",
      label: "About us",
      hasDropdown: true,
      dropdownItems: [
        { href: "#about-company", label: "Our Company" },
        { href: "#about-team", label: "Our Team" },
        { href: "#about-mission", label: "Mission & Vision" },
        { href: "#careers", label: "Careers" },
      ],
    },
    {
      href: "#product",
      label: "Product",
      hasDropdown: true,
      dropdownItems: [
        { href: "#product-overview", label: "Product Overview" },
        { href: "#product-features", label: "Features" },
        { href: "#product-specs", label: "Specifications" },
      ],
    },
    {
      href: "#manufacturing",
      label: "Manufacturing",
      hasDropdown: true,
      dropdownItems: [
        { href: "#manufacturing-process", label: "Our Process" },
        { href: "#manufacturing-facilities", label: "Facilities" },
        { href: "#manufacturing-quality", label: "Quality Control" },
      ],
    },
    { href: "#sustainability", label: "Sustainability" },
    { href: "#media", label: "Media" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
    setSearchQuery("");
    setShowSearch(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);
      setShowNavbar(currentScrollY < lastScrollY || currentScrollY <= 50);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className={`fixed top-[2rem] left-0 right-0 z-[49] transition-all duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled
          ? "bg-white shadow-md"
          : "bg-white/5 backdrop-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-[4rem]">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <img 
            src="/purbanchal/logo.png" 
            alt="Logo" 
            className="h-12 w-auto cursor-pointer" 
          />
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 h-full ml-auto mr-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative h-full flex items-center">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  if (link.hasDropdown) {
                    toggleDropdown(index);
                  } else {
                    setActiveLink(link.href);
                    setOpenDropdown(null);
                  }
                }}
                className={`flex items-center text-lg font-medium transition-all duration-200 ${
                  activeLink === link.href
                    ? "text-[#3366BB] font-semibold"
                    : isScrolled
                    ? "text-gray-700 hover:text-[#3366BB]"
                    : "text-white hover:text-white/90"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <motion.div
                    animate={{ rotate: openDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openDropdown === index ? (
                      <HiChevronUp className="ml-1 h-5 w-5 text-inherit" />
                    ) : (
                      <HiChevronDown className="ml-1 h-5 w-5 text-inherit" />
                    )}
                  </motion.div>
                )}
              </motion.button>

              {link.hasDropdown && (
                <DropdownMenu
                  items={link.dropdownItems}
                  isOpen={openDropdown === index}
                  onClose={() => setOpenDropdown(null)}
                />
              )}
            </div>
          ))}
        </div>

        {/* Search Button */}
        <div className="hidden md:flex items-center">
          <AnimatePresence>
            {showSearch ? (
              <motion.div
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: 200 }}
                exit={{ opacity: 0, width: 0 }}
                className="overflow-hidden flex items-center"
              >
                <motion.form onSubmit={handleSearch} className="flex items-center">
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-white border border-gray-300 rounded-l-lg px-3 py-1 outline-none w-full text-gray-800"
                  />
                  <button
                    type="submit"
                    className="px-3 py-1 rounded-r-lg bg-[#3366BB] text-white hover:bg-[#2a56a0] transition-colors"
                  >
                    <HiSearch className="h-5 w-5" />
                  </button>
                </motion.form>
              </motion.div>
            ) : (
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSearch(true)}
                className={`p-2 rounded-full ${
                  isScrolled
                    ? "bg-gray-100 text-gray-700 hover:bg-[#3366BB] hover:text-white"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                <HiSearch className="h-5 w-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
            setOpenDropdown(null);
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          {isMenuOpen ? (
            <HiX className={`h-8 w-8 ${isScrolled ? "text-gray-800" : "text-white"}`} />
          ) : (
            <HiMenu className={`h-8 w-8 ${isScrolled ? "text-gray-800" : "text-white"}`} />
          )}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => {
                        if (!link.hasDropdown) {
                          setIsMenuOpen(false);
                          setActiveLink(link.href);
                        }
                      }}
                      className={`block py-3 px-4 text-lg w-full ${
                        activeLink === link.href
                          ? "text-[#3366BB] font-medium"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </a>
                    {link.hasDropdown && (
                      <button 
                        onClick={() => toggleDropdown(index)}
                        className="p-2 mr-2"
                      >
                        <motion.div animate={{ rotate: openDropdown === index ? 180 : 0 }}>
                          <HiChevronDown className="h-5 w-5 text-gray-500" />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-6 space-y-1"
                    >
                      {link.dropdownItems.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 px-4 text-gray-600 hover:bg-gray-100 rounded-lg"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Mobile Search */}
              <motion.form
                onSubmit={handleSearch}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none outline-none w-full text-gray-700"
                />
                <button
                  type="submit"
                  className="ml-2 p-1 bg-[#3366BB] text-white rounded-full"
                >
                  <HiSearch className="h-5 w-5" />
                </button>
              </motion.form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;