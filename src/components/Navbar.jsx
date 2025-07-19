import React, { useState, useRef, useEffect } from "react";
import { HiMenu, HiX, HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motion";

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

  const navLinks = [
    { href: "#home", label: "Home" },
    {
      href: "#about",
      label: "About us",
      hasDropdown: true,
      dropdownItems: [
        { href: "#about-company", label: "Our Company" },
        { href: "#about-team", label: "Our Team" },
        { href: "#about-mission", label: "Mission & Vision" },
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
    { href: "#careers", label: "Careers" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
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
      variants={fadeIn("down", 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    className={`fixed top-0 left-0 right-0 z-[1000] transition-transform duration-500 ${
  showNavbar ? "translate-y-[2rem]" : "-translate-y-full"
} ${
  isScrolled
    ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md"
    : "bg-transparent"
}`}

    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-20 relative">
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
        <div className="hidden md:flex items-center space-x-10 h-full">
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
                className={`flex items-center text-lg font-medium transition-all duration-300 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : isScrolled
                    ? "text-gray-700 hover:text-black"
                    : "text-white hover:text-gray-200"
                }`}
              >
                {link.label}
                {link.hasDropdown && (
                  <motion.div
                    animate={{ rotate: openDropdown === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {openDropdown === index ? (
                      <HiChevronUp
                        className={`ml-1 h-5 w-5 ${
                          isScrolled ? "text-gray-600" : "text-white"
                        }`}
                      />
                    ) : (
                      <HiChevronDown
                        className={`ml-1 h-5 w-5 ${
                          isScrolled ? "text-gray-600" : "text-white"
                        }`}
                      />
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

        {/* CTA */}
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`hidden md:inline-block px-6 py-3 rounded-lg text-lg font-medium ${
            isScrolled
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-white text-blue-600 hover:bg-gray-100"
          } hover:shadow-lg transition-all`}
        >
          Contact Us
        </motion.a>

        {/* Mobile Menu Toggle */}
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
            <HiX
              className={`h-8 w-8 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
          ) : (
            <HiMenu
              className={`h-8 w-8 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            />
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
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={`md:hidden ${
              isScrolled ? "bg-white" : "bg-white/90 backdrop-blur-md"
            } border-t border-gray-200 overflow-hidden shadow-inner`}
          >
            <div className="container mx-auto px-4 space-y-2 py-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <div className="flex items-center justify-between">
                    <a
                      href={link.href}
                      onClick={() => {
                        if (!link.hasDropdown) {
                          setActiveLink(link.href);
                          setIsMenuOpen(false);
                          setOpenDropdown(null);
                        }
                      }}
                      className={`block text-left text-lg font-medium py-3 px-3 rounded-lg w-full ${
                        activeLink === link.href
                          ? "text-blue-600"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                    >
                      {link.label}
                    </a>
                    {link.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-2"
                      >
                        <motion.div
                          animate={{ rotate: openDropdown === index ? 180 : 0 }}
                        >
                          {openDropdown === index ? (
                            <HiChevronUp className="h-5 w-5 text-gray-600" />
                          ) : (
                            <HiChevronDown className="h-5 w-5 text-gray-600" />
                          )}
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pl-6 space-y-2 mt-2"
                    >
                      {link.dropdownItems.map((item, i) => (
                        <motion.a
                          key={i}
                          href={item.href}
                          onClick={() => {
                            setIsMenuOpen(false);
                            setOpenDropdown(null);
                          }}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="block py-2.5 px-4 text-base text-gray-600 hover:bg-gray-100 rounded-lg transition-all"
                        >
                          {item.label}
                        </motion.a>
                      ))}
                    </motion.div>
                  )}
                </motion.div>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="block bg-blue-600 text-white px-8 py-3.5 rounded-lg text-center text-lg font-medium hover:shadow-lg transition-all mt-6 mb-4"
              >
                Contact Us
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
