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

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={dropdownRef}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-100"
        >
          <div className="py-1">
            {items.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              >
                {item.label}
              </a>
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

  const navLinks = [
    {
      href: "#home",
      label: "Home",
    },
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

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

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
     className={`fixed top-[32px] left-0 right-0 bg-white z-40 border-b border-gray-200 shadow-sm transition-transform duration-300 ${
  showNavbar ? "translate-y-0" : "-translate-y-full"
}`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 h-16 md:h-20">
        {/* Logo */}
        <img src="/purbanchal/logo.png" alt="Logo" className="h-10 w-auto" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, index) => (
            <div key={index} className="relative">
              <button
                onClick={() => {
                  if (link.hasDropdown) {
                    toggleDropdown(index);
                  } else {
                    setActiveLink(link.href);
                    setOpenDropdown(null);
                    window.location.href = link.href;
                  }
                }}
                className={`flex items-center text-sm font-medium transition-colors duration-200 ${
                  activeLink === link.href
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-black"
                }`}
              >
                {link.label}
                {link.hasDropdown &&
                  (openDropdown === index ? (
                    <HiChevronUp className="ml-1 h-4 w-4 text-gray-600" />
                  ) : (
                    <HiChevronDown className="ml-1 h-4 w-4 text-gray-600" />
                  ))}
              </button>

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

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-orange-500 text-white px-4 py-2 text-sm rounded hover:bg-orange-600 transition"
        >
          Contact Us
        </a>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <HiX className="h-6 w-6" /> : <HiMenu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 space-y-2 py-4">
              {navLinks.map((link, index) => (
                <div key={index} className="relative">
                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => {
                        if (link.hasDropdown) {
                          toggleDropdown(index);
                        } else {
                          setActiveLink(link.href);
                          setIsMenuOpen(false);
                          window.location.href = link.href;
                        }
                      }}
                      className={`block text-left text-sm font-medium py-2 ${
                        activeLink === link.href
                          ? "text-blue-600"
                          : "text-gray-600 hover:text-black"
                      }`}
                    >
                      {link.label}
                    </button>
                    {link.hasDropdown && (
                      <button
                        onClick={() => toggleDropdown(index)}
                        className="p-2 focus:outline-none"
                      >
                        {openDropdown === index ? (
                          <HiChevronUp className="h-4 w-4 text-gray-600" />
                        ) : (
                          <HiChevronDown className="h-4 w-4 text-gray-600" />
                        )}
                      </button>
                    )}
                  </div>

                  {link.hasDropdown && openDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="pl-4"
                    >
                      {link.dropdownItems.map((item, itemIndex) => (
                        <a
                          key={itemIndex}
                          href={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className="block py-2 text-sm text-gray-600 hover:text-black"
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <a
                href="#contact"
                className="block bg-orange-500 text-white px-6 py-2.5 rounded text-center text-sm font-medium hover:bg-orange-600 transition mt-4"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
